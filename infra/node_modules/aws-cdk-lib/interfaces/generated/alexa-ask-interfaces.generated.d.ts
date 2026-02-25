import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Skill.
 *
 * @stability experimental
 */
export interface ISkillRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Skill resource.
     */
    readonly skillRef: SkillReference;
}
/**
 * A reference to a Skill resource.
 *
 * @struct
 * @stability external
 */
export interface SkillReference {
    /**
     * The Id of the Skill resource.
     */
    readonly skillId: string;
}
