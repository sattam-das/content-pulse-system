import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a RepositoryAssociation.
 *
 * @stability experimental
 */
export interface IRepositoryAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RepositoryAssociation resource.
     */
    readonly repositoryAssociationRef: RepositoryAssociationReference;
}
/**
 * A reference to a RepositoryAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface RepositoryAssociationReference {
    /**
     * The AssociationArn of the RepositoryAssociation resource.
     */
    readonly associationArn: string;
}
