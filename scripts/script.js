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

const afbeeldingen = [{
        img: "../images/new-york-city.png",
        text: "A neoclassicism oil painting of new york",
    },

    {
        img: "../images/medieval-times.png",
        text: "A Medieval fantasy world with dragons and Castle",
    },

    {
        img: "../images/mermaid-shopping-1.png",
        text: "A digital art of a mermaid shopping in new york city during the night with alot of stars",
    },
    {
        img: "../images/mermaid-shopping-2.png",
        text: "A realism painting of a mermaid shopping in new york city during the night with alot of stars",
    },
    {
        img: "../images/old-city.png",
        text: "A neoclassism oil painting of a city",
    },
    {
        img: "../images/old-nyc.png",
        text: "A neoclassism oil painting of a city",
    },
    {
        img: "../images/superwoman-comic.png",
        text: "A woman in a super hero comstume flying through the sky, pop art",
    },
    {
        img: "../images/sushi-head.png",
        text: "An sushi head holding a fork standing on a bed, neoclassism painting",
    },
    {
        img: "../images/sushi-with-fork.png",
        text: "An sushi head holding a fork standing on a bed, neoclassism painting",
    }


]

const afbeeldingContainer = document.getElementById("image");
var button = document.querySelector("button");

button.addEventListener('click', (evt) => {

    var a = Math.floor(Math.random() * afbeeldingen.length);
    var imge = afbeeldingen[a];
    afbeeldingContainer.innerHTML =
        '<img src="' + imge.img + '">' +
        '<p>' + imge.text + '</p>';
});