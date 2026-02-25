import { createAggregatedClient } from "@smithy/smithy-client";
import { AddLayerVersionPermissionCommand, } from "./commands/AddLayerVersionPermissionCommand";
import { AddPermissionCommand, } from "./commands/AddPermissionCommand";
import { CheckpointDurableExecutionCommand, } from "./commands/CheckpointDurableExecutionCommand";
import { CreateAliasCommand } from "./commands/CreateAliasCommand";
import { CreateCapacityProviderCommand, } from "./commands/CreateCapacityProviderCommand";
import { CreateCodeSigningConfigCommand, } from "./commands/CreateCodeSigningConfigCommand";
import { CreateEventSourceMappingCommand, } from "./commands/CreateEventSourceMappingCommand";
import { CreateFunctionCommand, } from "./commands/CreateFunctionCommand";
import { CreateFunctionUrlConfigCommand, } from "./commands/CreateFunctionUrlConfigCommand";
import { DeleteAliasCommand } from "./commands/DeleteAliasCommand";
import { DeleteCapacityProviderCommand, } from "./commands/DeleteCapacityProviderCommand";
import { DeleteCodeSigningConfigCommand, } from "./commands/DeleteCodeSigningConfigCommand";
import { DeleteEventSourceMappingCommand, } from "./commands/DeleteEventSourceMappingCommand";
import { DeleteFunctionCodeSigningConfigCommand, } from "./commands/DeleteFunctionCodeSigningConfigCommand";
import { DeleteFunctionCommand, } from "./commands/DeleteFunctionCommand";
import { DeleteFunctionConcurrencyCommand, } from "./commands/DeleteFunctionConcurrencyCommand";
import { DeleteFunctionEventInvokeConfigCommand, } from "./commands/DeleteFunctionEventInvokeConfigCommand";
import { DeleteFunctionUrlConfigCommand, } from "./commands/DeleteFunctionUrlConfigCommand";
import { DeleteLayerVersionCommand, } from "./commands/DeleteLayerVersionCommand";
import { DeleteProvisionedConcurrencyConfigCommand, } from "./commands/DeleteProvisionedConcurrencyConfigCommand";
import { GetAccountSettingsCommand, } from "./commands/GetAccountSettingsCommand";
import { GetAliasCommand } from "./commands/GetAliasCommand";
import { GetCapacityProviderCommand, } from "./commands/GetCapacityProviderCommand";
import { GetCodeSigningConfigCommand, } from "./commands/GetCodeSigningConfigCommand";
import { GetDurableExecutionCommand, } from "./commands/GetDurableExecutionCommand";
import { GetDurableExecutionHistoryCommand, } from "./commands/GetDurableExecutionHistoryCommand";
import { GetDurableExecutionStateCommand, } from "./commands/GetDurableExecutionStateCommand";
import { GetEventSourceMappingCommand, } from "./commands/GetEventSourceMappingCommand";
import { GetFunctionCodeSigningConfigCommand, } from "./commands/GetFunctionCodeSigningConfigCommand";
import { GetFunctionCommand } from "./commands/GetFunctionCommand";
import { GetFunctionConcurrencyCommand, } from "./commands/GetFunctionConcurrencyCommand";
import { GetFunctionConfigurationCommand, } from "./commands/GetFunctionConfigurationCommand";
import { GetFunctionEventInvokeConfigCommand, } from "./commands/GetFunctionEventInvokeConfigCommand";
import { GetFunctionRecursionConfigCommand, } from "./commands/GetFunctionRecursionConfigCommand";
import { GetFunctionScalingConfigCommand, } from "./commands/GetFunctionScalingConfigCommand";
import { GetFunctionUrlConfigCommand, } from "./commands/GetFunctionUrlConfigCommand";
import { GetLayerVersionByArnCommand, } from "./commands/GetLayerVersionByArnCommand";
import { GetLayerVersionCommand, } from "./commands/GetLayerVersionCommand";
import { GetLayerVersionPolicyCommand, } from "./commands/GetLayerVersionPolicyCommand";
import { GetPolicyCommand } from "./commands/GetPolicyCommand";
import { GetProvisionedConcurrencyConfigCommand, } from "./commands/GetProvisionedConcurrencyConfigCommand";
import { GetRuntimeManagementConfigCommand, } from "./commands/GetRuntimeManagementConfigCommand";
import { InvokeAsyncCommand } from "./commands/InvokeAsyncCommand";
import { InvokeCommand } from "./commands/InvokeCommand";
import { InvokeWithResponseStreamCommand, } from "./commands/InvokeWithResponseStreamCommand";
import { ListAliasesCommand } from "./commands/ListAliasesCommand";
import { ListCapacityProvidersCommand, } from "./commands/ListCapacityProvidersCommand";
import { ListCodeSigningConfigsCommand, } from "./commands/ListCodeSigningConfigsCommand";
import { ListDurableExecutionsByFunctionCommand, } from "./commands/ListDurableExecutionsByFunctionCommand";
import { ListEventSourceMappingsCommand, } from "./commands/ListEventSourceMappingsCommand";
import { ListFunctionEventInvokeConfigsCommand, } from "./commands/ListFunctionEventInvokeConfigsCommand";
import { ListFunctionsByCodeSigningConfigCommand, } from "./commands/ListFunctionsByCodeSigningConfigCommand";
import { ListFunctionsCommand, } from "./commands/ListFunctionsCommand";
import { ListFunctionUrlConfigsCommand, } from "./commands/ListFunctionUrlConfigsCommand";
import { ListFunctionVersionsByCapacityProviderCommand, } from "./commands/ListFunctionVersionsByCapacityProviderCommand";
import { ListLayersCommand } from "./commands/ListLayersCommand";
import { ListLayerVersionsCommand, } from "./commands/ListLayerVersionsCommand";
import { ListProvisionedConcurrencyConfigsCommand, } from "./commands/ListProvisionedConcurrencyConfigsCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { ListVersionsByFunctionCommand, } from "./commands/ListVersionsByFunctionCommand";
import { PublishLayerVersionCommand, } from "./commands/PublishLayerVersionCommand";
import { PublishVersionCommand, } from "./commands/PublishVersionCommand";
import { PutFunctionCodeSigningConfigCommand, } from "./commands/PutFunctionCodeSigningConfigCommand";
import { PutFunctionConcurrencyCommand, } from "./commands/PutFunctionConcurrencyCommand";
import { PutFunctionEventInvokeConfigCommand, } from "./commands/PutFunctionEventInvokeConfigCommand";
import { PutFunctionRecursionConfigCommand, } from "./commands/PutFunctionRecursionConfigCommand";
import { PutFunctionScalingConfigCommand, } from "./commands/PutFunctionScalingConfigCommand";
import { PutProvisionedConcurrencyConfigCommand, } from "./commands/PutProvisionedConcurrencyConfigCommand";
import { PutRuntimeManagementConfigCommand, } from "./commands/PutRuntimeManagementConfigCommand";
import { RemoveLayerVersionPermissionCommand, } from "./commands/RemoveLayerVersionPermissionCommand";
import { RemovePermissionCommand, } from "./commands/RemovePermissionCommand";
import { SendDurableExecutionCallbackFailureCommand, } from "./commands/SendDurableExecutionCallbackFailureCommand";
import { SendDurableExecutionCallbackHeartbeatCommand, } from "./commands/SendDurableExecutionCallbackHeartbeatCommand";
import { SendDurableExecutionCallbackSuccessCommand, } from "./commands/SendDurableExecutionCallbackSuccessCommand";
import { StopDurableExecutionCommand, } from "./commands/StopDurableExecutionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAliasCommand } from "./commands/UpdateAliasCommand";
import { UpdateCapacityProviderCommand, } from "./commands/UpdateCapacityProviderCommand";
import { UpdateCodeSigningConfigCommand, } from "./commands/UpdateCodeSigningConfigCommand";
import { UpdateEventSourceMappingCommand, } from "./commands/UpdateEventSourceMappingCommand";
import { UpdateFunctionCodeCommand, } from "./commands/UpdateFunctionCodeCommand";
import { UpdateFunctionConfigurationCommand, } from "./commands/UpdateFunctionConfigurationCommand";
import { UpdateFunctionEventInvokeConfigCommand, } from "./commands/UpdateFunctionEventInvokeConfigCommand";
import { UpdateFunctionUrlConfigCommand, } from "./commands/UpdateFunctionUrlConfigCommand";
import { LambdaClient } from "./LambdaClient";
import { paginateGetDurableExecutionHistory } from "./pagination/GetDurableExecutionHistoryPaginator";
import { paginateGetDurableExecutionState } from "./pagination/GetDurableExecutionStatePaginator";
import { paginateListAliases } from "./pagination/ListAliasesPaginator";
import { paginateListCapacityProviders } from "./pagination/ListCapacityProvidersPaginator";
import { paginateListCodeSigningConfigs } from "./pagination/ListCodeSigningConfigsPaginator";
import { paginateListDurableExecutionsByFunction } from "./pagination/ListDurableExecutionsByFunctionPaginator";
import { paginateListEventSourceMappings } from "./pagination/ListEventSourceMappingsPaginator";
import { paginateListFunctionEventInvokeConfigs } from "./pagination/ListFunctionEventInvokeConfigsPaginator";
import { paginateListFunctionsByCodeSigningConfig } from "./pagination/ListFunctionsByCodeSigningConfigPaginator";
import { paginateListFunctions } from "./pagination/ListFunctionsPaginator";
import { paginateListFunctionUrlConfigs } from "./pagination/ListFunctionUrlConfigsPaginator";
import { paginateListFunctionVersionsByCapacityProvider, } from "./pagination/ListFunctionVersionsByCapacityProviderPaginator";
import { paginateListLayers } from "./pagination/ListLayersPaginator";
import { paginateListLayerVersions } from "./pagination/ListLayerVersionsPaginator";
import { paginateListProvisionedConcurrencyConfigs } from "./pagination/ListProvisionedConcurrencyConfigsPaginator";
import { paginateListVersionsByFunction } from "./pagination/ListVersionsByFunctionPaginator";
import { waitUntilFunctionActive } from "./waiters/waitForFunctionActive";
import { waitUntilFunctionActiveV2 } from "./waiters/waitForFunctionActiveV2";
import { waitUntilFunctionExists } from "./waiters/waitForFunctionExists";
import { waitUntilFunctionUpdated } from "./waiters/waitForFunctionUpdated";
import { waitUntilFunctionUpdatedV2 } from "./waiters/waitForFunctionUpdatedV2";
import { waitUntilPublishedVersionActive } from "./waiters/waitForPublishedVersionActive";
const commands = {
    AddLayerVersionPermissionCommand,
    AddPermissionCommand,
    CheckpointDurableExecutionCommand,
    CreateAliasCommand,
    CreateCapacityProviderCommand,
    CreateCodeSigningConfigCommand,
    CreateEventSourceMappingCommand,
    CreateFunctionCommand,
    CreateFunctionUrlConfigCommand,
    DeleteAliasCommand,
    DeleteCapacityProviderCommand,
    DeleteCodeSigningConfigCommand,
    DeleteEventSourceMappingCommand,
    DeleteFunctionCommand,
    DeleteFunctionCodeSigningConfigCommand,
    DeleteFunctionConcurrencyCommand,
    DeleteFunctionEventInvokeConfigCommand,
    DeleteFunctionUrlConfigCommand,
    DeleteLayerVersionCommand,
    DeleteProvisionedConcurrencyConfigCommand,
    GetAccountSettingsCommand,
    GetAliasCommand,
    GetCapacityProviderCommand,
    GetCodeSigningConfigCommand,
    GetDurableExecutionCommand,
    GetDurableExecutionHistoryCommand,
    GetDurableExecutionStateCommand,
    GetEventSourceMappingCommand,
    GetFunctionCommand,
    GetFunctionCodeSigningConfigCommand,
    GetFunctionConcurrencyCommand,
    GetFunctionConfigurationCommand,
    GetFunctionEventInvokeConfigCommand,
    GetFunctionRecursionConfigCommand,
    GetFunctionScalingConfigCommand,
    GetFunctionUrlConfigCommand,
    GetLayerVersionCommand,
    GetLayerVersionByArnCommand,
    GetLayerVersionPolicyCommand,
    GetPolicyCommand,
    GetProvisionedConcurrencyConfigCommand,
    GetRuntimeManagementConfigCommand,
    InvokeCommand,
    InvokeAsyncCommand,
    InvokeWithResponseStreamCommand,
    ListAliasesCommand,
    ListCapacityProvidersCommand,
    ListCodeSigningConfigsCommand,
    ListDurableExecutionsByFunctionCommand,
    ListEventSourceMappingsCommand,
    ListFunctionEventInvokeConfigsCommand,
    ListFunctionsCommand,
    ListFunctionsByCodeSigningConfigCommand,
    ListFunctionUrlConfigsCommand,
    ListFunctionVersionsByCapacityProviderCommand,
    ListLayersCommand,
    ListLayerVersionsCommand,
    ListProvisionedConcurrencyConfigsCommand,
    ListTagsCommand,
    ListVersionsByFunctionCommand,
    PublishLayerVersionCommand,
    PublishVersionCommand,
    PutFunctionCodeSigningConfigCommand,
    PutFunctionConcurrencyCommand,
    PutFunctionEventInvokeConfigCommand,
    PutFunctionRecursionConfigCommand,
    PutFunctionScalingConfigCommand,
    PutProvisionedConcurrencyConfigCommand,
    PutRuntimeManagementConfigCommand,
    RemoveLayerVersionPermissionCommand,
    RemovePermissionCommand,
    SendDurableExecutionCallbackFailureCommand,
    SendDurableExecutionCallbackHeartbeatCommand,
    SendDurableExecutionCallbackSuccessCommand,
    StopDurableExecutionCommand,
    TagResourceCommand,
    UntagResourceCommand,
    UpdateAliasCommand,
    UpdateCapacityProviderCommand,
    UpdateCodeSigningConfigCommand,
    UpdateEventSourceMappingCommand,
    UpdateFunctionCodeCommand,
    UpdateFunctionConfigurationCommand,
    UpdateFunctionEventInvokeConfigCommand,
    UpdateFunctionUrlConfigCommand,
};
const paginators = {
    paginateGetDurableExecutionHistory,
    paginateGetDurableExecutionState,
    paginateListAliases,
    paginateListCapacityProviders,
    paginateListCodeSigningConfigs,
    paginateListDurableExecutionsByFunction,
    paginateListEventSourceMappings,
    paginateListFunctionEventInvokeConfigs,
    paginateListFunctions,
    paginateListFunctionsByCodeSigningConfig,
    paginateListFunctionUrlConfigs,
    paginateListFunctionVersionsByCapacityProvider,
    paginateListLayers,
    paginateListLayerVersions,
    paginateListProvisionedConcurrencyConfigs,
    paginateListVersionsByFunction,
};
const waiters = {
    waitUntilFunctionActiveV2,
    waitUntilFunctionExists,
    waitUntilFunctionUpdatedV2,
    waitUntilFunctionActive,
    waitUntilFunctionUpdated,
    waitUntilPublishedVersionActive,
};
export class Lambda extends LambdaClient {
}
createAggregatedClient(commands, Lambda, { paginators, waiters });
