let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");


let timeCount = timerEl.textContent;
let counterTime = timeCount;

let counterId = setInterval(function() {
    counterTime = counterTime - 1;
    timerEl.textContent = counterTime;
    if (counterTime === 0) {
        timerEl.textContent = "BOOM!!!";
        clearInterval(counterId);
        document.getElementById("bompChange").src = "https://res.cloudinary.com/db1wgxylb/image/upload/v1711627121/1000039838-removebg-preview_pauozd.png";
        document.getElementById("succesImage").src = "https://res.cloudinary.com/db1wgxylb/image/upload/v1711626931/1000039839-removebg-preview_ggoiv6.png";
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let bompDefuseConent = event.target.value;
    if (event.key === "Enter" && bompDefuseConent === "defuse" && counterTime !== 0) {
        timerEl.textContent = "Succesfully Defused.";
        clearInterval(counterId);
        document.getElementById("bompChange").src = "https://res.cloudinary.com/db1wgxylb/image/upload/v1711626918/1000039840-removebg-preview_t96jhn.png";
        document.getElementById("succesImage").src = "https://res.cloudinary.com/db1wgxylb/image/upload/v1711626909/1000039841-removebg-preview_thmce2.png";
    }
});