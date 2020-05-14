// Type definitions for non-npm package Cloud Identity API v1 1.0
// Project: https://cloud.google.com/identity/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://cloudidentity.googleapis.com/$discovery/rest?version=v1
// Revision: 20200512

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Cloud Identity API v1 */
    function load(name: "cloudidentity", version: "v1"): PromiseLike<void>;
    function load(name: "cloudidentity", version: "v1", callback: () => any): void;

    namespace cloudidentity {
        interface EntityKey {
            /**
             * The ID of the entity within the given namespace. The ID must be unique
             * within its namespace.
             */
            id?: string;
            /**
             * Namespaces provide isolation for IDs, so an ID only needs to be unique
             * within its namespace.
             *
             * Namespaces are currently only created as part of IdentitySource creation
             * from Admin Console. A namespace `"identitysources/{identity_source_id}"` is
             * created corresponding to every Identity Source `identity_source_id`.
             */
            namespace?: string;
        }
        interface Group {
            /**
             * Output only. The time when the Group was created.
             * Output only.
             */
            createTime?: string;
            /**
             * An extended description to help users determine the purpose of a Group. For
             * example, you can include information about who should join the Group, the
             * types of messages to send to the Group, links to FAQs about the Group, or
             * related Groups. Maximum length is 4,096 characters.
             */
            description?: string;
            /** The Group's display name. */
            displayName?: string;
            /**
             * Required. Immutable. EntityKey of the Group.
             *
             * Must be set when creating a Group, read-only afterwards.
             */
            groupKey?: EntityKey;
            /**
             * Required. `Required`. Labels for Group resource.
             * For creating Groups under a namespace, set label key to
             * 'labels/system/groups/external' and label value as empty.
             */
            labels?: Record<string, string>;
            /**
             * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
             * Group in the format: `groups/{group_id}`, where group_id is the unique ID
             * assigned to the Group.
             *
             * Must be left blank while creating a Group.
             */
            name?: string;
            /**
             * Required. Immutable. The entity under which this Group resides in Cloud Identity resource
             * hierarchy. Must be set when creating a Group, read-only afterwards.
             *
             * Currently allowed types: `identitysources`.
             */
            parent?: string;
            /**
             * Output only. The time when the Group was last updated.
             * Output only.
             */
            updateTime?: string;
        }
        interface ListGroupsResponse {
            /**
             * Groups returned in response to list request.
             * The results are not sorted.
             */
            groups?: Group[];
            /**
             * Token to retrieve the next page of results, or empty if there are no
             * more results available for listing.
             */
            nextPageToken?: string;
        }
        interface ListMembershipsResponse {
            /** List of Memberships. */
            memberships?: Membership[];
            /**
             * Token to retrieve the next page of results, or empty if there are no
             * more results available for listing.
             */
            nextPageToken?: string;
        }
        interface LookupGroupNameResponse {
            /**
             * [Resource name](https://cloud.google.com/apis/design/resource_names) of the
             * Group in the format: `groups/{group_id}`, where `group_id` is the unique ID
             * assigned to the Group.
             */
            name?: string;
        }
        interface LookupMembershipNameResponse {
            /**
             * [Resource name](https://cloud.google.com/apis/design/resource_names) of the
             * Membership being looked up.
             *
             * Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is
             * the unique ID assigned to the Group to which Membership belongs to, and
             * `member_id` is the unique ID assigned to the member.
             */
            name?: string;
        }
        interface Membership {
            /** Output only. Creation timestamp of the Membership. Output only. */
            createTime?: string;
            /**
             * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
             * Membership in the format: `groups/{group_id}/memberships/{member_id}`,
             * where group_id is the unique ID assigned to the Group to which Membership
             * belongs to, and member_id is the unique ID assigned to the member
             *
             * Must be left blank while creating a Membership.
             */
            name?: string;
            /**
             * Required. Immutable. EntityKey of the entity to be added as the member. Must be set while
             * creating a Membership, read-only afterwards.
             *
             * Currently allowed entity types: `Users`, `Groups`.
             */
            preferredMemberKey?: EntityKey;
            /**
             * Roles for a member within the Group.
             *
             * Currently supported MembershipRoles: `"MEMBER"`.
             */
            roles?: MembershipRole[];
            /** Output only. Last updated timestamp of the Membership. Output only. */
            updateTime?: string;
        }
        interface MembershipRole {
            /**
             * MembershipRole in string format.
             *
             * Currently supported MembershipRoles: `"MEMBER"`.
             */
            name?: string;
        }
        interface Operation {
            /**
             * If the value is `false`, it means the operation is still in progress.
             * If `true`, the operation is completed, and either `error` or `response` is
             * available.
             */
            done?: boolean;
            /** The error result of the operation in case of failure or cancellation. */
            error?: Status;
            /**
             * Service-specific metadata associated with the operation.  It typically
             * contains progress information and common metadata such as create time.
             * Some services might not provide such metadata.  Any method that returns a
             * long-running operation should document the metadata type, if any.
             */
            metadata?: Record<string, any>;
            /**
             * The server-assigned name, which is only unique within the same service that
             * originally returns it. If you use the default HTTP mapping, the
             * `name` should be a resource name ending with `operations/{unique_id}`.
             */
            name?: string;
            /**
             * The normal response of the operation in case of success.  If the original
             * method returns no data on success, such as `Delete`, the response is
             * `google.protobuf.Empty`.  If the original method is standard
             * `Get`/`Create`/`Update`, the response should be the resource.  For other
             * methods, the response should have the type `XxxResponse`, where `Xxx`
             * is the original method name.  For example, if the original method name
             * is `TakeSnapshot()`, the inferred response type is
             * `TakeSnapshotResponse`.
             */
            response?: Record<string, any>;
        }
        interface SearchGroupsResponse {
            /** List of Groups satisfying the search query. */
            groups?: Group[];
            /**
             * Token to retrieve the next page of results, or empty if there are no
             * more results available for specified query.
             */
            nextPageToken?: string;
        }
        interface Status {
            /** The status code, which should be an enum value of google.rpc.Code. */
            code?: number;
            /**
             * A list of messages that carry the error details.  There is a common set of
             * message types for APIs to use.
             */
            details?: Array<Record<string, any>>;
            /**
             * A developer-facing error message, which should be in English. Any
             * user-facing error message should be localized and sent in the
             * google.rpc.Status.details field, or localized by the client.
             */
            message?: string;
        }
        interface MembershipsResource {
            /** Creates a Membership. */
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Group to create Membership within. Format: `groups/{group_id}`, where
                 * `group_id` is the unique ID assigned to the Group.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Membership;
            }): Request<Operation>;
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Group to create Membership within. Format: `groups/{group_id}`, where
                 * `group_id` is the unique ID assigned to the Group.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Membership): Request<Operation>;
            /** Deletes a Membership. */
            delete(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Membership to be deleted.
                 *
                 * Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is
                 * the unique ID assigned to the Group to which Membership belongs to, and
                 * member_id is the unique ID assigned to the member.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Operation>;
            /** Retrieves a Membership. */
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Membership to be retrieved.
                 *
                 * Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is
                 * the unique id assigned to the Group to which Membership belongs to, and
                 * `member_id` is the unique ID assigned to the member.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Membership>;
            /** Lists Memberships within a Group. */
            list(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The default page size is 200 (max 1000) for the BASIC view, and 50
                 * (max 500) for the FULL view.
                 */
                pageSize?: number;
                /** The next_page_token value returned from a previous list request, if any. */
                pageToken?: string;
                /**
                 * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Group to list Memberships within.
                 *
                 * Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to
                 * the Group.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Membership resource view to be returned. Defaults to View.BASIC. */
                view?: string;
            }): Request<ListMembershipsResponse>;
            /**
             * Looks up [resource
             * name](https://cloud.google.com/apis/design/resource_names) of a Membership
             * within a Group by member's EntityKey.
             */
            lookup(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The ID of the entity within the given namespace. The ID must be unique
                 * within its namespace.
                 */
                "memberKey.id"?: string;
                /**
                 * Namespaces provide isolation for IDs, so an ID only needs to be unique
                 * within its namespace.
                 *
                 * Namespaces are currently only created as part of IdentitySource creation
                 * from Admin Console. A namespace `"identitysources/{identity_source_id}"` is
                 * created corresponding to every Identity Source `identity_source_id`.
                 */
                "memberKey.namespace"?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Group to lookup Membership within.
                 *
                 * Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to
                 * the Group.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<LookupMembershipNameResponse>;
        }
        interface GroupsResource {
            /** Creates a Group. */
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Group;
            }): Request<Operation>;
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Group): Request<Operation>;
            /** Deletes a Group. */
            delete(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Group in the format: `groups/{group_id}`, where `group_id` is the unique ID
                 * assigned to the Group.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Operation>;
            /** Retrieves a Group. */
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Group in the format: `groups/{group_id}`, where `group_id` is the unique ID
                 * assigned to the Group.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Group>;
            /** Lists groups within a customer or a domain. */
            list(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The default page size is 200 (max 1000) for the BASIC view, and 50
                 * (max 500) for the FULL view.
                 */
                pageSize?: number;
                /** The next_page_token value returned from a previous list request, if any. */
                pageToken?: string;
                /** Required. Customer ID to list all groups from. */
                parent?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Group resource view to be returned. Defaults to [View.BASIC](). */
                view?: string;
            }): Request<ListGroupsResponse>;
            /**
             * Looks up [resource
             * name](https://cloud.google.com/apis/design/resource_names) of a Group by
             * its EntityKey.
             */
            lookup(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /**
                 * The ID of the entity within the given namespace. The ID must be unique
                 * within its namespace.
                 */
                "groupKey.id"?: string;
                /**
                 * Namespaces provide isolation for IDs, so an ID only needs to be unique
                 * within its namespace.
                 *
                 * Namespaces are currently only created as part of IdentitySource creation
                 * from Admin Console. A namespace `"identitysources/{identity_source_id}"` is
                 * created corresponding to every Identity Source `identity_source_id`.
                 */
                "groupKey.namespace"?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<LookupGroupNameResponse>;
            /** Updates a Group. */
            patch(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Group in the format: `groups/{group_id}`, where group_id is the unique ID
                 * assigned to the Group.
                 *
                 * Must be left blank while creating a Group.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. Editable fields: `display_name`, `description` */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Group;
            }): Request<Operation>;
            patch(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
                 * Group in the format: `groups/{group_id}`, where group_id is the unique ID
                 * assigned to the Group.
                 *
                 * Must be left blank while creating a Group.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. Editable fields: `display_name`, `description` */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Group): Request<Operation>;
            /** Searches for Groups. */
            search(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The default page size is 200 (max 1000) for the BASIC view, and 50
                 * (max 500) for the FULL view.
                 */
                pageSize?: number;
                /** The next_page_token value returned from a previous search request, if any. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Required. `Required`. Query string for performing search on groups. Users can search
                 * on parent and label attributes of groups.
                 * EXACT match ('==') is supported on parent, and CONTAINS match ('in') is
                 * supported on labels.
                 */
                query?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Group resource view to be returned. Defaults to [View.BASIC](). */
                view?: string;
            }): Request<SearchGroupsResponse>;
            memberships: MembershipsResource;
        }

        const groups: GroupsResource;
    }
}
