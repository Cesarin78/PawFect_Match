// Array of all pets
const pets = [
    {
        name: "Lobito",
        type: "dog",
        breed: "German Shepherd",
        age: "3 months",
        size: "large",
        gender: "male",
        img: "images/IMG_5946.jpg"
    },
    {
        name: "Kiara",
        type: "dog",
        breed: "Pitbull",
        age: "6 months",
        size: "medium",
        gender: "female",
        img: "images/IMG_5085.jpg"
    },
    {
        name: "Sia",
        type: "dog",
        breed: "Pitbull",
        age: "2 weeks",
        size: "small",
        gender: "female",
        img: "images/IMG_6186.JPG"
    },
    {
        name: "Max",
        type: "dog",
        breed: "Poodle mix",
        age: "3 years",
        size: "medium",
        gender: "male",
        img: "https://placedog.net/500/350?id=1"
    },
    {
        name: "Bella",
        type: "dog",
        breed: "Husky",
        age: "18 months",
        size: "large",
        gender: "female",
        img: "https://placedog.net/500/350?id=5"
    },
    {
        name: "Bella",
        type: "cat",
        breed: "Husky",
        age: "18 months",
        size: "large",
        gender: "female",
        img: "https://placedog.net/500/350?id=5"
    },
    // Add more pets here
];

// Function to render pets into the grid
function renderPets(petArray) {
    const grid = document.querySelector(".pet-grid");
    grid.innerHTML = ""; // Clear current content

    if (petArray.length === 0) {
        grid.innerHTML = "<p>No pets match the filter.</p>";
        return;
    }

    petArray.forEach(pet => {
        const card = document.createElement("div");
        card.classList.add("pet-card");

        card.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}" width="200">
            <h3>${pet.name}</h3>
            <p><b>Breed:</b> ${pet.breed}</p>
            <p><b>Age:</b> ${pet.age}</p>
            <p><b>Size:</b> ${pet.size}</p>
            <p><b>Gender:</b> ${pet.gender}</p>
        `;
        grid.appendChild(card);
    });
}

// Function to filter pets based on selected inputs
function filterPets() {
    const type = document.querySelector('input[name="type"]:checked')?.value;
    const size = document.querySelector('input[name="size"]:checked')?.value;

    let filtered = pets;

    if (type) filtered = filtered.filter(p => p.type === type);
    if (size) filtered = filtered.filter(p => p.size === size);

    renderPets(filtered);
}

// Initial render (show all pets)
renderPets(pets);