const chatMessageTextBox = document.getElementById("chatMessageTextBox");
const usernameTextBox = document.getElementById("usernameTextBox");
const sendMessageButton = document.getElementById("sendMessageButton");
const messagesUL = document.getElementById("messagesUL");
const getBackButton = document.getElementById("goBackButton");
const userCountSpan = document.getElementById("userCount");

getBackButton.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/index");
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Redirect to the index page
      window.location.href = "/index";
    } else {
      console.log("Error:", xhr.status);
    }
  };
  socket.emit("General-Left");
});

sendMessageButton.addEventListener("click", () => {
  const username = usernameTextBox.value;
  const chatMessage = chatMessageTextBox.value;
  socket.emit("General", { username: username, message: chatMessage });
});

socket.on("General-Joined", (chatMessages) => {
  const chatMessagesItems = chatMessages.map((chatMessage) => {
    return `<li>${chatMessage.username}: ${chatMessage.message}</li>`;
  });

  messagesUL.innerHTML = chatMessagesItems.join("");
});

socket.on("General", (chat) => {
  const chatMessageLI = `<li>${chat.username}: ${chat.message}</li>`;
  messagesUL.insertAdjacentHTML("beforeend", chatMessageLI);
});

socket.on("General-Left", (count) => {
  userCountSpan.innerText = count.length;
});
