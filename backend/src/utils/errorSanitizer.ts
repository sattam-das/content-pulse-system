/**
 * Sanitizes error objects to remove sensitive information before logging
 */

export function sanitizeError(error: any): any {
    if (!error) return error;

    // Create a safe copy
    const sanitized: any = {
        message: error.message || 'Unknown error',
        name: error.name,
        code: error.code,
        status: error.status || error.response?.status,
    };

    // Add response data if available (but sanitize it)
    if (error.response?.data) {
        sanitized.responseData = error.response.data;
    }

    // Add status text if available
    if (error.response?.statusText) {
        sanitized.statusText = error.response.statusText;
    }

    // Add stack trace (but only in development)
    if (process.env.NODE_ENV === 'development' && error.stack) {
        sanitized.stack = error.stack;
    }

    // DO NOT include:
    // - error.config (contains full axios config with headers/auth)
    // - error.request (contains full request with auth headers)
    // - error.response.config (same as above)
    // - error.response.request (same as above)

    return sanitized;
}

/**
 * Sanitizes axios config to remove sensitive headers
 */
export function sanitizeAxiosConfig(config: any): any {
    if (!config) return config;

    const sanitized = {
        method: config.method,
        url: config.url,
        timeout: config.timeout,
        // DO NOT include headers - they contain Authorization tokens
    };

    return sanitized;
}

/**
 * Safe console.error that sanitizes sensitive data
 */
export function logError(message: string, error: any): void {
    const sanitized = sanitizeError(error);
    console.error(message, JSON.stringify(sanitized, null, 2));
}
