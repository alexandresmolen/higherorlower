//
//  Tableau avec les options, j'ai séparé la valeur en chiffres et le string puisque j'ai pas trouvé d'autres moyens de faire marcher le jeu en ayant les valeurs à comparer en string.
//
const options = [
    {
        name: "“Missing persons”",
        popularityvalue: 49500,
        popularity: "49,500",
        imgURL: "images/missing-persons.jpg",
    },
    {
        name: "“Qatar Airways”",
        popularityvalue: 2740000,
        popularity: "2,740,000",
        imgURL: "images/qatar-airways.jpg",
    },
    {
        name: "“The Shawshank Redemption”",
        popularityvalue: 550000,
        popularity: "550,000",
        imgURL: "images/the-shawshank-redemption.jpg",
    },
    {
        name: "“Qatar”",
        popularityvalue: 1830000,
        popularity: "1,830,000",
        imgURL: "images/qatar.jpg",
    },
    {
        name: "“Escalade de Rochers”",
        popularityvalue: 165000,
        popularity: "165,000",
        imgURL: "images/rock-climb.jpg",
    },
    {
        name: "“Six Nations”",
        popularityvalue: 135000,
        popularity: "135,000",
        imgURL: "images/six-nations.jpg",
    },
    {
        name: "“Bee Gees”",
        popularityvalue: 324000,
        popularity: "324,000",
        imgURL: "images/bee-gees.jpg",
    },
    {
        name: "“Muscu”",
        popularityvalue: 2240000,
        popularity: "2,240,000",
        imgURL: "images/gym.jpg",
    },
    {
        name: "“Stonehenge”",
        popularityvalue: 673000,
        popularity: "673,000",
        imgURL: "images/stonehenge.jpg",
    },
    {
        name: "“Loréal”",
        popularityvalue: 823000,
        popularity: "823,000",
        imgURL: "images/loreal.jpg",
    },
    {
        name: "“Joe Rogan Experience”",
        popularityvalue: 54000,
        popularity: "54,000",
        imgURL: "images/joe-rogan-experience.jpg",
    },
    {
        name: "“Bradley Cooper”",
        popularityvalue: 1000000,
        popularity: "1,000,000",
        imgURL: "images/bradley-cooper.jpg",
    },
    {
        name: "“Secret Garden”",
        popularityvalue: 90500,
        popularity: "90,500",
        imgURL: "images/the-secret-garden.jpg",
    },
    {
        name: "“Ford”",
        popularityvalue: 4090000,
        popularity: "4,090,000",
        imgURL: "images/ford.jpg",
    },
    {
        name: "“Démocracie”",
        popularityvalue: 450000,
        popularity: "450,000",
        imgURL: "images/democracy.jpg",
    },
    {
        name: "“Rosa Parks”",
        popularityvalue: 455000,
        popularity: "455,000",
        imgURL: "images/rosa-parks.jpg",
    },
    {
        name: "“Home Insurance”",
        popularityvalue: 350000,
        popularity: "350,000",
        imgURL: "images/home-insurance.jpg",
    },
];

// Variables qui détiennent le score

let score = 0;
let round = 0;

// On définit la fonction showOptions
// La fonction choisit deux options aléatoirement, tout en verifiant que les deux options ne sont pas les memes
// La fonction assigne donc l'attribut src aux images
// Et met a jour le innerHTML en mettant le texte lié à l'option
// Et à la fin elle retourne les deux options
const showOptions = () => {
    let option1 = options[Math.floor(Math.random() * options.length)];
    let option2 = options[Math.floor(Math.random() * options.length)];
    while (option1 === option2) {
        option2 = options[Math.floor(Math.random() * options.length)];
    }
    document.getElementById("option1-img").setAttribute("src", option1.imgURL);
    document.getElementById("option2-img").setAttribute("src", option2.imgURL);
    document.getElementById("option1-name").innerHTML = option1.name;
    document.getElementById("option2-name").innerHTML = option2.name;
    document.getElementById("option1-popularity").innerHTML =
        option1.popularity;
    return { option1, option2 };
};

let { option1, option2 } = showOptions();

// Boucle de condition
// Quand on clique une nouvelle manche commence
// Si on clique et "option 2" est plus populaire que "option 1" ALORS c'est Juste! et on incremente le score de 1
// Sinon c'est Faux!

document.getElementById("guessHigher").addEventListener("click", () => {
    round++;
    if (option2.popularityvalue > option1.popularityvalue) {
        score++;
        document.getElementById("result").innerHTML = "Juste!";
    } else {
        document.getElementById("result").innerHTML = "Faux!";
    }
    document.getElementById("score").innerHTML = `Score: ${score}`;
    ({ option1, option2 } = showOptions());
});

// Boucle de condition
// Quand on clique une nouvelle manche commence
// Si on clique et "option 2" est moins populaire que "option 1" ALORS c'est Juste! et on incremente le score de 1
// Sinon c'est Faux!

document.getElementById("guessLower").addEventListener("click", () => {
    round++;
    if (option2.popularityvalue < option1.popularityvalue) {
        score++;
        document.getElementById("result").innerHTML = "Juste!";
    } else {
        document.getElementById("result").innerHTML = "Faux!";
    }
    document.getElementById("score").innerHTML = `Score: ${score}`;
    ({ option1, option2 } = showOptions());
});

const button1 = document.querySelector("#guessHigher");

//On séléctionne un élément avec l'id de "bouton" à l'aide de querySelector() en le liant à notre variable button.
//Ensuite on ajoute un event listener au bouton et à l'intérieur de sa fonction pour écouter le mouseover.
//Quand l'evenement se produit on change le scale du bouton et on ajoute la classe .buttonanimation.

button1.addEventListener("mouseover", () => {
    button1.animate([{ transform: "scale(1)" }, { transform: "scale(1.1)" }], {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards",
    });
    button1.classList.add("buttonanimation");
});

//On séléctionne un élément avec l'id de "bouton" à l'aide de querySelector() en le liant à notre variable button.
//Ensuite on ajoute un event listener au bouton et à l'intérieur de sa fonction pour écouter le mouseout.
//Quand l'evenement se produit on change le scale du bouton et on supprime la classe .buttonanimation.

button1.addEventListener("mouseout", () => {
    button1.animate([{ transform: "scale(1.2)" }, { transform: "scale(1)" }], {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards",
    });
    button1.classList.remove("buttonanimation");
});

// ANIMATION BOUTON

const button2 = document.querySelector("#guessLower");

//On séléctionne un élément avec l'id de "bouton" à l'aide de querySelector() en le liant à notre variable button.
//Ensuite on ajoute un event listener au bouton et à l'intérieur de sa fonction pour écouter le mouseover.
//Quand l'evenement se produit on change le scale du bouton et on ajoute la classe .buttonanimation.

button2.addEventListener("mouseover", () => {
    button2.animate([{ transform: "scale(1)" }, { transform: "scale(1.1)" }], {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards",
    });
    button2.classList.add("buttonanimation");
});

//On séléctionne un élément avec l'id de "bouton" à l'aide de querySelector() en le liant à notre variable button.
//Ensuite on ajoute un event listener au bouton et à l'intérieur de sa fonction pour écouter le mouseout.
//Quand l'evenement se produit on change le scale du bouton et on supprime la classe .buttonanimation.

button2.addEventListener("mouseout", () => {
    button2.animate([{ transform: "scale(1.2)" }, { transform: "scale(1)" }], {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards",
    });
    button2.classList.remove("buttonanimation");
});

// Oui j'ai fait deux fonctions pour les deux boutons parceque j'avais plus de temps de réfléchir.
