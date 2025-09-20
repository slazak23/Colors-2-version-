document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-button');
    const promptText = document.querySelector('.prompt-text');

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            colorButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            button.classList.add('active');

            // You can add more functionality here, like displaying a message
            const selectedColor = button.getAttribute('data-color');
            console.log(`User selected: ${selectedColor}`);
            
            // For this simple example, we'll just log to the console.
            // In a real app, you might show a preview image or update a product page.
        });
    });
});
