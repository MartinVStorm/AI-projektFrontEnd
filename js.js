document.getElementById('summarizeBtn').addEventListener('click', summarizeText);

async function summarizeText() {
    const input = document.getElementById('inputText').value.trim();
    const summaryBox = document.getElementById('summaryBox');

    if (!input) {
        summaryBox.style.display = 'block';
        summaryBox.textContent = 'Please enter some text to summarize!';
        return;
    }

    summaryBox.style.display = 'block';
    summaryBox.textContent = 'Summarizing...';

    try {
        const response = await fetch('http://localhost:8080/api/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: input })
        });

        const data = await response.json();
        summaryBox.textContent = data.summary;
    } catch (error) {
        summaryBox.textContent = 'Error: Something went wrong';
        console.error(error);
    }
}
