import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DataSource.
 *
 * @stability experimental
 */
export interface IDataSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataSource resource.
     */
    readonly dataSourceRef: DataSourceReference;
}
/**
 * A reference to a DataSource resource.
 *
 * @struct
 * @stability external
 */
export interface DataSourceReference {
    /**
     * The Id of the DataSource resource.
     */
    readonly dataSourceId: string;
    /**
     * The IndexId of the DataSource resource.
     */
    readonly indexId: string;
    /**
     * The ARN of the DataSource resource.
     */
    readonly dataSourceArn: string;
}
/**
 * Indicates that this resource can be referenced as a Faq.
 *
 * @stability experimental
 */
export interface IFaqRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Faq resource.
     */
    readonly faqRef: FaqReference;
}
/**
 * A reference to a Faq resource.
 *
 * @struct
 * @stability external
 */
export interface FaqReference {
    /**
     * The Id of the Faq resource.
     */
    readonly faqId: string;
    /**
     * The IndexId of the Faq resource.
     */
    readonly indexId: string;
    /**
     * The ARN of the Faq resource.
     */
    readonly faqArn: string;
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
     * The Id of the Index resource.
     */
    readonly indexId: string;
    /**
     * The ARN of the Index resource.
     */
    readonly indexArn: string;
}
