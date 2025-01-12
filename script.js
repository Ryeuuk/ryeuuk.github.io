document.getElementById('extractButton').addEventListener('click', function () {
    const text = document.getElementById('textInput').value;
    const ipRegex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
    const ips = text.match(ipRegex);

    const outputElement = document.getElementById('output');
    const copyButton = document.getElementById('copyButton');

    if (ips) {
        outputElement.innerText = ips.join('\n');
        copyButton.classList.remove('hidden');  // Show the Copy button
    } else {
        outputElement.innerText = 'No IPs found.';
        copyButton.classList.add('hidden');  // Hide the Copy button if no IPs are found
    }
});

document.getElementById('copyButton').addEventListener('click', function () {
    const outputText = document.getElementById('output').innerText;
    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert('IPs copied to clipboard!');
        })
        .catch(err => {
            alert('Failed to copy text: ', err);
        });
});
