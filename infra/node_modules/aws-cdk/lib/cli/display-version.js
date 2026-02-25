"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionCheckTTL = void 0;
exports.getVersionMessages = getVersionMessages;
exports.displayVersionMessage = displayVersionMessage;
const path = require("path");
const toolkit_lib_1 = require("@aws-cdk/toolkit-lib");
const chalk = require("chalk");
const fs = require("fs-extra");
const semver = require("semver");
const util_1 = require("../util");
const console_formatters_1 = require("./util/console-formatters");
const npm_1 = require("./util/npm");
const ONE_DAY_IN_SECONDS = 1 * 24 * 60 * 60;
const UPGRADE_DOCUMENTATION_LINKS = {
    1: 'https://docs.aws.amazon.com/cdk/v2/guide/migrating-v2.html',
};
class VersionCheckTTL {
    static timestampFilePath() {
        // Using the same path from account-cache.ts
        return path.join((0, util_1.cdkCacheDir)(), 'repo-version-ttl');
    }
    constructor(file, ttlSecs) {
        this.file = file || VersionCheckTTL.timestampFilePath();
        try {
            fs.mkdirsSync(path.dirname(this.file));
            fs.accessSync(path.dirname(this.file), fs.constants.W_OK);
        }
        catch {
            throw new toolkit_lib_1.ToolkitError(`Directory (${path.dirname(this.file)}) is not writable.`);
        }
        this.ttlSecs = ttlSecs || ONE_DAY_IN_SECONDS;
    }
    async hasExpired() {
        try {
            const lastCheckTime = (await fs.stat(this.file)).mtimeMs;
            const today = new Date().getTime();
            if ((today - lastCheckTime) / 1000 > this.ttlSecs) { // convert ms to sec
                return true;
            }
            return false;
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return true;
            }
            else {
                throw err;
            }
        }
    }
    async update(latestVersion) {
        if (!latestVersion) {
            latestVersion = '';
        }
        await fs.writeFile(this.file, latestVersion);
    }
}
exports.VersionCheckTTL = VersionCheckTTL;
// Export for unit testing only.
// Don't use directly, use displayVersionMessage() instead.
async function getVersionMessages(currentVersion, cacheFile) {
    if (!(await cacheFile.hasExpired())) {
        return [];
    }
    const packageInfo = await (0, npm_1.execNpmView)(currentVersion);
    const latestVersion = packageInfo.latestVersion;
    await cacheFile.update(JSON.stringify(packageInfo));
    // If the latest version is the same as the current version, there is no need to display a message
    if (semver.eq(latestVersion, currentVersion)) {
        return [];
    }
    const versionMessage = [
        packageInfo.deprecated ? `${chalk.red(packageInfo.deprecated)}` : undefined,
        `Newer version of CDK is available [${chalk.green(latestVersion)}]`,
        getMajorVersionUpgradeMessage(currentVersion),
        'Upgrade recommended (npm install -g aws-cdk)',
    ].filter(Boolean);
    return versionMessage;
}
function getMajorVersionUpgradeMessage(currentVersion) {
    const currentMajorVersion = semver.major(currentVersion);
    if (UPGRADE_DOCUMENTATION_LINKS[currentMajorVersion]) {
        return `Information about upgrading from version ${currentMajorVersion}.x to version ${currentMajorVersion + 1}.x is available here: ${UPGRADE_DOCUMENTATION_LINKS[currentMajorVersion]}`;
    }
}
async function displayVersionMessage(ioHelper, currentVersion = (0, util_1.versionNumber)(), versionCheckCache) {
    if (!process.stdout.isTTY || process.env.CDK_DISABLE_VERSION_CHECK) {
        return;
    }
    try {
        const versionMessages = await getVersionMessages(currentVersion, versionCheckCache ?? new VersionCheckTTL());
        for (const e of (0, console_formatters_1.formatAsBanner)(versionMessages)) {
            await ioHelper.defaults.info(e);
        }
    }
    catch (err) {
        await ioHelper.defaults.debug(`Could not run version check - ${err.message}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS12ZXJzaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzcGxheS12ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWtFQSxnREFzQkM7QUFTRCxzREFpQkM7QUFsSEQsNkJBQTZCO0FBQzdCLHNEQUFvRDtBQUNwRCwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLGlDQUFpQztBQUVqQyxrQ0FBcUQ7QUFDckQsa0VBQTJEO0FBQzNELG9DQUF5QztBQUV6QyxNQUFNLGtCQUFrQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUU1QyxNQUFNLDJCQUEyQixHQUEyQjtJQUMxRCxDQUFDLEVBQUUsNERBQTREO0NBQ2hFLENBQUM7QUFFRixNQUFhLGVBQWU7SUFDbkIsTUFBTSxDQUFDLGlCQUFpQjtRQUM3Qiw0Q0FBNEM7UUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUEsa0JBQVcsR0FBRSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQU9ELFlBQVksSUFBYSxFQUFFLE9BQWdCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQztZQUNILEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUFDLE1BQU0sQ0FBQztZQUNQLE1BQU0sSUFBSSwwQkFBWSxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFD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bkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNuRSxPQUFPO0lBQ1QsQ0FBQztJQUVELElBQUksQ0FBQztRQUNILE1BQU0sZUFBZSxHQUFHLE1BQU0sa0JBQWtCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixJQUFJLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztRQUM3RyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUEsbUNBQWMsRUFBQyxlQUFlLENBQUMsRUFBRSxDQUFDO1lBQ2hELE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFBQyxPQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFRvb2xraXRFcnJvciB9IGZyb20gJ0Bhd3MtY2RrL3Rvb2xraXQtbGliJztcbmltcG9ydCAqIGFzIGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIHNlbXZlciBmcm9tICdzZW12ZXInO1xuaW1wb3J0IHR5cGUgeyBJb0hlbHBlciB9IGZyb20gJy4uL2FwaS1wcml2YXRlJztcbmltcG9ydCB7IGNka0NhY2hlRGlyLCB2ZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBmb3JtYXRBc0Jhbm5lciB9IGZyb20gJy4vdXRpbC9jb25zb2xlLWZvcm1hdHRlcnMnO1xuaW1wb3J0IHsgZXhlY05wbVZpZXcgfSBmcm9tICcuL3V0aWwvbnBtJztcblxuY29uc3QgT05FX0RBWV9JTl9TRUNPTkRTID0gMSAqIDI0ICogNjAgKiA2MDtcblxuY29uc3QgVVBHUkFERV9ET0NVTUVOVEFUSU9OX0xJTktTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiAnaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2Nkay92Mi9ndWlkZS9taWdyYXRpbmctdjIuaHRtbCcsXG59O1xuXG5leHBvcnQgY2xhc3MgVmVyc2lvbkNoZWNrVFRMIHtcbiAgcHVibGljIHN0YXRpYyB0aW1lc3RhbXBGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIC8vIFVzaW5nIHRoZSBzYW1lIHBhdGggZnJvbSBhY2NvdW50LWNhY2hlLnRzXG4gICAgcmV0dXJuIHBhdGguam9pbihjZGtDYWNoZURpcigpLCAncmVwby12ZXJzaW9uLXR0bCcpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBmaWxlOiBzdHJpbmc7XG5cbiAgLy8gRmlsZSBtb2RpZnkgdGltZXMgYXJlIGFjY3VyYXRlIG9ubHkgdG8gdGhlIHNlY29uZFxuICBwcml2YXRlIHJlYWRvbmx5IHR0bFNlY3M6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihmaWxlPzogc3RyaW5nLCB0dGxTZWNzPzogbnVtYmVyKSB7XG4gICAgdGhpcy5maWxlID0gZmlsZSB8fCBWZXJzaW9uQ2hlY2tUVEwudGltZXN0YW1wRmlsZVBhdGgoKTtcbiAgICB0cnkge1xuICAgICAgZnMubWtkaXJzU3luYyhwYXRoLmRpcm5hbWUodGhpcy5maWxlKSk7XG4gICAgICBmcy5hY2Nlc3NTeW5jKHBhdGguZGlybmFtZSh0aGlzLmZpbGUpLCBmcy5jb25zdGFudHMuV19PSyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgVG9vbGtpdEVycm9yKGBEaXJlY3RvcnkgKCR7cGF0aC5kaXJuYW1lKHRoaXMuZmlsZSl9KSBpcyBub3Qgd3JpdGFibGUuYCk7XG4gICAgfVxuICAgIHRoaXMudHRsU2VjcyA9IHR0bFNlY3MgfHwgT05FX0RBWV9JTl9TRUNPTkRTO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGhhc0V4cGlyZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxhc3RDaGVja1RpbWUgPSAoYXdhaXQgZnMuc3RhdCh0aGlzLmZpbGUpKS5tdGltZU1zO1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgaWYgKCh0b2RheSAtIGxhc3RDaGVja1RpbWUpIC8gMTAwMCA+IHRoaXMudHRsU2VjcykgeyAvLyBjb252ZXJ0IG1zIHRvIHNlY1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlKGxhdGVzdFZlcnNpb24/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWxhdGVzdFZlcnNpb24pIHtcbiAgICAgIGxhdGVzdFZlcnNpb24gPSAnJztcbiAgICB9XG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKHRoaXMuZmlsZSwgbGF0ZXN0VmVyc2lvbik7XG4gIH1cbn1cblxuLy8gRXhwb3J0IGZvciB1bml0IHRlc3Rpbmcgb25seS5cbi8vIERvbid0IHVzZSBkaXJlY3RseSwgdXNlIGRpc3BsYXlWZXJzaW9uTWVzc2FnZSgpIGluc3RlYWQuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VmVyc2lvbk1lc3NhZ2VzKGN1cnJlbnRWZXJzaW9uOiBzdHJpbmcsIGNhY2hlRmlsZTogVmVyc2lvbkNoZWNrVFRMKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBpZiAoIShhd2FpdCBjYWNoZUZpbGUuaGFzRXhwaXJlZCgpKSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHBhY2thZ2VJbmZvID0gYXdhaXQgZXhlY05wbVZpZXcoY3VycmVudFZlcnNpb24pO1xuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gcGFja2FnZUluZm8ubGF0ZXN0VmVyc2lvbjtcbiAgYXdhaXQgY2FjaGVGaWxlLnVwZGF0ZShKU09OLnN0cmluZ2lmeShwYWNrYWdlSW5mbykpO1xuXG4gIC8vIElmIHRoZSBsYXRlc3QgdmVyc2lvbiBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB2ZXJzaW9uLCB0aGVyZSBpcyBubyBuZWVkIHRvIGRpc3BsYXkgYSBtZXNzYWdlXG4gIGlmIChzZW12ZXIuZXEobGF0ZXN0VmVyc2lvbiwgY3VycmVudFZlcnNpb24pKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgdmVyc2lvbk1lc3NhZ2UgPSBbXG4gICAgcGFja2FnZUluZm8uZGVwcmVjYXRlZCA/IGAke2NoYWxrLnJlZChwYWNrYWdlSW5mby5kZXByZWNhdGVkIGFzIHN0cmluZyl9YCA6IHVuZGVmaW5lZCxcbiAgICBgTmV3ZXIgdmVyc2lvbiBvZiBDREsgaXMgYXZhaWxhYmxlIFske2NoYWxrLmdyZWVuKGxhdGVzdFZlcnNpb24gYXMgc3RyaW5nKX1dYCxcbiAgICBnZXRNYWpvclZlcnNpb25VcGdyYWRlTWVzc2FnZShjdXJyZW50VmVyc2lvbiksXG4gICAgJ1VwZ3JhZGUgcmVjb21tZW5kZWQgKG5wbSBpbnN0YWxsIC1nIGF3cy1jZGspJyxcbiAgXS5maWx0ZXIoQm9vbGVhbikgYXMgc3RyaW5nW107XG5cbiAgcmV0dXJuIHZlcnNpb25NZXNzYWdlO1xufVxuXG5mdW5jdGlvbiBnZXRNYWpvclZlcnNpb25VcGdyYWRlTWVzc2FnZShjdXJyZW50VmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHwgdm9pZCB7XG4gIGNvbnN0IGN1cnJlbnRNYWpvclZlcnNpb24gPSBzZW12ZXIubWFqb3IoY3VycmVudFZlcnNpb24pO1xuICBpZiAoVVBHUkFERV9ET0NVTUVOVEFUSU9OX0xJTktTW2N1cnJlbnRNYWpvclZlcnNpb25dKSB7XG4gICAgcmV0dXJuIGBJbmZvcm1hdGlvbiBhYm91dCB1cGdyYWRpbmcgZnJvbSB2ZXJzaW9uICR7Y3VycmVudE1ham9yVmVyc2lvbn0ueCB0byB2ZXJzaW9uICR7Y3VycmVudE1ham9yVmVyc2lvbiArIDF9LnggaXMgYXZhaWxhYmxlIGhlcmU6ICR7VVBHUkFERV9ET0NVTUVOVEFUSU9OX0xJTktTW2N1cnJlbnRNYWpvclZlcnNpb25dfWA7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlWZXJzaW9uTWVzc2FnZShcbiAgaW9IZWxwZXI6IElvSGVscGVyLFxuICBjdXJyZW50VmVyc2lvbiA9IHZlcnNpb25OdW1iZXIoKSxcbiAgdmVyc2lvbkNoZWNrQ2FjaGU/OiBWZXJzaW9uQ2hlY2tUVEwsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKCFwcm9jZXNzLnN0ZG91dC5pc1RUWSB8fCBwcm9jZXNzLmVudi5DREtfRElTQUJMRV9WRVJTSU9OX0NIRUNLKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB2ZXJzaW9uTWVzc2FnZXMgPSBhd2FpdCBnZXRWZXJzaW9uTWVzc2FnZXMoY3VycmVudFZlcnNpb24sIHZlcnNpb25DaGVja0NhY2hlID8/IG5ldyBWZXJzaW9uQ2hlY2tUVEwoKSk7XG4gICAgZm9yIChjb25zdCBlIG9mIGZvcm1hdEFzQmFubmVyKHZlcnNpb25NZXNzYWdlcykpIHtcbiAgICAgIGF3YWl0IGlvSGVscGVyLmRlZmF1bHRzLmluZm8oZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgIGF3YWl0IGlvSGVscGVyLmRlZmF1bHRzLmRlYnVnKGBDb3VsZCBub3QgcnVuIHZlcnNpb24gY2hlY2sgLSAke2Vyci5tZXNzYWdlfWApO1xuICB9XG59XG4iXX0=