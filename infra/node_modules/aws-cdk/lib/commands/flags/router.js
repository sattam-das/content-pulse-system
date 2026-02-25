"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlagOperationRouter = void 0;
class FlagOperationRouter {
    constructor(validator, interactiveHandler, flagOperations) {
        this.validator = validator;
        this.interactiveHandler = interactiveHandler;
        this.flagOperations = flagOperations;
    }
    /** Routes flag operations to appropriate handlers based on parameters */
    async route(params) {
        if (params.interactive) {
            await this.handleInteractiveMode();
            return;
        }
        if (params.safe) {
            await this.flagOperations.setSafeFlags(params);
            return;
        }
        const isValid = await this.validator.validateParams(params);
        if (!isValid)
            return;
        if (params.set) {
            await this.handleSetOperations(params);
        }
        else {
            await this.flagOperations.displayFlags(params);
            await this.showHelpMessage(params);
        }
    }
    /** Handles flag setting operations, routing to single or multiple flag methods */
    async handleSetOperations(params) {
        if (params.FLAGNAME && params.value) {
            await this.flagOperations.setFlag(params);
        }
        else if (params.all || params.unconfigured) {
            await this.flagOperations.setMultipleFlags(params);
        }
    }
    /** Manages interactive mode */
    async handleInteractiveMode() {
        while (true) {
            const interactiveParams = await this.interactiveHandler.handleInteractiveMode();
            if (!interactiveParams)
                return;
            await this.flagOperations.execute(interactiveParams);
            if (!interactiveParams.FLAGNAME) {
                return;
            }
        }
    }
    /** Shows help message when no specific options are provided */
    async showHelpMessage(params) {
        if (!params.all && !params.FLAGNAME) {
            await this.flagOperations.displayHelpMessage();
        }
    }
}
exports.FlagOperationRouter = FlagOperationRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLE1BQWEsbUJBQW1CO0lBQzlCLFlBQ21CLFNBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxjQUE4QjtRQUY5QixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRWpELENBQUM7SUFFRCx5RUFBeUU7SUFDekUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUE0QjtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QixNQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ25DLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRXJCLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsQ0FBQzthQUFNLENBQUM7WUFDTixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELGtGQUFrRjtJQUMxRSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBNEI7UUFDNUQsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzdDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0gsQ0FBQztJQUVELCtCQUErQjtJQUN2QixLQUFLLENBQUMscUJBQXFCO1FBQ2pDLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDWixNQUFNLGlCQUFpQixHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDaEYsSUFBSSxDQUFDLGlCQUFpQjtnQkFBRSxPQUFPO1lBRS9CLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hDLE9BQU87WUFDVCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCwrREFBK0Q7SUFDdkQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUE0QjtRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNqRCxDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBNURELGtEQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW50ZXJhY3RpdmVIYW5kbGVyIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS1oYW5kbGVyJztcbmltcG9ydCB0eXBlIHsgRmxhZ09wZXJhdGlvbnMgfSBmcm9tICcuL29wZXJhdGlvbnMudHMnO1xuaW1wb3J0IHR5cGUgeyBGbGFnT3BlcmF0aW9uc1BhcmFtcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBGbGFnVmFsaWRhdG9yIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgRmxhZ09wZXJhdGlvblJvdXRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsaWRhdG9yOiBGbGFnVmFsaWRhdG9yLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW50ZXJhY3RpdmVIYW5kbGVyOiBJbnRlcmFjdGl2ZUhhbmRsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmbGFnT3BlcmF0aW9uczogRmxhZ09wZXJhdGlvbnMsXG4gICkge1xuICB9XG5cbiAgLyoqIFJvdXRlcyBmbGFnIG9wZXJhdGlvbnMgdG8gYXBwcm9wcmlhdGUgaGFuZGxlcnMgYmFzZWQgb24gcGFyYW1ldGVycyAqL1xuICBhc3luYyByb3V0ZShwYXJhbXM6IEZsYWdPcGVyYXRpb25zUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHBhcmFtcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgYXdhaXQgdGhpcy5oYW5kbGVJbnRlcmFjdGl2ZU1vZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNhZmUpIHtcbiAgICAgIGF3YWl0IHRoaXMuZmxhZ09wZXJhdGlvbnMuc2V0U2FmZUZsYWdzKHBhcmFtcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlUGFyYW1zKHBhcmFtcyk7XG4gICAgaWYgKCFpc1ZhbGlkKSByZXR1cm47XG5cbiAgICBpZiAocGFyYW1zLnNldCkge1xuICAgICAgYXdhaXQgdGhpcy5oYW5kbGVTZXRPcGVyYXRpb25zKHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuZmxhZ09wZXJhdGlvbnMuZGlzcGxheUZsYWdzKHBhcmFtcyk7XG4gICAgICBhd2FpdCB0aGlzLnNob3dIZWxwTWVzc2FnZShwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBIYW5kbGVzIGZsYWcgc2V0dGluZyBvcGVyYXRpb25zLCByb3V0aW5nIHRvIHNpbmdsZSBvciBtdWx0aXBsZSBmbGFnIG1ldGhvZHMgKi9cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVTZXRPcGVyYXRpb25zKHBhcmFtczogRmxhZ09wZXJhdGlvbnNQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAocGFyYW1zLkZMQUdOQU1FICYmIHBhcmFtcy52YWx1ZSkge1xuICAgICAgYXdhaXQgdGhpcy5mbGFnT3BlcmF0aW9ucy5zZXRGbGFnKHBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuYWxsIHx8IHBhcmFtcy51bmNvbmZpZ3VyZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuZmxhZ09wZXJhdGlvbnMuc2V0TXVsdGlwbGVGbGFncyhwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBNYW5hZ2VzIGludGVyYWN0aXZlIG1vZGUgKi9cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVJbnRlcmFjdGl2ZU1vZGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IGludGVyYWN0aXZlUGFyYW1zID0gYXdhaXQgdGhpcy5pbnRlcmFjdGl2ZUhhbmRsZXIuaGFuZGxlSW50ZXJhY3RpdmVNb2RlKCk7XG4gICAgICBpZiAoIWludGVyYWN0aXZlUGFyYW1zKSByZXR1cm47XG5cbiAgICAgIGF3YWl0IHRoaXMuZmxhZ09wZXJhdGlvbnMuZXhlY3V0ZShpbnRlcmFjdGl2ZVBhcmFtcyk7XG5cbiAgICAgIGlmICghaW50ZXJhY3RpdmVQYXJhbXMuRkxBR05BTUUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBTaG93cyBoZWxwIG1lc3NhZ2Ugd2hlbiBubyBzcGVjaWZpYyBvcHRpb25zIGFyZSBwcm92aWRlZCAqL1xuICBwcml2YXRlIGFzeW5jIHNob3dIZWxwTWVzc2FnZShwYXJhbXM6IEZsYWdPcGVyYXRpb25zUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFwYXJhbXMuYWxsICYmICFwYXJhbXMuRkxBR05BTUUpIHtcbiAgICAgIGF3YWl0IHRoaXMuZmxhZ09wZXJhdGlvbnMuZGlzcGxheUhlbHBNZXNzYWdlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=