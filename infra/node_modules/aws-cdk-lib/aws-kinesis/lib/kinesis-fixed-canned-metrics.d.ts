/**
 * This class is to consolidate all the metrics from Stream in just one place.
 *
 * Current generated canned metrics don't match the proper metrics from the service. If it is fixed
 * at the source this class can be removed and just use the generated one directly.
 *
 * Stream Metrics reference: https://docs.aws.amazon.com/streams/latest/dev/monitoring-with-cloudwatch.html
 */
export declare class KinesisMetrics {
    static getRecordsBytesAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static getRecordsSuccessAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static getRecordsRecordsAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static getRecordsLatencyAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static putRecordBytesAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static putRecordLatencyAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static getRecordsIteratorAgeMillisecondsMaximum(this: void, dimensions: {
        StreamName: string;
    }): import("./kinesis-canned-metrics.generated").MetricWithDims<{
        StreamName: string;
    }>;
    static putRecordSuccessAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        statistic: string;
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
    };
    static putRecordsBytesAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        statistic: string;
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
    };
    static putRecordsLatencyAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static putRecordsSuccessAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static putRecordsTotalRecordsAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static putRecordsSuccessfulRecordsAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static putRecordsFailedRecordsAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static putRecordsThrottledRecordsAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
        statistic: string;
    };
    static incomingBytesAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        statistic: string;
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
    };
    static incomingRecordsAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        statistic: string;
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
    };
    static readProvisionedThroughputExceededAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        statistic: string;
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
    };
    static writeProvisionedThroughputExceededAverage(this: void, dimensions: {
        StreamName: string;
    }): {
        statistic: string;
        namespace: string;
        metricName: string;
        dimensionsMap: {
            StreamName: string;
        };
    };
}
