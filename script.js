
document.getElementById('extractButton').addEventListener('click', function () {
    const text = document.getElementById('textInput').value;
    const ipRegex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
    const ips = text.match(ipRegex);

    const outputElement = document.getElementById('output');
    outputElement.innerText = ips ? ips.join('\n') : 'No IPs found.';
});
