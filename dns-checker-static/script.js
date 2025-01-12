document.getElementById('dns-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const domain = document.getElementById('domain').value;
    const recordType = document.getElementById('type').value;
    const output = document.getElementById('output');
    const resultDiv = document.getElementById('result');
    
    // Clear previous result
    output.textContent = 'Loading...';
    resultDiv.style.display = 'none';  // Hide the result div while loading

    try {
        const response = await fetch(`https://dns.google/resolve?name=${domain}&type=${recordType}`);
        const data = await response.json();

        if (data.Status !== 0) {
            throw new Error('Error resolving DNS records');
        }

        // Display DNS records
        if (data.Answer) {
            // Format the result
            const formattedResult = formatResult(data.Answer);
            output.innerHTML = formattedResult;
            resultDiv.style.display = 'block';  // Show result div
        } else {
            output.textContent = 'No records found.';
            resultDiv.style.display = 'block';
        }
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
        resultDiv.style.display = 'block';
    }
});

function formatResult(records) {
    return records.map(record => {
        return `
            <div class="record">
                <p><strong>Type:</strong> ${record.type}</p>
                <p><strong>Data:</strong> ${record.data}</p>
            </div>
        `;
    }).join('');
}
