/* This is stub file for gapi.client.firebaserules definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('firebaserules', 'v1', () => {
        /** now we can use gapi.client.firebaserules */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View and administer all your Firebase data and settings */
            'https://www.googleapis.com/auth/firebase',
            /** View all your Firebase data and settings */
            'https://www.googleapis.com/auth/firebase.readonly',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /**
         * Test `Source` for syntactic and semantic correctness. Issues present, if
         * any, will be returned to the caller with a description, severity, and
         * source location.
         *
         * The test method may be executed with `Source` or a `Ruleset` name.
         * Passing `Source` is useful for unit testing new rules. Passing a `Ruleset`
         * name is useful for regression testing an existing rule.
         *
         * The following is an example of `Source` that permits users to upload images
         * to a bucket bearing their user id and matching the correct metadata:
         *
         * _&#42;Example&#42;_
         *
         * // Users are allowed to subscribe and unsubscribe to the blog.
         * service firebase.storage {
         * match /users/{userId}/images/{imageName} {
         * allow write: if userId == request.auth.uid
         * && (imageName.matches('&#42;.png$')
         * || imageName.matches('&#42;.jpg$'))
         * && resource.mimeType.matches('^image/')
         * }
         * }
         */
        await gapi.client.firebaserules.projects.test({
            name: "Test string",
        }, {
            source: {
                files: [
                    {
                        content: "Test string",
                        fingerprint: "Test string",
                        name: "Test string",
                    }                ],
            },
            testSuite: {
                testCases: [
                    {
                        expectation: "Test string",
                        expressionReportLevel: "Test string",
                        functionMocks: [
                            {
                                args: [
                                    {
                                        anyValue: {
                                        },
                                        exactValue: 42,
                                    }                                ],
                                function: "Test string",
                                result: {
                                    undefined: {
                                    },
                                    value: 42,
                                },
                            }                        ],
                        pathEncoding: "Test string",
                        request: 42,
                        resource: 42,
                    }                ],
            },
        });
        /**
         * Create a `Release`.
         *
         * Release names should reflect the developer's deployment practices. For
         * example, the release name may include the environment name, application
         * name, application version, or any other name meaningful to the developer.
         * Once a `Release` refers to a `Ruleset`, the rules can be enforced by
         * Firebase Rules-enabled services.
         *
         * More than one `Release` may be 'live' concurrently. Consider the following
         * three `Release` names for `projects/foo` and the `Ruleset` to which they
         * refer.
         *
         * Release Name                    | Ruleset Name
         * --------------------------------|-------------
         * projects/foo/releases/prod      | projects/foo/rulesets/uuid123
         * projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123
         * projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456
         *
         * The table reflects the `Ruleset` rollout in progress. The `prod` and
         * `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23`
         * refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be
         * updated using the UpdateRelease method.
         */
        await gapi.client.firebaserules.projects.releases.create({
            name: "Test string",
        }, {
            createTime: "Test string",
            name: "Test string",
            rulesetName: "Test string",
            updateTime: "Test string",
        });
        /** Delete a `Release` by resource name. */
        await gapi.client.firebaserules.projects.releases.delete({
            name: "Test string",
        });
        /** Get a `Release` by name. */
        await gapi.client.firebaserules.projects.releases.get({
            name: "Test string",
        });
        /** Get the `Release` executable to use when enforcing rules. */
        await gapi.client.firebaserules.projects.releases.getExecutable({
            executableVersion: "Test string",
            name: "Test string",
        });
        /**
         * List the `Release` values for a project. This list may optionally be
         * filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any
         * combination thereof.
         */
        await gapi.client.firebaserules.projects.releases.list({
            filter: "Test string",
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Update a `Release` via PATCH.
         *
         * Only updates to the `ruleset_name` and `test_suite_name` fields will be
         * honored. `Release` rename is not supported. To create a `Release` use the
         * CreateRelease method.
         */
        await gapi.client.firebaserules.projects.releases.patch({
            name: "Test string",
        }, {
            release: {
                createTime: "Test string",
                name: "Test string",
                rulesetName: "Test string",
                updateTime: "Test string",
            },
            updateMask: "Test string",
        });
        /**
         * Create a `Ruleset` from `Source`.
         *
         * The `Ruleset` is given a unique generated name which is returned to the
         * caller. `Source` containing syntactic or semantics errors will result in an
         * error response indicating the first error encountered. For a detailed view
         * of `Source` issues, use TestRuleset.
         */
        await gapi.client.firebaserules.projects.rulesets.create({
            name: "Test string",
        }, {
            createTime: "Test string",
            metadata: {
                services: [
                    "Test string"                ],
            },
            name: "Test string",
            source: {
                files: [
                    {
                        content: "Test string",
                        fingerprint: "Test string",
                        name: "Test string",
                    }                ],
            },
        });
        /**
         * Delete a `Ruleset` by resource name.
         *
         * If the `Ruleset` is referenced by a `Release` the operation will fail.
         */
        await gapi.client.firebaserules.projects.rulesets.delete({
            name: "Test string",
        });
        /** Get a `Ruleset` by name including the full `Source` contents. */
        await gapi.client.firebaserules.projects.rulesets.get({
            name: "Test string",
        });
        /**
         * List `Ruleset` metadata only and optionally filter the results by `Ruleset`
         * name.
         *
         * The full `Source` contents of a `Ruleset` may be retrieved with
         * GetRuleset.
         */
        await gapi.client.firebaserules.projects.rulesets.list({
            filter: "Test string",
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
    }
});