document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-button');

    // Define the hex codes AND image URLs for each color
    // YOU WILL NEED TO FIND AND REPLACE THESE 'YOUR_IMAGE_URL_HERE' LINKS
    const colorDetailsMap = {
        "Cosmic Orange": {
            hex: "#FF5A00",
            imageUrl: "https://www.apple.com/v/iphone-17-pro/a/images/overview/colors/iphone-17-pro-cosmic-orange_screen__abcd.png" // REPLACE THIS
        },
        "Deep Blue": {
            hex: "#004D7F",
            imageUrl: "https://www.apple.com/v/iphone-17-pro/a/images/overview/colors/iphone-17-pro-deep-blue_screen__efgh.png"   // REPLACE THIS
        },
        "Silver": {
            hex: "#E8E8E8",
            imageUrl: "https://www.scandinavianphoto.dk/globalassets/1103950_iphone17pro_silver_1.jpg?ref=09ECE31E15&w=960&h=960&mode=max"       // REPLACE THIS
        }
    };

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            colorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedColorName = button.getAttribute('data-color');
            const selectedColorInfo = colorDetailsMap[selectedColorName]; // Get the whole object

            if (selectedColorInfo && selectedColorInfo.imageUrl) {
                // Navigate to the detail page, passing color name AND image URL
                window.location.href = `detail.html?color=${encodeURIComponent(selectedColorName)}&imageUrl=${encodeURIComponent(selectedColorInfo.imageUrl)}`;
            } else {
                console.error("Color details or image URL not found for:", selectedColorName);
                alert("Could not find image for this color. Please try again.");
            }
        });
    });
});
