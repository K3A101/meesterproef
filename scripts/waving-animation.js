var zwaaienAnimatie = bodymovin.loadAnimation({
    container: document.getElementById('waving-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: './animaties/waving-animation.json'
})