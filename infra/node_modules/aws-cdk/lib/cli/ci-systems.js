"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectCiSystem = detectCiSystem;
exports.ciSystemIsStdErrSafe = ciSystemIsStdErrSafe;
const CI_SYSTEMS = [
    {
        name: 'Azure DevOps',
        // https://learn.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml
        detectEnvVar: 'TF_BUILD',
        canBeConfiguredToFailOnStdErr: true,
    },
    {
        name: 'TeamCity',
        // https://www.jetbrains.com/help/teamcity/predefined-build-parameters.html
        detectEnvVar: 'TEAMCITY_VERSION',
        // Can be configured to fail on stderr, when using a PowerShell task
        canBeConfiguredToFailOnStdErr: true,
    },
    {
        name: 'GitHub Actions',
        // https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#default-environment-variables
        detectEnvVar: 'GITHUB_ACTION',
        canBeConfiguredToFailOnStdErr: false,
    },
    {
        name: 'CodeBuild',
        // https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-env-vars.html
        detectEnvVar: 'CODEBUILD_BUILD_ID',
        canBeConfiguredToFailOnStdErr: false,
    },
    {
        name: 'CircleCI',
        // https://circleci.com/docs/variables/#built-in-environment-variables
        detectEnvVar: 'CIRCLECI',
        canBeConfiguredToFailOnStdErr: false,
    },
    {
        name: 'Jenkins',
        // https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#using-environment-variables
        detectEnvVar: 'EXECUTOR_NUMBER',
        canBeConfiguredToFailOnStdErr: false,
    },
];
function detectCiSystem() {
    for (const ciSystem of CI_SYSTEMS) {
        if (process.env[ciSystem.detectEnvVar]) {
            return ciSystem;
        }
    }
    return undefined;
}
/**
 * Return whether the CI system we're detecting is safe to write to stderr on
 *
 * Returns `undefined` if the current CI system cannot be recognized.
 */
