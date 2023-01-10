console.log("Hello world");

// const afbeeldingen = [
// 'url("../images/new-york-city.png")', 'url("../images/medieval-times.png")', 'url("../images/mermaid-shopping-1.png")', 'url("../images/mermaid-shopping-2.png")',
//  'url("../images/old-city.png")', 'url("../images/old-nyc.png")', 'url("../images/superwoman-comic.png")',
// 'url("../images/sushi-head.png")', 'url("../images/sushi-with-fork.png")']

// const afbeeldingContainer = document.getElementById("image");
// var button = document.querySelector("button");

// button.addEventListener('click', (evt) => {
//     var a = Math.floor(Math.random() * afbeeldingen.length);
//     var img = afbeeldingen[a];
//     afbeeldingContainer.style.backgroundImage = img;
// });

const afbeeldingen = [
    'url("../images/new-york-city.png")', 'url("../images/medieval-times.png")', 'url("../images/mermaid-shopping-1.png")', 'url("../images/mermaid-shopping-2.png")',
    'url("../images/old-city.png")', 'url("../images/old-nyc.png")', 'url("../images/superwoman-comic.png")',
    'url("../images/sushi-head.png")', 'url("../images/sushi-with-fork.png")'
]

const afbeeldingContainer = document.getElementById("image");
var button = document.querySelector("button");

button.addEventListener('click', (evt) => {
    var a = Math.floor(Math.random() * afbeeldingen.length);
    var img = afbeeldingen[a];
    afbeeldingContainer.style.backgroundImage = img;
});