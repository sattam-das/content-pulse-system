import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Budget.
 *
 * @stability experimental
 */
export interface IBudgetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Budget resource.
     */
    readonly budgetRef: BudgetReference;
}
/**
 * A reference to a Budget resource.
 *
 * @struct
 * @stability external
 */
export interface BudgetReference {
    /**
     * The Id of the Budget resource.
     */
    readonly budgetId: string;
}
/**
 * Indicates that this resource can be referenced as a BudgetsAction.
 *
 * @stability experimental
 */
export interface IBudgetsActionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BudgetsAction resource.
     */
    readonly budgetsActionRef: BudgetsActionReference;
}
/**
 * A reference to a BudgetsAction resource.
 *
 * @struct
 * @stability external
 */
export interface BudgetsActionReference {
    /**
     * The ActionId of the BudgetsAction resource.
     */
    readonly actionId: string;
    /**
     * The BudgetName of the BudgetsAction resource.
     */
    readonly budgetName: string;
}
