document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-button");
    generateButton.addEventListener("click", generateCommaSeparated);

    function generateCommaSeparated() {
        const inputText = document.getElementById("input-text").value;
        const ipLines = inputText.split("\n");

        const validIps = ipLines.map(line => line.split(" ")[0])
            .filter(ip => isValidIp(ip));

        const commaSeparatedIps = validIps.join(",");
        document.getElementById("output-text").value = commaSeparatedIps;
    }

    function isValidIp(ip) {
        const parts = ip.split(".");
        return parts.length === 4 && parts.every(part => !isNaN(part) && parseInt(part) >= 0 && parseInt(part) <= 255);
    }
});
document.addEventListener("DOMContentLoaded", 
    function ()  {
    const generateButton = document.getElementById("generate-button");
    generateButton.addEventListener("click", generateCommaSeparated);

    // Toggle between light and dark modes
   

    function generateCommaSeparated() {
        // Your existing code for generating comma-separated IPs
    }

    function isValidIp(ip) {
        // Your existing code for validating IP addresses
    }

	
});

