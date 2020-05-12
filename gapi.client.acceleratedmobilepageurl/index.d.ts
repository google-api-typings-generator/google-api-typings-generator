// Type definitions for non-npm package Accelerated Mobile Pages (AMP) URL API v1 1.0
// Project: https://developers.google.com/amp/cache/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://acceleratedmobilepageurl.googleapis.com/$discovery/rest?version=v1
// Revision: 20200511

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Accelerated Mobile Pages (AMP) URL API v1 */
    function load(name: "acceleratedmobilepageurl", version: "v1"): PromiseLike<void>;
    function load(name: "acceleratedmobilepageurl", version: "v1", callback: () => any): void;

    namespace acceleratedmobilepageurl {
        interface AmpUrl {
            /** The AMP URL pointing to the publisher's web server. */
            ampUrl?: string;
            /**
             * The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
             * the cached document in the Google AMP Cache.
             */
            cdnAmpUrl?: string;
            /** The original non-AMP URL. */
            originalUrl?: string;
        }
        interface AmpUrlError {
            /** The error code of an API call. */
            errorCode?: string;
            /** An optional descriptive error message. */
            errorMessage?: string;
            /** The original non-AMP URL. */
            originalUrl?: string;
        }
        interface BatchGetAmpUrlsRequest {
            /** The lookup_strategy being requested. */
            lookupStrategy?: string;
            /**
             * List of URLs to look up for the paired AMP URLs.
             * The URLs are case-sensitive. Up to 50 URLs per lookup
             * (see [Usage Limits](/amp/cache/reference/limits)).
             */
            urls?: string[];
        }
        interface BatchGetAmpUrlsResponse {
            /**
             * For each URL in BatchAmpUrlsRequest, the URL response. The response might
             * not be in the same order as URLs in the batch request.
             * If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated
             * only once.
             */
            ampUrls?: AmpUrl[];
            /** The errors for requested URLs that have no AMP URL. */
            urlErrors?: AmpUrlError[];
        }
        interface AmpUrlsResource {
            /**
             * Returns AMP URL(s) and equivalent
             * [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
             */
            batchGet(request: {
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
                resource: BatchGetAmpUrlsRequest;
            }): Request<BatchGetAmpUrlsResponse>;
            batchGet(request: {
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
            body: BatchGetAmpUrlsRequest): Request<BatchGetAmpUrlsResponse>;
        }

        const ampUrls: AmpUrlsResource;
    }
}
