$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(openLetter);
    btn_open.click(openLetter);
    btn_reset.click(closeLetter);

    function openLetter() {

        envelope.addClass("open").removeClass("close");

        setTimeout(function () {

            const main = document.getElementById("mainContent");

            main.style.display = "block";

            setTimeout(() => {
                main.classList.add("show");
            }, 50);

            const letter = document.getElementById("letterPart");
            letter.style.transition = "opacity 1s ease";
            letter.style.opacity = "0";

            setTimeout(() => {
                letter.style.display = "none";
            }, 1000);

        }, 1800);
    }

    function closeLetter() {
        envelope.addClass("close").removeClass("open");
    }

});
;


