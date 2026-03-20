// Array of all pets
const pets = [
    {
        name: "Lobito",
        type: "dog",
        breed: "German Shepherd",
        age: "3 months",
        size: "large",
        gender: "male",
        img: "images/IMG_5946.jpg",
        key: "lobito"
    },
    {
        name: "Kiara",
        type: "dog",
        breed: "Pitbull",
        age: "6 months",
        size: "medium",
        gender: "female",
        img: "images/IMG_5085.jpg",
        key: "kiara"
    },
    {
        name: "Sia",
        type: "dog",
        breed: "Pitbull",
        age: "2 weeks",
        size: "small",
        gender: "female",
        img: "images/IMG_6186.JPG",
        key: "sia"
    },
    {
        name: "Max",
        type: "dog",
        breed: "Poodle mix",
        age: "3 years",
        size: "medium",
        gender: "male",
        img: "https://placedog.net/500/350?id=1",
        key: "max"
    },
    {
        name: "Butter",
        type: "cat",
        breed: "Domestic shorthair",
        age: "3 months old",
        size: "small",
        gender: "female",
        img: "https://www.pawlicy.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fub3bwfd53mwy%2F3e2qvEeDXw8LyeV6616BRn%2Fe05ec9671046d082bb1623c893482be5%2FOrange_cat_sleeping.png&w=1200&q=75",
        key: "butter-cat"
    },
    {
        name: "Kira",
        type: "cat",
        breed: "Domestic shorthair",
        age: "6 months old",
        size: "small",
        gender: "female",
        img: "https://images.unsplash.com/photo-1602418013963-c1f017b3bb63?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fHww",
        key: "kira-cat"
    },
    {
        name: "Susy",
        type: "cat",
        breed: "Domestic shorthair",
        age: "18 months",
        size: "small",
        gender: "female",
        img: "https://www.perfect-fit.co.uk/cdn-cgi/image/height=617,f=auto,quality=90/sites/g/files/fnmzdf6431/files/2024-10/selective-focus-closeup-shot-gray-furry-tabby-cat-sitting-wooden-chair_181624-8432_1686748977273.png",
        key: "susy-cat"
    },
    {
        name: "Ken",
        type: "cat",
        breed: "Husky",
        age: "4 years old",
        size: "medium",
        gender: "female",
        img: "https://www.perfect-fit.co.uk/cdn-cgi/image/height=617,f=auto,quality=90/sites/g/files/fnmzdf6431/files/2024-10/selective-focus-closeup-shot-gray-furry-tabby-cat-sitting-wooden-chair_181624-8432_1686748977273.png",
        key: "ken-cat"
    }
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
            <a href="petsProfile.html?type=${pet.type}&key=${pet.key}" class="adopt-btn">View Details</a>
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

// Event listeners for radio buttons
const filters = document.querySelectorAll('input[name="type"], input[name="size"]');
filters.forEach(input => input.addEventListener("change", filterPets));

// ----------- NEW PART: auto-filter based on URL ----------- //
const params = new URLSearchParams(window.location.search);
const typeFromURL = params.get("type"); // e.g., "dog" or "cat"

if (typeFromURL) {
    // Check the correct radio button if it exists
    const radio = document.querySelector(`input[name="type"][value="${typeFromURL}"]`);
    if (radio) radio.checked = true;

    // Filter pets automatically
    filterPets();
} else {
    // No type in URL? Show all pets
    renderPets(pets);
}