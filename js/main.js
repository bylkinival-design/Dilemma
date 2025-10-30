var score = document.getElementById("score-text");

function scoreplus(tag) {
    score.innerHTML++;
    tag.classList.add('click-animation', 'clicked');
    setTimeout(() => {
        tag.classList.remove('click-animation');
    }, 30);
}
