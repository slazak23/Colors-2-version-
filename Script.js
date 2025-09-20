document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons with the class 'color-button'
    const colorButtons = document.querySelectorAll('.color-button');

    // Define the hex codes for colors. These should match your desired iPhone colors.
    // Ensure these names match the 'data-color' attributes in your index.html buttons.
    const colorHexMap = {
        "Cosmic Orange": "#FF5A00", // Example hex for Cosmic Orange
        "Deep Blue": "#004D7F",     // Example hex for Deep Blue
        "Silver": "#E8E8E8"         // Example hex for Silver
    };

    // Loop through each color button to add an event listener
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Optional: Remove 'active' class from all buttons for visual feedback
            // This makes sure only the most recently clicked button has the highlight
            colorButtons.forEach(btn => btn.classList.remove('active'));

            // Optional: Add 'active' class to the clicked button to highlight it
            button.classList.add('active');

            // Get the color name from the 'data-color' attribute of the clicked button
            const selectedColorName = button.getAttribute('data-color');

            // Look up the corresponding hex code from our map
            const selectedHexColor = colorHexMap[selectedColorName];

            // Check if a valid hex color was found
            if (selectedHexColor) {
                // If found, navigate to 'detail.html'
                // We pass the color name and hex code as URL parameters (query strings)
                // encodeURIComponent is used to ensure special characters in the color name are handled correctly
                window.location.href = `detail.html?color=${encodeURIComponent(selectedColorName)}&hex=${encodeURIComponent(selectedHexColor)}`;
            } else {
                // If a color name from the button wasn't found in our map, log an error
                console.error("Color not found in map:", selectedColorName);
                alert("Could not find color details. Please try again."); // User-friendly alert
            }
        });
    });
});
