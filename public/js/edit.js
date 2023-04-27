const registerForm = document.getElementById('myForm2');
const nameInput = document.getElementById('name');
const companyInput = document.getElementById('company');;
const ageInput = document.getElementById('age');
const zipInput = document.getElementById('zip_code');
const genderInput= document.getElementById('gender');
const bioInput= document.getElementById('bio');
let errorDiv = document.getElementById('error');

import validation from "../validation.js";
// function populateColleges() {
//   const select = document.getElementById("colleges");
//   fetch("https://api.data.gov/ed/collegescorecard/v1/schools?per_page=100&_fields=school.name&api_key=h9bvToe5RfPIMYmDlCoSfeMftX4AYcYxAO3jDhtj")
//     .then(response => response.json())
//     .then(data => {
//       data.results.forEach(college => {
//         const option = document.createElement("option");
//         option.value = college["school.name"];
//         option.text = college["school.name"];
//         select.appendChild(option);
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

//Not alphabetically

function populateColleges() {
  const select = document.getElementById("colleges");
  const baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?&_fields=school.name&api_key=h9bvToe5RfPIMYmDlCoSfeMftX4AYcYxAO3jDhtj";
  const perPage = 100;
  let totalPages = 0;
  let currentPage = 0;

  // Add "My university is not listed" as the first option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "My university is not listed";
  select.insertBefore(defaultOption, select.firstChild);

  // Make the first request to get the total number of pages
  fetch(`${baseUrl}&per_page=${perPage}`)
    .then(response => response.json())
    .then(data => {
      totalPages = data.metadata.total / perPage;

      // Make additional requests to retrieve all the data
      for (let i = 0; i < totalPages; i++) {
        fetch(`${baseUrl}&per_page=${perPage}&page=${i}`)
          .then(response => response.json())
          .then(data => {
            data.results.forEach(college => {
              const option = document.createElement("option");
              option.value = college["school.name"];
              option.text = college["school.name"];
              select.appendChild(option);
            });
          })
          .catch(error => {
            console.error(error);
          });
      }
    })
    .catch(error => {
      console.error(error);
    });
}

//alphabetically

// function populateColleges() {
//   const select = document.getElementById("colleges");
//   const baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?&_fields=school.name&api_key=h9bvToe5RfPIMYmDlCoSfeMftX4AYcYxAO3jDhtj&_sort=school.name";
//   const perPage = 100;
//   let totalPages = 0;
//   let currentPage = 0;

//   // Add "My university is not listed" as the first option
//   const defaultOption = document.createElement("option");
//   defaultOption.value = "";
//   defaultOption.text = "My university is not listed";
//   select.insertBefore(defaultOption, select.firstChild);

//   // Make the first request to get the total number of pages
//   fetch(`${baseUrl}&per_page=${perPage}`)
//     .then(response => response.json())
//     .then(data => {
//       totalPages = data.metadata.total / perPage;

//       // Make additional requests to retrieve all the data
//       for (let i = 0; i < totalPages; i++) {
//         fetch(`${baseUrl}&per_page=${perPage}&page=${i}`)
//           .then(response => response.json())
//           .then(data => {
//             data.results.forEach(college => {
//               const option = document.createElement("option");
//               option.value = college["school.name"];
//               option.text = college["school.name"];
//               select.appendChild(option);
//             });
//           })
//           .catch(error => {
//             console.error(error);
//           });
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }





// function populateOffices() {
//   const select = document.getElementById("offices");
//   const apiKey = "1a3ae941349443328fbda850051cc927";
//   const baseUrl = "https://api.opencagedata.com/geocode/v1/json";
//   const query = "office";

//   fetch(`${baseUrl}?q=${query}&countrycode=us&no_annotations=1&key=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//       data.results.forEach(result => {
//         const option = document.createElement("option");
//         option.value = result.formatted;
//         option.text = result.formatted;
//         select.appendChild(option);
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }
const places = [
  "I don't have a bucketlist place",
  "Yellowstone National Park",
  "Grand Canyon",
  "Mount Rushmore",
  "Niagara Falls",
  "Machu Picchu",
  "Statue of Liberty",
  "Times Square",
  "Central Park",
  "Hollywood Sign",
  "Golden Gate Bridge",
  "Alcatraz Island",
  "Walt Disney World",
  "Universal Studios Hollywood",
  "Las Vegas Strip",
  "Death Valley National Park",
  "Bryce Canyon National Park",
  "Zion National Park",
  "Arches National Park",
  "Yosemite National Park",
  "Redwood National and State Parks",
  "Crater Lake National Park",
  "Glacier National Park",
  "Great Smoky Mountains National Park",
  "Mount St. Helens",
  "Rocky Mountain National Park",
  "Mount Everest",
  "Great Barrier Reef",
  "Uluru",
  "Sydney Opera House",
  "Ayers Rock",
  "Tower Bridge",
  "Big Ben",
  "London Eye",
  "Stonehenge",
  "Eiffel Tower",
  "Louvre Museum",
  "Notre-Dame Cathedral",
  "Palace of Versailles",
  "Sagrada Familia",
  "Park Güell",
  "Montserrat",
  "Sistine Chapel",
  "Colosseum",
  "Leaning Tower of Pisa",
  "Vatican City",
  "Acropolis of Athens",
  "Santorini",
  "Metéora",
  "Parthenon",
  "Blue Lagoon",
  "Geysir",
  "Thingvellir National Park",
  "Gullfoss",
  "Great Wall of China",
  "Terracotta Army",
  "Forbidden City",
  "Taj Mahal",
  "Red Fort",
  "Hagia Sophia",
  "Cappadocia",
  "Pamukkale",
  "Petra",
  "Dead Sea",
  "Jerusalem Old City",
  "Western Wall",
  "Masada",
  "Victoria Falls",
  "Kruger National Park",
  "Table Mountain",
  "Cape of Good Hope",
  "Kilimanjaro",
  "Serengeti National Park",
  "Maasai Mara National Reserve",
  "Ngorongoro Crater",
  "Pyramids of Giza",
  "Valley of the Kings",
  "Abu Simbel",
  "Luxor Temple",
  "Angkor Wat",
  "Ha Long Bay",
  "Ho Chi Minh City",
  "Hanoi",
  "Angkor Thom",
  "Chiang Mai",
  "Phi Phi Islands",
  "Bali",
  "Komodo Island",
  "Great Barrier Reef",
  "Uluru",
  "Kakadu National Park",
  "Sydney Opera House",
  "Milford Sound",
  "Queenstown",
  "Mount Cook",
  "Rotorua",
  "Bay of Islands",
  "Fiji",
  "Bora Bora",
  "Moorea",
  "Tahiti"
];


