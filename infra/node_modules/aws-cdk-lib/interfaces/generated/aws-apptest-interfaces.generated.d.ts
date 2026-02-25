import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a TestCase.
 *
 * @stability experimental
 */
export interface ITestCaseRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TestCase resource.
     */
    readonly testCaseRef: TestCaseReference;
}
/**
 * A reference to a TestCase resource.
 *
 * @struct
 * @stability external
 */
export interface TestCaseReference {
    /**
     * The TestCaseId of the TestCase resource.
     */
    readonly testCaseId: string;
    /**
     * The ARN of the TestCase resource.
     */
    readonly testCaseArn: string;
}
