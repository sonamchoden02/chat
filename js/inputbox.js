const chatInput = document.getElementById('dynamicInput');
const inputBox = document.querySelector('.input-box');

chatInput.addEventListener('input', () => {
    // Reset height to allow shrinkage
    chatInput.style.height = 'auto';
    
    // Set the height based on the scroll height
    chatInput.style.height = `${chatInput.scrollHeight}px`;
    
    // Adjust the border color based on input length
    const inputLength = chatInput.value.length;
    if (inputLength > 0) {
        inputBox.style.borderColor = '#FF086B'; // Change border color when typing
    } else {
        inputBox.style.borderColor = '#FF086B'; // This could be a default color if needed
    }
});
