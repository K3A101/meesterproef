// Robot animation
var robotAnimation = bodymovin.loadAnimation({
    container: document.getElementById('robot-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: './animaties/robot-animation.json'
})
