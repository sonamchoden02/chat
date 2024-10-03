// darkMode.js

// Select the dark mode toggle button from the chatbot modal
const nightModeBtn = document.querySelector('.nightmode');

// Check if dark mode is already enabled from previous page loads
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if (nightModeBtn) {
        nightModeBtn.src = 'img/lightzone.svg';  // Switch icon to light mode
    }

    // Inform the parent page to also switch to dark mode
    if (window.parent) {
        window.parent.postMessage({ mode: 'dark' }, '*');
    }
}

// Add an event listener to toggle dark mode
if (nightModeBtn) {
    nightModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            nightModeBtn.src = 'img/lightzone.svg';  // Path to lightzone icon
            localStorage.setItem('darkMode', 'enabled');

            // Inform the parent page to switch to dark mode
            if (window.parent) {
                window.parent.postMessage({ mode: 'dark' }, '*');
            }
        } else {
            nightModeBtn.src = 'img/darkzone.svg';  // Path to darkzone icon
            localStorage.setItem('darkMode', 'disabled');

            // Inform the parent page to switch to light mode
            if (window.parent) {
                window.parent.postMessage({ mode: 'light' }, '*');
            }
        }
    });
}

// Listen for messages from the iframe in the parent page (index.html)
window.addEventListener('message', function(event) {
    if (event.data.mode === 'dark') {
        document.body.classList.add('dark-mode');
        if (nightModeBtn) {
            nightModeBtn.src = 'img/lightzone.svg';  // Switch to lightzone icon
        }
    } else if (event.data.mode === 'light') {
        document.body.classList.remove('dark-mode');
        if (nightModeBtn) {
            nightModeBtn.src = '../img/darkzone.svg';  // Switch to darkzone icon
        }
    }
});

// Handle private chat button click
const privateChatBtn = document.getElementById("privateChatBtn");
if (privateChatBtn) {
    privateChatBtn.addEventListener("click", function() {
        window.location.href = "hello.html"; // Redirects to hello.html
    });
}
