const cards = document.getElementsByClassName('card');
const videos = document.querySelectorAll('video');

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let video = videos[i];
    
    card.addEventListener('mouseenter', () => {
        video.play()
    })

    card.addEventListener('mouseleave', () => {
        video.pause()
    })
}
