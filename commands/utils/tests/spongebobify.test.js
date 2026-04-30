const spongebobifyCommand = require('../spongebobify');

describe('Spongebobify Command', () => {
    let mockInteraction;

    beforeEach(() => {
        mockInteraction = {
            options: {
                getString: jest.fn(),
            },
            reply: jest.fn().mockResolvedValue(null),
        };
    });

    describe('Command structure', () => {
        test('should have the correct name', () => {
            expect(spongebobifyCommand.data.name).toBe('spongebobify');
        });

        test('should have the correct description', () => {
            expect(spongebobifyCommand.data.description).toBe('For when you want to be petty');
        });

        test('should have a string option named "statement"', () => {
            const options = spongebobifyCommand.data.options;
            expect(options.length).toBeGreaterThan(0);
            expect(options[0].name).toBe('statement');
        });
    });

    describe('spongebobText function behavior', () => {
        test('should convert text with alternating case', async () => {
            mockInteraction.options.getString.mockReturnValue('hello');
            await spongebobifyCommand.execute(mockInteraction);

            expect(mockInteraction.reply).toHaveBeenCalledWith('hElLo');
        });

        test('should handle empty strings', async () => {
            mockInteraction.options.getString.mockReturnValue('');
            await spongebobifyCommand.execute(mockInteraction);

            expect(mockInteraction.reply).toHaveBeenCalledWith('');
        });

        test('should handle single characters', async () => {
            mockInteraction.options.getString.mockReturnValue('a');
            await spongebobifyCommand.execute(mockInteraction);

            expect(mockInteraction.reply).toHaveBeenCalledWith('a');
        });

        test('should handle multiple words', async () => {
            mockInteraction.options.getString.mockReturnValue('hello world');
            await spongebobifyCommand.execute(mockInteraction);

            expect(mockInteraction.reply).toHaveBeenCalledWith('hElLo wOrLd');
        });

        test('should handle special characters and numbers', async () => {
            mockInteraction.options.getString.mockReturnValue('hello123!');
            await spongebobifyCommand.execute(mockInteraction);

            expect(mockInteraction.reply).toHaveBeenCalledWith('hElLo123!');
        });

        test('should handle already uppercase text', async () => {
            mockInteraction.options.getString.mockReturnValue('HELLO');
            await spongebobifyCommand.execute(mockInteraction);

            expect(mockInteraction.reply).toHaveBeenCalledWith('hElLo');
        });
    });

    describe('Command execution', () => {
        test('should call getString to get the statement option', async () => {
            mockInteraction.options.getString.mockReturnValue('test');
            await spongebobifyCommand.execute(mockInteraction);

            expect(mockInteraction.options.getString).toHaveBeenCalledWith('statement');
        });

        test('should call reply exactly once', async () => {
            mockInteraction.options.getString.mockReturnValue('test');
            await spongebobifyCommand.execute(mockInteraction);

            expect(mockInteraction.reply).toHaveBeenCalledTimes(1);
        });
    });
});
