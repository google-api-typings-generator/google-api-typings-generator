/* This is stub file for gapi.client.jobs definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('jobs', 'v3', () => {
        /** now we can use gapi.client.jobs */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** Manage job postings */
            'https://www.googleapis.com/auth/jobs',
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
         * Completes the specified prefix with keyword suggestions.
         * Intended for use by a job search auto-complete search box.
         */
        await gapi.client.jobs.projects.complete({
            companyName: "Test string",
            languageCode: "Test string",
            languageCodes: "Test string",
            name: "Test string",
            pageSize: 42,
            query: "Test string",
            scope: "Test string",
            type: "Test string",
        });
        /**
         * Report events issued when end user interacts with customer's application
         * that uses Cloud Talent Solution. You may inspect the created events in
         * [self service
         * tools](https://console.cloud.google.com/talent-solution/overview).
         * [Learn
         * more](https://cloud.google.com/talent-solution/docs/management-tools)
         * about self service tools.
         */
        await gapi.client.jobs.projects.clientEvents.create({
            parent: "Test string",
        }, {
            clientEvent: {
                createTime: "Test string",
                eventId: "Test string",
                extraInfo: {
                    A: "Test string"                },
                jobEvent: {
                    jobs: [
                        "Test string"                    ],
                    type: "Test string",
                },
                parentEventId: "Test string",
                requestId: "Test string",
            },
        });
        /** Creates a new company entity. */
        await gapi.client.jobs.projects.companies.create({
            parent: "Test string",
        }, {
            company: {
                careerSiteUri: "Test string",
                derivedInfo: {
                    headquartersLocation: {
                        latLng: {
                            latitude: 42,
                            longitude: 42,
                        },
                        locationType: "Test string",
                        postalAddress: {
                            addressLines: [
                                "Test string"                            ],
                            administrativeArea: "Test string",
                            languageCode: "Test string",
                            locality: "Test string",
                            organization: "Test string",
                            postalCode: "Test string",
                            recipients: [
                                "Test string"                            ],
                            regionCode: "Test string",
                            revision: 42,
                            sortingCode: "Test string",
                            sublocality: "Test string",
                        },
                        radiusInMiles: 42,
                    },
                },
                displayName: "Test string",
                eeoText: "Test string",
                externalId: "Test string",
                headquartersAddress: "Test string",
                hiringAgency: true,
                imageUri: "Test string",
                keywordSearchableJobCustomAttributes: [
                    "Test string"                ],
                name: "Test string",
                size: "Test string",
                suspended: true,
                websiteUri: "Test string",
            },
        });
        /**
         * Deletes specified company.
         * Prerequisite: The company has no jobs associated with it.
         */
        await gapi.client.jobs.projects.companies.delete({
            name: "Test string",
        });
        /** Retrieves specified company. */
        await gapi.client.jobs.projects.companies.get({
            name: "Test string",
        });
        /** Lists all companies associated with the service account. */
        await gapi.client.jobs.projects.companies.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            requireOpenJobs: true,
        });
        /**
         * Updates specified company. Company names can't be updated. To update a
         * company name, delete the company and all jobs associated with it, and only
         * then re-create them.
         */
        await gapi.client.jobs.projects.companies.patch({
            name: "Test string",
        }, {
            company: {
                careerSiteUri: "Test string",
                derivedInfo: {
                    headquartersLocation: {
                        latLng: {
                            latitude: 42,
                            longitude: 42,
                        },
                        locationType: "Test string",
                        postalAddress: {
                            addressLines: [
                                "Test string"                            ],
                            administrativeArea: "Test string",
                            languageCode: "Test string",
                            locality: "Test string",
                            organization: "Test string",
                            postalCode: "Test string",
                            recipients: [
                                "Test string"                            ],
                            regionCode: "Test string",
                            revision: 42,
                            sortingCode: "Test string",
                            sublocality: "Test string",
                        },
                        radiusInMiles: 42,
                    },
                },
                displayName: "Test string",
                eeoText: "Test string",
                externalId: "Test string",
                headquartersAddress: "Test string",
                hiringAgency: true,
                imageUri: "Test string",
                keywordSearchableJobCustomAttributes: [
                    "Test string"                ],
                name: "Test string",
                size: "Test string",
                suspended: true,
                websiteUri: "Test string",
            },
            updateMask: "Test string",
        });
        /** Deletes a list of Jobs by filter. */
        await gapi.client.jobs.projects.jobs.batchDelete({
            parent: "Test string",
        }, {
            filter: "Test string",
        });
        /**
         * Creates a new job.
         *
         * Typically, the job becomes searchable within 10 seconds, but it may take
         * up to 5 minutes.
         */
        await gapi.client.jobs.projects.jobs.create({
            parent: "Test string",
        }, {
            job: {
                addresses: [
                    "Test string"                ],
                applicationInfo: {
                    emails: [
                        "Test string"                    ],
                    instruction: "Test string",
                    uris: [
                        "Test string"                    ],
                },
                companyDisplayName: "Test string",
                companyName: "Test string",
                compensationInfo: {
                    annualizedBaseCompensationRange: {
                        maxCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                        minCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                    },
                    annualizedTotalCompensationRange: {
                        maxCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                        minCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                    },
                    entries: [
                        {
                            amount: {
                                currencyCode: "Test string",
                                nanos: 42,
                                units: "Test string",
                            },
                            description: "Test string",
                            expectedUnitsPerYear: 42,
                            range: {
                                maxCompensation: {
                                    currencyCode: "Test string",
                                    nanos: 42,
                                    units: "Test string",
                                },
                                minCompensation: {
                                    currencyCode: "Test string",
                                    nanos: 42,
                                    units: "Test string",
                                },
                            },
                            type: "Test string",
                            unit: "Test string",
                        }                    ],
                },
                customAttributes: {
                    A: {
                        filterable: true,
                        longValues: [
                            "Test string"                        ],
                        stringValues: [
                            "Test string"                        ],
                    }                },
                degreeTypes: [
                    "Test string"                ],
                department: "Test string",
                derivedInfo: {
                    jobCategories: [
                        "Test string"                    ],
                    locations: [
                        {
                            latLng: {
                                latitude: 42,
                                longitude: 42,
                            },
                            locationType: "Test string",
                            postalAddress: {
                                addressLines: [
                                    "Test string"                                ],
                                administrativeArea: "Test string",
                                languageCode: "Test string",
                                locality: "Test string",
                                organization: "Test string",
                                postalCode: "Test string",
                                recipients: [
                                    "Test string"                                ],
                                regionCode: "Test string",
                                revision: 42,
                                sortingCode: "Test string",
                                sublocality: "Test string",
                            },
                            radiusInMiles: 42,
                        }                    ],
                },
                description: "Test string",
                employmentTypes: [
                    "Test string"                ],
                incentives: "Test string",
                jobBenefits: [
                    "Test string"                ],
                jobEndTime: "Test string",
                jobLevel: "Test string",
                jobStartTime: "Test string",
                languageCode: "Test string",
                name: "Test string",
                postingCreateTime: "Test string",
                postingExpireTime: "Test string",
                postingPublishTime: "Test string",
                postingRegion: "Test string",
                postingUpdateTime: "Test string",
                processingOptions: {
                    disableStreetAddressResolution: true,
                    htmlSanitization: "Test string",
                },
                promotionValue: 42,
                qualifications: "Test string",
                requisitionId: "Test string",
                responsibilities: "Test string",
                title: "Test string",
                visibility: "Test string",
            },
        });
        /**
         * Deletes the specified job.
         *
         * Typically, the job becomes unsearchable within 10 seconds, but it may take
         * up to 5 minutes.
         */
        await gapi.client.jobs.projects.jobs.delete({
            name: "Test string",
        });
        /**
         * Retrieves the specified job, whose status is OPEN or recently EXPIRED
         * within the last 90 days.
         */
        await gapi.client.jobs.projects.jobs.get({
            name: "Test string",
        });
        /** Lists jobs by filter. */
        await gapi.client.jobs.projects.jobs.list({
            filter: "Test string",
            jobView: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /**
         * Updates specified job.
         *
         * Typically, updated contents become visible in search results within 10
         * seconds, but it may take up to 5 minutes.
         */
        await gapi.client.jobs.projects.jobs.patch({
            name: "Test string",
        }, {
            job: {
                addresses: [
                    "Test string"                ],
                applicationInfo: {
                    emails: [
                        "Test string"                    ],
                    instruction: "Test string",
                    uris: [
                        "Test string"                    ],
                },
                companyDisplayName: "Test string",
                companyName: "Test string",
                compensationInfo: {
                    annualizedBaseCompensationRange: {
                        maxCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                        minCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                    },
                    annualizedTotalCompensationRange: {
                        maxCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                        minCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                    },
                    entries: [
                        {
                            amount: {
                                currencyCode: "Test string",
                                nanos: 42,
                                units: "Test string",
                            },
                            description: "Test string",
                            expectedUnitsPerYear: 42,
                            range: {
                                maxCompensation: {
                                    currencyCode: "Test string",
                                    nanos: 42,
                                    units: "Test string",
                                },
                                minCompensation: {
                                    currencyCode: "Test string",
                                    nanos: 42,
                                    units: "Test string",
                                },
                            },
                            type: "Test string",
                            unit: "Test string",
                        }                    ],
                },
                customAttributes: {
                    A: {
                        filterable: true,
                        longValues: [
                            "Test string"                        ],
                        stringValues: [
                            "Test string"                        ],
                    }                },
                degreeTypes: [
                    "Test string"                ],
                department: "Test string",
                derivedInfo: {
                    jobCategories: [
                        "Test string"                    ],
                    locations: [
                        {
                            latLng: {
                                latitude: 42,
                                longitude: 42,
                            },
                            locationType: "Test string",
                            postalAddress: {
                                addressLines: [
                                    "Test string"                                ],
                                administrativeArea: "Test string",
                                languageCode: "Test string",
                                locality: "Test string",
                                organization: "Test string",
                                postalCode: "Test string",
                                recipients: [
                                    "Test string"                                ],
                                regionCode: "Test string",
                                revision: 42,
                                sortingCode: "Test string",
                                sublocality: "Test string",
                            },
                            radiusInMiles: 42,
                        }                    ],
                },
                description: "Test string",
                employmentTypes: [
                    "Test string"                ],
                incentives: "Test string",
                jobBenefits: [
                    "Test string"                ],
                jobEndTime: "Test string",
                jobLevel: "Test string",
                jobStartTime: "Test string",
                languageCode: "Test string",
                name: "Test string",
                postingCreateTime: "Test string",
                postingExpireTime: "Test string",
                postingPublishTime: "Test string",
                postingRegion: "Test string",
                postingUpdateTime: "Test string",
                processingOptions: {
                    disableStreetAddressResolution: true,
                    htmlSanitization: "Test string",
                },
                promotionValue: 42,
                qualifications: "Test string",
                requisitionId: "Test string",
                responsibilities: "Test string",
                title: "Test string",
                visibility: "Test string",
            },
            updateMask: "Test string",
        });
        /**
         * Searches for jobs using the provided SearchJobsRequest.
         *
         * This call constrains the visibility of jobs
         * present in the database, and only returns jobs that the caller has
         * permission to search against.
         */
        await gapi.client.jobs.projects.jobs.search({
            parent: "Test string",
        }, {
            disableKeywordMatch: true,
            diversificationLevel: "Test string",
            enableBroadening: true,
            histogramFacets: {
                compensationHistogramFacets: [
                    {
                        bucketingOption: {
                            bucketBounds: [
                                42                            ],
                            requiresMinMax: true,
                        },
                        type: "Test string",
                    }                ],
                customAttributeHistogramFacets: [
                    {
                        key: "Test string",
                        longValueHistogramBucketingOption: {
                            bucketBounds: [
                                42                            ],
                            requiresMinMax: true,
                        },
                        stringValueHistogram: true,
                    }                ],
                simpleHistogramFacets: [
                    "Test string"                ],
            },
            jobQuery: {
                commuteFilter: {
                    allowImpreciseAddresses: true,
                    commuteMethod: "Test string",
                    departureTime: {
                        hours: 42,
                        minutes: 42,
                        nanos: 42,
                        seconds: 42,
                    },
                    roadTraffic: "Test string",
                    startCoordinates: {
                        latitude: 42,
                        longitude: 42,
                    },
                    travelDuration: "Test string",
                },
                companyDisplayNames: [
                    "Test string"                ],
                companyNames: [
                    "Test string"                ],
                compensationFilter: {
                    includeJobsWithUnspecifiedCompensationRange: true,
                    range: {
                        maxCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                        minCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                    },
                    type: "Test string",
                    units: [
                        "Test string"                    ],
                },
                customAttributeFilter: "Test string",
                disableSpellCheck: true,
                employmentTypes: [
                    "Test string"                ],
                jobCategories: [
                    "Test string"                ],
                languageCodes: [
                    "Test string"                ],
                locationFilters: [
                    {
                        address: "Test string",
                        distanceInMiles: 42,
                        latLng: {
                            latitude: 42,
                            longitude: 42,
                        },
                        regionCode: "Test string",
                        telecommutePreference: "Test string",
                    }                ],
                publishTimeRange: {
                    endTime: "Test string",
                    startTime: "Test string",
                },
                query: "Test string",
                queryLanguageCode: "Test string",
            },
            jobView: "Test string",
            offset: 42,
            orderBy: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            requestMetadata: {
                deviceInfo: {
                    deviceType: "Test string",
                    id: "Test string",
                },
                domain: "Test string",
                sessionId: "Test string",
                userId: "Test string",
            },
            requirePreciseResultSize: true,
            searchMode: "Test string",
        });
        /**
         * Searches for jobs using the provided SearchJobsRequest.
         *
         * This API call is intended for the use case of targeting passive job
         * seekers (for example, job seekers who have signed up to receive email
         * alerts about potential job opportunities), and has different algorithmic
         * adjustments that are targeted to passive job seekers.
         *
         * This call constrains the visibility of jobs
         * present in the database, and only returns jobs the caller has
         * permission to search against.
         */
        await gapi.client.jobs.projects.jobs.searchForAlert({
            parent: "Test string",
        }, {
            disableKeywordMatch: true,
            diversificationLevel: "Test string",
            enableBroadening: true,
            histogramFacets: {
                compensationHistogramFacets: [
                    {
                        bucketingOption: {
                            bucketBounds: [
                                42                            ],
                            requiresMinMax: true,
                        },
                        type: "Test string",
                    }                ],
                customAttributeHistogramFacets: [
                    {
                        key: "Test string",
                        longValueHistogramBucketingOption: {
                            bucketBounds: [
                                42                            ],
                            requiresMinMax: true,
                        },
                        stringValueHistogram: true,
                    }                ],
                simpleHistogramFacets: [
                    "Test string"                ],
            },
            jobQuery: {
                commuteFilter: {
                    allowImpreciseAddresses: true,
                    commuteMethod: "Test string",
                    departureTime: {
                        hours: 42,
                        minutes: 42,
                        nanos: 42,
                        seconds: 42,
                    },
                    roadTraffic: "Test string",
                    startCoordinates: {
                        latitude: 42,
                        longitude: 42,
                    },
                    travelDuration: "Test string",
                },
                companyDisplayNames: [
                    "Test string"                ],
                companyNames: [
                    "Test string"                ],
                compensationFilter: {
                    includeJobsWithUnspecifiedCompensationRange: true,
                    range: {
                        maxCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                        minCompensation: {
                            currencyCode: "Test string",
                            nanos: 42,
                            units: "Test string",
                        },
                    },
                    type: "Test string",
                    units: [
                        "Test string"                    ],
                },
                customAttributeFilter: "Test string",
                disableSpellCheck: true,
                employmentTypes: [
                    "Test string"                ],
                jobCategories: [
                    "Test string"                ],
                languageCodes: [
                    "Test string"                ],
                locationFilters: [
                    {
                        address: "Test string",
                        distanceInMiles: 42,
                        latLng: {
                            latitude: 42,
                            longitude: 42,
                        },
                        regionCode: "Test string",
                        telecommutePreference: "Test string",
                    }                ],
                publishTimeRange: {
                    endTime: "Test string",
                    startTime: "Test string",
                },
                query: "Test string",
                queryLanguageCode: "Test string",
            },
            jobView: "Test string",
            offset: 42,
            orderBy: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            requestMetadata: {
                deviceInfo: {
                    deviceType: "Test string",
                    id: "Test string",
                },
                domain: "Test string",
                sessionId: "Test string",
                userId: "Test string",
            },
            requirePreciseResultSize: true,
            searchMode: "Test string",
        });
    }
});
