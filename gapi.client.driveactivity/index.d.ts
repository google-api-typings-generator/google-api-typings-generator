// Type definitions for non-npm package Drive Activity API v2 2.0
// Project: https://developers.google.com/drive/activity/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://driveactivity.googleapis.com/$discovery/rest?version=v2
// Revision: 20200212

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Drive Activity API v2 */
    function load(name: "driveactivity", version: "v2"): PromiseLike<void>;
    function load(name: "driveactivity", version: "v2", callback: () => any): void;

    namespace driveactivity {
        interface Action {
            /**
             * The actor responsible for this action (or empty if all actors are
             * responsible).
             */
            actor?: Actor;
            /** The type and detailed information about the action. */
            detail?: ActionDetail;
            /**
             * The target this action affects (or empty if affecting all targets). This
             * represents the state of the target immediately after this action occurred.
             */
            target?: Target;
            /** The action occurred over this time range. */
            timeRange?: TimeRange;
            /** The action occurred at this specific time. */
            timestamp?: string;
        }
        interface ActionDetail {
            /** A change about comments was made. */
            comment?: Comment;
            /** An object was created. */
            create?: Create;
            /** An object was deleted. */
            delete?: Delete;
            /** A change happened in data leak prevention status. */
            dlpChange?: DataLeakPreventionChange;
            /** An object was edited. */
            edit?: any;
            /** An object was moved. */
            move?: Move;
            /** The permission on an object was changed. */
            permissionChange?: PermissionChange;
            /** An object was referenced in an application outside of Drive/Docs. */
            reference?: ApplicationReference;
            /** An object was renamed. */
            rename?: Rename;
            /** A deleted object was restored. */
            restore?: Restore;
            /** Settings were changed. */
            settingsChange?: SettingsChange;
        }
        interface Actor {
            /** An administrator. */
            administrator?: any;
            /** An anonymous user. */
            anonymous?: any;
            /** An account acting on behalf of another. */
            impersonation?: Impersonation;
            /** A non-user actor (i.e. system triggered). */
            system?: SystemEvent;
            /** An end user. */
            user?: User;
        }
        // tslint:disable-next-line:no-empty-interface
        interface Administrator {
        }
        // tslint:disable-next-line:no-empty-interface
        interface AnonymousUser {
        }
        // tslint:disable-next-line:no-empty-interface
        interface Anyone {
        }
        interface ApplicationReference {
            /** The reference type corresponding to this event. */
            type?: string;
        }
        interface Assignment {
            /** The user to whom the comment was assigned. */
            assignedUser?: User;
            /** The sub-type of this event. */
            subtype?: string;
        }
        interface Comment {
            /** A change on an assignment. */
            assignment?: Assignment;
            /** Users who are mentioned in this comment. */
            mentionedUsers?: User[];
            /** A change on a regular posted comment. */
            post?: Post;
            /** A change on a suggestion. */
            suggestion?: Suggestion;
        }
        interface ConsolidationStrategy {
            /** The individual activities are consolidated using the legacy strategy. */
            legacy?: any;
            /** The individual activities are not consolidated. */
            none?: any;
        }
        interface Copy {
            /** The the original object. */
            originalObject?: TargetReference;
        }
        interface Create {
            /**
             * If present, indicates the object was created by copying an existing Drive
             * object.
             */
            copy?: Copy;
            /**
             * If present, indicates the object was newly created (e.g. as a blank
             * document), not derived from a Drive object or external object.
             */
            new?: any;
            /**
             * If present, indicates the object originated externally and was uploaded
             * to Drive.
             */
            upload?: any;
        }
        interface DataLeakPreventionChange {
            /** The type of Data Leak Prevention (DLP) change. */
            type?: string;
        }
        interface Delete {
            /** The type of delete action taken. */
            type?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface DeletedUser {
        }
        interface Domain {
            /** An opaque string used to identify this domain. */
            legacyId?: string;
            /** The name of the domain, e.g. "google.com". */
            name?: string;
        }
        interface Drive {
            /**
             * The resource name of the shared drive. The format is
             * "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific collection
             * ID for this resource name.
             */
            name?: string;
            /** The root of this shared drive. */
            root?: DriveItem;
            /** The title of the shared drive. */
            title?: string;
        }
        interface DriveActivity {
            /** Details on all actions in this activity. */
            actions?: Action[];
            /** All actor(s) responsible for the activity. */
            actors?: Actor[];
            /**
             * Key information about the primary action for this activity. This is either
             * representative, or the most important, of all actions in the activity,
             * according to the ConsolidationStrategy in the request.
             */
            primaryActionDetail?: ActionDetail;
            /**
             * All Google Drive objects this activity is about (e.g. file, folder, drive).
             * This represents the state of the target immediately after the actions
             * occurred.
             */
            targets?: Target[];
            /** The activity occurred over this time range. */
            timeRange?: TimeRange;
            /** The activity occurred at this specific time. */
            timestamp?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface DriveFile {
        }
        interface DriveFolder {
            /** The type of Drive folder. */
            type?: string;
        }
        interface DriveItem {
            /** The Drive item is a file. */
            driveFile?: any;
            /**
             * The Drive item is a folder. Includes information about the type of
             * folder.
             */
            driveFolder?: DriveFolder;
            /** This field is deprecated; please use the `driveFile` field instead. */
            file?: any;
            /** This field is deprecated; please use the `driveFolder` field instead. */
            folder?: Folder;
            /**
             * The MIME type of the Drive item.  See
             * https://developers.google.com/drive/v3/web/mime-types.
             */
            mimeType?: string;
            /** The target Drive item. The format is "items/ITEM_ID". */
            name?: string;
            /** Information about the owner of this Drive item. */
            owner?: Owner;
            /** The title of the Drive item. */
            title?: string;
        }
        interface DriveItemReference {
            /** The Drive item is a file. */
            driveFile?: any;
            /**
             * The Drive item is a folder. Includes information about the type of
             * folder.
             */
            driveFolder?: DriveFolder;
            /** This field is deprecated; please use the `driveFile` field instead. */
            file?: any;
            /** This field is deprecated; please use the `driveFolder` field instead. */
            folder?: Folder;
            /** The target Drive item. The format is "items/ITEM_ID". */
            name?: string;
            /** The title of the Drive item. */
            title?: string;
        }
        interface DriveReference {
            /**
             * The resource name of the shared drive. The format is
             * "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific collection
             * ID for this resource name.
             */
            name?: string;
            /** The title of the shared drive. */
            title?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface Edit {
        }
        // tslint:disable-next-line:no-empty-interface
        interface File {
        }
        interface FileComment {
            /**
             * The comment in the discussion thread. This identifier is an opaque string
             * compatible with the Drive API; see
             * https://developers.google.com/drive/v3/reference/comments/get
             */
            legacyCommentId?: string;
            /**
             * The discussion thread to which the comment was added. This identifier is an
             * opaque string compatible with the Drive API and references the first
             * comment in a discussion; see
             * https://developers.google.com/drive/v3/reference/comments/get
             */
            legacyDiscussionId?: string;
            /**
             * The link to the discussion thread containing this comment, for example,
             * "https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID".
             */
            linkToDiscussion?: string;
            /** The Drive item containing this comment. */
            parent?: DriveItem;
        }
        interface Folder {
            /** This field is deprecated; please see `DriveFolder.type` instead. */
            type?: string;
        }
        interface Group {
            /** The email address of the group. */
            email?: string;
            /** The title of the group. */
            title?: string;
        }
        interface Impersonation {
            /** The impersonated user. */
            impersonatedUser?: User;
        }
        interface KnownUser {
            /** True if this is the user making the request. */
            isCurrentUser?: boolean;
            /**
             * The identifier for this user that can be used with the People API to get
             * more information. The format is "people/ACCOUNT_ID". See
             * https://developers.google.com/people/.
             */
            personName?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface Legacy {
        }
        interface Move {
            /** The added parent object(s). */
            addedParents?: TargetReference[];
            /** The removed parent object(s). */
            removedParents?: TargetReference[];
        }
        // tslint:disable-next-line:no-empty-interface
        interface New {
        }
        // tslint:disable-next-line:no-empty-interface
        interface NoConsolidation {
        }
        interface Owner {
            /** The domain of the Drive item owner. */
            domain?: Domain;
            /** The drive that owns the item. */
            drive?: DriveReference;
            /** This field is deprecated; please use the `drive` field instead. */
            teamDrive?: TeamDriveReference;
            /** The user that owns the Drive item. */
            user?: User;
        }
        interface Permission {
            /**
             * If true, the item can be discovered (e.g. in the user's "Shared with me"
             * collection) without needing a link to the item.
             */
            allowDiscovery?: boolean;
            /** If set, this permission applies to anyone, even logged out users. */
            anyone?: any;
            /** The domain to whom this permission applies. */
            domain?: Domain;
            /** The group to whom this permission applies. */
            group?: Group;
            /**
             * Indicates the
             * <a href="/drive/web/manage-sharing#roles">Google Drive permissions
             * role</a>. The role determines a user's ability to read, write, and
             * comment on items.
             */
            role?: string;
            /** The user to whom this permission applies. */
            user?: User;
        }
        interface PermissionChange {
            /** The set of permissions added by this change. */
            addedPermissions?: Permission[];
            /** The set of permissions removed by this change. */
            removedPermissions?: Permission[];
        }
        interface Post {
            /** The sub-type of this event. */
            subtype?: string;
        }
        interface QueryDriveActivityRequest {
            /**
             * Return activities for this Drive folder and all children and descendants.
             * The format is "items/ITEM_ID".
             */
            ancestorName?: string;
            /**
             * Details on how to consolidate related actions that make up the activity. If
             * not set, then related actions will not be consolidated.
             */
            consolidationStrategy?: ConsolidationStrategy;
            /**
             * The filtering for items returned from this query request. The format of the
             * filter string is a sequence of expressions, joined by an optional "AND",
             * where each expression is of the form "field operator value".
             *
             * Supported fields:
             *
             * - <tt>time</tt>: Uses numerical operators on date values either in
             * terms of milliseconds since Jan 1, 1970 or in RFC 3339 format.
             * Examples:
             * - <tt>time > 1452409200000 AND time <= 1492812924310</tt>
             * - <tt>time >= "2016-01-10T01:02:03-05:00"</tt>
             *
             * - <tt>detail.action_detail_case</tt>: Uses the "has" operator (:) and
             * either a singular value or a list of allowed action types enclosed in
             * parentheses.
             * Examples:
             * - <tt>detail.action_detail_case: RENAME</tt>
             * - <tt>detail.action_detail_case:(CREATE UPLOAD)</tt>
             * - <tt>-detail.action_detail_case:MOVE</tt>
             */
            filter?: string;
            /**
             * Return activities for this Drive item. The format is
             * "items/ITEM_ID".
             */
            itemName?: string;
            /**
             * The requested number of activity to return. If not set, a default value
             * will be used.
             */
            pageSize?: number;
            /**
             * The next_page_token value returned from a previous QueryDriveActivity
             * request, if any.
             */
            pageToken?: string;
        }
        interface QueryDriveActivityResponse {
            /** List of activity requested. */
            activities?: DriveActivity[];
            /**
             * Token to retrieve the next page of results, or
             * empty if there are no more results in the list.
             */
            nextPageToken?: string;
        }
        interface Rename {
            /** The new title of the drive object. */
            newTitle?: string;
            /** The previous title of the drive object. */
            oldTitle?: string;
        }
        interface Restore {
            /** The type of restore action taken. */
            type?: string;
        }
        interface RestrictionChange {
            /** The feature which had a change in restriction policy. */
            feature?: string;
            /** The restriction in place after the change. */
            newRestriction?: string;
        }
        interface SettingsChange {
            /** The set of changes made to restrictions. */
            restrictionChanges?: RestrictionChange[];
        }
        interface Suggestion {
            /** The sub-type of this event. */
            subtype?: string;
        }
        interface SystemEvent {
            /** The type of the system event that may triggered activity. */
            type?: string;
        }
        interface Target {
            /** The target is a shared drive. */
            drive?: Drive;
            /** The target is a Drive item. */
            driveItem?: DriveItem;
            /** The target is a comment on a Drive file. */
            fileComment?: FileComment;
            /** This field is deprecated; please use the `drive` field instead. */
            teamDrive?: TeamDrive;
        }
        interface TargetReference {
            /** The target is a shared drive. */
            drive?: DriveReference;
            /** The target is a Drive item. */
            driveItem?: DriveItemReference;
            /** This field is deprecated; please use the `drive` field instead. */
            teamDrive?: TeamDriveReference;
        }
        interface TeamDrive {
            /** This field is deprecated; please see `Drive.name` instead. */
            name?: string;
            /** This field is deprecated; please see `Drive.root` instead. */
            root?: DriveItem;
            /** This field is deprecated; please see `Drive.title` instead. */
            title?: string;
        }
        interface TeamDriveReference {
            /** This field is deprecated; please see `DriveReference.name` instead. */
            name?: string;
            /** This field is deprecated; please see `DriveReference.title` instead. */
            title?: string;
        }
        interface TimeRange {
            /** The end of the time range. */
            endTime?: string;
            /** The start of the time range. */
            startTime?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface UnknownUser {
        }
        // tslint:disable-next-line:no-empty-interface
        interface Upload {
        }
        interface User {
            /** A user whose account has since been deleted. */
            deletedUser?: any;
            /** A known user. */
            knownUser?: KnownUser;
            /** A user about whom nothing is currently known. */
            unknownUser?: any;
        }
        interface ActivityResource {
            /** Query past activity in Google Drive. */
            query(request: {
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
                resource: QueryDriveActivityRequest;
            }): Request<QueryDriveActivityResponse>;
            query(request: {
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
            body: QueryDriveActivityRequest): Request<QueryDriveActivityResponse>;
        }

        const activity: ActivityResource;
    }
}
