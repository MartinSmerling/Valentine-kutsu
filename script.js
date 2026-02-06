const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noClickCount = 0;

noBtn.addEventListener("click", () => {
    noClickCount++;

    if (noClickCount === 1) {
        noBtn.textContent = "Tämä ei ole vaihtoehto";
        yesBtn.style.transform = "scale(1.2)";
    } else if (noClickCount === 2) {
        noBtn.textContent = "Tämä ei ole edelleenkään vaihtoehto";
        yesBtn.style.transform = "scale(1.4)";
    } else if (noClickCount === 3) {
        noBtn.textContent = "Nyt ***** painat sitä toista näppäintä!";
        yesBtn.style.transform = "scale(1.6)";
    }
});

yesBtn.addEventListener("click", () => {
    alert("Jes!! 💕Nähdään 14. päivä rakkain ja pidetää hauskaa!💘");
});
