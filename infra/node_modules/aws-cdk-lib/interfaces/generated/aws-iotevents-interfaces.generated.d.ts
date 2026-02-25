import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AlarmModel.
 *
 * @stability experimental
 */
export interface IAlarmModelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AlarmModel resource.
     */
    readonly alarmModelRef: AlarmModelReference;
}
/**
 * A reference to a AlarmModel resource.
 *
 * @struct
 * @stability external
 */
export interface AlarmModelReference {
    /**
     * The AlarmModelName of the AlarmModel resource.
     */
    readonly alarmModelName: string;
}
/**
 * Indicates that this resource can be referenced as a DetectorModel.
 *
 * @stability experimental
 */
export interface IDetectorModelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DetectorModel resource.
     */
    readonly detectorModelRef: DetectorModelReference;
}
/**
 * A reference to a DetectorModel resource.
 *
 * @struct
 * @stability external
 */
export interface DetectorModelReference {
    /**
     * The DetectorModelName of the DetectorModel resource.
     */
    readonly detectorModelName: string;
}
/**
 * Indicates that this resource can be referenced as a Input.
 *
 * @stability experimental
 */
export interface IInputRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Input resource.
     */
    readonly inputRef: InputReference;
}
/**
 * A reference to a Input resource.
 *
 * @struct
 * @stability external
 */
export interface InputReference {
    /**
     * The InputName of the Input resource.
     */
    readonly inputName: string;
}
