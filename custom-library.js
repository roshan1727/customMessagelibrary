
// CSS styles for the message card
const styles = `
.message-card {
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    animation: cheer-up 1s ease-in-out;
}

@keyframes cheer-up {
    0% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
`;

// Inject the styles into the document head
const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);

// Function to create a message card with a cheer-up animation
function createMessageCard(message) {
    const card = document.createElement('div');
    card.classList.add('message-card');
    card.textContent = message;
    return card;
}

// Exporting the function for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        createMessageCard: createMessageCard
    };
}
