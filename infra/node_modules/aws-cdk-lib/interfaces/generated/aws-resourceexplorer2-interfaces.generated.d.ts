import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DefaultViewAssociation.
 *
 * @stability experimental
 */
export interface IDefaultViewAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DefaultViewAssociation resource.
     */
    readonly defaultViewAssociationRef: DefaultViewAssociationReference;
}
/**
 * A reference to a DefaultViewAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface DefaultViewAssociationReference {
    /**
     * The AssociatedAwsPrincipal of the DefaultViewAssociation resource.
     */
    readonly associatedAwsPrincipal: string;
}
/**
 * Indicates that this resource can be referenced as a Index.
 *
 * @stability experimental
 */
export interface IIndexRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Index resource.
     */
    readonly indexRef: IndexReference;
}
/**
 * A reference to a Index resource.
 *
 * @struct
 * @stability external
 */
export interface IndexReference {
    /**
     * The Arn of the Index resource.
     */
    readonly indexArn: string;
}
/**
 * Indicates that this resource can be referenced as a View.
 *
 * @stability experimental
 */
export interface IViewRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a View resource.
     */
    readonly viewRef: ViewReference;
}
/**
 * A reference to a View resource.
 *
 * @struct
 * @stability external
 */
export interface ViewReference {
    /**
     * The ViewArn of the View resource.
     */
    readonly viewArn: string;
}
