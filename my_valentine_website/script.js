const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
let scale = 1;
const messages = [
    "Are you sure?",
    "Really sure?",
    "Are you positive???",
    "Pookie please",
    "Just think about it",
    "I'll be very sad",
    "I'll be very very sad",
    "Ok fine. I'll stop asking",
    "Just kidding, PLEASE SAY YES",
    "I'll be very very very sad",
    "You're breaking my heart",
    "Ok fine. I'll stop asking",
    "Just kidding, PLEASE SAY YES",
    "I'll be very very very very sad",
    "You're breaking my heart",
    "This is your last chance, okay?",
    "One more chance for u only, okay???",
    "I can't stop thinking about you.",
    "Being with you would be a dream come true.",
    "You're the missing piece in my life's puzzle.",
    "Our future together looks so bright, don't you think?",
    "I promise to make you smile every day if you say yes.",
    "I've waited for this moment my whole life.",
    "You have a special place in my heart, please say yes.",
    "I can't imagine my life without you in it.",
    "Let's create å memories together.",
    "You're the reason for my happiness.",
    
];
let messageIndex = 0;
yesButton.addEventListener('click', function() {
    const resultHTML = `
        <img src="pic2.gif" alt="Yesbutton" />
        <div class="ok-text">Ok yay!!!</div>
    `;
    document.body.innerHTML = resultHTML;
});

noButton.addEventListener('click', function() {
    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex++];
        const newWidth = yesButton.offsetWidth * 1.1; 
        const newHeight = yesButton.offsetHeight * 1.1; 

        const yesButtonContainer = document.querySelector('.yes-button-container');
        yesButtonContainer.style.width = `${newWidth}px`;
        yesButtonContainer.style.height = `${newHeight}px`;
        
     
        noButton.style.transform = `translateY(${newHeight}px)`;
        const question = document.querySelector('h1');
        const gif = document.querySelector('img');
        question.style.transform = `translateY(${newHeight}px)`;
        gif.style.transform = `translateY(${newHeight}px)`;
    } else {
        messageIndex = 0;
        noButton.textContent = "Are u seriousss???";
    }
});