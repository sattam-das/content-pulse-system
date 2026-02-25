export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ElastiCacheMetrics {
    static activeDefragHitsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static activeDefragHitsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static activeDefragHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static authenticationFailuresSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static authenticationFailuresSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static authenticationFailuresSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static bytesReadIntoMemcachedAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static bytesReadIntoMemcachedAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static bytesReadIntoMemcachedAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static bytesUsedForCacheAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static bytesUsedForCacheAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static bytesUsedForCacheAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static bytesUsedForCacheItemsAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static bytesUsedForCacheItemsAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static bytesUsedForCacheItemsAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static bytesUsedForHashAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static bytesUsedForHashAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static bytesUsedForHashAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static bytesWrittenOutFromMemcachedAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static bytesWrittenOutFromMemcachedAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static bytesWrittenOutFromMemcachedAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static cacheHitRateAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cacheHitRateAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cacheHitRateAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static cacheHitsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cacheHitsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cacheHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static cacheMissesSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cacheMissesSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cacheMissesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static casBadvalSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static casBadvalSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static casBadvalSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static casHitsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static casHitsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static casHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static casMissesSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static casMissesSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static casMissesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static cmdConfigGetSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cmdConfigGetSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cmdConfigGetSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static cmdConfigSetSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cmdConfigSetSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cmdConfigSetSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static cmdFlushSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cmdFlushSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cmdFlushSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static cmdGetSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cmdGetSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cmdGetSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static cmdSetSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cmdSetSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cmdSetSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static cmdTouchSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cmdTouchSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cmdTouchSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static commandAuthorizationFailuresSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static commandAuthorizationFailuresSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static commandAuthorizationFailuresSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static cpuCreditBalanceAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cpuCreditBalanceAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cpuCreditBalanceAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static cpuCreditUsageAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cpuCreditUsageAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cpuCreditUsageAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static cpuUtilizationAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static currConfigSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static currConfigSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static currConfigSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static currConnectionsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static currConnectionsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static currConnectionsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static currItemsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static currItemsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static currItemsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static databaseMemoryUsagePercentageAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static databaseMemoryUsagePercentageAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static databaseMemoryUsagePercentageAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static db0AverageTtlAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static db0AverageTtlAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static db0AverageTtlAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static decrHitsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static decrHitsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static decrHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static decrMissesSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static decrMissesSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static decrMissesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static deleteHitsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static deleteHitsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static deleteHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static deleteMissesSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static deleteMissesSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static deleteMissesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static engineCpuUtilizationAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static engineCpuUtilizationAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static engineCpuUtilizationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static evalBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static evalBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static evalBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static evalBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static evalBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static evalBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static evictedUnfetchedSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static evictedUnfetchedSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static evictedUnfetchedSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static evictionsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static evictionsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static evictionsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static expiredUnfetchedSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static expiredUnfetchedSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static expiredUnfetchedSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static freeableMemoryAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static freeableMemoryAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static freeableMemoryAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static geoSpatialBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static geoSpatialBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static geoSpatialBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static geoSpatialBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static geoSpatialBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static geoSpatialBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static getHitsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static getHitsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static getHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static getMissesSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static getMissesSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static getMissesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static getTypeCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static getTypeCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static getTypeCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static getTypeCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static getTypeCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static getTypeCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static hashBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static hashBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static hashBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static hashBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static hashBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static hashBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static hyperLogLogBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static hyperLogLogBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static hyperLogLogBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static hyperLogLogBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static hyperLogLogBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static hyperLogLogBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static incrHitsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static incrHitsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static incrHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static incrMissesSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static incrMissesSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static incrMissesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static isMasterAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static isMasterAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static isMasterAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static keyAuthorizationFailuresSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static keyAuthorizationFailuresSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static keyAuthorizationFailuresSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static keyBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static keyBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static keyBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static keyBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static keyBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static keyBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static keysTrackedSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static keysTrackedSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static keysTrackedSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static listBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static listBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static listBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static listBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static listBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static listBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static masterLinkHealthStatusAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static masterLinkHealthStatusAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static masterLinkHealthStatusAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static memoryFragmentationRatioAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static memoryFragmentationRatioAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static memoryFragmentationRatioAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkBandwidthInAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static networkBandwidthInAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static networkBandwidthInAllowanceExceededAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkBandwidthOutAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static networkBandwidthOutAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static networkBandwidthOutAllowanceExceededAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkBytesInAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static networkBytesInAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static networkBytesInAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkBytesOutAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static networkBytesOutAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static networkBytesOutAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkConntrackAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static networkConntrackAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static networkConntrackAllowanceExceededAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkLinkLocalAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static networkLinkLocalAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static networkLinkLocalAllowanceExceededAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkPacketsInAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static networkPacketsInAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static networkPacketsInAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkPacketsOutAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static networkPacketsOutAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static networkPacketsOutAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkPacketsPerSecondAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static networkPacketsPerSecondAllowanceExceededAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static networkPacketsPerSecondAllowanceExceededAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static newConnectionsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static newConnectionsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static newConnectionsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static newItemsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static newItemsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static newItemsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static pubSubBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static pubSubBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static pubSubBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static pubSubBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static pubSubBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static pubSubBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static reclaimedSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static reclaimedSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static reclaimedSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static replicationBytesSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static replicationBytesSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static replicationBytesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static replicationLagAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static replicationLagAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static replicationLagAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static saveInProgressSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static saveInProgressSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static saveInProgressSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static setBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static setBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static setBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static setBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static setBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static setBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static setTypeCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static setTypeCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static setTypeCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static setTypeCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static setTypeCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static setTypeCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static slabsMovedSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static slabsMovedSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static slabsMovedSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static sortedSetBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static sortedSetBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static sortedSetBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static sortedSetBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static sortedSetBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static sortedSetBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static streamBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static streamBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static streamBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static streamBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static streamBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static streamBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static stringBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static stringBasedCmdsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static stringBasedCmdsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static stringBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static stringBasedCmdsLatencyAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static stringBasedCmdsLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static swapUsageAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static swapUsageAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static swapUsageAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static touchHitsSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static touchHitsSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static touchHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static touchMissesSum(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static touchMissesSum(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static touchMissesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static unusedMemoryAverage(this: void, dimensions: {
        CacheClusterId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
    }>;
    static unusedMemoryAverage(this: void, dimensions: {
        CacheClusterId: string;
        CacheNodeId: string;
    }): MetricWithDims<{
        CacheClusterId: string;
        CacheNodeId: string;
    }>;
    static unusedMemoryAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static globalDatastoreReplicationLagAverage(this: void, dimensions: {}): MetricWithDims<{}>;
}
