// script.js

document.getElementById('dns-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const domain = document.getElementById('domain').value;
    const recordType = document.getElementById('type').value;
    const output = document.getElementById('output');
    const resultDiv = document.getElementById('result');
    
    // Clear previous result
    output.textContent = 'Loading...';

    try {
        const response = await fetch(`https://dns.google/resolve?name=${domain}&type=${recordType}`);
        const data = await response.json();

        if (data.Status !== 0) {
            throw new Error('Error resolving DNS records');
        }

        // Display DNS records
        if (data.Answer) {
            output.textContent = JSON.stringify(data.Answer, null, 2);
        } else {
            output.textContent = 'No records found.';
        }
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
});
