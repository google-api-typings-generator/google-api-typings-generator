/* This is stub file for gapi.client.accessapproval definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('accessapproval', 'v1', () => {
        /** now we can use gapi.client.accessapproval */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
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
         * Deletes the settings associated with a project, folder, or organization.
         * This will have the effect of disabling Access Approval for the project,
         * folder, or organization, but only if all ancestors also have Access
         * Approval disabled. If Access Approval is enabled at a higher level of the
         * hierarchy, then Access Approval will still be enabled at this level as
         * the settings are inherited.
         */
        await gapi.client.accessapproval.folders.deleteAccessApprovalSettings({
            name: "Test string",
        });
        /**
         * Approves a request and returns the updated ApprovalRequest.
         *
         * Returns NOT_FOUND if the request does not exist. Returns
         * FAILED_PRECONDITION if the request exists but is not in a pending state.
         */
        await gapi.client.accessapproval.folders.approvalRequests.approve({
            name: "Test string",
        }, {
            expireTime: "Test string",
        });
        /**
         * Dismisses a request. Returns the updated ApprovalRequest.
         *
         * NOTE: This does not deny access to the resource if another request has been
         * made and approved. It is equivalent in effect to ignoring the request
         * altogether.
         *
         * Returns NOT_FOUND if the request does not exist.
         *
         * Returns FAILED_PRECONDITION if the request exists but is not in a pending
         * state.
         */
        await gapi.client.accessapproval.folders.approvalRequests.dismiss({
            name: "Test string",
        }, {
        });
        /** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
        await gapi.client.accessapproval.folders.approvalRequests.get({
            name: "Test string",
        });
        /**
         * Lists approval requests associated with a project, folder, or organization.
         * Approval requests can be filtered by state (pending, active, dismissed).
         * The order is reverse chronological.
         */
        await gapi.client.accessapproval.folders.approvalRequests.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Gets the settings associated with a project, folder, or organization. */
        await gapi.client.accessapproval.folders.getAccessApprovalSettings({
            name: "Test string",
        });
        /**
         * Approves a request and returns the updated ApprovalRequest.
         *
         * Returns NOT_FOUND if the request does not exist. Returns
         * FAILED_PRECONDITION if the request exists but is not in a pending state.
         */
        await gapi.client.accessapproval.folders.approvalRequests.approve({
            name: "Test string",
        }, {
            expireTime: "Test string",
        });
        /**
         * Dismisses a request. Returns the updated ApprovalRequest.
         *
         * NOTE: This does not deny access to the resource if another request has been
         * made and approved. It is equivalent in effect to ignoring the request
         * altogether.
         *
         * Returns NOT_FOUND if the request does not exist.
         *
         * Returns FAILED_PRECONDITION if the request exists but is not in a pending
         * state.
         */
        await gapi.client.accessapproval.folders.approvalRequests.dismiss({
            name: "Test string",
        }, {
        });
        /** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
        await gapi.client.accessapproval.folders.approvalRequests.get({
            name: "Test string",
        });
        /**
         * Lists approval requests associated with a project, folder, or organization.
         * Approval requests can be filtered by state (pending, active, dismissed).
         * The order is reverse chronological.
         */
        await gapi.client.accessapproval.folders.approvalRequests.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /**
         * Updates the settings associated with a project, folder, or organization.
         * Settings to update are determined by the value of field_mask.
         */
        await gapi.client.accessapproval.folders.updateAccessApprovalSettings({
            name: "Test string",
            updateMask: "Test string",
        }, {
            enrolledAncestor: true,
            enrolledServices: [
                {
                    cloudProduct: "Test string",
                    enrollmentLevel: "Test string",
                }            ],
            name: "Test string",
            notificationEmails: [
                "Test string"            ],
        });
        /**
         * Approves a request and returns the updated ApprovalRequest.
         *
         * Returns NOT_FOUND if the request does not exist. Returns
         * FAILED_PRECONDITION if the request exists but is not in a pending state.
         */
        await gapi.client.accessapproval.folders.approvalRequests.approve({
            name: "Test string",
        }, {
            expireTime: "Test string",
        });
        /**
         * Dismisses a request. Returns the updated ApprovalRequest.
         *
         * NOTE: This does not deny access to the resource if another request has been
         * made and approved. It is equivalent in effect to ignoring the request
         * altogether.
         *
         * Returns NOT_FOUND if the request does not exist.
         *
         * Returns FAILED_PRECONDITION if the request exists but is not in a pending
         * state.
         */
        await gapi.client.accessapproval.folders.approvalRequests.dismiss({
            name: "Test string",
        }, {
        });
        /** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
        await gapi.client.accessapproval.folders.approvalRequests.get({
            name: "Test string",
        });
        /**
         * Lists approval requests associated with a project, folder, or organization.
         * Approval requests can be filtered by state (pending, active, dismissed).
         * The order is reverse chronological.
         */
        await gapi.client.accessapproval.folders.approvalRequests.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /**
         * Deletes the settings associated with a project, folder, or organization.
         * This will have the effect of disabling Access Approval for the project,
         * folder, or organization, but only if all ancestors also have Access
         * Approval disabled. If Access Approval is enabled at a higher level of the
         * hierarchy, then Access Approval will still be enabled at this level as
         * the settings are inherited.
         */
        await gapi.client.accessapproval.organizations.deleteAccessApprovalSettings({
            name: "Test string",
        });
        /**
         * Approves a request and returns the updated ApprovalRequest.
         *
         * Returns NOT_FOUND if the request does not exist. Returns
         * FAILED_PRECONDITION if the request exists but is not in a pending state.
         */
        await gapi.client.accessapproval.organizations.approvalRequests.approve({
            name: "Test string",
        }, {
            expireTime: "Test string",
        });
        /**
         * Dismisses a request. Returns the updated ApprovalRequest.
         *
         * NOTE: This does not deny access to the resource if another request has been
         * made and approved. It is equivalent in effect to ignoring the request
         * altogether.
         *
         * Returns NOT_FOUND if the request does not exist.
         *
         * Returns FAILED_PRECONDITION if the request exists but is not in a pending
         * state.
         */
        await gapi.client.accessapproval.organizations.approvalRequests.dismiss({
            name: "Test string",
        }, {
        });
        /** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
        await gapi.client.accessapproval.organizations.approvalRequests.get({
            name: "Test string",
        });
        /**
         * Lists approval requests associated with a project, folder, or organization.
         * Approval requests can be filtered by state (pending, active, dismissed).
         * The order is reverse chronological.
         */
        await gapi.client.accessapproval.organizations.approvalRequests.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Gets the settings associated with a project, folder, or organization. */
        await gapi.client.accessapproval.organizations.getAccessApprovalSettings({
            name: "Test string",
        });
        /**
         * Approves a request and returns the updated ApprovalRequest.
         *
         * Returns NOT_FOUND if the request does not exist. Returns
         * FAILED_PRECONDITION if the request exists but is not in a pending state.
         */
        await gapi.client.accessapproval.organizations.approvalRequests.approve({
            name: "Test string",
        }, {
            expireTime: "Test string",
        });
        /**
         * Dismisses a request. Returns the updated ApprovalRequest.
         *
         * NOTE: This does not deny access to the resource if another request has been
         * made and approved. It is equivalent in effect to ignoring the request
         * altogether.
         *
         * Returns NOT_FOUND if the request does not exist.
         *
         * Returns FAILED_PRECONDITION if the request exists but is not in a pending
         * state.
         */
        await gapi.client.accessapproval.organizations.approvalRequests.dismiss({
            name: "Test string",
        }, {
        });
        /** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
        await gapi.client.accessapproval.organizations.approvalRequests.get({
            name: "Test string",
        });
        /**
         * Lists approval requests associated with a project, folder, or organization.
         * Approval requests can be filtered by state (pending, active, dismissed).
         * The order is reverse chronological.
         */
        await gapi.client.accessapproval.organizations.approvalRequests.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /**
         * Updates the settings associated with a project, folder, or organization.
         * Settings to update are determined by the value of field_mask.
         */
        await gapi.client.accessapproval.organizations.updateAccessApprovalSettings({
            name: "Test string",
            updateMask: "Test string",
        }, {
            enrolledAncestor: true,
            enrolledServices: [
                {
                    cloudProduct: "Test string",
                    enrollmentLevel: "Test string",
                }            ],
            name: "Test string",
            notificationEmails: [
                "Test string"            ],
        });
        /**
         * Approves a request and returns the updated ApprovalRequest.
         *
         * Returns NOT_FOUND if the request does not exist. Returns
         * FAILED_PRECONDITION if the request exists but is not in a pending state.
         */
        await gapi.client.accessapproval.organizations.approvalRequests.approve({
            name: "Test string",
        }, {
            expireTime: "Test string",
        });
        /**
         * Dismisses a request. Returns the updated ApprovalRequest.
         *
         * NOTE: This does not deny access to the resource if another request has been
         * made and approved. It is equivalent in effect to ignoring the request
         * altogether.
         *
         * Returns NOT_FOUND if the request does not exist.
         *
         * Returns FAILED_PRECONDITION if the request exists but is not in a pending
         * state.
         */
        await gapi.client.accessapproval.organizations.approvalRequests.dismiss({
            name: "Test string",
        }, {
        });
        /** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
        await gapi.client.accessapproval.organizations.approvalRequests.get({
            name: "Test string",
        });
        /**
         * Lists approval requests associated with a project, folder, or organization.
         * Approval requests can be filtered by state (pending, active, dismissed).
         * The order is reverse chronological.
         */
        await gapi.client.accessapproval.organizations.approvalRequests.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /**
         * Deletes the settings associated with a project, folder, or organization.
         * This will have the effect of disabling Access Approval for the project,
         * folder, or organization, but only if all ancestors also have Access
         * Approval disabled. If Access Approval is enabled at a higher level of the
         * hierarchy, then Access Approval will still be enabled at this level as
         * the settings are inherited.
         */
        await gapi.client.accessapproval.projects.deleteAccessApprovalSettings({
            name: "Test string",
        });
        /**
         * Approves a request and returns the updated ApprovalRequest.
         *
         * Returns NOT_FOUND if the request does not exist. Returns
         * FAILED_PRECONDITION if the request exists but is not in a pending state.
         */
        await gapi.client.accessapproval.projects.approvalRequests.approve({
            name: "Test string",
        }, {
            expireTime: "Test string",
        });
        /**
         * Dismisses a request. Returns the updated ApprovalRequest.
         *
         * NOTE: This does not deny access to the resource if another request has been
         * made and approved. It is equivalent in effect to ignoring the request
         * altogether.
         *
         * Returns NOT_FOUND if the request does not exist.
         *
         * Returns FAILED_PRECONDITION if the request exists but is not in a pending
         * state.
         */
        await gapi.client.accessapproval.projects.approvalRequests.dismiss({
            name: "Test string",
        }, {
        });
        /** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
        await gapi.client.accessapproval.projects.approvalRequests.get({
            name: "Test string",
        });
        /**
         * Lists approval requests associated with a project, folder, or organization.
         * Approval requests can be filtered by state (pending, active, dismissed).
         * The order is reverse chronological.
         */
        await gapi.client.accessapproval.projects.approvalRequests.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Gets the settings associated with a project, folder, or organization. */
        await gapi.client.accessapproval.projects.getAccessApprovalSettings({
            name: "Test string",
        });
        /**
         * Approves a request and returns the updated ApprovalRequest.
         *
         * Returns NOT_FOUND if the request does not exist. Returns
         * FAILED_PRECONDITION if the request exists but is not in a pending state.
         */
        await gapi.client.accessapproval.projects.approvalRequests.approve({
            name: "Test string",
        }, {
            expireTime: "Test string",
        });
        /**
         * Dismisses a request. Returns the updated ApprovalRequest.
         *
         * NOTE: This does not deny access to the resource if another request has been
         * made and approved. It is equivalent in effect to ignoring the request
         * altogether.
         *
         * Returns NOT_FOUND if the request does not exist.
         *
         * Returns FAILED_PRECONDITION if the request exists but is not in a pending
         * state.
         */
        await gapi.client.accessapproval.projects.approvalRequests.dismiss({
            name: "Test string",
        }, {
        });
        /** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
        await gapi.client.accessapproval.projects.approvalRequests.get({
            name: "Test string",
        });
        /**
         * Lists approval requests associated with a project, folder, or organization.
         * Approval requests can be filtered by state (pending, active, dismissed).
         * The order is reverse chronological.
         */
        await gapi.client.accessapproval.projects.approvalRequests.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /**
         * Updates the settings associated with a project, folder, or organization.
         * Settings to update are determined by the value of field_mask.
         */
        await gapi.client.accessapproval.projects.updateAccessApprovalSettings({
            name: "Test string",
            updateMask: "Test string",
        }, {
            enrolledAncestor: true,
            enrolledServices: [
                {
                    cloudProduct: "Test string",
                    enrollmentLevel: "Test string",
                }            ],
            name: "Test string",
            notificationEmails: [
                "Test string"            ],
        });
        /**
         * Approves a request and returns the updated ApprovalRequest.
         *
         * Returns NOT_FOUND if the request does not exist. Returns
         * FAILED_PRECONDITION if the request exists but is not in a pending state.
         */
        await gapi.client.accessapproval.projects.approvalRequests.approve({
            name: "Test string",
        }, {
            expireTime: "Test string",
        });
        /**
         * Dismisses a request. Returns the updated ApprovalRequest.
         *
         * NOTE: This does not deny access to the resource if another request has been
         * made and approved. It is equivalent in effect to ignoring the request
         * altogether.
         *
         * Returns NOT_FOUND if the request does not exist.
         *
         * Returns FAILED_PRECONDITION if the request exists but is not in a pending
         * state.
         */
        await gapi.client.accessapproval.projects.approvalRequests.dismiss({
            name: "Test string",
        }, {
        });
        /** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
        await gapi.client.accessapproval.projects.approvalRequests.get({
            name: "Test string",
        });
        /**
         * Lists approval requests associated with a project, folder, or organization.
         * Approval requests can be filtered by state (pending, active, dismissed).
         * The order is reverse chronological.
         */
        await gapi.client.accessapproval.projects.approvalRequests.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
    }
});
