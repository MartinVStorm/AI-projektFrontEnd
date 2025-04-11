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

    /*
    Ændre nok endpointed og fetch afhængigt af hvad det bliver til sidst
    encodeURIComponent er nødvendig fordi text'en bliver sendt tilbage som et link.
     */
    try {
        const response = await fetch(`http://localhost:8080/summerize?text=${encodeURIComponent(input)}`);
        const aiResponse = await response.text();
        summaryBox.textContent = aiResponse;
    } catch (error) {
        summaryBox.textContent = 'Error: Something went wrong';
    }
}