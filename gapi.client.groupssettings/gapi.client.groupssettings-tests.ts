/* This is stub file for gapi.client.groupssettings definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('groupssettings', 'v1', () => {
        /** now we can use gapi.client.groupssettings */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage the settings of a G Suite group */
            'https://www.googleapis.com/auth/apps.groups.settings',
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
        /** Gets one resource by id. */
        await gapi.client.groupssettings.groups.get({
            groupUniqueId: "Test string",
        });
        /** Updates an existing resource. This method supports patch semantics. */
        await gapi.client.groupssettings.groups.patch({
            groupUniqueId: "Test string",
        }, {
            allowExternalMembers: "Test string",
            allowGoogleCommunication: "Test string",
            allowWebPosting: "Test string",
            archiveOnly: "Test string",
            customFooterText: "Test string",
            customReplyTo: "Test string",
            customRolesEnabledForSettingsToBeMerged: "Test string",
            defaultMessageDenyNotificationText: "Test string",
            description: "Test string",
            email: "Test string",
            enableCollaborativeInbox: "Test string",
            favoriteRepliesOnTop: "Test string",
            includeCustomFooter: "Test string",
            includeInGlobalAddressList: "Test string",
            isArchived: "Test string",
            kind: "Test string",
            maxMessageBytes: 42,
            membersCanPostAsTheGroup: "Test string",
            messageDisplayFont: "Test string",
            messageModerationLevel: "Test string",
            name: "Test string",
            primaryLanguage: "Test string",
            replyTo: "Test string",
            sendMessageDenyNotification: "Test string",
            showInGroupDirectory: "Test string",
            spamModerationLevel: "Test string",
            whoCanAdd: "Test string",
            whoCanAddReferences: "Test string",
            whoCanApproveMembers: "Test string",
            whoCanApproveMessages: "Test string",
            whoCanAssignTopics: "Test string",
            whoCanAssistContent: "Test string",
            whoCanBanUsers: "Test string",
            whoCanContactOwner: "Test string",
            whoCanDeleteAnyPost: "Test string",
            whoCanDeleteTopics: "Test string",
            whoCanDiscoverGroup: "Test string",
            whoCanEnterFreeFormTags: "Test string",
            whoCanHideAbuse: "Test string",
            whoCanInvite: "Test string",
            whoCanJoin: "Test string",
            whoCanLeaveGroup: "Test string",
            whoCanLockTopics: "Test string",
            whoCanMakeTopicsSticky: "Test string",
            whoCanMarkDuplicate: "Test string",
            whoCanMarkFavoriteReplyOnAnyTopic: "Test string",
            whoCanMarkFavoriteReplyOnOwnTopic: "Test string",
            whoCanMarkNoResponseNeeded: "Test string",
            whoCanModerateContent: "Test string",
            whoCanModerateMembers: "Test string",
            whoCanModifyMembers: "Test string",
            whoCanModifyTagsAndCategories: "Test string",
            whoCanMoveTopicsIn: "Test string",
            whoCanMoveTopicsOut: "Test string",
            whoCanPostAnnouncements: "Test string",
            whoCanPostMessage: "Test string",
            whoCanTakeTopics: "Test string",
            whoCanUnassignTopic: "Test string",
            whoCanUnmarkFavoriteReplyOnAnyTopic: "Test string",
            whoCanViewGroup: "Test string",
            whoCanViewMembership: "Test string",
        });
        /** Updates an existing resource. */
        await gapi.client.groupssettings.groups.update({
            groupUniqueId: "Test string",
        }, {
            allowExternalMembers: "Test string",
            allowGoogleCommunication: "Test string",
            allowWebPosting: "Test string",
            archiveOnly: "Test string",
            customFooterText: "Test string",
            customReplyTo: "Test string",
            customRolesEnabledForSettingsToBeMerged: "Test string",
            defaultMessageDenyNotificationText: "Test string",
            description: "Test string",
            email: "Test string",
            enableCollaborativeInbox: "Test string",
            favoriteRepliesOnTop: "Test string",
            includeCustomFooter: "Test string",
            includeInGlobalAddressList: "Test string",
            isArchived: "Test string",
            kind: "Test string",
            maxMessageBytes: 42,
            membersCanPostAsTheGroup: "Test string",
            messageDisplayFont: "Test string",
            messageModerationLevel: "Test string",
            name: "Test string",
            primaryLanguage: "Test string",
            replyTo: "Test string",
            sendMessageDenyNotification: "Test string",
            showInGroupDirectory: "Test string",
            spamModerationLevel: "Test string",
            whoCanAdd: "Test string",
            whoCanAddReferences: "Test string",
            whoCanApproveMembers: "Test string",
            whoCanApproveMessages: "Test string",
            whoCanAssignTopics: "Test string",
            whoCanAssistContent: "Test string",
            whoCanBanUsers: "Test string",
            whoCanContactOwner: "Test string",
            whoCanDeleteAnyPost: "Test string",
            whoCanDeleteTopics: "Test string",
            whoCanDiscoverGroup: "Test string",
            whoCanEnterFreeFormTags: "Test string",
            whoCanHideAbuse: "Test string",
            whoCanInvite: "Test string",
            whoCanJoin: "Test string",
            whoCanLeaveGroup: "Test string",
            whoCanLockTopics: "Test string",
            whoCanMakeTopicsSticky: "Test string",
            whoCanMarkDuplicate: "Test string",
            whoCanMarkFavoriteReplyOnAnyTopic: "Test string",
            whoCanMarkFavoriteReplyOnOwnTopic: "Test string",
            whoCanMarkNoResponseNeeded: "Test string",
            whoCanModerateContent: "Test string",
            whoCanModerateMembers: "Test string",
            whoCanModifyMembers: "Test string",
            whoCanModifyTagsAndCategories: "Test string",
            whoCanMoveTopicsIn: "Test string",
            whoCanMoveTopicsOut: "Test string",
            whoCanPostAnnouncements: "Test string",
            whoCanPostMessage: "Test string",
            whoCanTakeTopics: "Test string",
            whoCanUnassignTopic: "Test string",
            whoCanUnmarkFavoriteReplyOnAnyTopic: "Test string",
            whoCanViewGroup: "Test string",
            whoCanViewMembership: "Test string",
        });
    }
});