// Define a function to populate the dropdown with places
function populatePlaces() {
  const dropdown = document.getElementById("places-dropdown");
  
  // Add each place to the dropdown as an option
  places.forEach(place => {
    const option = document.createElement("option");
    option.text = place;
    option.value = place;
    dropdown.add(option);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  populatePlaces();
});






document.addEventListener("DOMContentLoaded", function(event) {
  populateColleges();
});

const fitnessOptions = [
  "I don't go or wish to disclose",
  "Orangetheory Fitness",
  "Barry's Bootcamp",
  "SoulCycle",
  "Pure Barre",
  "Flywheel Sports",
  "Equinox",
  "CrossFit",
  "LA Fitness",
  "24 Hour Fitness",
  "Crunch Fitness",
  "CycleBar",
  "CorePower Yoga",
  "YogaWorks",
  "Club Pilates",
  "Title Boxing Club",
  "Row House",
  "The Bar Method",
  "F45 Training",
  "Planet Fitness",
  "Gold's Gym",
  "Anytime Fitness",
  "Blink Fitness",
  "Xtend Barre",
  "Burn Boot Camp",
  "Zumba Fitness",
  "P90X",
  "TRX Training",
  "Jazzercise",
  "Fitness Blender",
  "Insanity",
  "Beachbody",
  "Kayla Itsines BBG",
  "Peloton",
  "MyFitnessPal",
  "Fitbit",
  "Apple Fitness+",
  "Nike Training Club",
  "Alo Yoga",
  "Athleta",
  "Lululemon",
  "Nike",
  "Under Armour",
  "Adidas",
  "New Balance",
  "Reebok",
  "Brooks Running",
  "Hoka One One",
  "Asics",
  "Saucony",
  "On Running",
  "Mizuno",
  "Salomon",
  "Altra Running",
  "Merrell",
  "Vibram FiveFingers",
  "Columbia Sportswear",
  "Patagonia",
  "The North Face",
  "REI",
  "Outdoor Voices",
  "Backcountry.com",
  "Yeti",
  "Hydro Flask",
  "CamelBak",
  "Smartwool",
  "Darn Tough Vermont",
  "Osprey",
  "Black Diamond Equipment",
  "Petzl",
  "Therm-a-Rest",
  "Big Agnes",
  "ENO",
  "MSR",
  "Deuter",
  "Gregory Packs",
  "Marmot",
  "Mountain Hardwear",
  "Outdoor Research",
  "Prana",
  "Arc'teryx",
  "Icebreaker",
  "Buff",
  "Klean Kanteen",
  "GSI Outdoors",
  "NEMO Equipment",
  "Sea to Summit",
  "Stanley",
  "Eagle Creek",
  "Manduka",
  "Gaiam",
  "Jade Yoga",
  "Beyond Yoga",
  "Onzie",
  "Alo Moves",
  "Yoga with Adriene",
  "Gaia",
  "Do Yoga With Me",
  "Brett Larkin Yoga",
  "The Yoga Collective",
  "Yoga International",
  "YogaGlo",
  "Omstars",
  "Yoga Journal",
  "Yoga Download",
  "Down Dog",
  "Asana Rebel",
  "Yogaia",
  "Yoga Studio",
  "Pocket Yoga",
  "Glo",
  "Yoga Burn",
  "Yoga Boost",
  "Yoga Wake Up",
  "Yoga Studio",
  "Yoga for Beginners",
  "Power Yoga",
  "Vinyasa Yoga",
  "Yin Yoga",
  "Restorative Yoga",
  "Hatha Yoga",
  "Kundalini Yoga",
  "Bikram Yoga",
  "Hot Yoga",
  "Acro Yoga"];

function populateFitness() {
  const dropdown = document.getElementById("gyms-dropdown");
  
  // Add each place to the dropdown as an option
  fitnessOptions.forEach(fitnessOptions => {
    const option = document.createElement("option");
    option.text = fitnessOptions;
    option.value = fitnessOptions;
    dropdown.add(option);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  populateFitness();
});







editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  try{
  if (nameInput.value.trim()) {
    validation.checkString(nameInput, "Name");
    return;
  }

  if (ageInput.value.trim()) {
    validation.checkAge(ageInput, "Age");
    return;
  }

  if (zipInput.value.trim()) {
    validation.checkZip(zipInput, "Zip");
    return;
  }

  if (bioInput.value.trim()) {
    validation.checkString(bioInput, "Bio");
    return;
  }
  if (companyInput.value.trim()) {
    validation.checkString(companyInput, "Work");
    return;
  
  }
}catch (error) {
    errorDiv.hidden = false;
    errorDiv.innerHTML = error;
    return;
  }


  
  editForm.submit();
});


  
