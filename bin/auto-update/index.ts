import { join, resolve } from 'path';
import { SH } from './sh';
import { Git } from './git';
import { Helpers } from './helpers';

if (!process.env.GH_AUTH_TOKEN) {
  throw new Error('Please, set env var: GH_AUTH_TOKEN');
}

export interface Settings {
  dtForkPath: string; // full path to the local DT fork folder
  typesDirName: string; // directory name in DT
  typesBranchName: string; // branch name where generated types are in the generator repo
  user: string; // user who submits PRs to DT
  auth: string; // GH public token
  dtRepoOwner: string; // DefinitelyTyped repo owner name only
  dtRepoName: string; // DefinitelyTyped repo name only
  thisRepo: string; // repo form where API calls to GH will be made
}

const settings: Settings = {
  dtForkPath: join(resolve(__dirname, '../..'), 'dt-fork'), // TODO: maybe use require('os').tmpdir() or something like that
  typesDirName: 'types',
  typesBranchName: 'types',
  user: 'Maxim-Mazurok',
  auth: process.env.GH_AUTH_TOKEN,
  dtRepoOwner: 'test-user-delete-me-please', // TODO: change this to: 'DefinitelyTyped'
  dtRepoName: 'DefinitelyTyped',
  thisRepo: 'google-api-typings-generator',
};

const sh = new SH(settings.dtForkPath);
const git = new Git(sh, settings);
const helpers = new Helpers(sh, git, settings);

(async () => {
  // Initialize
  await git.cloneDTFork();
  await git.updateDTFork();
  await helpers.copyTypesBranchFromGeneratorToDTFork();

  // Do the job
  const changedTypes = await git.getChangedTypes(); // TODO: types changed relative to master, but branches might already have latest changes, maybe try to detect this
  const branches = await git.getBranches();
  console.log({ branches, changedTypes });

  for (const type of changedTypes) {
    const isNewBranch = branches.indexOf(type) === -1;
    if (isNewBranch) {
      await git.checkoutBranch(type, { create: true, from: 'master' }); // so that new branch will be created from master and not from previous gapi.client.* branch
      await git.stageTypesFolder(type);
    } else {
      await git.checkoutBranch('master');
      await git.stageTypesFolder(type);
      await git.stash({ keepIndex: true }); // #1 contains all changes
      await git.stash(); // #0 contains only staged changes
      await git.checkoutBranch(type);
      await git.popStash({ force: true }); // #0 applies staged changes
      await git.dropStash(); // #0 drops stash that we force-applied
      await git.popStash(); // #1 pops all changes
    }

    await git.commit({
      message: `automatic ${type} update @ ${new Date().toUTCString()}`,
      all: false,
    });
  }

  await git.push({ all: true }); // pushes to fork

  for (const type of changedTypes) {
    await git.openPRIfItDoesntExist(type);
  }
})();
