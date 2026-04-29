const lasagnaCommand = require('./lasagna');

describe('Lasagna Command', () => {
    let mockInteraction;

    beforeEach(() => {
        // We create a mock version of the Discord interaction object
        mockInteraction = {
            reply: jest.fn().mockResolvedValue(null),
        };
    });

    test('should have the correct name and description', () => {
        expect(lasagnaCommand.data.name).toBe('lasagna');
        expect(lasagnaCommand.data.description).toBe('Lasagna?');
    });

    test('should reply with "Lasagna!"', async () => {
        await lasagnaCommand.execute(mockInteraction);

        // Check if the reply method was called exactly once
        expect(mockInteraction.reply).toHaveBeenCalledTimes(1);
        
        // Check if the content of the reply was correct
        expect(mockInteraction.reply).toHaveBeenCalledWith('Lasagna!');
    });
});