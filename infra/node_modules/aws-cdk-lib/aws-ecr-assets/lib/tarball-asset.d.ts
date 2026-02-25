import { Construct } from 'constructs';
import '../../assets';
import * as ecr from '../../aws-ecr';
/**
 * The sed pattern used to extract the image ID from docker load output
 * Works with both formats:
 * - "Loaded image: <digest>" (older Docker versions)
 * - "Loaded image ID: <digest>" (Docker 27.4+)
 */
export declare const DOCKER_LOAD_OUTPUT_REGEX = "s/Loaded image[^:]*: //g";
/**
 * Options for TarballImageAsset
 */
export interface TarballImageAssetProps {
    /**
     * Absolute path to the tarball.
     *
     * It is recommended to to use the script running directory (e.g. `__dirname`
     * in Node.js projects or dirname of `__file__` in Python) if your tarball
     * is located as a resource inside your project.
     */
    readonly tarballFile: string;
    /**
     * A display name for this asset
     *
     * If supplied, the display name will be used in locations where the asset
     * identifier is printed, like in the CLI progress information. If the same
     * asset is added multiple times, the display name of the first occurrence is
     * used.
     *
     * The default is the construct path of the `TarballImageAsset` construct,
     * with respect to the enclosing stack. If the asset is produced by a
     * construct helper function (such as `lambda.Code.fromAssetImage()`), this
     * will look like `MyFunction/AssetImage`.
     *
     * We use the stack-relative construct path so that in the common case where
     * you have multiple stacks with the same asset, we won't show something like
     * `/MyBetaStack/MyFunction/Code` when you are actually deploying to
     * production.
     *
     * @default - Stack-relative construct path
     */
    readonly displayName?: string;
}
/**
 * An asset that represents a Docker image.
 *
 * The image will loaded from an existing tarball and uploaded to an ECR repository.
 */
export declare class TarballImageAsset extends Construct {
    /**
     * The full URI of the image (including a tag). Use this reference to pull
     * the asset.
     */
    imageUri: string;
    /**
     * Repository where the image is stored
     */
    repository: ecr.IRepository;
    /**
     * A hash of this asset, which is available at construction time. As this is a plain string, it
     * can be used in construct IDs in order to enforce creation of a new resource when the content
     * hash has changed.
     */
    readonly assetHash: string;
    /**
     * The tag of this asset when it is uploaded to ECR. The tag may differ from the assetHash if a stack synthesizer adds a dockerTagPrefix.
     */
    readonly imageTag: string;
    constructor(scope: Construct, id: string, props: TarballImageAssetProps);
}
