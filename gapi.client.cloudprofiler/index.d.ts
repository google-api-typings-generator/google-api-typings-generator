// Type definitions for non-npm package Stackdriver Profiler API v2 2.0
// Project: https://cloud.google.com/profiler/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://cloudprofiler.googleapis.com/$discovery/rest?version=v2
// Revision: 20200210

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Stackdriver Profiler API v2 */
    function load(name: "cloudprofiler", version: "v2"): PromiseLike<void>;
    function load(name: "cloudprofiler", version: "v2", callback: () => any): void;

    namespace cloudprofiler {
        interface CreateProfileRequest {
            /** Deployment details. */
            deployment?: Deployment;
            /** One or more profile types that the agent is capable of providing. */
            profileType?: string[];
        }
        interface Deployment {
            /**
             * Labels identify the deployment within the user universe and same target.
             * Validation regex for label names: `^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$`.
             * Value for an individual label must be <= 512 bytes, the total
             * size of all label names and values must be <= 1024 bytes.
             *
             * Label named "language" can be used to record the programming language of
             * the profiled deployment. The standard choices for the value include "java",
             * "go", "python", "ruby", "nodejs", "php", "dotnet".
             *
             * For deployments running on Google Cloud Platform, "zone" or "region" label
             * should be present describing the deployment location. An example of a zone
             * is "us-central1-a", an example of a region is "us-central1" or
             * "us-central".
             */
            labels?: Record<string, string>;
            /**
             * Project ID is the ID of a cloud project.
             * Validation regex: `^a-z{4,61}[a-z0-9]$`.
             */
            projectId?: string;
            /**
             * Target is the service name used to group related deployments:
             * &#42; Service name for GAE Flex / Standard.
             * &#42; Cluster and container name for GKE.
             * &#42; User-specified string for direct GCE profiling (e.g. Java).
             * &#42; Job name for Dataflow.
             * Validation regex: `^[a-z]([-a-z0-9_.]{0,253}[a-z0-9])?$`.
             */
            target?: string;
        }
        interface Profile {
            /** Deployment this profile corresponds to. */
            deployment?: Deployment;
            /**
             * Duration of the profiling session.
             * Input (for the offline mode) or output (for the online mode).
             * The field represents requested profiling duration. It may slightly differ
             * from the effective profiling duration, which is recorded in the profile
             * data, in case the profiling can't be stopped immediately (e.g. in case
             * stopping the profiling is handled asynchronously).
             */
            duration?: string;
            /**
             * Input only. Labels associated to this specific profile. These labels will
             * get merged with the deployment labels for the final data set.  See
             * documentation on deployment labels for validation rules and limits.
             */
            labels?: Record<string, string>;
            /** Output only. Opaque, server-assigned, unique ID for this profile. */
            name?: string;
            /**
             * Input only. Profile bytes, as a gzip compressed serialized proto, the
             * format is https://github.com/google/pprof/blob/master/proto/profile.proto.
             */
            profileBytes?: string;
            /**
             * Type of profile.
             * For offline mode, this must be specified when creating the profile. For
             * online mode it is assigned and returned by the server.
             */
            profileType?: string;
        }
        interface ProfilesResource {
            /**
             * CreateProfile creates a new profile resource in the online mode.
             *
             * The server ensures that the new profiles are created at a constant rate per
             * deployment, so the creation request may hang for some time until the next
             * profile session is available.
             *
             * The request may fail with ABORTED error if the creation is not available
             * within ~1m, the response will indicate the duration of the backoff the
             * client should take before attempting creating a profile again. The backoff
             * duration is returned in google.rpc.RetryInfo extension on the response
             * status. To a gRPC client, the extension will be return as a
             * binary-serialized proto in the trailing metadata item named
             * "google.rpc.retryinfo-bin".
             */
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
                /** Parent project to create the profile in. */
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
                resource: CreateProfileRequest;
            }): Request<Profile>;
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
                /** Parent project to create the profile in. */
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
            body: CreateProfileRequest): Request<Profile>;
            /**
             * CreateOfflineProfile creates a new profile resource in the offline mode.
             * The client provides the profile to create along with the profile bytes, the
             * server records it.
             */
            createOffline(request: {
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
                /** Parent project to create the profile in. */
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
                resource: Profile;
            }): Request<Profile>;
            createOffline(request: {
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
                /** Parent project to create the profile in. */
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
            body: Profile): Request<Profile>;
            /**
             * UpdateProfile updates the profile bytes and labels on the profile resource
             * created in the online mode. Updating the bytes for profiles created in the
             * offline mode is currently not supported: the profile content must be
             * provided at the time of the profile creation.
             */
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
                /** Output only. Opaque, server-assigned, unique ID for this profile. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Field mask used to specify the fields to be overwritten. Currently only
                 * profile_bytes and labels fields are supported by UpdateProfile, so only
                 * those fields can be specified in the mask. When no mask is provided, all
                 * fields are overwritten.
                 */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Profile;
            }): Request<Profile>;
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
                /** Output only. Opaque, server-assigned, unique ID for this profile. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Field mask used to specify the fields to be overwritten. Currently only
                 * profile_bytes and labels fields are supported by UpdateProfile, so only
                 * those fields can be specified in the mask. When no mask is provided, all
                 * fields are overwritten.
                 */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Profile): Request<Profile>;
        }
        interface ProjectsResource {
            profiles: ProfilesResource;
        }

        const projects: ProjectsResource;
    }
}
