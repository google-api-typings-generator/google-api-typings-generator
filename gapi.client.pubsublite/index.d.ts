// Type definitions for non-npm package Pub/Sub Lite API v1 1.0
// Project: https://cloud.google.com/pubsub/lite/docs
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://pubsublite.googleapis.com/$discovery/rest?version=v1
// Revision: 20200728

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Pub/Sub Lite API v1 */
    function load(name: "pubsublite", version: "v1"): PromiseLike<void>;
    function load(name: "pubsublite", version: "v1", callback: () => any): void;

    namespace pubsublite {
        interface Capacity {
            /**
             * Publish throughput capacity per partition in MiB/s.
             * Must be >= 4 and <= 16.
             */
            publishMibPerSec?: number;
            /**
             * Subscribe throughput capacity per partition in MiB/s.
             * Must be >= 4 and <= 32.
             */
            subscribeMibPerSec?: number;
        }
        interface Cursor {
            /**
             * The offset of a message within a topic partition. Must be greater than or
             * equal 0.
             */
            offset?: string;
        }
        interface DeliveryConfig {
            /** The DeliveryRequirement for this subscription. */
            deliveryRequirement?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface ListPartitionCursorsResponse {
            /**
             * A token, which can be sent as `page_token` to retrieve the next page.
             * If this field is omitted, there are no subsequent pages.
             */
            nextPageToken?: string;
            /** The partition cursors from this request. */
            partitionCursors?: PartitionCursor[];
        }
        interface ListSubscriptionsResponse {
            /**
             * A token that can be sent as `page_token` to retrieve the next page of
             * results. If this field is omitted, there are no more results.
             */
            nextPageToken?: string;
            /**
             * The list of subscriptions in the requested parent. The order of the
             * subscriptions is unspecified.
             */
            subscriptions?: Subscription[];
        }
        interface ListTopicsResponse {
            /**
             * A token that can be sent as `page_token` to retrieve the next page of
             * results. If this field is omitted, there are no more results.
             */
            nextPageToken?: string;
            /**
             * The list of topic in the requested parent. The order of the topics is
             * unspecified.
             */
            topics?: Topic[];
        }
        interface ListTopicSubscriptionsResponse {
            /**
             * A token that can be sent as `page_token` to retrieve the next page of
             * results. If this field is omitted, there are no more results.
             */
            nextPageToken?: string;
            /**
             * The names of subscriptions attached to the topic. The order of the
             * subscriptions is unspecified.
             */
            subscriptions?: string[];
        }
        interface PartitionConfig {
            /** The capacity configuration. */
            capacity?: Capacity;
            /** The number of partitions in the topic. Must be at least 1. */
            count?: string;
            /**
             * Every partition in the topic is allocated throughput equivalent to
             * `scale` times the standard partition throughput (4 MiB/s). This is also
             * reflected in the cost of this topic; a topic with `scale` of 2 and
             * count of 10 is charged for 20 partitions. This value must be in the
             * range [1,4].
             */
            scale?: number;
        }
        interface PartitionCursor {
            /** The value of the cursor. */
            cursor?: Cursor;
            /** The partition this is for. */
            partition?: string;
        }
        interface RetentionConfig {
            /**
             * How long a published message is retained. If unset, messages will be
             * retained as long as the bytes retained for each partition is below
             * `per_partition_bytes`.
             */
            period?: string;
            /**
             * The provisioned storage, in bytes, per partition. If the number of bytes
             * stored in any of the topic's partitions grows beyond this value, older
             * messages will be dropped to make room for newer ones, regardless of the
             * value of `period`.
             */
            perPartitionBytes?: string;
        }
        interface Subscription {
            /** The settings for this subscription's message delivery. */
            deliveryConfig?: DeliveryConfig;
            /**
             * The name of the subscription.
             * Structured like:
             * projects/{project_number}/locations/{location}/subscriptions/{subscription_id}
             */
            name?: string;
            /**
             * The name of the topic this subscription is attached to.
             * Structured like:
             * projects/{project_number}/locations/{location}/topics/{topic_id}
             */
            topic?: string;
        }
        interface Topic {
            /**
             * The name of the topic.
             * Structured like:
             * projects/{project_number}/locations/{location}/topics/{topic_id}
             */
            name?: string;
            /** The settings for this topic's partitions. */
            partitionConfig?: PartitionConfig;
            /** The settings for this topic's message retention. */
            retentionConfig?: RetentionConfig;
        }
        interface TopicPartitions {
            /** The number of partitions in the topic. */
            partitionCount?: string;
        }
        interface SubscriptionsResource {
            /** Creates a new subscription. */
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
                 * Required. The parent location in which to create the subscription.
                 * Structured like `projects/{project_number}/locations/{location}`.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Required. The ID to use for the subscription, which will become the final component
                 * of the subscription's name.
                 *
                 * This value is structured like: `my-sub-name`.
                 */
                subscriptionId?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Subscription;
            }): Request<Subscription>;
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
                 * Required. The parent location in which to create the subscription.
                 * Structured like `projects/{project_number}/locations/{location}`.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Required. The ID to use for the subscription, which will become the final component
                 * of the subscription's name.
                 *
                 * This value is structured like: `my-sub-name`.
                 */
                subscriptionId?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Subscription): Request<Subscription>;
            /** Deletes the specified subscription. */
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
                /** Required. The name of the subscription to delete. */
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
            }): Request<{}>;
            /** Returns the subscription configuration. */
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
                /** Required. The name of the subscription whose configuration to return. */
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
            }): Request<Subscription>;
            /** Returns the list of subscriptions for the given project. */
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
                 * The maximum number of subscriptions to return. The service may return fewer
                 * than this value.
                 * If unset or zero, all subscriptions for the parent will be returned.
                 */
                pageSize?: number;
                /**
                 * A page token, received from a previous `ListSubscriptions` call.
                 * Provide this to retrieve the subsequent page.
                 *
                 * When paginating, all other parameters provided to `ListSubscriptions` must
                 * match the call that provided the page token.
                 */
                pageToken?: string;
                /**
                 * Required. The parent whose subscriptions are to be listed.
                 * Structured like `projects/{project_number}/locations/{location}`.
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
            }): Request<ListSubscriptionsResponse>;
            /** Updates properties of the specified subscription. */
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
                 * The name of the subscription.
                 * Structured like:
                 * projects/{project_number}/locations/{location}/subscriptions/{subscription_id}
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. A mask specifying the subscription fields to change. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Subscription;
            }): Request<Subscription>;
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
                 * The name of the subscription.
                 * Structured like:
                 * projects/{project_number}/locations/{location}/subscriptions/{subscription_id}
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. A mask specifying the subscription fields to change. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Subscription): Request<Subscription>;
        }
        interface SubscriptionsResource {
            /** Lists the subscriptions attached to the specified topic. */
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
                /** Required. The name of the topic whose subscriptions to list. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The maximum number of subscriptions to return. The service may return fewer
                 * than this value.
                 * If unset or zero, all subscriptions for the given topic will be returned.
                 */
                pageSize?: number;
                /**
                 * A page token, received from a previous `ListTopicSubscriptions` call.
                 * Provide this to retrieve the subsequent page.
                 *
                 * When paginating, all other parameters provided to `ListTopicSubscriptions`
                 * must match the call that provided the page token.
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
            }): Request<ListTopicSubscriptionsResponse>;
        }
        interface TopicsResource {
            /** Creates a new topic. */
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
                 * Required. The parent location in which to create the topic.
                 * Structured like `projects/{project_number}/locations/{location}`.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Required. The ID to use for the topic, which will become the final component of
                 * the topic's name.
                 *
                 * This value is structured like: `my-topic-name`.
                 */
                topicId?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Topic;
            }): Request<Topic>;
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
                 * Required. The parent location in which to create the topic.
                 * Structured like `projects/{project_number}/locations/{location}`.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Required. The ID to use for the topic, which will become the final component of
                 * the topic's name.
                 *
                 * This value is structured like: `my-topic-name`.
                 */
                topicId?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Topic): Request<Topic>;
            /** Deletes the specified topic. */
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
                /** Required. The name of the topic to delete. */
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
            }): Request<{}>;
            /** Returns the topic configuration. */
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
                /** Required. The name of the topic whose configuration to return. */
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
            }): Request<Topic>;
            /** Returns the partition information for the requested topic. */
            getPartitions(request?: {
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
                /** Required. The topic whose partition information to return. */
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
            }): Request<TopicPartitions>;
            /** Returns the list of topics for the given project. */
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
                 * The maximum number of topics to return. The service may return fewer than
                 * this value.
                 * If unset or zero, all topics for the parent will be returned.
                 */
                pageSize?: number;
                /**
                 * A page token, received from a previous `ListTopics` call.
                 * Provide this to retrieve the subsequent page.
                 *
                 * When paginating, all other parameters provided to `ListTopics` must match
                 * the call that provided the page token.
                 */
                pageToken?: string;
                /**
                 * Required. The parent whose topics are to be listed.
                 * Structured like `projects/{project_number}/locations/{location}`.
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
            }): Request<ListTopicsResponse>;
            /** Updates properties of the specified topic. */
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
                 * The name of the topic.
                 * Structured like:
                 * projects/{project_number}/locations/{location}/topics/{topic_id}
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. A mask specifying the topic fields to change. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Topic;
            }): Request<Topic>;
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
                 * The name of the topic.
                 * Structured like:
                 * projects/{project_number}/locations/{location}/topics/{topic_id}
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. A mask specifying the topic fields to change. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Topic): Request<Topic>;
            subscriptions: SubscriptionsResource;
        }
        interface LocationsResource {
            subscriptions: SubscriptionsResource;
            topics: TopicsResource;
        }
        interface ProjectsResource {
            locations: LocationsResource;
        }
        interface AdminResource {
            projects: ProjectsResource;
        }
        interface CursorsResource {
            /** Returns all committed cursor information for a subscription. */
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
                 * The maximum number of cursors to return. The service may return fewer than
                 * this value.
                 * If unset or zero, all cursors for the parent will be returned.
                 */
                pageSize?: number;
                /**
                 * A page token, received from a previous `ListPartitionCursors` call.
                 * Provide this to retrieve the subsequent page.
                 *
                 * When paginating, all other parameters provided to `ListPartitionCursors`
                 * must match the call that provided the page token.
                 */
                pageToken?: string;
                /**
                 * Required. The subscription for which to retrieve cursors.
                 * Structured like
                 * `projects/{project_number}/locations/{location}/subscriptions/{subscription_id}`.
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
            }): Request<ListPartitionCursorsResponse>;
        }
        interface SubscriptionsResource {
            cursors: CursorsResource;
        }
        interface LocationsResource {
            subscriptions: SubscriptionsResource;
        }
        interface ProjectsResource {
            locations: LocationsResource;
        }
        interface CursorResource {
            projects: ProjectsResource;
        }

        const admin: AdminResource;

        const cursor: CursorResource;
    }
}
