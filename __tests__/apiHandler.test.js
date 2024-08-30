import { fetchData } from '../src/js/apiHandler';

// Mock the fetch API
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            polarity: 'positive',
            subjectivity: 'subjective',
            text: 'This is a test text.',
        }),
    })
);

test('fetchData returns an object with polarity, subjectivity, and text properties', async () => {
    const result = await fetchData('test');
    expect(result).toHaveProperty('polarity');
    expect(result).toHaveProperty('subjectivity');
    expect(result).toHaveProperty('text');
    expect(result.polarity).toBe('positive');
    expect(result.subjectivity).toBe('subjective');
    expect(result.text).toBe('This is a test text.');
});
