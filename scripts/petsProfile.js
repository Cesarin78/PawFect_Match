// petsProfile.js

// ------------------ Dog Data ------------------
const dogs = {
    lobito: {
        images: ["images/IMG_5946.jpg", "images/dog1-2.jpg"],
        name: "Lobito",
        breed: "German Shepherd",
        size: "Medium",
        gender: "Male",
        price: "$500",
        desc: "Playful and full of energy, Lobito loves cuddles and learning new tricks."
    },
    kiara: {
        images: ["images/IMG_5085.jpg", "images/kiara-2.jpg"],
        name: "Kiara",
        breed: "Pitbull",
        size: "Medium",
        gender: "Female",
        price: "$450",
        desc: "Sweet and gentle, Kiara gets along great with kids and loves belly rubs."
    },
    sia: {
        images: ["images/IMG_6186.JPG", "images/sia-2.jpg"],
        name: "Sia",
        breed: "Pitbull",
        size: "Small",
        gender: "Female",
        price: "$400",
        desc: "Tiny but mighty! Sia needs a patient family to help her grow into her paws."
    },
    osito: {
        images: ["images/IMG_1954.jpg", "images/osito-2.jpg"],
        name: "Osito",
        breed: "Great Pyrenees",
        size: "Large",
        gender: "Male",
        price: "$700",
        desc: "A gentle giant who loves the outdoors and being by your side all day long."
    },
    bruno: {
        images: ["images/dog.jpeg", "images/bruno-2.jpg"],
        name: "Bruno",
        breed: "Chihuahua mix",
        size: "Small",
        gender: "Male",
        price: "$350",
        desc: "Energetic and smart, Bruno is fully vaccinated and ready for his new family."
    },
    luna: {
        images: ["images/dog2.jpeg", "images/luna-2.jpg"],
        name: "Luna",
        breed: "Chihuahua",
        size: "Small",
        gender: "Female",
        price: "$400",
        desc: "Luna loves long walks and making friends with everyone she meets at the park."
    },
    max: {
        images: ["https://placedog.net/500/350?id=1", "https://placedog.net/500/350?id=2"],
        name: "Max",
        breed: "Poodle mix",
        size: "Medium",
        gender: "Male",
        price: "$600",
        desc: "Max is a social butterfly who gets along with every person and pet he meets."
    },
    bella: {
        images: ["https://placedog.net/500/350?id=5", "https://placedog.net/500/350?id=6"],
        name: "Bella",
        breed: "Husky",
        size: "Large",
        gender: "Female",
        price: "$650",
        desc: "Intelligent and athletic, Bella thrives with an active owner who loves the outdoors."
    },
};

// ------------------ Get Dog Key from URL ------------------
const params = new URLSearchParams(window.location.search);
const dogKey = params.get("dog"); // e.g., ?dog=lobito
const dog = dogs[dogKey];

// ------------------ Image Index Tracker ------------------
let index = 0;

// ------------------ Populate Page Dynamically ------------------
if(dog) {
    const productImage = document.getElementById("productImage");
    const dogName = document.getElementById("dogName");
    const dogBreed = document.getElementById("dogBreed");
    const dogSize = document.getElementById("dogSize");
    const dogGender = document.getElementById("dogGender");
    const dogPrice = document.getElementById("dogPrice");
    const dogDesc = document.getElementById("dogDesc");

    // Initial display
    productImage.src = dog.images[index];
    dogName.innerText = dog.name;
    dogBreed.innerText = dog.breed;
    dogSize.innerText = dog.size;
    dogGender.innerText = dog.gender;
    dogPrice.innerText = dog.price;
    dogDesc.innerText = dog.desc;

    // ------------------ Next / Previous Functions ------------------
    window.nextImage = function() {
        index = (index + 1) % dog.images.length;
        productImage.src = dog.images[index];
    }

    window.prevImage = function() {
        index = (index - 1 + dog.images.length) % dog.images.length;
        productImage.src = dog.images[index];
    }

} else {
    // If dog not found
    document.querySelector(".description").innerHTML = "<p>Dog not found.</p>";
    const imgElem = document.getElementById("productImage");
    if(imgElem) imgElem.style.display = "none";
}