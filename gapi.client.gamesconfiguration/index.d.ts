// Type definitions for non-npm package Google Play Game Services Publishing API v1configuration 1.0
// Project: https://developers.google.com/games/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/gamesConfiguration/v1configuration/rest
// Revision: 20200612

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Play Game Services Publishing API v1configuration */
    function load(name: "gamesconfiguration", version: "v1configuration"): PromiseLike<void>;
    function load(name: "gamesconfiguration", version: "v1configuration", callback: () => any): void;

    namespace gamesconfiguration {
        interface AchievementConfiguration {
            /** The type of the achievement. */
            achievementType?: string;
            /** The draft data of the achievement. */
            draft?: AchievementConfigurationDetail;
            /** The ID of the achievement. */
            id?: string;
            /** The initial state of the achievement. */
            initialState?: string;
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed
             * string `gamesConfiguration#achievementConfiguration`.
             */
            kind?: string;
            /** The read-only published data of the achievement. */
            published?: AchievementConfigurationDetail;
            /** Steps to unlock.  Only applicable to incremental achievements. */
            stepsToUnlock?: number;
            /** The token for this resource. */
            token?: string;
        }
        interface AchievementConfigurationDetail {
            /** Localized strings for the achievement description. */
            description?: LocalizedStringBundle;
            /** The icon url of this achievement. Writes to this field are ignored. */
            iconUrl?: string;
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed
             * string `gamesConfiguration#achievementConfigurationDetail`.
             */
            kind?: string;
            /** Localized strings for the achievement name. */
            name?: LocalizedStringBundle;
            /** Point value for the achievement. */
            pointValue?: number;
            /** The sort rank of this achievement. Writes to this field are ignored. */
            sortRank?: number;
        }
        interface AchievementConfigurationListResponse {
            /** The achievement configurations. */
            items?: AchievementConfiguration[];
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed
             * string `gamesConfiguration#achievementConfigurationListResponse`.
             */
            kind?: string;
            /** The pagination token for the next page of results. */
            nextPageToken?: string;
        }
        interface GamesNumberAffixConfiguration {
            /**
             * When the language requires special treatment of "small" numbers (as with 2,
             * 3, and 4 in Czech; or numbers ending 2, 3, or 4 but not 12, 13, or 14 in
             * Polish).
             */
            few?: LocalizedStringBundle;
            /**
             * When the language requires special treatment of "large" numbers (as with
             * numbers ending 11-99 in Maltese).
             */
            many?: LocalizedStringBundle;
            /**
             * When the language requires special treatment of numbers like one (as with
             * the number 1 in English and most other languages; in Russian, any number
             * ending in 1 but not ending in 11 is in this class).
             */
            one?: LocalizedStringBundle;
            /**
             * When the language does not require special treatment of the given quantity
             * (as with all numbers in Chinese, or 42 in English).
             */
            other?: LocalizedStringBundle;
            /**
             * When the language requires special treatment of numbers like two (as with 2
             * in Welsh, or 102 in Slovenian).
             */
            two?: LocalizedStringBundle;
            /**
             * When the language requires special treatment of the number 0 (as in
             * Arabic).
             */
            zero?: LocalizedStringBundle;
        }
        interface GamesNumberFormatConfiguration {
            /** The curreny code string. Only used for CURRENCY format type. */
            currencyCode?: string;
            /** The formatting for the number. */
            numberFormatType?: string;
            /** The number of decimal places for number. Only used for NUMERIC format type. */
            numDecimalPlaces?: number;
            /**
             * An optional suffix for the NUMERIC format type.  These strings follow the
             * same <a
             * href="http://developer.android.com/guide/topics/resources/string-resource.html#Plurals">
             * plural rules</a> as all Android string resources.
             */
            suffix?: GamesNumberAffixConfiguration;
        }
        // tslint:disable-next-line:interface-name
        interface ImageConfiguration {
            /** The image type for the image. */
            imageType?: string;
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed
             * string `gamesConfiguration#imageConfiguration`.
             */
            kind?: string;
            /** The resource ID of resource which the image belongs to. */
            resourceId?: string;
            /** The url for this image. */
            url?: string;
        }
        interface LeaderboardConfiguration {
            /** The draft data of the leaderboard. */
            draft?: LeaderboardConfigurationDetail;
            /** The ID of the leaderboard. */
            id?: string;
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed
             * string `gamesConfiguration#leaderboardConfiguration`.
             */
            kind?: string;
            /** The read-only published data of the leaderboard. */
            published?: LeaderboardConfigurationDetail;
            /** Maximum score that can be posted to this leaderboard. */
            scoreMax?: string;
            /** Minimum score that can be posted to this leaderboard. */
            scoreMin?: string;
            scoreOrder?: string;
            /** The token for this resource. */
            token?: string;
        }
        interface LeaderboardConfigurationDetail {
            /** The icon url of this leaderboard. Writes to this field are ignored. */
            iconUrl?: string;
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed
             * string `gamesConfiguration#leaderboardConfigurationDetail`.
             */
            kind?: string;
            /** Localized strings for the leaderboard name. */
            name?: LocalizedStringBundle;
            /** The score formatting for the leaderboard. */
            scoreFormat?: GamesNumberFormatConfiguration;
            /** The sort rank of this leaderboard. Writes to this field are ignored. */
            sortRank?: number;
        }
        interface LeaderboardConfigurationListResponse {
            /** The leaderboard configurations. */
            items?: LeaderboardConfiguration[];
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed
             * string
             * `gamesConfiguration#leaderboardConfigurationListResponse`.
             */
            kind?: string;
            /** The pagination token for the next page of results. */
            nextPageToken?: string;
        }
        interface LocalizedString {
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed
             * string `gamesConfiguration#localizedString`.
             */
            kind?: string;
            /** The locale string. */
            locale?: string;
            /** The string value. */
            value?: string;
        }
        interface LocalizedStringBundle {
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed
             * string `gamesConfiguration#localizedStringBundle`.
             */
            kind?: string;
            /** The locale strings. */
            translations?: LocalizedString[];
        }
        interface AchievementConfigurationsResource {
            /** Delete the achievement configuration with the given ID. */
            delete(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** The ID of the achievement used by this method. */
                achievementId: string;
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
            }): Request<void>;
            /** Retrieves the metadata of the achievement configuration with the given ID. */
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** The ID of the achievement used by this method. */
                achievementId: string;
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
            }): Request<AchievementConfiguration>;
            /** Insert a new achievement configuration in this application. */
            insert(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** The application ID from the Google Play developer console. */
                applicationId: string;
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
                resource: AchievementConfiguration;
            }): Request<AchievementConfiguration>;
            insert(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** The application ID from the Google Play developer console. */
                applicationId: string;
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
            body: AchievementConfiguration): Request<AchievementConfiguration>;
            /** Returns a list of the achievement configurations in this application. */
            list(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** The application ID from the Google Play developer console. */
                applicationId: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The maximum number of resource configurations to return in the response,
                 * used for paging. For any response, the actual number of resources returned
                 * may be less than the specified `maxResults`.
                 */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The token returned by the previous request. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<AchievementConfigurationListResponse>;
            /** Update the metadata of the achievement configuration with the given ID. */
            update(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** The ID of the achievement used by this method. */
                achievementId: string;
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
                resource: AchievementConfiguration;
            }): Request<AchievementConfiguration>;
            update(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** The ID of the achievement used by this method. */
                achievementId: string;
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
            body: AchievementConfiguration): Request<AchievementConfiguration>;
        }
        // tslint:disable-next-line:interface-name
        interface ImageConfigurationsResource {
            /** Uploads an image for a resource with the given ID and image type. */
            upload(request?: {
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
                /** Selects which image in a resource for this method. */
                imageType: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** The ID of the resource used by this method. */
                resourceId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ImageConfiguration>;
        }
        interface LeaderboardConfigurationsResource {
            /** Delete the leaderboard configuration with the given ID. */
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
                /** The ID of the leaderboard. */
                leaderboardId: string;
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
            }): Request<void>;
            /** Retrieves the metadata of the leaderboard configuration with the given ID. */
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
                /** The ID of the leaderboard. */
                leaderboardId: string;
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
            }): Request<LeaderboardConfiguration>;
            /** Insert a new leaderboard configuration in this application. */
            insert(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** The application ID from the Google Play developer console. */
                applicationId: string;
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
                resource: LeaderboardConfiguration;
            }): Request<LeaderboardConfiguration>;
            insert(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** The application ID from the Google Play developer console. */
                applicationId: string;
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
            body: LeaderboardConfiguration): Request<LeaderboardConfiguration>;
            /** Returns a list of the leaderboard configurations in this application. */
            list(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** The application ID from the Google Play developer console. */
                applicationId: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The maximum number of resource configurations to return in the response,
                 * used for paging. For any response, the actual number of resources returned
                 * may be less than the specified `maxResults`.
                 */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The token returned by the previous request. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<LeaderboardConfigurationListResponse>;
            /** Update the metadata of the leaderboard configuration with the given ID. */
            update(request: {
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
                /** The ID of the leaderboard. */
                leaderboardId: string;
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
                resource: LeaderboardConfiguration;
            }): Request<LeaderboardConfiguration>;
            update(request: {
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
                /** The ID of the leaderboard. */
                leaderboardId: string;
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
            body: LeaderboardConfiguration): Request<LeaderboardConfiguration>;
        }

        const achievementConfigurations: AchievementConfigurationsResource;

        const imageConfigurations: ImageConfigurationsResource;

        const leaderboardConfigurations: LeaderboardConfigurationsResource;
    }
}
