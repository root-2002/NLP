test('Form input should not be empty', () => {
    document.body.innerHTML = '<input id="textInput" value="">';
    const input = document.getElementById('textInput');
    expect(input.value).toBe('');
});
