// Array of all pets
const pets = [
    {
        name: "Lobito",
        type: "dog",
        breed: "German Shepherd",
        age: "1 year",
        size: "large",
        gender: "male",
        price: "100",
        img: "images/IMG_5946.jpg",
        key: "lobito"
    },
    {
        name: "Kiara",
        type: "dog",
        breed: "Pitbull",
        age: "1 year",
        size: "medium",
        gender: "female",
        price: "200",
        img: "images/IMG_5085.jpg",
        key: "kiara"
    },
    {
        name: "Sia",
        type: "dog",
        breed: "Pitbull",
        age: "1 year",
        size: "small",
        gender: "female",
        price: "300",
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
        price: "400",
        img: "images/dog.jpeg",
        key: "max"
    },
    {
        name: "Butter",
        type: "cat",
        breed: "Domestic shorthair",
        age: "1 year",
        size: "small",
        gender: "female",
        price: "100",
        img: "https://www.pawlicy.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fub3bwfd53mwy%2F3e2qvEeDXw8LyeV6616BRn%2Fe05ec9671046d082bb1623c893482be5%2FOrange_cat_sleeping.png&w=1200&q=75",
        key: "butter"
    },
    {
        name: "Kira",
        type: "cat",
        breed: "Domestic shorthair",
        age: "1 year",
        size: "small",
        gender: "female",
        price: "200",
        img: "https://images.unsplash.com/photo-1602418013963-c1f017b3bb63?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fHww",
        key: "kira"
    },
    {
        name: "Susy",
        type: "cat",
        breed: "Domestic shorthair",
        age: "1 year",
        size: "small",
        gender: "female",
        price: "300",
        img: "https://www.wondercide.com/cdn/shop/articles/Upside_down_gray_cat.png?v=1685551065",
        key: "susy"
    },
    {
        name: "Ken",
        type: "cat",
        breed: "Domestic shorthair",
        age: "4 years old",
        size: "medium",
        gender: "male",
        price: "400",
        img: "https://www.perfect-fit.co.uk/cdn-cgi/image/height=617,f=auto,quality=90/sites/g/files/fnmzdf6431/files/2024-10/selective-focus-closeup-shot-gray-furry-tabby-cat-sitting-wooden-chair_181624-8432_1686748977273.png",
        key: "ken"
    },
    {
        name: "Ellie",
        type: "guineapig",
        breed: "Teddy Guinea pigsky",
        age: "2 years old",
        size: "medium",
        gender: "female",
        price: "100",
        img: "data:image/jpeg;base64,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",
        key: "ellie"
    },
    {
        name: "TOMMY MAGUIRE",
        type: "guineapig",
        breed: "Teddy Guinea pigsky",
        age: "2 years old",
        size: "medium",
        gender: "male",
        price: "200",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr71PqmgUk6ew84xwlxt0VYpYUrkVBkfYiHg&s",
        key: "tommyMaguire"
    },
    {
        name: "PEANUT",
        type: "guineapig",
        breed: "Satin guinea pig",
        age: "1 year",
        size: "small",
        gender: "male",
        price: "300",
        img: "data:image/jpeg;base64,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",
        key: "peanut"
    },
    {
        name: "HURLEY",
        type: "guineapig",
        breed: "Sheltie guinea pig",
        age: "3 years old",
        size: "large",
        gender: "male",
        price: "400",
        img: "data:image/jpeg;base64,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",
        key: "hurley"
    },
    {
        name: "ALLEN",
        type: "rabbit",
        breed: "Rex Rabbit",
        age: "2 years old",
        size: "large",
        gender: "male",
        price: "100",
        img: "https://articles.hepper.com/wp-content/uploads/2023/05/Rex-Rabbit.jpg ",
        key: "allen"
    },
    {
        name: "KARL",
        type: "rabbit",
        breed: "Rex Rabbit",
        age: "1 year old",
        size: "medium",
        gender: "male",
        price: "200",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Broken_Castor_Rex_Rabbit.JPG ",
        key: "karl"
    },
    {
        name: "SNOWBALL",
        type: "rabbit",
        breed: "Rex Rabbit",
        age: "1 years old",
        size: "small",
        gender: "female",
        price: "300",
        img: "https://northernnester.com/wp-content/uploads/2019/10/rex-rabbit-1024x542.jpg",
        key: "snowball"
    },
    {
        name: "DAISY",
        type: "rabbit",
        breed: "Rex Rabbit",
        age: "4 years old",
        size: "large",
        gender: "female",
        price: "400",
        img: "https://cottontails-rescue.org.uk/wp-content/uploads/2015/03/Bluebell-7-15.3.15.jpg ",
        key: "daisy"
    },
    {
        name: "ESME",
        type: "bird",
        breed: "Vernal Hanging Parrot",
        age: "3 years old",
        size: "small",
        gender: "female",
        price: "100",
        img: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?cs=srgb&dl=pexels-roshan-kamath-793618-1661179.jpg&fm=jpg",
        key: "esme"
    },
    {
        name: "ELLEN",
        type: "bird",
        breed: "Zebra Finch",
        age: "1 year old",
        size: "small",
        gender: "female",
        price: "200",
        img: "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
        key: "ellen"
    },
    {
        name: "PEPE",
        type: "bird",
        breed: "Cockatiel",
        age: "1 year old",
        size: "small",
        gender: "male",
        price: "300",
        img: "https://www.kaytee.com/-/media/Project/OneWeb/Kaytee/US/learn-care/everything-you-need-to-know-about-pet-cockatiels/everything-you-need-to-know-about-pet-cockatiels.jpg",
        key: "pepe"
    },
    {
        name: "SUNFLOWER",
        type: "bird",
        breed: "Yellow colour love bird",
        age: "1 year old",
        size: "medium",
        gender: "male",
        price: "400",
        img: "https://a-z-animals.com/media/2022/06/Lovebird-in-cage.jpg",
        key: "sunflower"
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
            <p><b>Price:</b> $${pet.price}</p>
            <a href="petsProfile.html?type=${pet.type}&key=${pet.key}" class="adopt-btn">View Details</a>
        `;

        grid.appendChild(card);
    });
}

function filterPets() {
  // Get checked checkboxes for type, gender, price, and age
  const typeFilters = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(el => el.value);
  const genderFilters = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(el => el.value);
  const priceFilters = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(el => el.value);
  const ageFilters = Array.from(document.querySelectorAll('input[name="age"]:checked')).map(el => el.value);

    let filtered = pets;

  // Filter by type (if any checkboxes are checked)
  if (typeFilters.length > 0) {
    filtered = filtered.filter(p => typeFilters.includes(p.type));
}

  // Filter by gender (if any checkboxes are checked)
  if (genderFilters.length > 0) {
    filtered = filtered.filter(p => genderFilters.includes(p.gender));
  }

  // Filter by price (exclusive ranges)
  if (priceFilters.length > 0) {
    filtered = filtered.filter(p => {
      const price = parseInt(p.price);
      return priceFilters.some(range => {
        const [min, max] = range.split('-').map(Number);
        return price >= min && price <= max;
      });
    });
  }

  // Filter by age (exclusive ranges)
  if (ageFilters.length > 0) {
    filtered = filtered.filter(p => {
      const age = parseInt(p.age);
      return ageFilters.some(range => {
        const [min, max] = range.split('-').map(Number);
        return age >= min && age <= max;
      });
    });
}

  // Get the selected sort option
  const sortOption = document.querySelector('input[name="sort"]:checked')?.value;

  // Apply sorting if an option is selected
  if (sortOption === "cheapest") {
    filtered.sort((a, b) => parseInt(a.price) - parseInt(b.price)); // Ascending (cheapest first)
  } else if (sortOption === "expensive") {
    filtered.sort((a, b) => parseInt(b.price) - parseInt(a.price)); // Descending (expensive first)
  }
  // "none" or no selection: no sorting (original order)

  renderPets(filtered);
}
// Event listeners for all checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(input => input.addEventListener("change", filterPets));

// ----------- Auto-filter based on URL ----------- //
const params = new URLSearchParams(window.location.search);
const typeFromURL = params.getAll("type");
const genderFromURL = params.getAll("gender");
const priceFromURL = params.getAll("price");
const ageFromURL = params.getAll("age");

// Check checkboxes based on URL params
if (typeFromURL.length > 0) {
  typeFromURL.forEach(value => {
    const checkbox = document.querySelector(`input[name="type"][value="${value}"]`);
    if (checkbox) checkbox.checked = true;
  });
}

if (genderFromURL.length > 0) {
  genderFromURL.forEach(value => {
    const checkbox = document.querySelector(`input[name="gender"][value="${value}"]`);
    if (checkbox) checkbox.checked = true;
  });
}

if (priceFromURL.length > 0) {
  priceFromURL.forEach(range => {
    const checkbox = document.querySelector(`input[name="price"][value="${range}"]`);
    if (checkbox) checkbox.checked = true;
  });
}

if (ageFromURL.length > 0) {
  ageFromURL.forEach(range => {
    const checkbox = document.querySelector(`input[name="age"][value="${range}"]`);
  if (checkbox) checkbox.checked = true;
  });
}

// Filter pets if URL params exist
if (typeFromURL.length > 0 || genderFromURL.length > 0 || priceFromURL.length > 0 || ageFromURL.length > 0) {
    filterPets();
} else {
    renderPets(pets);
}