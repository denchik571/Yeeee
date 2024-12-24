alert ("=) АКТИВАЦИЯ ПОДАРОЧНОГО СОБЫТИЯ! НАЖМИТЕ (ОК) =)")
function updateTimer() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    const diff = newYear - now;
  
    if (diff <= 0) {
        document.querySelector('.timer-container').innerHTML = 
            "<h2></h2>";
        return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);


        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerText = '❄ %'; 

            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.fontSize = Math.random() * 30 + 30 + 'px';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 

            document.body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }

        setInterval(createSnowflake, 200);

let wishes = [
    "На Покупку Lexus",
    "На Покупку NISSAN",
    "На Покупку TOYOTA",
    "УПС...ПУСТО",
    "УПС...ПУСТО",
    "На Покупку MITSUBISHI",
];

const gifts = document.querySelectorAll('.gift');

gifts.forEach(gift => {
gift.addEventListener('click', () => {

    if (!gift.classList.contains('opened')) {

        gift.classList.add('opened');

        if (wishes.length > 0) {
            const randomIndex = Math.floor(Math.random() * wishes.length);
            const randomWish = wishes[randomIndex];

            const message = gift.querySelector('.message');
            message.textContent = randomWish;

            wishes.splice(randomIndex, 1);
        } else {
            const message = gift.querySelector('.message');
            message.textContent = "Все подарки уже открыты!";
        }
    }
});
});


function askUser() {
    const input = document.getElementById("placeInput").value.toLowerCase();
    const response = document.getElementById("response");

    if (input === "") {
        response.innerText = "";
    } else if (input === "") {
        response.innerText = "";
    } else if (input === "") {
        response.innerText = ".";
    } else if (input === "") {
        response.innerText = "Пожалуйста, введите место!";
    } else {
        response.innerText = `Слушате это интересный выбор! Давайте свяжемся в 2025 по поводу приобретения -   ${input}.`;
    }
}

function openEnvelope(envelope, congratsText) {
    if (!envelope.classList.contains("opened")) {
        envelope.classList.add("opened");

        const congratsDiv = document.getElementById("congrats");
        congratsDiv.textContent = congratsText;
    }
}

const snowflake = document.getElementById('snowflake');

   
    function moveSnowflake(event) {
        const x = event.clientX; 
        const y = event.clientY; 
       
        snowflake.style.transform = `translate(${x}px, ${y}px)`;
    }

    
    document.addEventListener('mousemove', moveSnowflake);