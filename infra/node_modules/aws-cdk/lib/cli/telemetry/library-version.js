"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLibraryVersion = getLibraryVersion;
const child_process_1 = require("child_process");
const path = require("path");
const util_1 = require("util");
const fs = require("fs-extra");
async function getLibraryVersion(ioHelper) {
    try {
        const command = "node -e 'process.stdout.write(require.resolve(\"aws-cdk-lib\"))'";
        const { stdout } = await (0, util_1.promisify)(child_process_1.exec)(command);
        // stdout should be a file path but lets double check
        if (!fs.existsSync(stdout)) {
            await ioHelper.defaults.trace('Could not get CDK Library Version: require.resolve("aws-cdk-lib") did not return a file path');
            return;
        }
        const pathToPackageJson = path.join(path.dirname(stdout), 'package.json');
        const packageJson = fs.readJSONSync(pathToPackageJson);
        if (!packageJson.version) {
            await ioHelper.defaults.trace('Could not get CDK Library Version: package.json does not have version field');
            return;
        }
        return packageJson.version;
    }
    catch (e) {
        await ioHelper.defaults.trace(`Could not get CDK Library Version: ${e}`);
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS12ZXJzaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlicmFyeS12ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsOENBdUJDO0FBN0JELGlEQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IsK0JBQWlDO0FBQ2pDLCtCQUErQjtBQUd4QixLQUFLLFVBQVUsaUJBQWlCLENBQUMsUUFBa0I7SUFDeEQsSUFBSSxDQUFDO1FBQ0gsTUFBTSxPQUFPLEdBQUcsa0VBQWtFLENBQUM7UUFDbkYsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSxnQkFBUyxFQUFDLG9CQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUMzQixNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLDhGQUE4RixDQUFDLENBQUM7WUFDOUgsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMxRSxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUM7WUFDN0csT0FBTztRQUNULENBQUM7UUFFRCxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUFDLE9BQU8sQ0FBTSxFQUFFLENBQUM7UUFDaEIsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RSxPQUFPO0lBQ1QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgdHlwZSB7IElvSGVscGVyIH0gZnJvbSAnLi4vLi4vYXBpLXByaXZhdGUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGlicmFyeVZlcnNpb24oaW9IZWxwZXI6IElvSGVscGVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb21tYW5kID0gXCJub2RlIC1lICdwcm9jZXNzLnN0ZG91dC53cml0ZShyZXF1aXJlLnJlc29sdmUoXFxcImF3cy1jZGstbGliXFxcIikpJ1wiO1xuICAgIGNvbnN0IHsgc3Rkb3V0IH0gPSBhd2FpdCBwcm9taXNpZnkoZXhlYykoY29tbWFuZCk7XG5cbiAgICAvLyBzdGRvdXQgc2hvdWxkIGJlIGEgZmlsZSBwYXRoIGJ1dCBsZXRzIGRvdWJsZSBjaGVja1xuICAgIGlmICghZnMuZXhpc3RzU3luYyhzdGRvdXQpKSB7XG4gICAgICBhd2FpdCBpb0hlbHBlci5kZWZhdWx0cy50cmFjZSgnQ291bGQgbm90IGdldCBDREsgTGlicmFyeSBWZXJzaW9uOiByZXF1aXJlLnJlc29sdmUoXCJhd3MtY2RrLWxpYlwiKSBkaWQgbm90IHJldHVybiBhIGZpbGUgcGF0aCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGhUb1BhY2thZ2VKc29uID0gcGF0aC5qb2luKHBhdGguZGlybmFtZShzdGRvdXQpLCAncGFja2FnZS5qc29uJyk7XG4gICAgY29uc3QgcGFja2FnZUpzb24gPSBmcy5yZWFkSlNPTlN5bmMocGF0aFRvUGFja2FnZUpzb24pO1xuICAgIGlmICghcGFja2FnZUpzb24udmVyc2lvbikge1xuICAgICAgYXdhaXQgaW9IZWxwZXIuZGVmYXVsdHMudHJhY2UoJ0NvdWxkIG5vdCBnZXQgQ0RLIExpYnJhcnkgVmVyc2lvbjogcGFja2FnZS5qc29uIGRvZXMgbm90IGhhdmUgdmVyc2lvbiBmaWVsZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBwYWNrYWdlSnNvbi52ZXJzaW9uO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICBhd2FpdCBpb0hlbHBlci5kZWZhdWx0cy50cmFjZShgQ291bGQgbm90IGdldCBDREsgTGlicmFyeSBWZXJzaW9uOiAke2V9YCk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=