document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-button');

    // Define the hex codes AND image URLs for each color
    // YOU WILL NEED TO FIND AND REPLACE THESE 'YOUR_IMAGE_URL_HERE' LINKS
    const colorDetailsMap = {
        "Cosmic Orange": {
            hex: "#FF5A00",
            imageUrl: "https://idream.pl/images/thumbnails/4889/4000/detailed/114/iPhone_17_Pro_Cosmic_Orange_PDP_Image_Position_1__pl-PL_llik-3v.jpg"// REPLACE THIS
        },
        "Deep Blue": {
            hex: "#004D7F",
            imageUrl: "https://idream.pl/images/detailed/114/iPhone_17_Pro_Deep_Blue_PDP_Image_Position_1__pl-PL_lsfy-yv.jpg"   // REPLACE THIS
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
