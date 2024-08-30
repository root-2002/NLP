import { fetchData } from './apiHandler';

document.getElementById('textForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const textInput = document.getElementById('textInput').value;

    if (textInput) {
        const result = await fetchData(textInput);
        document.getElementById('result').innerText = `Polarity: ${result.polarity}, Subjectivity: ${result.subjectivity}, Text: ${result.text}`;
    } else {
        alert('Please enter some text!');
    }
});
