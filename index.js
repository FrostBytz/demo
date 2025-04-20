// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Find the paragraph element with the id 'copyright'
    const copyrightElement = document.getElementById('copyright');

    // Update the text content of the element
    if (copyrightElement) { // Check if the element exists
        copyrightElement.textContent = `© ${currentYear} Charlie's Food Truck. All Rights Reserved.`;
    }

    // You can add more interactive elements here later
    // For example: image carousel logic, form validation, map integration etc.
    console.log("Charlie's Food Truck website script loaded.");

});