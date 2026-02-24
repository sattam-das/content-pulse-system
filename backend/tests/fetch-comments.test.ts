import { handler } from '../fetch-comments/index';

// Minimal test structure to verify imports and basic function signature
describe('fetch-comments lambda', () => {
    it('should return 400 if no videoUrl is provided', async () => {
        const event = {
            body: JSON.stringify({})
        };
        const response = await handler(event);
        expect(response.statusCode).toBe(400);
        expect(JSON.parse(response.body).error).toBe('videoUrl is required');
    });

    it('should return 400 for invalid youtube url format', async () => {
        const event = {
            body: JSON.stringify({ videoUrl: 'https://notyoutube.com/watch?v=123' })
        };
        const response = await handler(event);
        expect(response.statusCode).toBe(400);
        expect(JSON.parse(response.body).error).toBe('Invalid YouTube URL');
    });
});