function ciSystemIsStdErrSafe() {
    const x = detectCiSystem()?.canBeConfiguredToFailOnStdErr;
    return x === undefined ? undefined : !x;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2ktc3lzdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNpLXN5c3RlbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFnRUEsd0NBT0M7QUFPRCxvREFHQztBQXpERCxNQUFNLFVBQVUsR0FBZTtJQUM3QjtRQUNFLElBQUksRUFBRSxjQUFjO1FBQ3BCLHVHQUF1RztRQUN2RyxZQUFZLEVBQUUsVUFBVTtRQUN4Qiw2QkFBNkIsRUFBRSxJQUFJO0tBQ3BDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQiwyRUFBMkU7UUFDM0UsWUFBWSxFQUFFLGtCQUFrQjtRQUNoQyxvRUFBb0U7UUFDcEUsNkJBQTZCLEVBQUUsSUFBSTtLQUNwQztJQUNEO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixxSkFBcUo7UUFDckosWUFBWSxFQUFFLGVBQWU7UUFDN0IsNkJBQTZCLEVBQUUsS0FBSztLQUNyQztJQUNEO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIscUZBQXFGO1FBQ3JGLFlBQVksRUFBRSxvQkFBb0I7UUFDbEMsNkJBQTZCLEVBQUUsS0FBSztLQUNyQztJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsc0VBQXNFO1FBQ3RFLFlBQVksRUFBRSxVQUFVO1FBQ3hCLDZCQUE2QixFQUFFLEtBQUs7S0FDckM7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2Ysb0ZBQW9GO1FBQ3BGLFlBQVksRUFBRSxpQkFBaUI7UUFDL0IsNkJBQTZCLEVBQUUsS0FBSztLQUNyQztDQUNGLENBQUM7QUFFRixTQUFnQixjQUFjO0lBQzVCLEtBQUssTUFBTSxRQUFRLElBQUksVUFBVSxFQUFFLENBQUM7UUFDbEMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7SUFDSCxDQUFDO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixvQkFBb0I7SUFDbEMsTUFBTSxDQUFDLEdBQUcsY0FBYyxFQUFFLEVBQUUsNkJBQTZCLENBQUM7SUFDMUQsT0FBTyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQ2lTeXN0ZW0ge1xuICAvKipcbiAgICogV2hhdCdzIHRoZSBuYW1lP1xuICAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGF0IGVudmlyb25tZW50IHZhcmlhYmxlIGluZGljYXRlcyB0aGF0IHdlIGFyZSBydW5uaW5nIG9uIHRoaXMgc3lzdGVtP1xuICAgKi9cbiAgcmVhZG9ubHkgZGV0ZWN0RW52VmFyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgQ0kgc3lzdGVtIGNhbiBiZSBjb25maWd1cmVkIHRvIGZhaWwgb24gbWVzc2FnZXMgd3JpdHRlbiB0byBzdGRlcnJcbiAgICpcbiAgICogV2l0aCBcImNhbiBiZSBjb25maWd1cmVkXCIsIHdoYXQgd2UgbWVhbiBpcyB0aGF0IGEgY2hlY2tib3ggb3IgY29uZmlndXJhdGlvblxuICAgKiBmbGFnIHRvIGVuYWJsZSB0aGlzIGJlaGF2aW9yIGNvbWVzIG91dCBvZiB0aGUgYm94IHdpdGggdGhlIENJIHN5c3RlbSBhbmQgKGp1ZGdlbWVudFxuICAgKiBjYWxsKSwgdGhpcyBmbGFnIGlzIFwiY29tbW9ubHlcIiB1c2VkLlxuICAgKlxuICAgKiBPZiBjb3Vyc2UgZXZlcnkgQ0kgc3lzdGVtIGNhbiBiZSBzY3JpcHRlZCB0byBoYXZlIHRoaXMgYmVoYXZpb3IsIGJ1dCB0aGF0J3NcbiAgICogbm90IHdoYXQgd2UgbWVhbi5cbiAgICovXG4gIHJlYWRvbmx5IGNhbkJlQ29uZmlndXJlZFRvRmFpbE9uU3RkRXJyOiBib29sZWFuO1xufVxuXG5jb25zdCBDSV9TWVNURU1TOiBDaVN5c3RlbVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0F6dXJlIERldk9wcycsXG4gICAgLy8gaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL2F6dXJlL2Rldm9wcy9waXBlbGluZXMvYnVpbGQvdmFyaWFibGVzP3ZpZXc9YXp1cmUtZGV2b3BzJnRhYnM9eWFtbFxuICAgIGRldGVjdEVudlZhcjogJ1RGX0JVSUxEJyxcbiAgICBjYW5CZUNvbmZpZ3VyZWRUb0ZhaWxPblN0ZEVycjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUZWFtQ2l0eScsXG4gICAgLy8gaHR0cHM6Ly93d3cuamV0YnJhaW5zLmNvbS9oZWxwL3RlYW1jaXR5L3ByZWRlZmluZWQtYnVpbGQtcGFyYW1ldGVycy5odG1sXG4gICAgZGV0ZWN0RW52VmFyOiAnVEVBTUNJVFlfVkVSU0lPTicsXG4gICAgLy8gQ2FuIGJlIGNvbmZpZ3VyZWQgdG8gZmFpbCBvbiBzdGRlcnIsIHdoZW4gdXNpbmcgYSBQb3dlclNoZWxsIHRhc2tcbiAgICBjYW5CZUNvbmZpZ3VyZWRUb0ZhaWxPblN0ZEVycjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHaXRIdWIgQWN0aW9ucycsXG4gICAgLy8gaHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vZW4vYWN0aW9ucy93cml0aW5nLXdvcmtmbG93cy9jaG9vc2luZy13aGF0LXlvdXItd29ya2Zsb3ctZG9lcy9zdG9yZS1pbmZvcm1hdGlvbi1pbi12YXJpYWJsZXMjZGVmYXVsdC1lbnZpcm9ubWVudC12YXJpYWJsZXNcbiAgICBkZXRlY3RFbnZWYXI6ICdHSVRIVUJfQUNUSU9OJyxcbiAgICBjYW5CZUNvbmZpZ3VyZWRUb0ZhaWxPblN0ZEVycjogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQ29kZUJ1aWxkJyxcbiAgICAvLyBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vY29kZWJ1aWxkL2xhdGVzdC91c2VyZ3VpZGUvYnVpbGQtZW52LXJlZi1lbnYtdmFycy5odG1sXG4gICAgZGV0ZWN0RW52VmFyOiAnQ09ERUJVSUxEX0JVSUxEX0lEJyxcbiAgICBjYW5CZUNvbmZpZ3VyZWRUb0ZhaWxPblN0ZEVycjogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQ2lyY2xlQ0knLFxuICAgIC8vIGh0dHBzOi8vY2lyY2xlY2kuY29tL2RvY3MvdmFyaWFibGVzLyNidWlsdC1pbi1lbnZpcm9ubWVudC12YXJpYWJsZXNcbiAgICBkZXRlY3RFbnZWYXI6ICdDSVJDTEVDSScsXG4gICAgY2FuQmVDb25maWd1cmVkVG9GYWlsT25TdGRFcnI6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0plbmtpbnMnLFxuICAgIC8vIGh0dHBzOi8vd3d3LmplbmtpbnMuaW8vZG9jL2Jvb2svcGlwZWxpbmUvamVua2luc2ZpbGUvI3VzaW5nLWVudmlyb25tZW50LXZhcmlhYmxlc1xuICAgIGRldGVjdEVudlZhcjogJ0VYRUNVVE9SX05VTUJFUicsXG4gICAgY2FuQmVDb25maWd1cmVkVG9GYWlsT25TdGRFcnI6IGZhbHNlLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdENpU3lzdGVtKCk6IENpU3lzdGVtIHwgdW5kZWZpbmVkIHtcbiAgZm9yIChjb25zdCBjaVN5c3RlbSBvZiBDSV9TWVNURU1TKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52W2NpU3lzdGVtLmRldGVjdEVudlZhcl0pIHtcbiAgICAgIHJldHVybiBjaVN5c3RlbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gd2hldGhlciB0aGUgQ0kgc3lzdGVtIHdlJ3JlIGRldGVjdGluZyBpcyBzYWZlIHRvIHdyaXRlIHRvIHN0ZGVyciBvblxuICpcbiAqIFJldHVybnMgYHVuZGVmaW5lZGAgaWYgdGhlIGN1cnJlbnQgQ0kgc3lzdGVtIGNhbm5vdCBiZSByZWNvZ25pemVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2lTeXN0ZW1Jc1N0ZEVyclNhZmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHggPSBkZXRlY3RDaVN5c3RlbSgpPy5jYW5CZUNvbmZpZ3VyZWRUb0ZhaWxPblN0ZEVycjtcbiAgcmV0dXJuIHggPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICF4O1xufVxuIl19