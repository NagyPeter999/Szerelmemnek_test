const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;
let isFloating = false;

noBtn.addEventListener("click", () => {

    // YES nő
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    // első katt után fixed lesz
    if (!isFloating) {
        noBtn.style.position = "fixed";
        noBtn.style.zIndex = "999";

        // aktuális helyről induljon
        const rect = noBtn.getBoundingClientRect();
        noBtn.style.left = rect.left + "px";
        noBtn.style.top = rect.top + "px";

        isFloating = true;
    }

    moveNoButton();
});

function moveNoButton() {

    const padding = 20;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const maxX = screenWidth - btnWidth - padding;
    const maxY = screenHeight - btnHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// 3️⃣ IGEN gomb kattintás → második oldal
yesBtn.addEventListener("click", () => {
    document.querySelector(".first-page").classList.remove("active");
    document.querySelector(".second-page").classList.add("active");
    music.play();

    // TÉNYLEG?? gomb
    document.getElementById("reallyBtn").addEventListener("click", finalPage);
});

// 4️⃣ Végső oldal + konfetti
function finalPage() {
    document.querySelector(".second-page").classList.remove("active");
    document.querySelector(".final-page").classList.add("active");

    setInterval(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            shapes: ['heart'],
            colors: ['#ff4d88', '#ffb6c1', '#fff']
        });
    }, 500);
}


