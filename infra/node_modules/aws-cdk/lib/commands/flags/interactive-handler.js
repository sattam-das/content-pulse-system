"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveHandler = void 0;
// @ts-ignore
const enquirer_1 = require("enquirer");
const types_1 = require("./types");
class InteractiveHandler {
    constructor(flags, flagOperations) {
        this.flags = flags;
        this.flagOperations = flagOperations;
    }
    /** Displays flags that have differences between user and recommended values */
    async displayFlagsWithDifferences() {
        const flagsWithDifferences = this.flags.filter(flag => flag.userValue === undefined || !this.isUserValueEqualToRecommended(flag));
        if (flagsWithDifferences.length > 0) {
            await this.flagOperations.displayFlagTable(flagsWithDifferences);
        }
    }
    /** Checks if user value matches recommended value */
    isUserValueEqualToRecommended(flag) {
        return String(flag.userValue) === String(flag.recommendedValue);
    }
    /** Main interactive mode handler that shows menu and processes user selection */
    async handleInteractiveMode() {
        await this.displayFlagsWithDifferences();
        const prompt = new enquirer_1.Select({
            name: 'option',
            message: 'Menu',
            choices: Object.values(types_1.FlagsMenuOptions),
        });
        const answer = await prompt.run();
        switch (answer) {
            case types_1.FlagsMenuOptions.ALL_TO_RECOMMENDED:
                return { recommended: true, all: true, set: true };
            case types_1.FlagsMenuOptions.UNCONFIGURED_TO_RECOMMENDED:
                return { recommended: true, unconfigured: true, set: true };
            case types_1.FlagsMenuOptions.UNCONFIGURED_TO_DEFAULT:
                return { default: true, unconfigured: true, set: true };
            case types_1.FlagsMenuOptions.MODIFY_SPECIFIC_FLAG:
                return this.handleSpecificFlagSelection();
            case types_1.FlagsMenuOptions.EXIT:
                return null;
            default:
                return null;
        }
    }
    /** Handles the specific flag selection flow with flag and value prompts */
    async handleSpecificFlagSelection() {
        const booleanFlags = this.flags.filter(flag => this.flagOperations.isBooleanFlag(flag));
        const flagPrompt = new enquirer_1.Select({
            name: 'flag',
            message: 'Select which flag you would like to modify:',
            limit: 100,
            choices: booleanFlags.map(flag => flag.name),
        });
        const selectedFlagName = await flagPrompt.run();
        const valuePrompt = new enquirer_1.Select({
            name: 'value',
            message: 'Select a value:',
            choices: ['true', 'false'],
        });
        const value = await valuePrompt.run();
        return {
            FLAGNAME: [selectedFlagName],
            value,
            set: true,
        };
    }
}
exports.InteractiveHandler = InteractiveHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RpdmUtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVyYWN0aXZlLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsYUFBYTtBQUNiLHVDQUFrQztBQUVsQyxtQ0FBc0U7QUFFdEUsTUFBYSxrQkFBa0I7SUFDN0IsWUFDbUIsS0FBb0IsRUFDcEIsY0FBOEI7UUFEOUIsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFFakQsQ0FBQztJQUVELCtFQUErRTtJQUN2RSxLQUFLLENBQUMsMkJBQTJCO1FBQ3ZDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDcEQsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNwQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNuRSxDQUFDO0lBQ0gsQ0FBQztJQUVELHFEQUFxRDtJQUM3Qyw2QkFBNkIsQ0FBQyxJQUFpQjtRQUNyRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxpRkFBaUY7SUFDakYsS0FBSyxDQUFDLHFCQUFxQjtRQUN6QixNQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBRXpDLE1BQU0sTUFBTSxHQUFHLElBQUksaUJBQU0sQ0FBQztZQUN4QixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0JBQWdCLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFbEMsUUFBUSxNQUFNLEVBQUUsQ0FBQztZQUNmLEtBQUssd0JBQWdCLENBQUMsa0JBQWtCO2dCQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNyRCxLQUFLLHdCQUFnQixDQUFDLDJCQUEyQjtnQkFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDOUQsS0FBSyx3QkFBZ0IsQ0FBQyx1QkFBdUI7Z0JBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQzFELEtBQUssd0JBQWdCLENBQUMsb0JBQW9CO2dCQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBQzVDLEtBQUssd0JBQWdCLENBQUMsSUFBSTtnQkFDeEIsT0FBTyxJQUFJLENBQUM7WUFDZDtnQkFDRSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELDJFQUEyRTtJQUNuRSxLQUFLLENBQUMsMkJBQTJCO1FBQ3ZDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV4RixNQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQUM7WUFDNUIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsNkNBQTZDO1lBQ3RELEtBQUssRUFBRSxHQUFHO1lBQ1YsT0FBTyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzdDLENBQUMsQ0FBQztRQUVILE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFaEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxpQkFBTSxDQUFDO1lBQzdCLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1NBQzNCLENBQUMsQ0FBQztRQUVILE1BQU0sS0FBSyxHQUFHLE1BQU0sV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXRDLE9BQU87WUFDTCxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM1QixLQUFLO1lBQ0wsR0FBRyxFQUFFLElBQUk7U0FDVixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBN0VELGdEQTZFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmVhdHVyZUZsYWcgfSBmcm9tICdAYXdzLWNkay90b29sa2l0LWxpYic7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdlbnF1aXJlcic7XG5pbXBvcnQgdHlwZSB7IEZsYWdPcGVyYXRpb25zIH0gZnJvbSAnLi9vcGVyYXRpb25zJztcbmltcG9ydCB7IEZsYWdzTWVudU9wdGlvbnMsIHR5cGUgRmxhZ09wZXJhdGlvbnNQYXJhbXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIEludGVyYWN0aXZlSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmxhZ3M6IEZlYXR1cmVGbGFnW10sXG4gICAgcHJpdmF0ZSByZWFkb25seSBmbGFnT3BlcmF0aW9uczogRmxhZ09wZXJhdGlvbnMsXG4gICkge1xuICB9XG5cbiAgLyoqIERpc3BsYXlzIGZsYWdzIHRoYXQgaGF2ZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHVzZXIgYW5kIHJlY29tbWVuZGVkIHZhbHVlcyAqL1xuICBwcml2YXRlIGFzeW5jIGRpc3BsYXlGbGFnc1dpdGhEaWZmZXJlbmNlcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmbGFnc1dpdGhEaWZmZXJlbmNlcyA9IHRoaXMuZmxhZ3MuZmlsdGVyKGZsYWcgPT5cbiAgICAgIGZsYWcudXNlclZhbHVlID09PSB1bmRlZmluZWQgfHwgIXRoaXMuaXNVc2VyVmFsdWVFcXVhbFRvUmVjb21tZW5kZWQoZmxhZykpO1xuXG4gICAgaWYgKGZsYWdzV2l0aERpZmZlcmVuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuZmxhZ09wZXJhdGlvbnMuZGlzcGxheUZsYWdUYWJsZShmbGFnc1dpdGhEaWZmZXJlbmNlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENoZWNrcyBpZiB1c2VyIHZhbHVlIG1hdGNoZXMgcmVjb21tZW5kZWQgdmFsdWUgKi9cbiAgcHJpdmF0ZSBpc1VzZXJWYWx1ZUVxdWFsVG9SZWNvbW1lbmRlZChmbGFnOiBGZWF0dXJlRmxhZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBTdHJpbmcoZmxhZy51c2VyVmFsdWUpID09PSBTdHJpbmcoZmxhZy5yZWNvbW1lbmRlZFZhbHVlKTtcbiAgfVxuXG4gIC8qKiBNYWluIGludGVyYWN0aXZlIG1vZGUgaGFuZGxlciB0aGF0IHNob3dzIG1lbnUgYW5kIHByb2Nlc3NlcyB1c2VyIHNlbGVjdGlvbiAqL1xuICBhc3luYyBoYW5kbGVJbnRlcmFjdGl2ZU1vZGUoKTogUHJvbWlzZTxGbGFnT3BlcmF0aW9uc1BhcmFtcyB8IG51bGw+IHtcbiAgICBhd2FpdCB0aGlzLmRpc3BsYXlGbGFnc1dpdGhEaWZmZXJlbmNlcygpO1xuXG4gICAgY29uc3QgcHJvbXB0ID0gbmV3IFNlbGVjdCh7XG4gICAgICBuYW1lOiAnb3B0aW9uJyxcbiAgICAgIG1lc3NhZ2U6ICdNZW51JyxcbiAgICAgIGNob2ljZXM6IE9iamVjdC52YWx1ZXMoRmxhZ3NNZW51T3B0aW9ucyksXG4gICAgfSk7XG5cbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBwcm9tcHQucnVuKCk7XG5cbiAgICBzd2l0Y2ggKGFuc3dlcikge1xuICAgICAgY2FzZSBGbGFnc01lbnVPcHRpb25zLkFMTF9UT19SRUNPTU1FTkRFRDpcbiAgICAgICAgcmV0dXJuIHsgcmVjb21tZW5kZWQ6IHRydWUsIGFsbDogdHJ1ZSwgc2V0OiB0cnVlIH07XG4gICAgICBjYXNlIEZsYWdzTWVudU9wdGlvbnMuVU5DT05GSUdVUkVEX1RPX1JFQ09NTUVOREVEOlxuICAgICAgICByZXR1cm4geyByZWNvbW1lbmRlZDogdHJ1ZSwgdW5jb25maWd1cmVkOiB0cnVlLCBzZXQ6IHRydWUgfTtcbiAgICAgIGNhc2UgRmxhZ3NNZW51T3B0aW9ucy5VTkNPTkZJR1VSRURfVE9fREVGQVVMVDpcbiAgICAgICAgcmV0dXJuIHsgZGVmYXVsdDogdHJ1ZSwgdW5jb25maWd1cmVkOiB0cnVlLCBzZXQ6IHRydWUgfTtcbiAgICAgIGNhc2UgRmxhZ3NNZW51T3B0aW9ucy5NT0RJRllfU1BFQ0lGSUNfRkxBRzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU3BlY2lmaWNGbGFnU2VsZWN0aW9uKCk7XG4gICAgICBjYXNlIEZsYWdzTWVudU9wdGlvbnMuRVhJVDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogSGFuZGxlcyB0aGUgc3BlY2lmaWMgZmxhZyBzZWxlY3Rpb24gZmxvdyB3aXRoIGZsYWcgYW5kIHZhbHVlIHByb21wdHMgKi9cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVTcGVjaWZpY0ZsYWdTZWxlY3Rpb24oKTogUHJvbWlzZTxGbGFnT3BlcmF0aW9uc1BhcmFtcz4ge1xuICAgIGNvbnN0IGJvb2xlYW5GbGFncyA9IHRoaXMuZmxhZ3MuZmlsdGVyKGZsYWcgPT4gdGhpcy5mbGFnT3BlcmF0aW9ucy5pc0Jvb2xlYW5GbGFnKGZsYWcpKTtcblxuICAgIGNvbnN0IGZsYWdQcm9tcHQgPSBuZXcgU2VsZWN0KHtcbiAgICAgIG5hbWU6ICdmbGFnJyxcbiAgICAgIG1lc3NhZ2U6ICdTZWxlY3Qgd2hpY2ggZmxhZyB5b3Ugd291bGQgbGlrZSB0byBtb2RpZnk6JyxcbiAgICAgIGxpbWl0OiAxMDAsXG4gICAgICBjaG9pY2VzOiBib29sZWFuRmxhZ3MubWFwKGZsYWcgPT4gZmxhZy5uYW1lKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbGVjdGVkRmxhZ05hbWUgPSBhd2FpdCBmbGFnUHJvbXB0LnJ1bigpO1xuXG4gICAgY29uc3QgdmFsdWVQcm9tcHQgPSBuZXcgU2VsZWN0KHtcbiAgICAgIG5hbWU6ICd2YWx1ZScsXG4gICAgICBtZXNzYWdlOiAnU2VsZWN0IGEgdmFsdWU6JyxcbiAgICAgIGNob2ljZXM6IFsndHJ1ZScsICdmYWxzZSddLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWUgPSBhd2FpdCB2YWx1ZVByb21wdC5ydW4oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBGTEFHTkFNRTogW3NlbGVjdGVkRmxhZ05hbWVdLFxuICAgICAgdmFsdWUsXG4gICAgICBzZXQ6IHRydWUsXG4gICAgfTtcbiAgfVxufVxuIl19