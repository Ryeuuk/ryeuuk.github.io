document.getElementById('extractButton').addEventListener('click', function () {
    const text = document.getElementById('textInput').value;
    const ipRegex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
    const ips = text.match(ipRegex);

    const outputElement = document.getElementById('output');
    const copyButton = document.getElementById('copyButton');

    if (ips) {
        outputElement.innerText = ips.join('\n');
        copyButton.classList.remove('hidden');
        showToast("IPs extracted successfully!", "success");
    } else {
        outputElement.innerText = 'No IPs found.';
        copyButton.classList.add('hidden');
        showToast("No IPs found in the provided text.", "warning");
    }
});

document.getElementById('copyButton').addEventListener('click', function () {
    const outputText = document.getElementById('output').innerText;
    navigator.clipboard.writeText(outputText)
        .then(() => {
            showToast("IPs copied to clipboard!", "success");
        })
        .catch(err => {
            showToast("Failed to copy IPs: " + err, "error");
        });
});

function showToast(message, type) {
    let backgroundColor;
    switch (type) {
        case "success":
            backgroundColor = "#28a745";  // Green
            break;
        case "warning":
            backgroundColor = "#ffc107";  // Yellow
            break;
        case "error":
            backgroundColor = "#dc3545";  // Red
            break;
    }

    Toastify({
        text: message,
        duration: 3000,
        gravity: "top", 
        position: "right", 
        backgroundColor: backgroundColor,
        close: true
    }).showToast();
}
