document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById("chatbox");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            sendMessage(messageText);
            messageInput.value = "";
        }
    });


    function sendMessage(message) {
        const messageElement = document.createElement("p");
        messageElement.textContent = message;
        messageElement.classList.add("message"); // Adiciona a classe "message" à mensagem
        messageElement.style.paddingLeft = "50px"; // Adiciona padding-left
        messageElement.style.textAlign = "right"; // Alinha o texto à direita
        chatbox.appendChild(messageElement);
    
        receiveMessage("Mensagem da outra pessoa.");
    }
    

    function receiveMessage(message) {
        const messageElement = document.createElement("p");
        messageElement.textContent = message;
        messageElement.classList.add("message"); // Adiciona a classe "message" à mensagem
        chatbox.appendChild(messageElement);
    }
});
