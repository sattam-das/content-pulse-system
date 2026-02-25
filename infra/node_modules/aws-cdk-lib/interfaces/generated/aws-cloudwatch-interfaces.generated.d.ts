import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Alarm.
 *
 * @stability experimental
 */
export interface IAlarmRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Alarm resource.
     */
    readonly alarmRef: AlarmReference;
}
/**
 * A reference to a Alarm resource.
 *
 * @struct
 * @stability external
 */
export interface AlarmReference {
    /**
     * The AlarmName of the Alarm resource.
     */
    readonly alarmName: string;
    /**
     * The ARN of the Alarm resource.
     */
    readonly alarmArn: string;
}
/**
 * Indicates that this resource can be referenced as a AnomalyDetector.
 *
 * @stability experimental
 */
export interface IAnomalyDetectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AnomalyDetector resource.
     */
    readonly anomalyDetectorRef: AnomalyDetectorReference;
}
/**
 * A reference to a AnomalyDetector resource.
 *
 * @struct
 * @stability external
 */
export interface AnomalyDetectorReference {
    /**
     * The Id of the AnomalyDetector resource.
     */
    readonly anomalyDetectorId: string;
}
/**
 * Indicates that this resource can be referenced as a CompositeAlarm.
 *
 * @stability experimental
 */
export interface ICompositeAlarmRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CompositeAlarm resource.
     */
    readonly compositeAlarmRef: CompositeAlarmReference;
}
/**
 * A reference to a CompositeAlarm resource.
 *
 * @struct
 * @stability external
 */
export interface CompositeAlarmReference {
    /**
     * The AlarmName of the CompositeAlarm resource.
     */
    readonly alarmName: string;
    /**
     * The ARN of the CompositeAlarm resource.
     */
    readonly compositeAlarmArn: string;
}
/**
 * Indicates that this resource can be referenced as a Dashboard.
 *
 * @stability experimental
 */
export interface IDashboardRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Dashboard resource.
     */
    readonly dashboardRef: DashboardReference;
}
/**
 * A reference to a Dashboard resource.
 *
 * @struct
 * @stability external
 */
export interface DashboardReference {
    /**
     * The DashboardName of the Dashboard resource.
     */
    readonly dashboardName: string;
}
/**
 * Indicates that this resource can be referenced as a InsightRule.
 *
 * @stability experimental
 */
export interface IInsightRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InsightRule resource.
     */
    readonly insightRuleRef: InsightRuleReference;
}
/**
 * A reference to a InsightRule resource.
 *
 * @struct
 * @stability external
 */
export interface InsightRuleReference {
    /**
     * The Arn of the InsightRule resource.
     */
    readonly insightRuleArn: string;
}
/**
 * Indicates that this resource can be referenced as a MetricStream.
 *
 * @stability experimental
 */
export interface IMetricStreamRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MetricStream resource.
     */
    readonly metricStreamRef: MetricStreamReference;
}
/**
 * A reference to a MetricStream resource.
 *
 * @struct
 * @stability external
 */
export interface MetricStreamReference {
    /**
     * The Name of the MetricStream resource.
     */
    readonly metricStreamName: string;
    /**
     * The ARN of the MetricStream resource.
     */
    readonly metricStreamArn: string;
}
