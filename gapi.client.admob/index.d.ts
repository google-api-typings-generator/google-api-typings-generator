// Type definitions for non-npm package AdMob API v1 1.0
// Project: https://developers.google.com/admob/api/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://admob.googleapis.com/$discovery/rest?version=v1
// Revision: 20200427

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load AdMob API v1 */
    function load(name: "admob", version: "v1"): PromiseLike<void>;
    function load(name: "admob", version: "v1", callback: () => any): void;

    namespace admob {
        interface Date {
            /**
             * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
             * if specifying a year by itself or a year and month where the day is not
             * significant.
             */
            day?: number;
            /**
             * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
             * month and day.
             */
            month?: number;
            /**
             * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
             * a year.
             */
            year?: number;
        }
        interface DateRange {
            /**
             * End date of the date range, inclusive. Must be greater than or equal to the
             * start date.
             */
            endDate?: Date;
            /**
             * Start date of the date range, inclusive. Must be less than or equal to the
             * end date.
             */
            startDate?: Date;
        }
        interface GenerateMediationReportRequest {
            /** Network report specification. */
            reportSpec?: MediationReportSpec;
        }
        interface GenerateMediationReportResponse {
            /**
             * Additional information about the generated report, such as warnings about
             * the data.
             */
            footer?: ReportFooter;
            /**
             * Report generation settings that describes the report contents, such as
             * the report date range and localization settings.
             */
            header?: ReportHeader;
            /** Actual report data. */
            row?: ReportRow;
        }
        interface GenerateNetworkReportRequest {
            /** Network report specification. */
            reportSpec?: NetworkReportSpec;
        }
        interface GenerateNetworkReportResponse {
            /**
             * Additional information about the generated report, such as warnings about
             * the data.
             */
            footer?: ReportFooter;
            /**
             * Report generation settings that describes the report contents, such as
             * the report date range and localization settings.
             */
            header?: ReportHeader;
            /** Actual report data. */
            row?: ReportRow;
        }
        interface ListPublisherAccountsResponse {
            /** Publisher that the client credentials can access. */
            account?: PublisherAccount[];
            /**
             * If not empty, indicates that there might be more accounts for the request;
             * you must pass this value in a new `ListPublisherAccountsRequest`.
             */
            nextPageToken?: string;
        }
        interface LocalizationSettings {
            /**
             * Currency code of the earning related metrics, which is the 3-letter code
             * defined in ISO 4217. The daily average rate is used for the currency
             * conversion. Defaults to the account currency code if unspecified.
             */
            currencyCode?: string;
            /**
             * Language used for any localized text, such as some dimension value display
             * labels. The language tag defined in the IETF BCP47. Defaults to 'en-US' if
             * unspecified.
             */
            languageCode?: string;
        }
        interface MediationReportSpec {
            /** The date range for which the report is generated. */
            dateRange?: DateRange;
            /** Describes which report rows to match based on their dimension values. */
            dimensionFilters?: MediationReportSpecDimensionFilter[];
            /**
             * List of dimensions of the report. The value combination of these dimensions
             * determines the row of the report. If no dimensions are specified, the
             * report returns a single row of requested metrics for the entire account.
             */
            dimensions?: string[];
            /** Localization settings of the report. */
            localizationSettings?: LocalizationSettings;
            /**
             * Maximum number of report data rows to return. If the value is not set, the
             * API returns as many rows as possible, up to 100000. Acceptable values are
             * 1-100000, inclusive. Any other values are treated as 100000.
             */
            maxReportRows?: number;
            /** List of metrics of the report. A report must specify at least one metric. */
            metrics?: string[];
            /**
             * Describes the sorting of report rows. The order of the condition in the
             * list defines its precedence; the earlier the condition, the higher its
             * precedence. If no sort conditions are specified, the row ordering is
             * undefined.
             */
            sortConditions?: MediationReportSpecSortCondition[];
            /**
             * A report time zone. Accepts an IANA TZ name values, such as
             * "America/Los_Angeles."  If no time zone is defined, the account default
             * takes effect. Check default value by the get account action.
             *
             * &#42;&#42;Warning:&#42;&#42; The "America/Los_Angeles" is the only supported value at
             * the moment.
             */
            timeZone?: string;
        }
        interface MediationReportSpecDimensionFilter {
            /** Applies the filter criterion to the specified dimension. */
            dimension?: string;
            /**
             * Matches a row if its value for the specified dimension is in one of the
             * values specified in this condition.
             */
            matchesAny?: StringList;
        }
        interface MediationReportSpecSortCondition {
            /** Sort by the specified dimension. */
            dimension?: string;
            /** Sort by the specified metric. */
            metric?: string;
            /** Sorting order of the dimension or metric. */
            order?: string;
        }
        interface NetworkReportSpec {
            /** The date range for which the report is generated. */
            dateRange?: DateRange;
            /** Describes which report rows to match based on their dimension values. */
            dimensionFilters?: NetworkReportSpecDimensionFilter[];
            /**
             * List of dimensions of the report. The value combination of these dimensions
             * determines the row of the report. If no dimensions are specified, the
             * report returns a single row of requested metrics for the entire account.
             */
            dimensions?: string[];
            /** Localization settings of the report. */
            localizationSettings?: LocalizationSettings;
            /**
             * Maximum number of report data rows to return. If the value is not set, the
             * API returns as many rows as possible, up to 100000. Acceptable values are
             * 1-100000, inclusive. Any other values are treated as 100000.
             */
            maxReportRows?: number;
            /** List of metrics of the report. A report must specify at least one metric. */
            metrics?: string[];
            /**
             * Describes the sorting of report rows. The order of the condition in the
             * list defines its precedence; the earlier the condition, the higher its
             * precedence. If no sort conditions are specified, the row ordering is
             * undefined.
             */
            sortConditions?: NetworkReportSpecSortCondition[];
            /**
             * A report time zone. Accepts an IANA TZ name values, such as
             * "America/Los_Angeles."  If no time zone is defined, the account default
             * takes effect. Check default value by the get account action.
             *
             * &#42;&#42;Warning:&#42;&#42; The "America/Los_Angeles" is the only supported value at
             * the moment.
             */
            timeZone?: string;
        }
        interface NetworkReportSpecDimensionFilter {
            /** Applies the filter criterion to the specified dimension. */
            dimension?: string;
            /**
             * Matches a row if its value for the specified dimension is in one of the
             * values specified in this condition.
             */
            matchesAny?: StringList;
        }
        interface NetworkReportSpecSortCondition {
            /** Sort by the specified dimension. */
            dimension?: string;
            /** Sort by the specified metric. */
            metric?: string;
            /** Sorting order of the dimension or metric. */
            order?: string;
        }
        interface PublisherAccount {
            /**
             * Currency code of the earning-related metrics, which is the 3-letter code
             * defined in ISO 4217. The daily average rate is used for the currency
             * conversion.
             */
            currencyCode?: string;
            /**
             * Resource name of this account.
             * Format is accounts/{publisher_id}.
             */
            name?: string;
            /**
             * The unique ID by which this publisher account can be identified
             * in the API requests (for example, pub-1234567890).
             */
            publisherId?: string;
            /**
             * The time zone that is used in reports that are generated for this account.
             * The value is a time-zone ID as specified by the CLDR project,
             * for example, "America/Los_Angeles".
             */
            reportingTimeZone?: string;
        }
        interface ReportFooter {
            /** Total number of rows that did match the request. */
            matchingRowCount?: string;
            /** Warnings associated with generation of the report. */
            warnings?: ReportWarning[];
        }
        interface ReportHeader {
            /**
             * The date range for which the report is generated. This is identical to the
             * range specified in the report request.
             */
            dateRange?: DateRange;
            /**
             * Localization settings of the report. This is identical to the settings
             * in the report request.
             */
            localizationSettings?: LocalizationSettings;
            /**
             * The report time zone. The value is a time-zone ID as specified by the CLDR
             * project, for example, "America/Los_Angeles".
             */
            reportingTimeZone?: string;
        }
        interface ReportRow {
            /** Map of dimension values in a row, with keys as enum name of the dimensions. */
            dimensionValues?: Record<string, ReportRowDimensionValue>;
            /**
             * Map of metric values in a row, with keys as enum name of the metrics. If
             * a metric being requested has no value returned, the map will not include
             * it.
             */
            metricValues?: Record<string, ReportRowMetricValue>;
        }
        interface ReportRowDimensionValue {
            /**
             * The localized string representation of the value. If unspecified, the
             * display label should be derived from the value.
             */
            displayLabel?: string;
            /**
             * Dimension value in the format specified in the report's spec Dimension
             * enum.
             */
            value?: string;
        }
        interface ReportRowMetricValue {
            /** Double precision (approximate) decimal values. Rates are from 0 to 1. */
            doubleValue?: number;
            /** Metric integer value. */
            integerValue?: string;
            /**
             * Amount in micros. One million is equivalent to one unit. Currency value
             * is in the unit (USD, EUR or other) specified by the request.
             * For example, $6.50 whould be represented as 6500000 micros.
             */
            microsValue?: string;
        }
        interface ReportWarning {
            /** Describes the details of the warning message, in English. */
            description?: string;
            /** Type of the warning. */
            type?: string;
        }
        interface StringList {
            /** The string values. */
            values?: string[];
        }
        interface MediationReportResource {
            /**
             * Generates an AdMob Mediation report based on the provided report
             * specification.
             */
            generate(request: {
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
                 * Resource name of the account to generate the report for.
                 * Example: accounts/pub-9876543210987654
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
                resource: GenerateMediationReportRequest;
            }): Request<GenerateMediationReportResponse>;
            generate(request: {
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
                 * Resource name of the account to generate the report for.
                 * Example: accounts/pub-9876543210987654
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
            body: GenerateMediationReportRequest): Request<GenerateMediationReportResponse>;
        }
        interface NetworkReportResource {
            /**
             * Generates an AdMob Network report based on the provided report
             * specification.
             */
            generate(request: {
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
                 * Resource name of the account to generate the report for.
                 * Example: accounts/pub-9876543210987654
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
                resource: GenerateNetworkReportRequest;
            }): Request<GenerateNetworkReportResponse>;
            generate(request: {
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
                 * Resource name of the account to generate the report for.
                 * Example: accounts/pub-9876543210987654
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
            body: GenerateNetworkReportRequest): Request<GenerateNetworkReportResponse>;
        }
        interface AccountsResource {
            /** Gets information about the specified AdMob publisher account. */
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
                 * Resource name of the publisher account to retrieve.
                 * Example: accounts/pub-9876543210987654
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
            }): Request<PublisherAccount>;
            /**
             * Lists the AdMob publisher account accessible with the client credential.
             * Currently, all credentials have access to at most one AdMob account.
             */
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
                /** Maximum number of accounts to return. */
                pageSize?: number;
                /**
                 * The value returned by the last `ListPublisherAccountsResponse`; indicates
                 * that this is a continuation of a prior `ListPublisherAccounts` call, and
                 * that the system should return the next page of data.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListPublisherAccountsResponse>;
            mediationReport: MediationReportResource;
            networkReport: NetworkReportResource;
        }

        const accounts: AccountsResource;
    }
}
