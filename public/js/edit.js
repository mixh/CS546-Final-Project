const editForm = document.getElementById('editForm');
const nameInput = document.getElementById('name');
const companyInput = document.getElementById('company');;
const ageInput = document.getElementById('age');
const zipInput = document.getElementById('zip_code');
const genderInput= document.getElementById('gender');
const bioInput= document.getElementById('bio');
let errorDiv = document.getElementById('error');



const places = [
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

//error handling
function checkString(strVal, varName){
  if (typeof strVal !== 'string') throw `Error: ${varName} must be a string!`;
  if (!isNaN(strVal))
  throw `Error: ${strVal} is not a valid value for ${varName} as it only contains digits`;
}

function checkPassword(password,varName){
  if(typeof password !== 'string'){
    throw `${varName} must be of string type`;
}

if (password.length < 8) {
 throw 'Password must be at least 8 characters long';
}
if (!/[a-z]/.test(password)) {
 throw 'Password must contain at least one lowercase letter';
}
if (!/[A-Z]/.test(password)) {
 throw 'Password must contain at least one uppercase letter';
}
if (!/\d/.test(password)) {
 throw 'Password must contain at least one number';
}
}
function checkEmail(email, varName){
  if(typeof email !== 'string'){
      throw `${varName} must be a string`;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!email.match(emailRegex)){
     throw `The ${varName} must be a valid email address`;
  }
}

function checkAge(age, varName){
  if (isNaN(age)) {
    throw `${varName} must be a number`;
  }
  if (age < 18) {
    throw "You must be at least 18 years old to use this website";
  }
  if (age > 120) {
    throw "Invalid age";
  }
}

function checkZip(zip_code, varName){
  if(isNaN(zip_code)){
    throw `${varName} must be a number`;
  }
} 


// Define a function to populate the dropdown with places
function populatePlaces() {
  const dropdown = document.getElementById("place");
  const defaultOption = document.createElement("option");
  defaultOption.value = "Don't have one currently :)";
  defaultOption.text = "I don't have a bucketlist place I'd like to visit";
  dropdown.appendChild(defaultOption);
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


const fitnessOptions = ["NA",
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
  const dropdown = document.getElementById("gym");
  const defaultOption = document.createElement("option");
  // defaultOption.value = "NA";
  // defaultOption.text = "Not Applicable or other";
  // dropdown.appendChild(defaultOption);
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
    checkString(nameInput.value.trim(), "Name");
    return;
  }

  if (ageInput.value.trim()) {
    checkAge(ageInput.value.trim(), "Age");
    return;
  }

  if (zipInput.value.trim()) {
    checkZip(zipInput.value.trim(), "Zip");
    return;
  }

  if (bioInput.value.trim()) {
    checkString(bioInput.value.trim(), "Bio");
    return;
  }
  if (companyInput.value.trim()) {
    checkString(companyInput.value.trim(), "Work");
    return;
  
  }
}catch (error) {
    errorDiv.hidden = false;
    errorDiv.innerHTML = error;
    return;
  }

  
  editForm.submit();
});



//DO NOT TOUCH!!!!

const universities=[
  {
    Name: "NA"
  },
  {
    Name: "A Better U Beauty Barber Academy"
  },
  {
    Name: "A T Still University of Health Sciences"
  },
  {
    Name: "Aaniiih Nakoda College"
  },
  {
    Name: "ABC Adult School"
  },
  {
    Name: "ABC Adult School - Cabrillo Lane"
  },
  {
    Name: "ABC Beauty Academy"
  },
  {
    Name: "ABCO Technology"
  },
  {
    Name: "Abcott Institute"
  },
  {
    Name: "Abilene Christian University"
  },
  {
    Name: "Abilene Christian University-Undergraduate Online"
  },
  {
    Name: "Abraham Baldwin Agricultural College"
  },
  {
    Name: "Abraham Lincoln University"
  },
  {
    Name: "Academia Serrant Inc"
  },
  {
    Name: "Academy College"
  },
  {
    Name: "Academy Di Capelli -"
  },
  {
    Name: "Academy Di Capelli-School of Cosmetology"
  },
  {
    Name: "Academy di Firenze"
  },
  {
    Name: "Academy for Careers and Technology"
  },
  {
    Name: "Academy for Five Element Acupuncture"
  },
  {
    Name: "Academy for Jewish Religion-California"
  },
  {
    Name: "Academy for Nursing and Health Occupations"
  },
  {
    Name: "Academy for Salon Professionals"
  },
  {
    Name: "Academy of Allied Health Careers"
  },
  {
    Name: "Academy of Art University"
  },
  {
    Name: "Academy of Beauty Professionals"
  },
  {
    Name: "Academy of Beauty Professionals"
  },
  {
    Name: "Academy of Beauty Professionals"
  },
  {
    Name: "Academy of Beauty Professionals"
  },
  {
    Name: "Academy of Career Training"
  },
  {
    Name: "Academy of Careers and Technology"
  },
  {
    Name: "Academy of Chinese Culture and Health Sciences"
  },
  {
    Name: "Academy of Cosmetology"
  },
  {
    Name: "Academy of Cosmetology Inc"
  },
  {
    Name: "Academy of Esthetics and Cosmetology"
  },
  {
    Name: "Academy of Hair Design - Austin"
  },
  {
    Name: "Academy of Hair Design-Grenada"
  },
  {
    Name: "Academy of Hair Design-Jackson"
  },
  {
    Name: "Academy of Hair Design-Jasper"
  },
  {
    Name: "Academy of Hair Design-Las Vegas"
  },
  {
    Name: "Academy of Hair Design-Lufkin"
  },
  {
    Name: "Academy of Hair Design-Pearl"
  },
  {
    Name: "Academy of Hair Design-Springfield"
  },
  {
    Name: "Academy of Hair Technology"
  },
  {
    Name: "Academy of Interactive Entertainment"
  },
  {
    Name: "Academy of Interactive Entertainment"
  },
  {
    Name: "Academy of Massage and Bodywork"
  },
  {
    Name: "Academy of Natural Therapy Inc"
  },
  {
    Name: "Academy of Professional Cosmetology"
  },
  {
    Name: "Academy of Salon and Spa"
  },
  {
    Name: "Academy of Salon Professionals"
  },
  {
    Name: "Academy of Vocal Arts"
  },
  {
    Name: "Acaydia School of Aesthetics"
  },
  {
    Name: "Access Careers"
  },
  {
    Name: "Access Careers-Islandia"
  },
  {
    Name: "Ace Institute of Technology"
  },
  {
    Name: "Acupuncture and Integrative Medicine College-Berkeley"
  },
  {
    Name: "Acupuncture and Massage College"
  },
  {
    Name: "Adams State University"
  },
  {
    Name: "Adelphi University"
  },
  {
    Name: "Adler Graduate School"
  },
  {
    Name: "Adler University"
  },
  {
    Name: "Adrian College"
  },
  {
    Name: "Adrian H. Wallace Barber Academy"
  },
  {
    Name: "Adrian's Beauty College of Turlock"
  },
  {
    Name: "Adult and Community Education-Hudson"
  },
  {
    Name: "Adult and Continuing Education-BCTS"
  },
  {
    Name: "Advance Beauty College"
  },
  {
    Name: "Advance Beauty Techs Academy"
  },
  {
    Name: "Advance Science International College"
  },
  {
    Name: "Advanced Barber College and Hair Design"
  },
  {
    Name: "Advanced Career Institute"
  },
  {
    Name: "Advanced College of Cosmetology"
  },
  {
    Name: "Advanced Technology Institute"
  },
  {
    Name: "Advanced Training Institute"
  },
  {
    Name: "Advanced Welding Institute"
  },
  {
    Name: "Advantage Career Institute"
  },
  {
    Name: "Advantage Technical College"
  },
  {
    Name: "Advantage Technical College"
  },
  {
    Name: "Advantage Technical College-Aguadilla"
  },
  {
    Name: "AdventHealth University"
  },
  {
    Name: "Aesthetic Science Institute"
  },
  {
    Name: "Aesthetics Institute"
  },
  {
    Name: "Agape College of Business and Science"
  },
  {
    Name: "Agnes Scott College"
  },
  {
    Name: "AI Miami International University of Art and Design"
  },
  {
    Name: "Aiken School of Cosmetology and Barbering"
  },
  {
    Name: "Aiken Technical College"
  },
  {
    Name: "Aims Community College"
  },
  {
    Name: "Air Force Institute of Technology-Graduate School of Engineering & Management"
  },
  {
    Name: "Alabama College of Osteopathic Medicine"
  },
  {
    Name: "Alabama School of Nail Technology & Cosmetology"
  },
  {
    Name: "Alamance Community College"
  },
  {
    Name: "Alamo City Barber College"
  },
  {
    Name: "Alaska Christian College"
  },
  {
    Name: "Albany BOCES-Adult Practical Nursing Program"
  },
  {
    Name: "Albany College of Pharmacy and Health Sciences"
  },
  {
    Name: "Albany Law School"
  },
  {
    Name: "Albany Medical College"
  },
  {
    Name: "Albany State University"
  },
  {
    Name: "Albany Technical College"
  },
  {
    Name: "Albert Einstein College of Medicine"
  },
  {
    Name: "Albertus Magnus College"
  },
  {
    Name: "Albion College"
  },
  {
    Name: "Albizu University-Miami"
  },
  {
    Name: "Albizu University-San Juan"
  },
  {
    Name: "Albright College"
  },
  {
    Name: "Alcorn State University"
  },
  {
    Name: "Alder Graduate School of Education"
  },
  {
    Name: "Alderson Broaddus University"
  },
  {
    Name: "Alexander Academy"
  },
  {
    Name: "Alexander Paul Institute of Hair Design"
  },
  {
    Name: "Alexandria Technical & Community College"
  },
  {
    Name: "Alfred University"
  },
  {
    Name: "Alhambra Beauty College"
  },
  {
    Name: "Alhambra Medical University"
  },
  {
    Name: "Alice Lloyd College"
  },
  {
    Name: "All Beauty College"
  },
  {
    Name: "All Beauty College"
  },
  {
    Name: "All Beauty College"
  },
  {
    Name: "All-State Career School"
  },
  {
    Name: "All-State Career School-Pittsburgh"
  },
  {
    Name: "All-State Career-Baltimore"
  },
  {
    Name: "Allan Hancock College"
  },
  {
    Name: "Allegany College of Maryland"
  },
  {
    Name: "Allegheny College"
  },
  {
    Name: "Allegheny Wesleyan College"
  },
  {
    Name: "Allegiance Beauty School"
  },
  {
    Name: "Allen College"
  },
  {
    Name: "Allen County Community College"
  },
  {
    Name: "Allen School-Brooklyn"
  },
  {
    Name: "Allen School-Jamaica"
  },
  {
    Name: "Allen School-Phoenix"
  },
  {
    Name: "Allen University"
  },
  {
    Name: "Allgood Beauty Institute"
  },
  {
    Name: "Alliance Career Center"
  },
  {
    Name: "Alliance Computing Solutions"
  },
  {
    Name: "Alliance Computing Solutions - NYC"
  },
  {
    Name: "Alliance University"
  },
  {
    Name: "Alliant International University-Fresno"
  },
  {
    Name: "Alliant International University-Irvine"
  },
  {
    Name: "Alliant International University-Los Angeles"
  },
  {
    Name: "Alliant International University-Sacramento"
  },
  {
    Name: "Alliant International University-San Diego"
  },
  {
    Name: "Alliant International University-San Francisco"
  },
  {
    Name: "Allied Health Careers Institute"
  },
  {
    Name: "Allstate Hairstyling & Barber College"
  },
  {
    Name: "Allure Beauty College"
  },
  {
    Name: "Alma College"
  },
  {
    Name: "Alpena Community College"
  },
  {
    Name: "Altierus Career College-Bissonnet"
  },
  {
    Name: "Altierus Career College-Norcross"
  },
  {
    Name: "Altierus Career College-Tampa"
  },
  {
    Name: "Altoona Beauty School Inc"
  },
  {
    Name: "Alvernia University"
  },
  {
    Name: "Alverno College"
  },
  {
    Name: "Alvin Community College"
  },
  {
    Name: "Amarillo College"
  },
  {
    Name: "Amberton University"
  },
  {
    Name: "Ambria College of Nursing"
  },
  {
    Name: "America Evangelical University"
  },
  {
    Name: "American Academy McAllister Institute of Funeral Service"
  },
  {
    Name: "American Academy of Art College"
  },
  {
    Name: "American Academy of Cosmetology"
  },
  {
    Name: "American Academy of Dramatic Arts-Los Angeles"
  },
  {
    Name: "American Academy of Dramatic Arts-New York"
  },
  {
    Name: "American Academy of Health and Wellness"
  },
  {
    Name: "American Advanced Technicians Institute"
  },
  {
    Name: "American Baptist College"
  },
  {
    Name: "American Barber and Beauty Academy"
  },
  {
    Name: "American Beauty Academy"
  },
  {
    Name: "American Beauty Academy-West Valley Campus"
  },
  {
    Name: "American Beauty College"
  },
  {
    Name: "American Beauty School"
  },
  {
    Name: "American Beauty Schools"
  },
  {
    Name: "American Business and Technology University"
  },
  {
    Name: "American Career College-Anaheim"
  },
  {
    Name: "American Career College-Los Angeles"
  },
  {
    Name: "American Career College-Ontario"
  },
  {
    Name: "American College of Acupuncture and Oriental Med"
  },
  {
    Name: "American College of Barbering"
  },
  {
    Name: "American College of Barbering - Florence"
  },
  {
    Name: "American College of Education"
  },
  {
    Name: "American College of Financial Services"
  },
  {
    Name: "American College of Hair Design Inc"
  },
  {
    Name: "American College of Healthcare and Technology"
  },
  {
    Name: "American College of Healthcare and Technology"
  },
  {
    Name: "American College of Healthcare Sciences"
  },
  {
    Name: "American College of the Building Arts"
  },
  {
    Name: "American Conservatory Theater"
  },
  {
    Name: "American Educational College"
  },
  {
    Name: "American Film Institute Conservatory"
  },
  {
    Name: "American Fitness and Nutrition Academy"
  },
  {
    Name: "American Hair Academy"
  },
  {
    Name: "American Institute"
  },
  {
    Name: "American Institute of Alternative Medicine"
  },
  {
    Name: "American Institute of Alternative Medicine"
  },
  {
    Name: "American Institute of Beauty"
  },
  {
    Name: "American Institute of Healthcare & Technology"
  },
  {
    Name: "American Institute of Massage Therapy"
  },
  {
    Name: "American Institute of Medical Sciences & Education"
  },
  {
    Name: "American Institute-Cherry Hill"
  },
  {
    Name: "American Institute-Clifton"
  },
  {
    Name: "American Institute-Somerset"
  },
  {
    Name: "American Institute-Toms River"
  },
  {
    Name: "American Institute-West Hartford"
  },
  {
    Name: "American InterContinental University"
  },
  {
    Name: "American InterContinental University-Atlanta"
  },
  {
    Name: "American InterContinental University-Houston"
  },
  {
    Name: "American International College"
  },
  {
    Name: "American Islamic College"
  },
  {
    Name: "American Jewish University"
  },
  {
    Name: "American Massage & Bodywork Institute"
  },
  {
    Name: "American Medical Academy"
  },
  {
    Name: "American Medical Institute Inc."
  },
  {
    Name: "American Medical Sciences Center"
  },
  {
    Name: "American Musical and Dramatic Academy"
  },
  {
    Name: "American National University"
  },
  {
    Name: "American National University-Pikeville"
  },
  {
    Name: "American Public University System"
  },
  {
    Name: "American River College"
  },
  {
    Name: "American Samoa Community College"
  },
  {
    Name: "American Sentinel College of Nursing and Health Sciences"
  },
  {
    Name: "American Technical Institute"
  },
  {
    Name: "American Trade School"
  },
  {
    Name: "American University"
  },
  {
    Name: "American University of Health Sciences"
  },
  {
    Name: "American University of Puerto Rico"
  },
  {
    Name: "American University of Puerto Rico"
  },
  {
    Name: "AMG School of Nursing"
  },
  {
    Name: "Amherst College"
  },
  {
    Name: "Amslee Institute"
  },
  {
    Name: "Ana G. Mendez University"
  },
  {
    Name: "Anabaptist Mennonite Biblical Seminary"
  },
  {
    Name: "Anderson University"
  },
  {
    Name: "Anderson University"
  },
  {
    Name: "Andrew College"
  },
  {
    Name: "Andrews University"
  },
  {
    Name: "Angeles College"
  },
  {
    Name: "Angeles Institute"
  },
  {
    Name: "Angelina College"
  },
  {
    Name: "Angelo State University"
  },
  {
    Name: "Ann Webb Skin Institute"
  },
  {
    Name: "Anna Maria College"
  },
  {
    Name: "Anne Arundel Community College"
  },
  {
    Name: "Annenberg School of Nursing"
  },
  {
    Name: "Anoka Technical College"
  },
  {
    Name: "Anoka-Ramsey Community College"
  },
  {
    Name: "Anoka-Ramsey Community College-Cambridge Campus"
  },
  {
    Name: "Another Level Barbering and Cosmetology School"
  },
  {
    Name: "Anousheh School of Hair"
  },
  {
    Name: "Antelope Valley Community College District"
  },
  {
    Name: "Antigua College International"
  },
  {
    Name: "Antilles School of Technical Careers"
  },
  {
    Name: "Antioch College"
  },
  {
    Name: "Antioch University"
  },
  {
    Name: "Antioch University-Los Angeles"
  },
  {
    Name: "Antioch University-New England"
  },
  {
    Name: "Antioch University-Santa Barbara"
  },
  {
    Name: "Antioch University-Seattle"
  },
  {
    Name: "AOMA Graduate School of Integrative Medicine"
  },
  {
    Name: "Aparicio-Levy Technical College"
  },
  {
    Name: "Apex Academy Hair Skin Nails School of Cosmetology"
  },
  {
    Name: "Apex College of Veterinary Technology"
  },
  {
    Name: "Apex Technical School"
  },
  {
    Name: "Apollo Career Center"
  },
  {
    Name: "Appalachian Beauty School"
  },
  {
    Name: "Appalachian Bible College"
  },
  {
    Name: "Appalachian College of Pharmacy"
  },
  {
    Name: "Appalachian School of Law"
  },
  {
    Name: "Appalachian State University"
  },
  {
    Name: "Applied Technology Services"
  },
  {
    Name: "Aquinas College"
  },
  {
    Name: "Aquinas Institute of Theology"
  },
  {
    Name: "Arapahoe Community College"
  },
  {
    Name: "Arcadia University"
  },
  {
    Name: "Arclabs"
  },
  {
    Name: "Arizona Christian University"
  },
  {
    Name: "Arizona College of Nursing-Dallas"
  },
  {
    Name: "Arizona College of Nursing-Fort Lauderdale"
  },
  {
    Name: "Arizona College of Nursing-Las Vegas"
  },
  {
    Name: "Arizona College of Nursing-Phoenix"
  },
  {
    Name: "Arizona College of Nursing-Salt Lake City"
  },
  {
    Name: "Arizona College of Nursing-Tampa"
  },
  {
    Name: "Arizona College of Nursing-Tempe"
  },
  {
    Name: "Arizona College of Nursing-Tucson"
  },
  {
    Name: "Arizona College-Glendale"
  },
  {
    Name: "Arizona College-Mesa"
  },
  {
    Name: "Arizona Culinary Institute"
  },
  {
    Name: "Arizona School of Acupuncture and Oriental Medicine"
  },
  {
    Name: "Arizona School of Integrative Studies"
  },
  {
    Name: "Arizona State University - Cochise"
  },
  {
    Name: "Arizona State University - Lake Havasu"
  },
  {
    Name: "Arizona State University - Pima"
  },
  {
    Name: "Arizona State University - Pinal"
  },
  {
    Name: "Arizona State University - The Gila Valley"
  },
  {
    Name: "Arizona State University - Tucson"
  },
  {
    Name: "Arizona State University - Washington D.C."
  },
  {
    Name: "Arizona State University - Yavapai"
  },
  {
    Name: "Arizona State University - Yuma"
  },
  {
    Name: "Arizona State University Digital Immersion"
  },
  {
    Name: "Arizona State University-Downtown Phoenix"
  },
  {
    Name: "Arizona State University-Polytechnic"
  },
  {
    Name: "Arizona State University-West"
  },
  {
    Name: "Arkansas Baptist College"
  },
  {
    Name: "Arkansas Beauty College"
  },
  {
    Name: "Arkansas Beauty School-Little Rock"
  },
  {
    Name: "Arkansas College of Barbering and Hair Design"
  },
  {
    Name: "Arkansas Colleges of Health Education"
  },
  {
    Name: "Arkansas Northeastern College"
  },
  {
    Name: "Arkansas State University"
  },
  {
    Name: "Arkansas State University Mid-South"
  },
  {
    Name: "Arkansas State University Three Rivers"
  },
  {
    Name: "Arkansas State University-Beebe"
  },
  {
    Name: "Arkansas State University-Mountain Home"
  },
  {
    Name: "Arkansas State University-Newport"
  },
  {
    Name: "Arkansas Tech University"
  },
  {
    Name: "Arkansas Technical School"
  },
  {
    Name: "Arkansas Welding Academy"
  },
  {
    Name: "Arlington Baptist University"
  },
  {
    Name: "Arlington Career Institute"
  },
  {
    Name: "Arnolds Beauty School"
  },
  {
    Name: "Arnot Ogden Medical Center"
  },
  {
    Name: "Arrojo Cosmetology School"
  },
  {
    Name: "Art Academy of Cincinnati"
  },
  {
    Name: "Art Center College of Design"
  },
  {
    Name: "Arthur's Beauty College"
  },
  {
    Name: "Arthur's Beauty College"
  },
  {
    Name: "Arthur's Beauty College"
  },
  {
    Name: "Arthur's Beauty College"
  },
  {
    Name: "Artistic Academy of Hair Design"
  },
  {
    Name: "Artistic Nails and Beauty Academy-Lakeland"
  },
  {
    Name: "Artistic Nails and Beauty Academy-Tampa"
  },
  {
    Name: "ASA College"
  },
  {
    Name: "Asbury Theological Seminary"
  },
  {
    Name: "Asbury University"
  },
  {
    Name: "Ascent College"
  },
  {
    Name: "Asher College"
  },
  {
    Name: "Asher Institute of Hampton"
  },
  {
    Name: "Asheville-Buncombe Technical Community College"
  },
  {
    Name: "Ashford University"
  },
  {
    Name: "Ashland Community and Technical College"
  },
  {
    Name: "Ashland County-West Holmes Career Center"
  },
  {
    Name: "Ashland University"
  },
  {
    Name: "Ashtabula County Technical and Career Campus"
  },
  {
    Name: "ASI Career Institute"
  },
  {
    Name: "Asian-American International Beauty College"
  },
  {
    Name: "Asnuntuck Community College"
  },
  {
    Name: "Aspen Beauty Academy of Laurel"
  },
  {
    Name: "Aspen University"
  },
  {
    Name: "ASPIRA City College"
  },
  {
    Name: "Assabet Valley Regional Technical School"
  },
  {
    Name: "Associated Barber College of San Diego"
  },
  {
    Name: "Associated Beth Rivkah Schools"
  },
  {
    Name: "Associated Technical College-Los Angeles"
  },
  {
    Name: "Associated Technical College-San Diego"
  },
  {
    Name: "Assumption College for Sisters"
  },
  {
    Name: "Assumption University"
  },
  {
    Name: "ATA Career Education"
  },
  {
    Name: "ATA College"
  },
  {
    Name: "ATA College"
  },
  {
    Name: "ATA College"
  },
  {
    Name: "ATA College-Cincinnati"
  },
  {
    Name: "Atelier Esthetique Institute of Esthetics"
  },
  {
    Name: "Atenas College"
  },
  {
    Name: "Athena Career Academy"
  },
  {
    Name: "Athenaeum of Ohio"
  },
  {
    Name: "Athens Technical College"
  },
  {
    Name: "ATI College-Whittier"
  },
  {
    Name: "Atlanta Institute of Music and Media"
  },
  {
    Name: "Atlanta Metropolitan State College"
  },
  {
    Name: "Atlanta School of Massage"
  },
  {
    Name: "Atlanta Technical College"
  },
  {
    Name: "Atlanta's John Marshall Law School"
  },
  {
    Name: "Atlantic Cape Community College"
  },
  {
    Name: "Atlantic Institute of Oriental Medicine"
  },
  {
    Name: "Atlantic Technical College"
  },
  {
    Name: "Atlantic University College"
  },
  {
    Name: "Atlantis University"
  },
  {
    Name: "Auburn Career Center"
  },
  {
    Name: "Augsburg University"
  },
  {
    Name: "Augusta School of Massage"
  },
  {
    Name: "Augusta Technical College"
  },
  {
    Name: "Augusta University"
  },
  {
    Name: "Augustana College"
  },
  {
    Name: "Augustana University"
  },
  {
    Name: "Auguste Escoffier School of Culinary Arts-Austin"
  },
  {
    Name: "Auguste Escoffier School of Culinary Arts-Boulder"
  },
  {
    Name: "Aultman College of Nursing and Health Sciences"
  },
  {
    Name: "Aurora University"
  },
  {
    Name: "Austin Career Institute"
  },
  {
    Name: "Austin College"
  },
  {
    Name: "Austin Community College District"
  },
  {
    Name: "Austin Graduate School of Theology"
  },
  {
    Name: "Austin Kade Academy"
  },
  {
    Name: "Austin Peay State University"
  },
  {
    Name: "Austin Presbyterian Theological Seminary"
  },
  {
    Name: "Austin Presbyterian Theological Seminary- YMCA Outdoor Center"
  },
  {
    Name: "Austin's Beauty College Inc"
  },
  {
    Name: "Automeca Technical College-Aguadilla"
  },
  {
    Name: "Automeca Technical College-Bayamon"
  },
  {
    Name: "Automeca Technical College-Caguas"
  },
  {
    Name: "Automeca Technical College-Ponce"
  },
  {
    Name: "Automotive Training Center-Exton"
  },
  {
    Name: "Automotive Training Center-Warminster"
  },
  {
    Name: "Autry Technology Center"
  },
  {
    Name: "Avalon Institute-Aurora"
  },
  {
    Name: "Avalon Institute-Las Vegas"
  },
  {
    Name: "Avalon Institute-Layton"
  },
  {
    Name: "Avalon Institute-Phoenix"
  },
  {
    Name: "Avalon School of Cosmetology"
  },
  {
    Name: "Ave Maria School of Law"
  },
  {
    Name: "Ave Maria University"
  },
  {
    Name: "Aveda Arts & Sciences Institute Minneapolis"
  },
  {
    Name: "Aveda Arts & Sciences Institute Seattle"
  },
  {
    Name: "Aveda Arts & Sciences Institute-Baton Rouge"
  },
  {
    Name: "Aveda Arts & Sciences Institute-Covington"
  },
  {
    Name: "Aveda Arts & Sciences Institute-Lafayette"
  },
  {
    Name: "Aveda Arts & Sciences Institute-New York"
  },
  {
    Name: "Aveda Arts & Sciences Institute-San Antonio"
  },
  {
    Name: "Aveda Fredric's Institute-Cincinnati"
  },
  {
    Name: "Aveda Fredric's Institute-Indianapolis"
  },
  {
    Name: "Aveda Institute Portland-Vancouver Campus"
  },
  {
    Name: "Aveda Institute Rochester"
  },
  {
    Name: "Aveda Institute-Boise"
  },
  {
    Name: "Aveda Institute-Chapel Hill"
  },
  {
    Name: "Aveda Institute-Chicago"
  },
  {
    Name: "Aveda Institute-Columbus"
  },
  {
    Name: "Aveda Institute-Denver"
  },
  {
    Name: "Aveda Institute-Des Moines"
  },
  {
    Name: "Aveda Institute-Fort Myers"
  },
  {
    Name: "Aveda Institute-Los Angeles"
  },
  {
    Name: "Aveda Institute-Madison"
  },
  {
    Name: "Aveda Institute-Maryland"
  },
  {
    Name: "Aveda Institute-New Mexico"
  },
  {
    Name: "Aveda Institute-Phoenix"
  },
  {
    Name: "Aveda Institute-Portland"
  },
  {
    Name: "Aveda Institute-Provo"
  },
  {
    Name: "Aveda Institute-South Florida"
  },
  {
    Name: "Aveda Institute-Tallahassee"
  },
  {
    Name: "Aveda Institute-Tucson"
  },
  {
    Name: "Aveda Institute-Twin Falls"
  },
  {
    Name: "Avenue Academy A Cosmetology Institute"
  },
  {
    Name: "Avenue Five Institute"
  },
  {
    Name: "Avenue Five Institute-South Austin Campus"
  },
  {
    Name: "Avera McKennan Hospital School of Radiologic Technology"
  },
  {
    Name: "Avera Sacred Heart Hospital"
  },
  {
    Name: "Averett University"
  },
  {
    Name: "Avery James College"
  },
  {
    Name: "Avi Career Training"
  },
  {
    Name: "Aviation Institute of Maintenance-Atlanta"
  },
  {
    Name: "Aviation Institute of Maintenance-Charlotte"
  },
  {
    Name: "Aviation Institute of Maintenance-Dallas"
  },
  {
    Name: "Aviation Institute of Maintenance-Fremont"
  },
  {
    Name: "Aviation Institute of Maintenance-Houston"
  },
  {
    Name: "Aviation Institute of Maintenance-Indianapolis"
  },
  {
    Name: "Aviation Institute of Maintenance-Kansas City"
  },
  {
    Name: "Aviation Institute of Maintenance-Las Vegas"
  },
  {
    Name: "Aviation Institute of Maintenance-Manassas"
  },
  {
    Name: "Aviation Institute of Maintenance-Norfolk"
  },
  {
    Name: "Aviation Institute of Maintenance-Orlando"
  },
  {
    Name: "Aviation Institute of Maintenance-Philadelphia"
  },
  {
    Name: "Aviation Institute of Maintenance-Teterboro"
  },
  {
    Name: "Aviator College of Aeronautical Science & Technology -  Kissimmee"
  },
  {
    Name: "Aviator College of Aeronautical Science and Technology"
  },
  {
    Name: "Avila University"
  },
  {
    Name: "Award Beauty School"
  },
  {
    Name: "Ayers Career College"
  },
  {
    Name: "Azusa Pacific University"
  },
  {
    Name: "B M Spurr School of Practical Nursing"
  },
  {
    Name: "B-Unique Beauty and Barber Academy"
  },
  {
    Name: "Babson College"
  },
  {
    Name: "Bacone College"
  },
  {
    Name: "Bais Binyomin Academy"
  },
  {
    Name: "Bais HaMedrash and Mesivta of Baltimore"
  },
  {
    Name: "Bais Medrash Elyon"
  },
  {
    Name: "Bais Medrash Mayan Hatorah"
  },
  {
    Name: "Bais Medrash of Dexter Park"
  },
  {
    Name: "Bais Medrash Toras Chesed"
  },
  {
    Name: "Baker College"
  },
  {
    Name: "Baker College of Auburn Hills"
  },
  {
    Name: "Baker College of Cadillac"
  },
  {
    Name: "Baker College of Jackson"
  },
  {
    Name: "Baker College of Muskegon"
  },
  {
    Name: "Baker University"
  },
  {
    Name: "Baker University School of Nursing"
  },
  {
    Name: "Bakersfield College"
  },
  {
    Name: "Bakke Graduate University"
  },
  {
    Name: "Baldwin Beauty School-North Austin"
  },
  {
    Name: "Baldwin Beauty School-South Austin"
  },
  {
    Name: "Baldwin Park Adult & Community Education"
  },
  {
    Name: "Baldwin Wallace University"
  },
  {
    Name: "Baldy View Regional Occupational Program"
  },
  {
    Name: "Ball State University"
  },
  {
    Name: "Baltimore City Community College"
  },
  {
    Name: "Baltimore Studio of Hair Design"
  },
  {
    Name: "Bancroft School of Massage Therapy"
  },
  {
    Name: "Bank Street College of Education"
  },
  {
    Name: "Baptist Bible College"
  },
  {
    Name: "Baptist Health College Little Rock"
  },
  {
    Name: "Baptist Health Sciences University"
  },
  {
    Name: "Baptist Health System School of Health Professions"
  },
  {
    Name: "Baptist Missionary Association Theological Seminary"
  },
  {
    Name: "Baptist University of the Americas"
  },
  {
    Name: "Barber & Beauty Institute of New York"
  },
  {
    Name: "Barber and Beauty Academy of Pennsylvania"
  },
  {
    Name: "Barber Institute of Texas"
  },
  {
    Name: "Barber School of Pittsburgh"
  },
  {
    Name: "Barber Tech Academy"
  },
  {
    Name: "Barclay College"
  },
  {
    Name: "Bard College"
  },
  {
    Name: "Bard College - BHSEC Newark"
  },
  {
    Name: "Bard College - Brooklyn Public Library"
  },
  {
    Name: "Bard College - Coxsackie Correctional Facility"
  },
  {
    Name: "Bard College - Eastern NY Correctional Facility"
  },
  {
    Name: "Bard College - Fishkill Correctional Facility"
  },
  {
    Name: "Bard College - Green Haven Correctional Facility"
  },
  {
    Name: "Bard College - Holyoke Microcollege"
  },
  {
    Name: "Bard College - Taconic Correctional Facility"
  },
  {
    Name: "Bard College - Woodbourne Correctional Facility"
  },
  {
    Name: "Bard College at Simon's Rock"
  },
  {
    Name: "Barnard College"
  },
  {
    Name: "Barnes-Jewish College Goldfarb School of Nursing"
  },
  {
    Name: "Barrett and Company School of Hair Design"
  },
  {
    Name: "Barry University"
  },
  {
    Name: "Barry University Law School"
  },
  {
    Name: "Barstow Community College"
  },
  {
    Name: "Barton College"
  },
  {
    Name: "Barton County Community College"
  },
  {
    Name: "Bastyr University"
  },
  {
    Name: "Bates College"
  },
  {
    Name: "Bates Technical College"
  },
  {
    Name: "Baton Rouge Community College"
  },
  {
    Name: "Baton Rouge General Medical Center School of Nursing & School of Radiologic Technology"
  },
  {
    Name: "Baton Rouge School of Computers"
  },
  {
    Name: "Bay Area Medical Academy"
  },
  {
    Name: "Bay Area Medical Academy - San Jose Satellite Location"
  },
  {
    Name: "Bay de Noc Community College"
  },
  {
    Name: "Bay Mills Community College"
  },
  {
    Name: "Bay Path University"
  },
  {
    Name: "Bay State College"
  },
  {
    Name: "Bayamon Community College"
  },
  {
    Name: "Baylor College of Medicine"
  },
  {
    Name: "Baylor University"
  },
  {
    Name: "Bayshire Academy of Beauty Craft Inc"
  },
  {
    Name: "Be'er Yaakov Talmudic Seminary"
  },
  {
    Name: "Beacon College"
  },
  {
    Name: "Beal University"
  },
  {
    Name: "Beau Monde Academy of Barbering and Cosmetology"
  },
  {
    Name: "Beaufort County Community College"
  },
  {
    Name: "Beaumont Adult School"
  },
  {
    Name: "Beauty Academy of South Florida"
  },
  {
    Name: "Beaver Falls Beauty Academy"
  },
  {
    Name: "Beckfield College-Florence"
  },
  {
    Name: "Beis Medrash Heichal Dovid"
  },
  {
    Name: "Bel-Rea Institute of Animal Technology"
  },
  {
    Name: "Belanger School of Nursing"
  },
  {
    Name: "Belhaven University"
  },
  {
    Name: "Bell Mar Beauty College"
  },
  {
    Name: "Bella Academy of Cosmetology"
  },
  {
    Name: "Bella Capelli Academy"
  },
  {
    Name: "Bella Cosmetology and Barber College"
  },
  {
    Name: "Bellarmine University"
  },
  {
    Name: "Bellasa Professional Institute"
  },
  {
    Name: "Belle Academy of Cosmetology LLC"
  },
  {
    Name: "Bellevue College"
  },
  {
    Name: "Bellevue University"
  },
  {
    Name: "Bellin College"
  },
  {
    Name: "Bellingham Technical College"
  },
  {
    Name: "Bellus Academy"
  },
  {
    Name: "Bellus Academy-Chula Vista"
  },
  {
    Name: "Bellus Academy-El Cajon"
  },
  {
    Name: "Bellus Academy-Poway"
  },
  {
    Name: "Belmont Abbey College"
  },
  {
    Name: "Belmont College"
  },
  {
    Name: "Belmont University"
  },
  {
    Name: "Beloit College"
  },
  {
    Name: "Bemidji State University"
  },
  {
    Name: "Ben Franklin Career Center"
  },
  {
    Name: "Bene's Career Academy"
  },
  {
    Name: "Benedict College"
  },
  {
    Name: "Benedictine College"
  },
  {
    Name: "Benedictine University"
  },
  {
    Name: "Benjamin Franklin Cummings Institute of Technology"
  },
  {
    Name: "Bennett Career Institute"
  },
  {
    Name: "Bennett College"
  },
  {
    Name: "Bennington College"
  },
  {
    Name: "Bentley University"
  },
  {
    Name: "Berea College"
  },
  {
    Name: "Bergen Community College"
  },
  {
    Name: "Bergin University of Canine Studies"
  },
  {
    Name: "Berk Trade and Business School"
  },
  {
    Name: "Berkeley City College"
  },
  {
    Name: "Berkeley College-New York"
  },
  {
    Name: "Berkeley College-Woodland Park"
  },
  {
    Name: "Berkeley School of Theology"
  },
  {
    Name: "Berklee College of Music"
  },
  {
    Name: "Berkowits School of Electrolysis"
  },
  {
    Name: "Berks Career & Technology Center"
  },
  {
    Name: "Berkshire Community College"
  },
  {
    Name: "Berry College"
  },
  {
    Name: "Best Care College"
  },
  {
    Name: "Bet Medrash Gadol Ateret Torah"
  },
  {
    Name: "Beth Hamedrash Shaarei Yosher Institute"
  },
  {
    Name: "Beth Medrash Govoha"
  },
  {
    Name: "Beth Medrash Meor Yitzchok"
  },
  {
    Name: "Beth Medrash of Asbury Park"
  },
  {
    Name: "Bethany College"
  },
  {
    Name: "Bethany College"
  },
  {
    Name: "Bethany Global University"
  },
  {
    Name: "Bethany Lutheran College"
  },
  {
    Name: "Bethany Theological Seminary"
  },
  {
    Name: "Bethel College-North Newton"
  },
  {
    Name: "Bethel Seminary-San Diego"
  },
  {
    Name: "Bethel University"
  },
  {
    Name: "Bethel University"
  },
  {
    Name: "Bethel University"
  },
  {
    Name: "Bethesda University"
  },
  {
    Name: "Bethlehem College & Seminary"
  },
  {
    Name: "Bethune-Cookman University"
  },
  {
    Name: "Beulah Heights University"
  },
  {
    Name: "Beverly Hills Design Institute"
  },
  {
    Name: "Bexley Hall Seabury Western Theological Seminary Federation Inc."
  },
  {
    Name: "Beyond 21st Century Beauty Academy"
  },
  {
    Name: "Beyond Measure Barbering Institute"
  },
  {
    Name: "Big Bend Community College"
  },
  {
    Name: "Big Bend Technical College"
  },
  {
    Name: "Big Sandy Community and Technical College"
  },
  {
    Name: "Binghamton University"
  },
  {
    Name: "Biola University"
  },
  {
    Name: "Birthingway College of Midwifery"
  },
  {
    Name: "Birthwise Midwifery School"
  },
  {
    Name: "Bismarck State College"
  },
  {
    Name: "Bitterroot School of Cosmetology"
  },
  {
    Name: "BJ's Beauty & Barber College"
  },
  {
    Name: "BK Cosmo College of Cosmetology"
  },
  {
    Name: "Black Hawk College"
  },
  {
    Name: "Black Hills State University"
  },
  {
    Name: "Black River Technical College"
  },
  {
    Name: "Blackburn College"
  },
  {
    Name: "Blackfeet Community College"
  },
  {
    Name: "Blackhawk Technical College"
  },
  {
    Name: "Blackstone Valley Vocational Regional School District"
  },
  {
    Name: "Bladen Community College"
  },
  {
    Name: "Blades School of Hair Design"
  },
  {
    Name: "Blake Austin College"
  },
  {
    Name: "Blalock's Professional Beauty College"
  },
  {
    Name: "Blessing Rieman College of Nursing and Health Sciences"
  },
  {
    Name: "Blinn College District"
  },
  {
    Name: "Bloomfield College"
  },
  {
    Name: "Bloomsburg University of Pennsylvania"
  },
  {
    Name: "Blue Cliff Career College"
  },
  {
    Name: "Blue Cliff College"
  },
  {
    Name: "Blue Cliff College-Alexandria"
  },
  {
    Name: "Blue Cliff College-Fayetteville"
  },
  {
    Name: "Blue Cliff College-Gulfport"
  },
  {
    Name: "Blue Cliff College-Houma"
  },
  {
    Name: "Blue Cliff College-Lafayette"
  },
  {
    Name: "Blue Cliff College-Metairie"
  },
  {
    Name: "Blue Hills Regional Technical School"
  },
  {
    Name: "Blue Mountain Christian University"
  },
  {
    Name: "Blue Mountain Community College"
  },
  {
    Name: "Blue Ridge Community and Technical College"
  },
  {
    Name: "Blue Ridge Community College"
  },
  {
    Name: "Blue Ridge Community College"
  },
  {
    Name: "Bluefield College - Edward Via College of Osteopathic Medicine"
  },
  {
    Name: "Bluefield State University"
  },
  {
    Name: "Bluefield University"
  },
  {
    Name: "Bluegrass Community and Technical College"
  },
  {
    Name: "Bluffton University"
  },
  {
    Name: "Bnos Zion Of Bobov Seminary"
  },
  {
    Name: "Bob Jones University"
  },
  {
    Name: "Boca Beauty Academy"
  },
  {
    Name: "Boca Beauty Academy-Parkland"
  },
  {
    Name: "Body Wisdom Massage Therapy School"
  },
  {
    Name: "Boise Barber College"
  },
  {
    Name: "Boise Bible College"
  },
  {
    Name: "Boise State University"
  },
  {
    Name: "Bolivar Technical College"
  },
  {
    Name: "Bon Secours Memorial College of Nursing"
  },
  {
    Name: "Bon Secours St Mary's Hospital School of Medical Imaging"
  },
  {
    Name: "Bonnie Joseph Academy of Cosmetology & Barbering"
  },
  {
    Name: "Boricua College"
  },
  {
    Name: "Borner's Barber College"
  },
  {
    Name: "Bos-Man's Barber College"
  },
  {
    Name: "Bossier Parish Community College"
  },
  {
    Name: "Boston Architectural College"
  },
  {
    Name: "Boston Baptist College"
  },
  {
    Name: "Boston College"
  },
  {
    Name: "Boston Graduate School of Psychoanalysis Inc"
  },
  {
    Name: "Boston University"
  },
  {
    Name: "Bowdoin College"
  },
  {
    Name: "Bowie State University"
  },
  {
    Name: "Bowling Green State University-Firelands"
  },
  {
    Name: "Bowling Green State University-Main Campus"
  },
  {
    Name: "Bradley University"
  },
  {
    Name: "Brand College"
  },
  {
    Name: "Brandeis University"
  },
  {
    Name: "Branford Academy of Hair & Cosmetology-Bridgeport"
  },
  {
    Name: "Branford Academy of Hair and Cosmetology"
  },
  {
    Name: "Brazosport College"
  },
  {
    Name: "Brenau University"
  },
  {
    Name: "Brescia University"
  },
  {
    Name: "Brevard College"
  },
  {
    Name: "Brewster Technical College"
  },
  {
    Name: "Brewton-Parker College"
  },
  {
    Name: "Briar Cliff University"
  },
  {
    Name: "Bridgerland Technical College"
  },
  {
    Name: "Bridges Beauty College"
  },
  {
    Name: "BridgeValley Community & Technical College"
  },
  {
    Name: "Bridgewater College"
  },
  {
    Name: "Bridgewater State University"
  },
  {
    Name: "Brigham Young University"
  },
  {
    Name: "Brigham Young University-Hawaii"
  },
  {
    Name: "Brigham Young University-Idaho"
  },
  {
    Name: "Brighton Center's Center for Employment Training"
  },
  {
    Name: "Brighton Institute of Cosmetology"
  },
  {
    Name: "Brightpoint Community College"
  },
  {
    Name: "Brillare Beauty Institute"
  },
  {
    Name: "Bristol Community College"
  },
  {
    Name: "Bristol Technical Education Center"
  },
  {
    Name: "Brite Divinity School"
  },
  {
    Name: "Brittany Beauty Academy"
  },
  {
    Name: "Brittany Beauty Academy"
  },
  {
    Name: "Brittany Beauty Academy"
  },
  {
    Name: "Broadview College"
  },
  {
    Name: "Broken Arrow Beauty College"
  },
  {
    Name: "Brookdale Community College"
  },
  {
    Name: "Brookline College-Albuquerque"
  },
  {
    Name: "Brookline College-Tempe"
  },
  {
    Name: "Brookline College-Tucson"
  },
  {
    Name: "Brooklyn Law School"
  },
  {
    Name: "Broome Delaware Tioga BOCES-Practical Nursing Program"
  },
  {
    Name: "Broward College"
  },
  {
    Name: "Brown & Clermont Adult Career Campuses"
  },
  {
    Name: "Brown Aveda Institute-Mentor"
  },
  {
    Name: "Brown Aveda Institute-Strongsville"
  },
  {
    Name: "Brown Beauty Barber School"
  },
  {
    Name: "Brown University"
  },
  {
    Name: "Brownson Technical School"
  },
  {
    Name: "Brunswick Community College"
  },
  {
    Name: "Bryan College of Health Sciences"
  },
  {
    Name: "Bryan College-Dayton"
  },
  {
    Name: "Bryan University"
  },
  {
    Name: "Bryan University"
  },
  {
    Name: "Bryan University"
  },
  {
    Name: "Bryant & Stratton College-Akron"
  },
  {
    Name: "Bryant & Stratton College-Albany"
  },
  {
    Name: "Bryant & Stratton College-Amherst"
  },
  {
    Name: "Bryant & Stratton College-Bayshore"
  },
  {
    Name: "Bryant & Stratton College-Buffalo"
  },
  {
    Name: "Bryant & Stratton College-Cleveland"
  },
  {
    Name: "Bryant & Stratton College-Greece"
  },
  {
    Name: "Bryant & Stratton College-Hampton"
  },
  {
    Name: "Bryant & Stratton College-Henrietta"
  },
  {
    Name: "Bryant & Stratton College-Online"
  },
  {
    Name: "Bryant & Stratton College-Parma"
  },
  {
    Name: "Bryant & Stratton College-Racine"
  },
  {
    Name: "Bryant & Stratton College-Richmond"
  },
  {
    Name: "Bryant & Stratton College-Solon"
  },
  {
    Name: "Bryant & Stratton College-Southtowns"
  },
  {
    Name: "Bryant & Stratton College-Syracuse"
  },
  {
    Name: "Bryant & Stratton College-Syracuse North"
  },
  {
    Name: "Bryant & Stratton College-Virginia Beach"
  },
  {
    Name: "Bryant & Stratton College-Wauwatosa"
  },
  {
    Name: "Bryant University"
  },
  {
    Name: "Bryn Athyn College of the New Church"
  },
  {
    Name: "Bryn Mawr College"
  },
  {
    Name: "Buckeye Hills Career Center"
  },
  {
    Name: "Buckeye Joint Vocational School"
  },
  {
    Name: "Bucknell University"
  },
  {
    Name: "Buckner Barber School"
  },
  {
    Name: "Bucks County Community College"
  },
  {
    Name: "Bucks County Community College-Gene and Marlene Epstein Campus at Lower Bucks"
  },
  {
    Name: "Bucks County Community College-Upper Bucks Campus"
  },
  {
    Name: "Bucks County School of Beauty Culture Inc"
  },
  {
    Name: "Buena Vista University"
  },
  {
    Name: "Bull City Durham Beauty and Barber College"
  },
  {
    Name: "Bunker Hill Community College"
  },
  {
    Name: "Burlington County Institute of Technology - Adult Education -"
  },
  {
    Name: "Burlington County Institute of Technology-Adult Education"
  },
  {
    Name: "Burrell College of Osteopathic Medicine"
  },
  {
    Name: "Bushnell University"
  },
  {
    Name: "Butler Beauty Academy"
  },
  {
    Name: "Butler Beauty Academy-Kittanning Beauty Academy"
  },
  {
    Name: "Butler Beauty Academy-New Castle Beauty Academy"
  },
  {
    Name: "Butler Community College"
  },
  {
    Name: "Butler County Community College"
  },
  {
    Name: "Butler Technology and Career Development Schools"
  },
  {
    Name: "Butler University"
  },
  {
    Name: "Butte Academy of Beauty Culture"
  },
  {
    Name: "Butte College"
  },
  {
    Name: "Butte County Regional Occupational Program"
  },
  {
    Name: "Byzantine Catholic Seminary of Saints Cyril and Methodius"
  },
  {
    Name: "CAAN Academy of Nursing"
  },
  {
    Name: "Cabarrus College of Health Sciences"
  },
  {
    Name: "Cabell County Career Technology Center"
  },
  {
    Name: "Cabrillo College"
  },
  {
    Name: "Cabrini University"
  },
  {
    Name: "Caddo Kiowa Technology Center"
  },
  {
    Name: "Cadillac Institute of Cosmetology"
  },
  {
    Name: "Cairn University-Langhorne"
  },
  {
    Name: "CALC Institute of Technology"
  },
  {
    Name: "Caldwell Community College and Technical Institute"
  },
  {
    Name: "Caldwell University"
  },
  {
    Name: "California Aeronautical University"
  },
  {
    Name: "California Arts University"
  },
  {
    Name: "California Baptist University"
  },
  {
    Name: "California Barber and Beauty College"
  },
  {
    Name: "California Beauty School"
  },
  {
    Name: "California Career College"
  },
  {
    Name: "California Career Institute"
  },
  {
    Name: "California Christian College"
  },
  {
    Name: "California College of Barbering and Cosmetology"
  },
  {
    Name: "California College of Music"
  },
  {
    Name: "California College of the Arts"
  },
  {
    Name: "California Hair Design Academy"
  },
  {
    Name: "California Healing Arts College"
  },
  {
    Name: "California Health Sciences University"
  },
  {
    Name: "California Indian Nations College"
  },
  {
    Name: "California Institute of Advanced Management"
  },
  {
    Name: "California Institute of Arts & Technology"
  },
  {
    Name: "California Institute of Arts & Technology-National City"
  },
  {
    Name: "California Institute of Integral Studies"
  },
  {
    Name: "California Institute of Medical Science"
  },
  {
    Name: "California Institute of Technology"
  },
  {
    Name: "California Institute of the Arts"
  },
  {
    Name: "California Intercontinental University"
  },
  {
    Name: "California Jazz Conservatory"
  },
  {
    Name: "California Lutheran University"
  },
  {
    Name: "California Miramar University"
  },
  {
    Name: "California Northstate University"
  },
  {
    Name: "California Nurses Educational Institute"
  },
  {
    Name: "California Polytechnic State University-San Luis Obispo"
  },
  {
    Name: "California State Polytechnic University-Humboldt"
  },
  {
    Name: "California State Polytechnic University-Pomona"
  },
  {
    Name: "California State University Maritime Academy"
  },
  {
    Name: "California State University-Bakersfield"
  },
  {
    Name: "California State University-Channel Islands"
  },
  {
    Name: "California State University-Chico"
  },
  {
    Name: "California State University-Dominguez Hills"
  },
  {
    Name: "California State University-East Bay"
  },
  {
    Name: "California State University-Fresno"
  },
  {
    Name: "California State University-Fullerton"
  },
  {
    Name: "California State University-Long Beach"
  },
  {
    Name: "California State University-Los Angeles"
  },
  {
    Name: "California State University-Monterey Bay"
  },
  {
    Name: "California State University-Northridge"
  },
  {
    Name: "California State University-Sacramento"
  },
  {
    Name: "California State University-San Bernardino"
  },
  {
    Name: "California State University-San Marcos"
  },
  {
    Name: "California State University-Stanislaus"
  },
  {
    Name: "California Technical Academy"
  },
  {
    Name: "California University of Pennsylvania"
  },
  {
    Name: "California University of Science and Medicine"
  },
  {
    Name: "California Western School of Law"
  },
  {
    Name: "Calumet College of Saint Joseph"
  },
  {
    Name: "Calvary University"
  },
  {
    Name: "Calvin Theological Seminary"
  },
  {
    Name: "Calvin University"
  },
  {
    Name: "Calvin University - Handlon Campus"
  },
  {
    Name: "Cambridge College"
  },
  {
    Name: "Cambridge College of Healthcare & Technology"
  },
  {
    Name: "Cambridge College of Healthcare & Technology"
  },
  {
    Name: "Cambridge College of Healthcare & Technology"
  },
  {
    Name: "Cambridge Technical Institute"
  },
  {
    Name: "Camden County College"
  },
  {
    Name: "Cameo Beauty Academy"
  },
  {
    Name: "Cameo College of Essential Beauty"
  },
  {
    Name: "Cameron University"
  },
  {
    Name: "Campbell University"
  },
  {
    Name: "Campbellsville University"
  },
  {
    Name: "Canada College"
  },
  {
    Name: "Canadian Valley Technology Center"
  },
  {
    Name: "Canisius College"
  },
  {
    Name: "Cankdeska Cikana Community College"
  },
  {
    Name: "Cannella School of Hair Design-Chicago"
  },
  {
    Name: "Cannella School of Hair Design-Chicago"
  },
  {
    Name: "Cannella School of Hair Design-Villa Park"
  },
  {
    Name: "Canton City Schools Adult Career and Technical Education"
  },
  {
    Name: "Cape Cod Community College"
  },
  {
    Name: "Cape Coral Technical College"
  },
  {
    Name: "Cape Fear Community College"
  },
  {
    Name: "Cape Girardeau Career and Technology Center"
  },
  {
    Name: "Capella University"
  },
  {
    Name: "Capilo School of Hair Design"
  },
  {
    Name: "Capital Area School of Practical Nursing"
  },
  {
    Name: "Capital Community College"
  },
  {
    Name: "Capital University"
  },
  {
    Name: "Capitol Beauty School"
  },
  {
    Name: "Capitol Technology University"
  },
  {
    Name: "Capri Beauty College"
  },
  {
    Name: "Capri Beauty College"
  },
  {
    Name: "Capri College-Cedar Rapids"
  },
  {
    Name: "Capri College-Davenport"
  },
  {
    Name: "Capri College-Dubuque"
  },
  {
    Name: "Capri Cosmetology Learning Centers"
  },
  {
    Name: "Capri Institute of Hair Design-Brick"
  },
  {
    Name: "Capri Institute of Hair Design-Clifton"
  },
  {
    Name: "Capri Institute of Hair Design-Kenilworth"
  },
  {
    Name: "Capri Institute of Hair Design-Paramus"
  },
  {
    Name: "Capstone College"
  },
  {
    Name: "Cardiac and Vascular Institute of Ultrasound"
  },
  {
    Name: "Cardinal Stritch University"
  },
  {
    Name: "Career Academy of Beauty"
  },
  {
    Name: "Career Academy of Hair Design"
  },
  {
    Name: "Career Academy of Hair Design - Fort Smith"
  },
  {
    Name: "Career Academy of Hair Design-Fayetteville"
  },
  {
    Name: "Career Academy of Hair Design-Rogers"
  },
  {
    Name: "Career Academy of Hair Design-Siloam Springs"
  },
  {
    Name: "Career and Technology Education Centers of Licking County"
  },
  {
    Name: "Career Beauty College"
  },
  {
    Name: "Career Care Institute"
  },
  {
    Name: "Career Center of Southern Illinois"
  },
  {
    Name: "Career College of Northern Nevada"
  },
  {
    Name: "Career Development Institute Inc"
  },
  {
    Name: "Career Networks Institute"
  },
  {
    Name: "Career School of NY"
  },
  {
    Name: "Career Technical Institute"
  },
  {
    Name: "Career Technology Center of Lackawanna County"
  },
  {
    Name: "Careers Institute of America"
  },
  {
    Name: "Careers Unlimited"
  },
  {
    Name: "Caribbean Aviation Training Institute Inc"
  },
  {
    Name: "Caribbean Forensic and Technical College"
  },
  {
    Name: "Caribbean University-Bayamon"
  },
  {
    Name: "Caribbean University-Carolina"
  },
  {
    Name: "Caribbean University-Ponce"
  },
  {
    Name: "Caribbean University-Vega Baja"
  },
  {
    Name: "Caris College"
  },
  {
    Name: "Carl Albert State College"
  },
  {
    Name: "Carl Sandburg College"
  },
  {
    Name: "Carleton College"
  },
  {
    Name: "Carlow University"
  },
  {
    Name: "Carlson College of Massage Therapy"
  },
  {
    Name: "Carnegie Institute"
  },
  {
    Name: "Carnegie Mellon University"
  },
  {
    Name: "Carolina Christian College"
  },
  {
    Name: "Carolina College of Biblical Studies"
  },
  {
    Name: "Carolina College of Hair Design"
  },
  {
    Name: "Carolina University"
  },
  {
    Name: "Carolinas College of Health Sciences"
  },
  {
    Name: "Carrington College-Albuquerque"
  },
  {
    Name: "Carrington College-Boise"
  },
  {
    Name: "Carrington College-Citrus Heights"
  },
  {
    Name: "Carrington College-Las Vegas"
  },
  {
    Name: "Carrington College-Ontario"
  },
  {
    Name: "Carrington College-Pleasant Hill Campus"
  },
  {
    Name: "Carrington College-Portland"
  },
  {
    Name: "Carrington College-Reno"
  },
  {
    Name: "Carrington College-Sacramento"
  },
  {
    Name: "Carrington College-San Jose"
  },
  {
    Name: "Carrington College-San Leandro Campus"
  },
  {
    Name: "Carrington College-Spokane"
  },
  {
    Name: "Carrington College-Stockton"
  },
  {
    Name: "Carroll College"
  },
  {
    Name: "Carroll Community College"
  },
  {
    Name: "Carroll University"
  },
  {
    Name: "Carson-Newman University"
  },
  {
    Name: "Carteret Community College"
  },
  {
    Name: "Carthage College"
  },
  {
    Name: "Carthage R9 School District-Carthage Technical Center"
  },
  {
    Name: "Carver Career Center"
  },
  {
    Name: "Casa Loma College-Los Angeles"
  },
  {
    Name: "Casal Aveda Institute"
  },
  {
    Name: "Casal Institute of Nevada"
  },
  {
    Name: "Cascadia College"
  },
  {
    Name: "Case Western Reserve University"
  },
  {
    Name: "Casper College"
  },
  {
    Name: "Cass Career Center"
  },
  {
    Name: "Castleton University"
  },
  {
    Name: "Catawba College"
  },
  {
    Name: "Catawba Valley Community College"
  },
  {
    Name: "Catherine Hinds Institute of Esthetics"
  },
  {
    Name: "Catholic Distance University"
  },
  {
    Name: "Catholic Theological Union at Chicago"
  },
  {
    Name: "Cattaraugus Allegany BOCES-Practical Nursing Program"
  },
  {
    Name: "Cayce/Reilly School of Massage"
  },
  {
    Name: "Cayuga County Community College"
  },
  {
    Name: "Cayuga Onondaga BOCES-Practical Nursing Program"
  },
  {
    Name: "Cazenovia College"
  },
  {
    Name: "CBD College"
  },
  {
    Name: "CBT Technology Institute-Cutler Bay"
  },
  {
    Name: "CBT Technology Institute-Hialeah"
  },
  {
    Name: "CBT Technology Institute-Main Campus"
  },
  {
    Name: "CCI Training Center"
  },
  {
    Name: "CCI Training Center-Arlington"
  },
  {
    Name: "CDA Technical Institute"
  },
  {
    Name: "CDE Career Institute"
  },
  {
    Name: "Cecil College"
  },
  {
    Name: "Cecil College - Elkton Station"
  },
  {
    Name: "Cedar Crest College"
  },
  {
    Name: "Cedars Sinai Medical Center"
  },
  {
    Name: "Cedarville University"
  },
  {
    Name: "Celebrity Barber School"
  },
  {
    Name: "Celebrity School of Beauty"
  },
  {
    Name: "Celebrity School of Beauty - Hialeah"
  },
  {
    Name: "Celebrity Stylist Beauty School"
  },
  {
    Name: "CEM College-Bayamon"
  },
  {
    Name: "CEM College-Humacao"
  },
  {
    Name: "CEM College-Mayaguez"
  },
  {
    Name: "CEM College-San Juan"
  },
  {
    Name: "Centenary College of Louisiana"
  },
  {
    Name: "Centenary University"
  },
  {
    Name: "Center for Advanced Legal Studies"
  },
  {
    Name: "Center for Advanced Studies On Puerto Rico and the Caribbean"
  },
  {
    Name: "Center for Allied Health Education"
  },
  {
    Name: "Center for Instruction Technology & Innovation"
  },
  {
    Name: "Center for Massage"
  },
  {
    Name: "Center for Neurosomatic Studies"
  },
  {
    Name: "Center for the Healing Arts"
  },
  {
    Name: "Center for Ultrasound Research & Education"
  },
  {
    Name: "Centra College"
  },
  {
    Name: "Central Baptist College"
  },
  {
    Name: "Central California School of Continuing Education"
  },
  {
    Name: "Central California School of Continuing Education -"
  },
  {
    Name: "Central Career Institute LLC"
  },
  {
    Name: "Central Carolina Community College"
  },
  {
    Name: "Central Carolina Technical College"
  },
  {
    Name: "Central Christian College of Kansas"
  },
  {
    Name: "Central Christian College of the Bible"
  },
  {
    Name: "Central Coast College"
  },
  {
    Name: "Central College"
  },
  {
    Name: "Central College of Cosmetology"
  },
  {
    Name: "Central Community College"
  },
  {
    Name: "Central Connecticut State University"
  },
  {
    Name: "Central Georgia Technical College"
  },
  {
    Name: "Central Lakes College-Brainerd"
  },
  {
    Name: "Central Lakes College-Staples Campus"
  },
  {
    Name: "Central Louisiana Technical Community College"
  },
  {
    Name: "Central Maine Community College"
  },
  {
    Name: "Central Methodist University-College of Graduate and Extended Studies"
  },
  {
    Name: "Central Methodist University-College of Liberal Arts and Sciences"
  },
  {
    Name: "Central Michigan University"
  },
  {
    Name: "Central New Mexico Community College"
  },
  {
    Name: "Central Ohio Technical College"
  },
  {
    Name: "Central Oklahoma College"
  },
  {
    Name: "Central Oregon Community College"
  },
  {
    Name: "Central Penn College"
  },
  {
    Name: "Central Pennsylvania Diesel Institute"
  },
  {
    Name: "Central Pennsylvania Institute of Science and Technology"
  },
  {
    Name: "Central Piedmont Community College"
  },
  {
    Name: "Central School of Practical Nursing"
  },
  {
    Name: "Central School of Practical Nursing"
  },
  {
    Name: "Central State University"
  },
  {
    Name: "Central Susquehanna Intermediate Unit LPN Career"
  },
  {
    Name: "Central Technology Center"
  },
  {
    Name: "Central Texas Beauty College-Round Rock"
  },
  {
    Name: "Central Texas Beauty College-Temple"
  },
  {
    Name: "Central Texas College"
  },
  {
    Name: "Central Virginia Community College"
  },
  {
    Name: "Central Washington University"
  },
  {
    Name: "Central Wyoming College"
  },
  {
    Name: "Central Yeshiva Beth Joseph"
  },
  {
    Name: "Central Yeshiva Tomchei Tmimim Lubavitz"
  },
  {
    Name: "Centralia Beauty College"
  },
  {
    Name: "Centralia College"
  },
  {
    Name: "Centre College"
  },
  {
    Name: "Centura College-Chesapeake"
  },
  {
    Name: "Centura College-Newport News"
  },
  {
    Name: "Centura College-Norfolk"
  },
  {
    Name: "Centura College-Richmond Main"
  },
  {
    Name: "Centura College-Virginia Beach"
  },
  {
    Name: "Century College"
  },
  {
    Name: "Century College"
  },
  {
    Name: "Cerritos College"
  },
  {
    Name: "Cerro Coso Community College"
  },
  {
    Name: "CES College"
  },
  {
    Name: "CET-Alexandria"
  },
  {
    Name: "CET-Coachella"
  },
  {
    Name: "CET-Colton"
  },
  {
    Name: "CET-El Centro"
  },
  {
    Name: "CET-El Paso"
  },
  {
    Name: "CET-Oxnard"
  },
  {
    Name: "CET-Salinas"
  },
  {
    Name: "CET-San Diego"
  },
  {
    Name: "CET-San Jose"
  },
  {
    Name: "CET-Santa Maria"
  },
  {
    Name: "CET-Soledad"
  },
  {
    Name: "CET-Watsonville"
  },
  {
    Name: "Chabot College"
  },
  {
    Name: "Chadron State College"
  },
  {
    Name: "Chaffey College"
  },
  {
    Name: "Chamberlain University-Arizona"
  },
  {
    Name: "Chamberlain University-California"
  },
  {
    Name: "Chamberlain University-Florida"
  },
  {
    Name: "Chamberlain University-Georgia"
  },
  {
    Name: "Chamberlain University-Illinois"
  },
  {
    Name: "Chamberlain University-Indiana"
  },
  {
    Name: "Chamberlain University-Louisiana"
  },
  {
    Name: "Chamberlain University-Michigan"
  },
  {
    Name: "Chamberlain University-Missouri"
  },
  {
    Name: "Chamberlain University-Nevada"
  },
  {
    Name: "Chamberlain University-New Jersey"
  },
  {
    Name: "Chamberlain University-North Carolina"
  },
  {
    Name: "Chamberlain University-Ohio"
  },
  {
    Name: "Chamberlain University-Texas"
  },
  {
    Name: "Chamberlain University-Virginia"
  },
  {
    Name: "Chaminade University of Honolulu"
  },
  {
    Name: "Champ's Barber School"
  },
  {
    Name: "Champion Beauty College"
  },
  {
    Name: "Champion Christian College"
  },
  {
    Name: "Champlain College"
  },
  {
    Name: "Chandler-Gilbert Community College"
  },
  {
    Name: "Chapman University"
  },
  {
    Name: "Charles A Jones Career and Education Center"
  },
  {
    Name: "Charles and Sues School of Hair Design"
  },
  {
    Name: "Charles H McCann Technical School"
  },
  {
    Name: "Charles R Drew University of Medicine and Science"
  },
  {
    Name: "Charles Stuart School of Diamond Setting"
  },
  {
    Name: "Charleston Cosmetology Institute"
  },
  {
    Name: "Charleston School of Beauty Culture"
  },
  {
    Name: "Charleston School of Law"
  },
  {
    Name: "Charleston Southern University"
  },
  {
    Name: "Charlie's Guard-Detective Bureau and Academy Inc"
  },
  {
    Name: "Charlotte Christian College and Theological Seminary"
  },
  {
    Name: "Charlotte Technical College"
  },
  {
    Name: "Charter Oak State College"
  },
  {
    Name: "Charzanne Beauty College"
  },
  {
    Name: "Chatfield College"
  },
  {
    Name: "Chatham University"
  },
  {
    Name: "Chattahoochee Technical College"
  },
  {
    Name: "Chattanooga College Medical Dental and Technical Careers"
  },
  {
    Name: "Chattanooga State Community College"
  },
  {
    Name: "Cheeks Beauty Academy"
  },
  {
    Name: "Cheeks Beauty Academy"
  },
  {
    Name: "Chemeketa Community College"
  },
  {
    Name: "Chesapeake College"
  },
  {
    Name: "Chester Career College"
  },
  {
    Name: "Chester County Intermediate Unit"
  },
  {
    Name: "Chestnut Hill College"
  },
  {
    Name: "Cheyney University of Pennsylvania"
  },
  {
    Name: "CHI Health School of Radiologic Technology"
  },
  {
    Name: "Chicago Professional Center"
  },
  {
    Name: "Chicago School of Professional Psychology at Dallas"
  },
  {
    Name: "Chicago School of Professional Psychology-College of Nursing"
  },
  {
    Name: "Chicago State University"
  },
  {
    Name: "Chicago Theological Seminary"
  },
  {
    Name: "Chief Dull Knife College"
  },
  {
    Name: "Chipola College"
  },
  {
    Name: "Chippewa Valley Technical College"
  },
  {
    Name: "Chisholm Trail Technology Center"
  },
  {
    Name: "Choffin Career  and Technical Center"
  },
  {
    Name: "Chowan University"
  },
  {
    Name: "Chris Beauty College"
  },
  {
    Name: "Christ Mission College"
  },
  {
    Name: "Christian Brothers University"
  },
  {
    Name: "Christian Culinary Academy"
  },
  {
    Name: "Christian Theological Seminary"
  },
  {
    Name: "Christina and Company Education Center"
  },
  {
    Name: "Christine Valmy International School for Esthetics Skin Care & Makeup"
  },
  {
    Name: "Christine Valmy International School of Esthetics & Cosmetology"
  },
  {
    Name: "Christopher Newport University"
  },
  {
    Name: "Church Divinity School of the Pacific"
  },
  {
    Name: "Cincinnati College of Mortuary Science"
  },
  {
    Name: "Cincinnati School of Barbering & Hair Design"
  },
  {
    Name: "Cincinnati School of Medical Massage"
  },
  {
    Name: "Cincinnati State Technical and Community College"
  },
  {
    Name: "Cinta Aveda Institute"
  },
  {
    Name: "Cinta Aveda Institute - San Jose"
  },
  {
    Name: "Circle in the Square Theatre School"
  },
  {
    Name: "Cisco College"
  },
  {
    Name: "Citadel Military College of South Carolina"
  },
  {
    Name: "Citizens School of Nursing"
  },
  {
    Name: "Citrus College"
  },
  {
    Name: "Citrus Heights Beauty College"
  },
  {
    Name: "City College Montana State University Billings"
  },
  {
    Name: "City College of San Francisco"
  },
  {
    Name: "City College-Altamonte Springs"
  },
  {
    Name: "City College-Fort Lauderdale"
  },
  {
    Name: "City College-Gainesville"
  },
  {
    Name: "City College-Hollywood"
  },
  {
    Name: "City College-Miami"
  },
  {
    Name: "City Colleges of Chicago-Harold Washington College"
  },
  {
    Name: "City Colleges of Chicago-Harry S Truman College"
  },
  {
    Name: "City Colleges of Chicago-Kennedy-King College"
  },
  {
    Name: "City Colleges of Chicago-Malcolm X College"
  },
  {
    Name: "City Colleges of Chicago-Olive-Harvey College"
  },
  {
    Name: "City Colleges of Chicago-Richard J Daley College"
  },
  {
    Name: "City Colleges of Chicago-Wilbur Wright College"
  },
  {
    Name: "City Pointe Beauty Academy"
  },
  {
    Name: "City University of Seattle"
  },
  {
    Name: "City Vision University"
  },
  {
    Name: "Clackamas Community College"
  },
  {
    Name: "Claflin University"
  },
  {
    Name: "Claremont Graduate University"
  },
  {
    Name: "Claremont Lincoln University"
  },
  {
    Name: "Claremont McKenna College"
  },
  {
    Name: "Claremont School of Theology"
  },
  {
    Name: "Clarendon College"
  },
  {
    Name: "Clarion University of Pennsylvania"
  },
  {
    Name: "Clark Atlanta University"
  },
  {
    Name: "Clark College"
  },
  {
    Name: "Clark State College"
  },
  {
    Name: "Clark University"
  },
  {
    Name: "Clarke University"
  },
  {
    Name: "Clarks Summit University"
  },
  {
    Name: "Clarksburg Beauty Academy and School of Massage Therapy"
  },
  {
    Name: "Clarkson College"
  },
  {
    Name: "Clarkson University"
  },
  {
    Name: "Clarkson University Capital Region Campus"
  },
  {
    Name: "Clary Sage College"
  },
  {
    Name: "Clatsop Community College"
  },
  {
    Name: "Clayton  State University"
  },
  {
    Name: "Clear Creek Baptist Bible College"
  },
  {
    Name: "Clearfield County Career and Technology Center"
  },
  {
    Name: "Cleary University"
  },
  {
    Name: "Clemson University"
  },
  {
    Name: "Cleveland Clinic Health System-School of Diagnostic Imaging"
  },
  {
    Name: "Cleveland Community College"
  },
  {
    Name: "Cleveland Institute of Art"
  },
  {
    Name: "Cleveland Institute of Medical Massage"
  },
  {
    Name: "Cleveland Institute of Music"
  },
  {
    Name: "Cleveland State Community College"
  },
  {
    Name: "Cleveland State University"
  },
  {
    Name: "Cleveland University-Kansas City"
  },
  {
    Name: "Clinton College"
  },
  {
    Name: "Clinton Community College"
  },
  {
    Name: "Clinton Essex Warren Washington BOCES"
  },
  {
    Name: "Clinton Technical School"
  },
  {
    Name: "Cloud County Community College"
  },
  {
    Name: "Clover Park Technical College"
  },
  {
    Name: "Clovis Adult Education"
  },
  {
    Name: "Clovis Community College"
  },
  {
    Name: "Clovis Community College"
  },
  {
    Name: "Cloyd's Barber School 2 Inc"
  },
  {
    Name: "Cloyd's Beauty School 1 Inc"
  },
  {
    Name: "Cloyd's Beauty School 3 Inc"
  },
  {
    Name: "Coachella Valley Beauty College"
  },
  {
    Name: "Coachella Valley Beauty College-Hemet"
  },
  {
    Name: "Coahoma Community College"
  },
  {
    Name: "Coastal Bend College"
  },
  {
    Name: "Coastal Carolina Community College"
  },
  {
    Name: "Coastal Carolina University"
  },
  {
    Name: "Coastal Pines Technical College"
  },
  {
    Name: "Coastline Beauty College"
  },
  {
    Name: "Coastline Beauty College - Hemet"
  },
  {
    Name: "Coastline Community College"
  },
  {
    Name: "Coba Academy"
  },
  {
    Name: "Cochran School of Nursing"
  },
  {
    Name: "Coconino Community College"
  },
  {
    Name: "Coe College"
  },
  {
    Name: "Coffeyville Community College"
  },
  {
    Name: "Coffeyville Technical Campus"
  },
  {
    Name: "Coker University"
  },
  {
    Name: "Colby College"
  },
  {
    Name: "Colby Community College"
  },
  {
    Name: "Colby-Sawyer College"
  },
  {
    Name: "Colegio de Cinematografia Artes y Television"
  },
  {
    Name: "Colegio Educativo Tecnologico Industrial Inc"
  },
  {
    Name: "Colegio Mayor de Tecnologia Inc"
  },
  {
    Name: "Colegio Tecnico de Electricidad Galloza"
  },
  {
    Name: "Colegio Universitario de San Juan"
  },
  {
    Name: "Colgate Rochester Crozer Divinity School"
  },
  {
    Name: "Colgate University"
  },
  {
    Name: "Collectiv Academy"
  },
  {
    Name: "College for Creative Studies"
  },
  {
    Name: "College of Alameda"
  },
  {
    Name: "College of Biblical Studies-Houston"
  },
  {
    Name: "College of Central Florida"
  },
  {
    Name: "College of Charleston"
  },
  {
    Name: "College of Coastal Georgia"
  },
  {
    Name: "College of Cosmetology"
  },
  {
    Name: "College of Court Reporting Inc"
  },
  {
    Name: "College of DuPage"
  },
  {
    Name: "College of Eastern Idaho"
  },
  {
    Name: "College of Hair Design Careers"
  },
  {
    Name: "College of Hair Design-Downtown"
  },
  {
    Name: "College of Hair Design-East Campus"
  },
  {
    Name: "College of Health Care Professions"
  },
  {
    Name: "College of Lake County"
  },
  {
    Name: "College of Marin"
  },
  {
    Name: "College of Massage Therapy"
  },
  {
    Name: "College of Menominee Nation"
  },
  {
    Name: "College of Micronesia-FSM"
  },
  {
    Name: "College of Mount Saint Vincent"
  },
  {
    Name: "College of Our Lady of the Elms"
  },
  {
    Name: "College of Saint Benedict"
  },
  {
    Name: "College of Saint Mary"
  },
  {
    Name: "College of San Mateo"
  },
  {
    Name: "College of Southern Idaho"
  },
  {
    Name: "College of Southern Maryland"
  },
  {
    Name: "College of Southern Nevada"
  },
  {
    Name: "College of Staten Island CUNY"
  },
  {
    Name: "College of the Albemarle"
  },
  {
    Name: "College of the Atlantic"
  },
  {
    Name: "College of the Canyons"
  },
  {
    Name: "College of the Desert"
  },
  {
    Name: "College of the Holy Cross"
  },
  {
    Name: "College of the Mainland"
  },
  {
    Name: "College of the Marshall Islands"
  },
  {
    Name: "College of the Muscogee Nation"
  },
  {
    Name: "College of the Ozarks"
  },
  {
    Name: "College of the Redwoods"
  },
  {
    Name: "College of the Sequoias"
  },
  {
    Name: "College of the Siskiyous"
  },
  {
    Name: "College of Western Idaho"
  },
  {
    Name: "College of Wilmington"
  },
  {
    Name: "College Unbound"
  },
  {
    Name: "Collin County Community College District"
  },
  {
    Name: "Colorado Academy of Veterinary Technology"
  },
  {
    Name: "Colorado Christian University"
  },
  {
    Name: "Colorado College"
  },
  {
    Name: "Colorado Media School"
  },
  {
    Name: "Colorado Mesa University"
  },
  {
    Name: "Colorado Mountain College"
  },
  {
    Name: "Colorado Northwestern Community College"
  },
  {
    Name: "Colorado School of Healing Arts"
  },
  {
    Name: "Colorado School of Mines"
  },
  {
    Name: "Colorado School of Trades"
  },
  {
    Name: "Colorado School of Traditional Chinese Medicine"
  },
  {
    Name: "Colorado State University Global"
  },
  {
    Name: "Colorado State University Pueblo"
  },
  {
    Name: "Colorado State University-Fort Collins"
  },
  {
    Name: "Colorado Technical University-Colorado Springs"
  },
  {
    Name: "Colorado Technical University-Denver South"
  },
  {
    Name: "Columbia Basin College"
  },
  {
    Name: "Columbia Central University-Caguas"
  },
  {
    Name: "Columbia College"
  },
  {
    Name: "Columbia College"
  },
  {
    Name: "Columbia College"
  },
  {
    Name: "Columbia College"
  },
  {
    Name: "Columbia College -  Jacksonville"
  },
  {
    Name: "Columbia College - Crystal Lake Campus"
  },
  {
    Name: "Columbia College - Denver"
  },
  {
    Name: "Columbia College - Eastfield Pleasant Grove"
  },
  {
    Name: "Columbia College - Elgin"
  },
  {
    Name: "Columbia College - Fort Leonard Wood"
  },
  {
    Name: "Columbia College - Fort Leonard Wood 58th Trans BN"
  },
  {
    Name: "Columbia College - Fort Sill"
  },
  {
    Name: "Columbia College - Fort Stewart"
  },
  {
    Name: "Columbia College - Fort Worth"
  },
  {
    Name: "Columbia College - Freeport"
  },
  {
    Name: "Columbia College - Hunter Army Airfield"
  },
  {
    Name: "Columbia College - Imperial"
  },
  {
    Name: "Columbia College - Jefferson City"
  },
  {
    Name: "Columbia College - Kansas City"
  },
  {
    Name: "Columbia College - Lake County"
  },
  {
    Name: "Columbia College - Lake Ozark"
  },
  {
    Name: "Columbia College - Lemoore"
  },
  {
    Name: "Columbia College - Los Alamitos"
  },
  {
    Name: "Columbia College - Mesquite"
  },
  {
    Name: "Columbia College - Minot AFB"
  },
  {
    Name: "Columbia College - NAS Jacksonville"
  },
  {
    Name: "Columbia College - Naval Base San Diego"
  },
  {
    Name: "Columbia College - Naval Station Everett/Marysville"
  },
  {
    Name: "Columbia College - NSB Kings Bay"
  },
  {
    Name: "Columbia College - Orlando"
  },
  {
    Name: "Columbia College - Redstone Arsenal"
  },
  {
    Name: "Columbia College - Rolla"
  },
  {
    Name: "Columbia College - Saint Louis"
  },
  {
    Name: "Columbia College - Salt Lake"
  },
  {
    Name: "Columbia College - San Diego"
  },
  {
    Name: "Columbia College - San Luis Obispo"
  },
  {
    Name: "Columbia College - Springfield"
  },
  {
    Name: "Columbia College - Springfield TMobile"
  },
  {
    Name: "Columbia College - Tavares PD"
  },
  {
    Name: "Columbia College - USCG Base Honolulu"
  },
  {
    Name: "Columbia College - Waynesville"
  },
  {
    Name: "Columbia College - Whidbey Island"
  },
  {
    Name: "Columbia College Chicago"
  },
  {
    Name: "Columbia College Hollywood"
  },
  {
    Name: "Columbia Gorge Community College"
  },
  {
    Name: "Columbia Institute"
  },
  {
    Name: "Columbia International University"
  },
  {
    Name: "Columbia Southern University"
  },
  {
    Name: "Columbia State Community College"
  },
  {
    Name: "Columbia Theological Seminary"
  },
  {
    Name: "Columbia University in the City of New York"
  },
  {
    Name: "Columbia-Greene Community College"
  },
  {
    Name: "Columbiana County Career and Technical Center"
  },
  {
    Name: "Columbus College of Art and Design"
  },
  {
    Name: "Columbus School of Medical Massage"
  },
  {
    Name: "Columbus State Community College"
  },
  {
    Name: "Columbus State University"
  },
  {
    Name: "Columbus Technical Campus"
  },
  {
    Name: "Columbus Technical College"
  },
  {
    Name: "Commercial Divers International"
  },
  {
    Name: "Commonwealth Institute of Funeral Service"
  },
  {
    Name: "Commonwealth Technical Institute"
  },
  {
    Name: "Community Care College"
  },
  {
    Name: "Community Christian College"
  },
  {
    Name: "Community College of Allegheny County"
  },
  {
    Name: "Community College of Aurora"
  },
  {
    Name: "Community College of Baltimore County"
  },
  {
    Name: "Community College of Beaver County"
  },
  {
    Name: "Community College of Denver"
  },
  {
    Name: "Community College of Philadelphia"
  },
  {
    Name: "Community College of Rhode Island"
  },
  {
    Name: "Community College of Vermont"
  },
  {
    Name: "Compass Career College"
  },
  {
    Name: "Compass College of Film and Media"
  },
  {
    Name: "Compton College"
  },
  {
    Name: "Compu-Med Vocational Careers Corp"
  },
  {
    Name: "Compu-Med Vocational Careers Corp"
  },
  {
    Name: "Conception Seminary College"
  },
  {
    Name: "Concord University"
  },
  {
    Name: "Concorde Career College-Aurora"
  },
  {
    Name: "Concorde Career College-Dallas"
  },
  {
    Name: "Concorde Career College-Garden Grove"
  },
  {
    Name: "Concorde Career College-Grand Prairie"
  },
  {
    Name: "Concorde Career College-Kansas City"
  },
  {
    Name: "Concorde Career College-Memphis"
  },
  {
    Name: "Concorde Career College-North Hollywood"
  },
  {
    Name: "Concorde Career College-Portland"
  },
  {
    Name: "Concorde Career College-San Antonio"
  },
  {
    Name: "Concorde Career College-San Bernardino"
  },
  {
    Name: "Concorde Career College-San Diego"
  },
  {
    Name: "Concorde Career College-Southaven"
  },
  {
    Name: "Concorde Career Institute-Jacksonville"
  },
  {
    Name: "Concorde Career Institute-Miramar"
  },
  {
    Name: "Concorde Career Institute-Orlando"
  },
  {
    Name: "Concorde Career Institute-Tampa"
  },
  {
    Name: "Concordia College at Moorhead"
  },
  {
    Name: "Concordia Seminary"
  },
  {
    Name: "Concordia Theological Seminary"
  },
  {
    Name: "Concordia University Ann Arbor"
  },
  {
    Name: "Concordia University Texas"
  },
  {
    Name: "Concordia University-Chicago"
  },
  {
    Name: "Concordia University-Irvine"
  },
  {
    Name: "Concordia University-Nebraska"
  },
  {
    Name: "Concordia University-Saint Paul"
  },
  {
    Name: "Concordia University-Wisconsin"
  },
  {
    Name: "Congregation Talmidei Mesivta Tiferes Shmiel Aleksander"
  },
  {
    Name: "Connecticut Aero Tech  School"
  },
  {
    Name: "Connecticut College"
  },
  {
    Name: "Connors State College"
  },
  {
    Name: "Conservatory of Recording Arts and Sciences"
  },
  {
    Name: "Continental School of Beauty Culture-Mattydale"
  },
  {
    Name: "Continental School of Beauty Culture-Rochester"
  },
  {
    Name: "Continental School of Beauty Culture-West Seneca"
  },
  {
    Name: "Contra Costa College"
  },
  {
    Name: "Contra Costa Medical Career College"
  },
  {
    Name: "Converse University"
  },
  {
    Name: "Conway School of Landscape Design"
  },
  {
    Name: "Copiah-Lincoln Community College"
  },
  {
    Name: "Copiah-Lincoln Community College Simpson County Center"
  },
  {
    Name: "Copiah-Lincoln Community College-Natchez Campus"
  },
  {
    Name: "Copper Mountain Community College"
  },
  {
    Name: "Coppin State University"
  },
  {
    Name: "Corban University"
  },
  {
    Name: "Corinth Academy of Cosmetology"
  },
  {
    Name: "Cornell College"
  },
  {
    Name: "Cornell University"
  },
  {
    Name: "Cornerstone University"
  },
  {
    Name: "Cornish College of the Arts"
  },
  {
    Name: "Cortiva Institute"
  },
  {
    Name: "Cortiva Institute"
  },
  {
    Name: "Cortiva Institute"
  },
  {
    Name: "Cortiva Institute"
  },
  {
    Name: "Cortiva Institute"
  },
  {
    Name: "Cortiva Institute"
  },
  {
    Name: "Cortiva Institute-Arlington"
  },
  {
    Name: "Cosmetology & Spa Academy"
  },
  {
    Name: "Cosmetology Academy of Texarkana"
  },
  {
    Name: "Cosmetology Careers Unlimited College of Hair Skin and Nails"
  },
  {
    Name: "Cosmetology Concepts Niles"
  },
  {
    Name: "Cosmetology School of Arts & Sciences"
  },
  {
    Name: "Cosmetology Training Center"
  },
  {
    Name: "Cosmo Beauty Academy"
  },
  {
    Name: "Cossatot Community College of the University of Arkansas"
  },
  {
    Name: "Cosumnes River College"
  },
  {
    Name: "Cottey College"
  },
  {
    Name: "County College of Morris"
  },
  {
    Name: "Covenant College"
  },
  {
    Name: "Covenant School of Nursing and Allied Health"
  },
  {
    Name: "Covenant Theological Seminary"
  },
  {
    Name: "Cowley County Community College"
  },
  {
    Name: "Cox College"
  },
  {
    Name: "Cozmo Beauty School"
  },
  {
    Name: "Crafton Hills College"
  },
  {
    Name: "Cranbrook Academy of Art"
  },
  {
    Name: "Crave Beauty Academy"
  },
  {
    Name: "Craven Community College"
  },
  {
    Name: "Crawford County Career and Technical Center Practical Nursing Program"
  },
  {
    Name: "Creative Hair School of Cosmetology"
  },
  {
    Name: "Creative Images Institute of Cosmetology-North Dayton"
  },
  {
    Name: "Creative Images Institute of Cosmetology-South Dayton"
  },
  {
    Name: "Creative Touch Cosmetology School"
  },
  {
    Name: "Creighton University"
  },
  {
    Name: "Crescent City Bartending School"
  },
  {
    Name: "Crevier's Academy of Cosmetology Arts"
  },
  {
    Name: "Criswell College"
  },
  {
    Name: "Crowder College"
  },
  {
    Name: "Crowley's Ridge College"
  },
  {
    Name: "Crown College"
  },
  {
    Name: "Crown Cutz Academy Bristol"
  },
  {
    Name: "CRU Institute of Cosmetology and Barbering"
  },
  {
    Name: "CT Aerotech"
  },
  {
    Name: "CTK Healthcare & Career Institute"
  },
  {
    Name: "Cuesta College"
  },
  {
    Name: "Culinary Institute Inc"
  },
  {
    Name: "Culinary Institute of America"
  },
  {
    Name: "Culinary Institute of America at Greystone"
  },
  {
    Name: "Culinary Institute of America San Antonio"
  },
  {
    Name: "Culinary Tech Center"
  },
  {
    Name: "Culpeper Cosmetology Training Center"
  },
  {
    Name: "Culver-Stockton College"
  },
  {
    Name: "Cumberland University"
  },
  {
    Name: "CUNY Bernard M Baruch College"
  },
  {
    Name: "CUNY Borough of Manhattan Community College"
  },
  {
    Name: "CUNY Bronx Community College"
  },
  {
    Name: "CUNY Brooklyn College"
  },
  {
    Name: "CUNY Brooklyn College - Feirstein Graduate School of Cinema"
  },
  {
    Name: "CUNY City College"
  },
  {
    Name: "CUNY Graduate School and University Center"
  },
  {
    Name: "CUNY Hostos Community College"
  },
  {
    Name: "CUNY Hunter College"
  },
  {
    Name: "CUNY John Jay College of Criminal Justice"
  },
  {
    Name: "CUNY Kingsborough Community College"
  },
  {
    Name: "CUNY LaGuardia Community College"
  },
  {
    Name: "CUNY Lehman College"
  },
  {
    Name: "CUNY Medgar Evers College"
  },
  {
    Name: "CUNY New York City College of Technology"
  },
  {
    Name: "CUNY Queens College"
  },
  {
    Name: "CUNY Queensborough Community College"
  },
  {
    Name: "CUNY School of Law"
  },
  {
    Name: "CUNY Stella and Charles Guttman Community College"
  },
  {
    Name: "CUNY York College"
  },
  {
    Name: "Curry College"
  },
  {
    Name: "Curtis Institute of Music"
  },
  {
    Name: "Cutting Edge Academy"
  },
  {
    Name: "Cuyahoga Community College District"
  },
  {
    Name: "Cuyahoga Valley Career Center"
  },
  {
    Name: "Cuyamaca College"
  },
  {
    Name: "CVPH Medical Center School of Radiologic Technology"
  },
  {
    Name: "CyberTex Institute of Technology"
  },
  {
    Name: "Cypress College"
  },
  {
    Name: "D A Dorsey Technical College"
  },
  {
    Name: "D'Mart Institute"
  },
  {
    Name: "D'Youville  University"
  },
  {
    Name: "D&S School of Cosmetology"
  },
  {
    Name: "Daemen University"
  },
  {
    Name: "Dakota College at Bottineau"
  },
  {
    Name: "Dakota County Technical College"
  },
  {
    Name: "Dakota State University"
  },
  {
    Name: "Dakota Wesleyan University"
  },
  {
    Name: "Dallas Baptist University"
  },
  {
    Name: "Dallas Barber & Stylist College"
  },
  {
    Name: "Dallas Christian College"
  },
  {
    Name: "Dallas College"
  },
  {
    Name: "Dallas Institute of Funeral Service"
  },
  {
    Name: "Dallas Theological Seminary"
  },
  {
    Name: "Dalton Institute of Esthetics and Cosmetology"
  },
  {
    Name: "Dalton State College"
  },
  {
    Name: "Danville Area Community College"
  },
  {
    Name: "Danville Community College"
  },
  {
    Name: "Daoist Traditions College of Chinese Medical Arts"
  },
  {
    Name: "Dartmouth College"
  },
  {
    Name: "Davenport University"
  },
  {
    Name: "Davenport University - Detroit"
  },
  {
    Name: "Davenport University - Wayne CCCD"
  },
  {
    Name: "Davenport University-Holland Location"
  },
  {
    Name: "Davenport University-Kalamazoo Location"
  },
  {
    Name: "Davenport University-Lansing Location"
  },
  {
    Name: "Davenport University-Midland Location"
  },
  {
    Name: "Davenport University-Traverse City Location"
  },
  {
    Name: "Davenport University-Warren Location"
  },
  {
    Name: "David Pressley School of Cosmetology"
  },
  {
    Name: "Davidson College"
  },
  {
    Name: "Davidson-Davie Community College"
  },
  {
    Name: "Davines Professional Academy of Beauty and Business"
  },
  {
    Name: "Davis & Elkins College"
  },
  {
    Name: "Davis College"
  },
  {
    Name: "Davis College"
  },
  {
    Name: "Davis Technical College"
  },
  {
    Name: "Dawn Career Institute LLC"
  },
  {
    Name: "Dawson Community College"
  },
  {
    Name: "Daybreak University"
  },
  {
    Name: "Dayton Barber College"
  },
  {
    Name: "Dayton School of Medical Massage"
  },
  {
    Name: "Dayton School of Medical Massage-Lima"
  },
  {
    Name: "Daytona College"
  },
  {
    Name: "Daytona State College"
  },
  {
    Name: "De Anza College"
  },
  {
    Name: "Dean College"
  },
  {
    Name: "Debutantes School of Cosmetology and Nail Technology"
  },
  {
    Name: "Defiance College"
  },
  {
    Name: "DeHart Technical School"
  },
  {
    Name: "Del Mar College"
  },
  {
    Name: "Del-Mar-Va Beauty Academy"
  },
  {
    Name: "Delaware Chenango Madison Otsego BOCES-Practical Nursing Program"
  },
  {
    Name: "Delaware College of Art and Design"
  },
  {
    Name: "Delaware County Community College"
  },
  {
    Name: "Delaware County Technical School-Practical Nursing Program"
  },
  {
    Name: "Delaware Learning Institute of Cosmetology"
  },
  {
    Name: "Delaware State University"
  },
  {
    Name: "Delaware Technical Community College-Owens"
  },
  {
    Name: "Delaware Technical Community College-Stanton/Wilmington"
  },
  {
    Name: "Delaware Technical Community College-Terry"
  },
  {
    Name: "Delaware Valley University"
  },
  {
    Name: "Delgado Community College"
  },
  {
    Name: "Dell'Arte International School of Physical Theatre"
  },
  {
    Name: "Delta College"
  },
  {
    Name: "Delta College Inc"
  },
  {
    Name: "Delta College of Arts & Technology"
  },
  {
    Name: "Delta College of Arts & Technology-Lafayette Campus"
  },
  {
    Name: "Delta College-Slidell Campus"
  },
  {
    Name: "Delta Designs Cosmetology School"
  },
  {
    Name: "Delta State University"
  },
  {
    Name: "Delta Technical College-Mississippi"
  },
  {
    Name: "Deluxe Barber College"
  },
  {
    Name: "Denham Springs Beauty School"
  },
  {
    Name: "Denison University"
  },
  {
    Name: "Denmark College"
  },
  {
    Name: "Denmark Technical College"
  },
  {
    Name: "Dental Assistant Pro LLC-Columbus"
  },
  {
    Name: "Dental Assistant Pro-Lebanon"
  },
  {
    Name: "Denver College of Nursing"
  },
  {
    Name: "Denver Seminary"
  },
  {
    Name: "Denver Seminary - Washington DC"
  },
  {
    Name: "DePaul University"
  },
  {
    Name: "DePauw University"
  },
  {
    Name: "Derech Hachaim Seminary"
  },
  {
    Name: "Dermal Science International Aesthetics and Nail Academy"
  },
  {
    Name: "Des Moines Area Community College"
  },
  {
    Name: "Des Moines University-Osteopathic Medical Center"
  },
  {
    Name: "DeSales University"
  },
  {
    Name: "Design Institute of San Diego"
  },
  {
    Name: "Design's School of Cosmetology"
  },
  {
    Name: "Designer Barber & Stylist School"
  },
  {
    Name: "Designer Barber & Stylist School -"
  },
  {
    Name: "Detroit Business Institute-Downriver"
  },
  {
    Name: "DeVry College of New York"
  },
  {
    Name: "DeVry University-Arizona"
  },
  {
    Name: "DeVry University-California"
  },
  {
    Name: "DeVry University-Colorado"
  },
  {
    Name: "DeVry University-Florida"
  },
  {
    Name: "DeVry University-Georgia"
  },
  {
    Name: "DeVry University-Illinois"
  },
  {
    Name: "DeVry University-Missouri"
  },
  {
    Name: "DeVry University-Nevada"
  },
  {
    Name: "DeVry University-New Jersey"
  },
  {
    Name: "DeVry University-North Carolina"
  },
  {
    Name: "DeVry University-Ohio"
  },
  {
    Name: "DeVry University-Pennsylvania"
  },
  {
    Name: "DeVry University-Tennessee"
  },
  {
    Name: "DeVry University-Texas"
  },
  {
    Name: "DeVry University-Virginia"
  },
  {
    Name: "Dewey University-Carolina"
  },
  {
    Name: "Dewey University-Hato Rey"
  },
  {
    Name: "Dewey University-Juana Diaz"
  },
  {
    Name: "Dewey University-Manati"
  },
  {
    Name: "Diablo Valley College"
  },
  {
    Name: "Diamond Beauty College"
  },
  {
    Name: "Diamonds College"
  },
  {
    Name: "Dickinson College"
  },
  {
    Name: "Dickinson State University"
  },
  {
    Name: "Diesel Driving Academy-Baton Rouge"
  },
  {
    Name: "Diesel Driving Academy-Shreveport"
  },
  {
    Name: "DigiPen Institute of Technology"
  },
  {
    Name: "Digital Film Academy"
  },
  {
    Name: "Digital Film Academy - Atlanta"
  },
  {
    Name: "Digital Media Institute"
  },
  {
    Name: "DiGrigoli School of Cosmetology"
  },
  {
    Name: "Dillard University"
  },
  {
    Name: "Diman Regional Technical Institute"
  },
  {
    Name: "Divers Institute of Technology"
  },
  {
    Name: "Diversified Vocational College"
  },
  {
    Name: "Divine Mercy University"
  },
  {
    Name: "Divine Word College"
  },
  {
    Name: "Dixie Technical College"
  },
  {
    Name: "DLP Conemaugh Memorial Medical Center"
  },
  {
    Name: "Doane University"
  },
  {
    Name: "Dodge City Community College"
  },
  {
    Name: "Dolce The Academy"
  },
  {
    Name: "Dominican School of Philosophy & Theology"
  },
  {
    Name: "Dominican University"
  },
  {
    Name: "Dominican University New York"
  },
  {
    Name: "Dominican University of California"
  },
  {
    Name: "Don Roberts School of Hair Design"
  },
  {
    Name: "Dongguk University Los Angeles"
  },
  {
    Name: "Donnelly College"
  },
  {
    Name: "Dordt University"
  },
  {
    Name: "Dorsey College"
  },
  {
    Name: "Dorsey College-Dearborn"
  },
  {
    Name: "Dorsey College-Roseville"
  },
  {
    Name: "Dorsey College-Roseville"
  },
  {
    Name: "Dorsey College-Saginaw"
  },
  {
    Name: "Dorsey College-Wayne"
  },
  {
    Name: "Dorsey College-Woodhaven"
  },
  {
    Name: "Douglas Education Center"
  },
  {
    Name: "Douglas J Aveda Institute"
  },
  {
    Name: "Downey Adult School"
  },
  {
    Name: "Dr. Ida Rolf Institute"
  },
  {
    Name: "Dragon Rises College of Oriental Medicine"
  },
  {
    Name: "Drake University"
  },
  {
    Name: "Drew University"
  },
  {
    Name: "Drexel University"
  },
  {
    Name: "Drury University"
  },
  {
    Name: "Drury University-College of Continuing Professional Studies"
  },
  {
    Name: "DSDT"
  },
  {
    Name: "Duke University"
  },
  {
    Name: "Dunwoody College of Technology"
  },
  {
    Name: "Duquesne University"
  },
  {
    Name: "Durant Institute of Hair Design"
  },
  {
    Name: "Durham Technical Community College"
  },
  {
    Name: "Dutchess BOCES-Practical Nursing Program"
  },
  {
    Name: "Dutchess Community College"
  },
  {
    Name: "DuVall's School of Cosmetology"
  },
  {
    Name: "Dyersburg State Community College"
  },
  {
    Name: "E Q School of Hair Design"
  },
  {
    Name: "Ea La Mar's Cosmetology & Barber College"
  },
  {
    Name: "Eagle Gate College-Boise Campus"
  },
  {
    Name: "Eagle Gate College-Layton"
  },
  {
    Name: "Eagle Gate College-Murray"
  },
  {
    Name: "Earlham College"
  },
  {
    Name: "East Arkansas Community College"
  },
  {
    Name: "East Carolina University"
  },
  {
    Name: "East Central College"
  },
  {
    Name: "East Central Community College"
  },
  {
    Name: "East Central University"
  },
  {
    Name: "East Georgia State College"
  },
  {
    Name: "East Georgia State College - Augusta"
  },
  {
    Name: "East Georgia State College - Statesboro"
  },
  {
    Name: "East Los Angeles College"
  },
  {
    Name: "East Mississippi Community College"
  },
  {
    Name: "East Ohio College"
  },
  {
    Name: "East Stroudsburg University of Pennsylvania"
  },
  {
    Name: "East Tennessee State University"
  },
  {
    Name: "East Texas Baptist University"
  },
  {
    Name: "East Valley Institute of Technology"
  },
  {
    Name: "East West College of Natural Medicine"
  },
  {
    Name: "East West College of the Healing Arts"
  },
  {
    Name: "East-West Healing Arts Institute"
  },
  {
    Name: "East-West Healing Arts Institute - Milwaukee"
  },
  {
    Name: "East-West University"
  },
  {
    Name: "Eastern Center for Arts and Technology"
  },
  {
    Name: "Eastern College of Health Vocations-Little Rock"
  },
  {
    Name: "Eastern College of Health Vocations-New Orleans"
  },
  {
    Name: "Eastern Connecticut State University"
  },
  {
    Name: "Eastern Florida State College"
  },
  {
    Name: "Eastern Gateway Community College"
  },
  {
    Name: "Eastern Illinois University"
  },
  {
    Name: "Eastern International College-Belleville"
  },
  {
    Name: "Eastern International College-Jersey City"
  },
  {
    Name: "Eastern Iowa Community College District"
  },
  {
    Name: "Eastern Kentucky University"
  },
  {
    Name: "Eastern Maine Community College"
  },
  {
    Name: "Eastern Mennonite University"
  },
  {
    Name: "Eastern Michigan University"
  },
  {
    Name: "Eastern Nazarene College"
  },
  {
    Name: "Eastern New Mexico University Ruidoso Branch Community College"
  },
  {
    Name: "Eastern New Mexico University-Main Campus"
  },
  {
    Name: "Eastern New Mexico University-Roswell Campus"
  },
  {
    Name: "Eastern Oklahoma County Technology Center"
  },
  {
    Name: "Eastern Oklahoma State College"
  },
  {
    Name: "Eastern Oregon University"
  },
  {
    Name: "Eastern School of Acupuncture and Traditional Medicine"
  },
  {
    Name: "Eastern Shore Community College"
  },
  {
    Name: "Eastern Suffolk BOCES"
  },
  {
    Name: "Eastern Suffolk BOCES"
  },
  {
    Name: "Eastern Suffolk BOCES"
  },
  {
    Name: "Eastern University"
  },
  {
    Name: "Eastern Virginia Career College"
  },
  {
    Name: "Eastern Virginia Medical School"
  },
  {
    Name: "Eastern Washington University"
  },
  {
    Name: "Eastern West Virginia Community and Technical College"
  },
  {
    Name: "Eastern Wyoming College"
  },
  {
    Name: "Eastland-Fairfield Career and Technical Schools"
  },
  {
    Name: "Eastwick College-Hackensack"
  },
  {
    Name: "Eastwick College-Nutley"
  },
  {
    Name: "Eastwick College-Ramsey"
  },
  {
    Name: "Ecclesia College"
  },
  {
    Name: "Eckerd College"
  },
  {
    Name: "ECPI University"
  },
  {
    Name: "ECPI University - Culinary Institute of Virginia - Newport News"
  },
  {
    Name: "ECPI University - Orlando"
  },
  {
    Name: "ECPI University - Roanoke"
  },
  {
    Name: "ECPI University - San Antonio"
  },
  {
    Name: "ECPI University-Charleston"
  },
  {
    Name: "ECPI University-Charlotte"
  },
  {
    Name: "ECPI University-Columbia"
  },
  {
    Name: "ECPI University-Culinary Institute of Virginia"
  },
  {
    Name: "ECPI University-Greensboro"
  },
  {
    Name: "ECPI University-Greenville"
  },
  {
    Name: "ECPI University-Innsbrook"
  },
  {
    Name: "ECPI University-Manassas"
  },
  {
    Name: "ECPI University-Newport News"
  },
  {
    Name: "ECPI University-Raleigh"
  },
  {
    Name: "ECPI University-Richmond South"
  },
  {
    Name: "ECPI University-Richmond West"
  },
  {
    Name: "ECPI University-Virginia Beach Health Sciences"
  },
  {
    Name: "Ecumenical Theological Seminary"
  },
  {
    Name: "Eden Theological Seminary"
  },
  {
    Name: "Edgecombe Community College"
  },
  {
    Name: "Edgewood College"
  },
  {
    Name: "Edinboro University of Pennsylvania"
  },
  {
    Name: "Edison State Community College"
  },
  {
    Name: "Edmonds College"
  },
  {
    Name: "EDP School"
  },
  {
    Name: "EDP University of Puerto Rico Inc-San Juan"
  },
  {
    Name: "EDP University of Puerto Rico Inc-San Sebastian"
  },
  {
    Name: "EDP University of Puerto Rico-Humacao"
  },
  {
    Name: "EDP University of Puerto Rico-Manati"
  },
  {
    Name: "EDP University of Puerto Rico-Villalba"
  },
  {
    Name: "Educators of Beauty College of Cosmetology-Peru"
  },
  {
    Name: "Educators of Beauty College of Cosmetology-Rockford"
  },
  {
    Name: "Educators of Beauty College of Cosmetology-Sterling"
  },
  {
    Name: "EduMed Partners"
  },
  {
    Name: "Edward Via College of Osteopathic Medicine"
  },
  {
    Name: "Edward Waters University"
  },
  {
    Name: "EHOVE Career Center"
  },
  {
    Name: "EINE Inc"
  },
  {
    Name: "El Camino Community College District"
  },
  {
    Name: "El Paso Community College"
  },
  {
    Name: "Elaine Sterling Institute"
  },
  {
    Name: "Electrical and HVAC/R Training Center"
  },
  {
    Name: "Elevate Salon Institute"
  },
  {
    Name: "Elevate Salon Institute"
  },
  {
    Name: "Elevate Salon Institute-Westminster"
  },
  {
    Name: "Elgin Community College"
  },
  {
    Name: "Elim Bible Institute and College"
  },
  {
    Name: "Elite Academy of Hair Design"
  },
  {
    Name: "Elite College of Cosmetology"
  },
  {
    Name: "Elite Cosmetology Barber & Spa Academy"
  },
  {
    Name: "Elite Cosmetology School"
  },
  {
    Name: "Elite School of Cosmetology"
  },
  {
    Name: "Elite Welding Academy"
  },
  {
    Name: "Elite Welding Academy LLC"
  },
  {
    Name: "Elite Welding Academy South Point"
  },
  {
    Name: "Elizabeth City State University"
  },
  {
    Name: "Elizabeth Grady School of Esthetics and Massage Therapy"
  },
  {
    Name: "Elizabethtown College"
  },
  {
    Name: "Elizabethtown Community and Technical College"
  },
  {
    Name: "Ellsworth Community College"
  },
  {
    Name: "Elmezzi Graduate School of Molecular Medicine"
  },
  {
    Name: "Elmhurst University"
  },
  {
    Name: "Elmira College"
  },
  {
    Name: "Elon University"
  },
  {
    Name: "Elyon College"
  },
  {
    Name: "Embry-Riddle Aeronautical University-Daytona Beach"
  },
  {
    Name: "Embry-Riddle Aeronautical University-Worldwide"
  },
  {
    Name: "Emerald Coast Technical College"
  },
  {
    Name: "Emerson College"
  },
  {
    Name: "Emily Griffith Technical College"
  },
  {
    Name: "Emma's Beauty Academy-Juana Diaz"
  },
  {
    Name: "Emma's Beauty Academy-Mayaguez"
  },
  {
    Name: "Emmanuel College"
  },
  {
    Name: "Emmanuel College"
  },
  {
    Name: "Emmaus Bible College"
  },
  {
    Name: "Emory & Henry College"
  },
  {
    Name: "Emory University"
  },
  {
    Name: "Emory University-Oxford College"
  },
  {
    Name: "Emperor's College of Traditional Oriental Medicine"
  },
  {
    Name: "Empire Beauty  School-Lehigh Valley"
  },
  {
    Name: "Empire Beauty School-Augusta"
  },
  {
    Name: "Empire Beauty School-Aurora"
  },
  {
    Name: "Empire Beauty School-Avondale"
  },
  {
    Name: "Empire Beauty School-Bangor"
  },
  {
    Name: "Empire Beauty School-Bloomfield"
  },
  {
    Name: "Empire Beauty School-Bloomington"
  },
  {
    Name: "Empire Beauty School-Boston"
  },
  {
    Name: "Empire Beauty School-Brooklyn"
  },
  {
    Name: "Empire Beauty School-Buffalo"
  },
  {
    Name: "Empire Beauty School-Center City Philadelphia"
  },
  {
    Name: "Empire Beauty School-Charlotte"
  },
  {
    Name: "Empire Beauty School-Cheltenham"
  },
  {
    Name: "Empire Beauty School-Chenoweth"
  },
  {
    Name: "Empire Beauty School-Cherry Hill"
  },
  {
    Name: "Empire Beauty School-Cincinnati"
  },
  {
    Name: "Empire Beauty School-Concord"
  },
  {
    Name: "Empire Beauty School-Dixie"
  },
  {
    Name: "Empire Beauty School-E Memphis"
  },
  {
    Name: "Empire Beauty School-Elizabethtown"
  },
  {
    Name: "Empire Beauty School-Florence"
  },
  {
    Name: "Empire Beauty School-Glen Burnie"
  },
  {
    Name: "Empire Beauty School-Green Bay"
  },
  {
    Name: "Empire Beauty School-Gwinnett"
  },
  {
    Name: "Empire Beauty School-Hanover"
  },
  {
    Name: "Empire Beauty School-Harrisburg"
  },
  {
    Name: "Empire Beauty School-Hooksett"
  },
  {
    Name: "Empire Beauty School-Jackson"
  },
  {
    Name: "Empire Beauty School-Kennesaw"
  },
  {
    Name: "Empire Beauty School-Laconia"
  },
  {
    Name: "Empire Beauty School-Lakeland"
  },
  {
    Name: "Empire Beauty School-Lancaster"
  },
  {
    Name: "Empire Beauty School-Lebanon"
  },
  {
    Name: "Empire Beauty School-Littleton"
  },
  {
    Name: "Empire Beauty School-Maine"
  },
  {
    Name: "Empire Beauty School-Malden"
  },
  {
    Name: "Empire Beauty School-Manhattan"
  },
  {
    Name: "Empire Beauty School-Michigan"
  },
  {
    Name: "Empire Beauty School-Midlothian"
  },
  {
    Name: "Empire Beauty School-Milwaukee"
  },
  {
    Name: "Empire Beauty School-Monroeville"
  },
  {
    Name: "Empire Beauty School-Morrow"
  },
  {
    Name: "Empire Beauty School-Nashville"
  },
  {
    Name: "Empire Beauty School-NE Philadelphia"
  },
  {
    Name: "Empire Beauty School-Newport News"
  },
  {
    Name: "Empire Beauty School-North Hills"
  },
  {
    Name: "Empire Beauty School-Northlake"
  },
  {
    Name: "Empire Beauty School-Owings Mills"
  },
  {
    Name: "Empire Beauty School-Peekskill"
  },
  {
    Name: "Empire Beauty School-Pineville"
  },
  {
    Name: "Empire Beauty School-Pottsville"
  },
  {
    Name: "Empire Beauty School-Queens"
  },
  {
    Name: "Empire Beauty School-Reading"
  },
  {
    Name: "Empire Beauty School-Richmond"
  },
  {
    Name: "Empire Beauty School-Rochester"
  },
  {
    Name: "Empire Beauty School-Savannah"
  },
  {
    Name: "Empire Beauty School-Shamokin Dam"
  },
  {
    Name: "Empire Beauty School-Somersworth"
  },
  {
    Name: "Empire Beauty School-Speedway"
  },
  {
    Name: "Empire Beauty School-Spring Lake Park"
  },
  {
    Name: "Empire Beauty School-Springfield"
  },
  {
    Name: "Empire Beauty School-Stone Park"
  },
  {
    Name: "Empire Beauty School-Tampa"
  },
  {
    Name: "Empire Beauty School-Thornton"
  },
  {
    Name: "Empire Beauty School-Union"
  },
  {
    Name: "Empire Beauty School-Vernon Hills"
  },
  {
    Name: "Empire Beauty School-Virginia Beach"
  },
  {
    Name: "Empire Beauty School-Warwick"
  },
  {
    Name: "Empire Beauty School-West Greensboro"
  },
  {
    Name: "Empire Beauty School-West Mifflin"
  },
  {
    Name: "Empire Beauty School-West Palm"
  },
  {
    Name: "Empire Beauty School-Winston-Salem"
  },
  {
    Name: "Empire Beauty School-Wyoming Valley"
  },
  {
    Name: "Empire Beauty School-York"
  },
  {
    Name: "Empire College"
  },
  {
    Name: "Employment Solutions-College for Technical Education"
  },
  {
    Name: "Emporia State University"
  },
  {
    Name: "Endicott College"
  },
  {
    Name: "Ensign College"
  },
  {
    Name: "Epic Bible College & Graduate School"
  },
  {
    Name: "Episcopal Theological Seminary of the Southwest"
  },
  {
    Name: "Eric Fisher Academy"
  },
  {
    Name: "Erie 1 BOCES"
  },
  {
    Name: "Erie 2 Chautauqua Cattaraugus BOCES-Practical Nursing Program"
  },
  {
    Name: "Erie Community College"
  },
  {
    Name: "Erie Institute of Technology Inc"
  },
  {
    Name: "Erikson Institute"
  },
  {
    Name: "Erskine College"
  },
  {
    Name: "Erwin Technical College"
  },
  {
    Name: "Escondido Adult School"
  },
  {
    Name: "Escuela de Artes Plasticas y Diseno de Puerto Rico"
  },
  {
    Name: "Escuela de Peritos Electricistas de Isabela Inc"
  },
  {
    Name: "Escuela De Troqueleria Y Herramentaje"
  },
  {
    Name: "Escuela Hotelera de San Juan"
  },
  {
    Name: "Escuela Tecnica de Electricidad"
  },
  {
    Name: "Essex County College"
  },
  {
    Name: "Esteem Academy of Beauty"
  },
  {
    Name: "Estelle Medical Academy"
  },
  {
    Name: "Estelle Skin Care and Spa Institute"
  },
  {
    Name: "Estes Institute of Cosmetology Arts and Science"
  },
  {
    Name: "Estrella Mountain Community College"
  },
  {
    Name: "ETI School of Skilled Trades"
  },
  {
    Name: "ETI Technical College"
  },
  {
    Name: "Euphoria Institute of Beauty Arts & Sciences-Summerlin"
  },
  {
    Name: "Eureka College"
  },
  {
    Name: "European Massage Therapy School-Las Vegas"
  },
  {
    Name: "European Medical School of Massage"
  },
  {
    Name: "Evangel University"
  },
  {
    Name: "Evangel University - Assemblies of God Theological Seminary"
  },
  {
    Name: "Evangelical Theological Seminary"
  },
  {
    Name: "Evans Hairstyling College-Cedar City"
  },
  {
    Name: "Evans Hairstyling College-Rexburg"
  },
  {
    Name: "Evans Hairstyling College-St George"
  },
  {
    Name: "Everett Community College"
  },
  {
    Name: "Everglades University"
  },
  {
    Name: "Everglades University - Miami"
  },
  {
    Name: "Everglades University - Tampa"
  },
  {
    Name: "Everglades University-Orlando"
  },
  {
    Name: "Everglades University-Sarasota"
  },
  {
    Name: "Evergreen Beauty and Barber College-Everett"
  },
  {
    Name: "Evergreen Valley College"
  },
  {
    Name: "Eves College of Hairstyling"
  },
  {
    Name: "Evolve Beauty Academy"
  },
  {
    Name: "Evvaylois Academy School of Beauty"
  },
  {
    Name: "Excelsior University"
  },
  {
    Name: "Exposito School of Hair Design"
  },
  {
    Name: "Fairfax University of America"
  },
  {
    Name: "Fairfield University"
  },
  {
    Name: "Fairleigh Dickinson University-Florham Campus"
  },
  {
    Name: "Fairleigh Dickinson University-Metropolitan Campus"
  },
  {
    Name: "Fairmont State University"
  },
  {
    Name: "Faith Baptist Bible College and Theological Seminary"
  },
  {
    Name: "Faith International University"
  },
  {
    Name: "Faith Theological Seminary and Christian College"
  },
  {
    Name: "Falcon Institute of Health and Science"
  },
  {
    Name: "Family of Faith Christian University"
  },
  {
    Name: "Farmingdale State College"
  },
  {
    Name: "Fashion Institute of Technology"
  },
  {
    Name: "Faust Institute of Cosmetology-Spirit Lake"
  },
  {
    Name: "Fayette County Career & Technical Institute -"
  },
  {
    Name: "Fayette County Career & Technical Institute Practical Nursing Program"
  },
  {
    Name: "Fayette Institute of Technology"
  },
  {
    Name: "Fayetteville State University"
  },
  {
    Name: "Fayetteville Technical Community College"
  },
  {
    Name: "Feather River Community College District"
  },
  {
    Name: "Federico Beauty Institute"
  },
  {
    Name: "Felbry College"
  },
  {
    Name: "Felician University"
  },
  {
    Name: "Ferris State University"
  },
  {
    Name: "Ferrum College"
  },
  {
    Name: "FIDM-Fashion Institute of Design & Merchandising"
  },
  {
    Name: "Fielding Graduate University"
  },
  {
    Name: "FINE Mortuary College"
  },
  {
    Name: "Finger Lakes Community College"
  },
  {
    Name: "Finger Lakes Health College of Nursing & Health Sciences"
  },
  {
    Name: "Finlandia University"
  },
  {
    Name: "Firelands Regional Medical Center School of Nursing"
  },
  {
    Name: "First Class Cosmetology School"
  },
  {
    Name: "First Coast Barber Academy"
  },
  {
    Name: "First Coast Technical College"
  },
  {
    Name: "First Institute of Travel Inc."
  },
  {
    Name: "Fisher College"
  },
  {
    Name: "Fisk University"
  },
  {
    Name: "Fitchburg State University"
  },
  {
    Name: "Five Branches University"
  },
  {
    Name: "Five Towns College"
  },
  {
    Name: "Flagler College"
  },
  {
    Name: "Flagler Technical College"
  },
  {
    Name: "Flair Beauty College"
  },
  {
    Name: "Flashpoint Chicago A Campus of Columbia College Hollywood"
  },
  {
    Name: "Flathead Valley Community College"
  },
  {
    Name: "Fletcher Technical Community College"
  },
  {
    Name: "Flint Hills Technical College"
  },
  {
    Name: "Florence-Darlington Technical College"
  },
  {
    Name: "Florida Academy"
  },
  {
    Name: "Florida Academy of Health & Beauty"
  },
  {
    Name: "Florida Academy of Nursing"
  },
  {
    Name: "Florida Agricultural and Mechanical University"
  },
  {
    Name: "Florida Atlantic University"
  },
  {
    Name: "Florida Barber Academy"
  },
  {
    Name: "Florida Career College-Boynton Beach"
  },
  {
    Name: "Florida Career College-Hialeah"
  },
  {
    Name: "Florida Career College-Houston"
  },
  {
    Name: "Florida Career College-Jacksonville"
  },
  {
    Name: "Florida Career College-Lauderdale Lakes"
  },
  {
    Name: "Florida Career College-Margate"
  },
  {
    Name: "Florida Career College-Miami"
  },
  {
    Name: "Florida Career College-Orlando"
  },
  {
    Name: "Florida Career College-Pembroke Pines"
  },
  {
    Name: "Florida Career College-Tampa"
  },
  {
    Name: "Florida Career College-West Palm Beach"
  },
  {
    Name: "Florida Center"
  },
  {
    Name: "Florida College"
  },
  {
    Name: "Florida College of Integrative Medicine"
  },
  {
    Name: "Florida Education Institute"
  },
  {
    Name: "Florida Gateway College"
  },
  {
    Name: "Florida Gulf Coast University"
  },
  {
    Name: "Florida Institute of Recording Sound and Technology"
  },
  {
    Name: "Florida Institute of Technology"
  },
  {
    Name: "Florida Institute of Technology-Online"
  },
  {
    Name: "Florida Institute of Ultrasound Inc"
  },
  {
    Name: "Florida International Training Institute"
  },
  {
    Name: "Florida International University"
  },
  {
    Name: "Florida Memorial University"
  },
  {
    Name: "Florida National University Training Center"
  },
  {
    Name: "Florida National University-Main Campus"
  },
  {
    Name: "Florida National University-South Campus"
  },
  {
    Name: "Florida Panhandle Technical College"
  },
  {
    Name: "Florida Polytechnic University"
  },
  {
    Name: "Florida Professional Institute"
  },
  {
    Name: "Florida School of Massage"
  },
  {
    Name: "Florida School of Traditional Midwifery"
  },
  {
    Name: "Florida Southern College"
  },
  {
    Name: "Florida SouthWestern State College"
  },
  {
    Name: "Florida State College at Jacksonville"
  },
  {
    Name: "Florida State University"
  },
  {
    Name: "Focus Personal Training Institute"
  },
  {
    Name: "Folsom Lake College"
  },
  {
    Name: "Fond du Lac Tribal and Community College"
  },
  {
    Name: "Fontbonne University"
  },
  {
    Name: "Foothill College"
  },
  {
    Name: "Forbes Road Career and Technology Center"
  },
  {
    Name: "Fordham University"
  },
  {
    Name: "Formations Institute"
  },
  {
    Name: "Formations Institute of Cosmetology & Barbering"
  },
  {
    Name: "Forsyth Technical Community College"
  },
  {
    Name: "Fort Hays State University"
  },
  {
    Name: "Fort Lewis College"
  },
  {
    Name: "Fort Myers Technical College"
  },
  {
    Name: "Fort Peck Community College"
  },
  {
    Name: "Fort Pierce Beauty Academy"
  },
  {
    Name: "Fort Scott Community College"
  },
  {
    Name: "Fort Valley State University"
  },
  {
    Name: "Fort Worth Beauty School"
  },
  {
    Name: "Fortis College"
  },
  {
    Name: "Fortis College"
  },
  {
    Name: "Fortis College-Baton Rouge"
  },
  {
    Name: "Fortis College-Centerville"
  },
  {
    Name: "Fortis College-Cincinnati"
  },
  {
    Name: "Fortis College-Columbia"
  },
  {
    Name: "Fortis College-Columbus"
  },
  {
    Name: "Fortis College-Cutler Bay"
  },
  {
    Name: "Fortis College-Cuyahoga Falls"
  },
  {
    Name: "Fortis College-Dothan"
  },
  {
    Name: "Fortis College-Foley"
  },
  {
    Name: "Fortis College-Indianapolis"
  },
  {
    Name: "Fortis College-Landover"
  },
  {
    Name: "Fortis College-Montgomery"
  },
  {
    Name: "Fortis College-Norfolk"
  },
  {
    Name: "Fortis College-Orange Park"
  },
  {
    Name: "Fortis College-Richmond"
  },
  {
    Name: "Fortis College-Salt Lake City"
  },
  {
    Name: "Fortis College-Smyrna"
  },
  {
    Name: "Fortis Institute"
  },
  {
    Name: "Fortis Institute-Birmingham"
  },
  {
    Name: "Fortis Institute-Cookeville"
  },
  {
    Name: "Fortis Institute-Forty Fort"
  },
  {
    Name: "Fortis Institute-Lawrenceville"
  },
  {
    Name: "Fortis Institute-Nashville"
  },
  {
    Name: "Fortis Institute-Pensacola"
  },
  {
    Name: "Fortis Institute-Port Saint Lucie"
  },
  {
    Name: "Fortis Institute-Scranton"
  },
  {
    Name: "Fortis Institute-Towson"
  },
  {
    Name: "Fortis Institute-Wayne"
  },
  {
    Name: "Fosbre Academy of Hair Design"
  },
  {
    Name: "Fosters Cosmetology College"
  },
  {
    Name: "Fountain of Youth Academy of Cosmetology"
  },
  {
    Name: "Four County Career Center"
  },
  {
    Name: "Four Rivers Career Center"
  },
  {
    Name: "Fox College"
  },
  {
    Name: "Fox Valley Technical College"
  },
  {
    Name: "Framingham State University"
  },
  {
    Name: "Francis Marion University"
  },
  {
    Name: "Francis Tuttle Technology Center"
  },
  {
    Name: "Franciscan Missionaries of Our Lady University"
  },
  {
    Name: "Franciscan School of Theology"
  },
  {
    Name: "Franciscan University of Steubenville"
  },
  {
    Name: "Frank Phillips College"
  },
  {
    Name: "Franklin and Marshall College"
  },
  {
    Name: "Franklin College"
  },
  {
    Name: "Franklin County Career and Technology Center"
  },
  {
    Name: "Franklin Hair Academy School of Cosmetology"
  },
  {
    Name: "Franklin Pierce University"
  },
  {
    Name: "Franklin Technology Center Adult Education"
  },
  {
    Name: "Franklin University"
  },
  {
    Name: "Franklin W Olin College of Engineering"
  },
  {
    Name: "Fred K Marchman Technical College"
  },
  {
    Name: "Fred W Eberle Technical Center"
  },
  {
    Name: "Frederick Community College"
  },
  {
    Name: "Fredrick and Charles Beauty College"
  },
  {
    Name: "Freed-Hardeman University"
  },
  {
    Name: "Fremont University"
  },
  {
    Name: "French Academy of Cosmetology"
  },
  {
    Name: "Fresno City College"
  },
  {
    Name: "Fresno Pacific University"
  },
  {
    Name: "Friends University"
  },
  {
    Name: "Front Range Community College"
  },
  {
    Name: "Frontier Community College"
  },
  {
    Name: "Frontier Nursing University"
  },
  {
    Name: "Frostburg State University"
  },
  {
    Name: "Full Sail University"
  },
  {
    Name: "Fuller Theological Seminary"
  },
  {
    Name: "Fullerton College"
  },
  {
    Name: "Fulton-Montgomery Community College"
  },
  {
    Name: "Furman University"
  },
  {
    Name: "Futura Career Institute"
  },
  {
    Name: "Future Generations University"
  },
  {
    Name: "Future-Tech Institute"
  },
  {
    Name: "FVI School of Nursing and Technology"
  },
  {
    Name: "G Skin & Beauty Institute"
  },
  {
    Name: "G Skin & Beauty Institute"
  },
  {
    Name: "GA Beauty & Barber School"
  },
  {
    Name: "Gadsden Technical College"
  },
  {
    Name: "Galaxy Medical College"
  },
  {
    Name: "Galen College of Nursing-ARH"
  },
  {
    Name: "Galen College of Nursing-Cincinnati"
  },
  {
    Name: "Galen College of Nursing-Louisville"
  },
  {
    Name: "Galen College of Nursing-San Antonio"
  },
  {
    Name: "Galen College of Nursing-Tampa Bay"
  },
  {
    Name: "Galen Health Institutes-Austin Campus"
  },
  {
    Name: "Galen Health Institutes-Miami Campus"
  },
  {
    Name: "Galen Health Institutes-Nashville Campus"
  },
  {
    Name: "Gallaudet University"
  },
  {
    Name: "Galveston College"
  },
  {
    Name: "Gannon University"
  },
  {
    Name: "Garden City Community College"
  },
  {
    Name: "Garden State Science and Technology Institute"
  },
  {
    Name: "Gardner-Webb University"
  },
  {
    Name: "Garnet Career Center"
  },
  {
    Name: "Garrett College"
  },
  {
    Name: "Garrett-Evangelical Theological Seminary"
  },
  {
    Name: "Gaston College"
  },
  {
    Name: "Gaston College"
  },
  {
    Name: "Gateway Community and Technical College"
  },
  {
    Name: "Gateway Community College"
  },
  {
    Name: "GateWay Community College-Central City"
  },
  {
    Name: "Gateway Technical College"
  },
  {
    Name: "Gavilan College"
  },
  {
    Name: "Geisinger Commonwealth School of Medicine"
  },
  {
    Name: "Geisinger-Lewistown Hospital School of Nursing"
  },
  {
    Name: "Gem City College"
  },
  {
    Name: "Gemini School of Visual Arts & Communication"
  },
  {
    Name: "Gemological Institute of America-Carlsbad"
  },
  {
    Name: "Gemological Institute of America-New York"
  },
  {
    Name: "Generations College"
  },
  {
    Name: "Genesee Community College"
  },
  {
    Name: "Genesee Valley BOCES-Practical Nursing Program"
  },
  {
    Name: "Genesis Career College-Cookeville"
  },
  {
    Name: "Genesis Career College-Lebanon"
  },
  {
    Name: "Geneva College"
  },
  {
    Name: "George Fox University"
  },
  {
    Name: "George Mason University"
  },
  {
    Name: "George Stone Technical College"
  },
  {
    Name: "George T Baker Aviation Technical College"
  },
  {
    Name: "George Washington University"
  },
  {
    Name: "Georgetown College"
  },
  {
    Name: "Georgetown University"
  },
  {
    Name: "Georgia Career Institute"
  },
  {
    Name: "Georgia College & State University"
  },
  {
    Name: "Georgia Gwinnett College"
  },
  {
    Name: "Georgia Highlands College"
  },
  {
    Name: "Georgia Institute of Cosmetology"
  },
  {
    Name: "Georgia Institute of Technology-Main Campus"
  },
  {
    Name: "Georgia Military College"
  },
  {
    Name: "Georgia Military College - Augusta"
  },
  {
    Name: "Georgia Military College - Columbus"
  },
  {
    Name: "Georgia Military College - Dublin"
  },
  {
    Name: "Georgia Military College - Eastman"
  },
  {
    Name: "Georgia Military College - Fairburn"
  },
  {
    Name: "Georgia Military College - Fayetteville"
  },
  {
    Name: "Georgia Military College - Madison"
  },
  {
    Name: "Georgia Military College - Robins"
  },
  {
    Name: "Georgia Military College - Sandersville"
  },
  {
    Name: "Georgia Military College - Stone Mountain"
  },
  {
    Name: "Georgia Military College - Valdosta"
  },
  {
    Name: "Georgia Military College - Zebulon"
  },
  {
    Name: "Georgia Northwestern Technical College"
  },
  {
    Name: "Georgia Piedmont Technical College"
  },
  {
    Name: "Georgia Southern University"
  },
  {
    Name: "Georgia Southwestern State University"
  },
  {
    Name: "Georgia State University"
  },
  {
    Name: "Georgia State University-Perimeter College"
  },
  {
    Name: "Georgian Court University"
  },
  {
    Name: "Gerbers Akron Beauty School"
  },
  {
    Name: "Germanna Community College"
  },
  {
    Name: "Gettysburg College"
  },
  {
    Name: "Glasgow Caledonian New York College"
  },
  {
    Name: "Glen Dow Academy of Hair Design"
  },
  {
    Name: "Glen Oaks Community College"
  },
  {
    Name: "Glendale Career College"
  },
  {
    Name: "Glendale Career College-North-West College-Bakersfield"
  },
  {
    Name: "Glendale Community College"
  },
  {
    Name: "Glenville State University"
  },
  {
    Name: "Glitz School of Cosmetology"
  },
  {
    Name: "Global Medical & Technical Training Institute"
  },
  {
    Name: "Global Tech College"
  },
  {
    Name: "Gnomon"
  },
  {
    Name: "Goddard College"
  },
  {
    Name: "Gods Bible School and College"
  },
  {
    Name: "Gogebic Community College"
  },
  {
    Name: "Golden Gate University"
  },
  {
    Name: "Golden Gate University-Seattle"
  },
  {
    Name: "Golden Gate University-Silicon Valley"
  },
  {
    Name: "Golden West College"
  },
  {
    Name: "Goldey-Beacom College"
  },
  {
    Name: "Gonzaga University"
  },
  {
    Name: "Good Samaritan College of Nursing and Health Science"
  },
  {
    Name: "GoodFellas Barber College"
  },
  {
    Name: "Goodwin University"
  },
  {
    Name: "Gordon College"
  },
  {
    Name: "Gordon Cooper Technology Center"
  },
  {
    Name: "Gordon State College"
  },
  {
    Name: "Gordon-Conwell Theological Seminary"
  },
  {
    Name: "Goshen College"
  },
  {
    Name: "Goshen School of Cosmetology"
  },
  {
    Name: "Goucher College"
  },
  {
    Name: "Gould's Academy"
  },
  {
    Name: "Gould's Academy"
  },
  {
    Name: "Governors State University"
  },
  {
    Name: "Grabber School of Hair Design"
  },
  {
    Name: "Grace Christian University"
  },
  {
    Name: "Grace College and Theological Seminary"
  },
  {
    Name: "Grace International Beauty School"
  },
  {
    Name: "Grace Mission University"
  },
  {
    Name: "Grace School of Theology"
  },
  {
    Name: "Graceland University - Independence"
  },
  {
    Name: "Graceland University-Lamoni"
  },
  {
    Name: "Graduate Theological Union"
  },
  {
    Name: "Grady Health System Professional Schools"
  },
  {
    Name: "Graham Hospital School of Nursing"
  },
  {
    Name: "Grambling State University"
  },
  {
    Name: "Grand Rapids Community College"
  },
  {
    Name: "Grand River Technical School"
  },
  {
    Name: "Grand Valley State University"
  },
  {
    Name: "Grand View University"
  },
  {
    Name: "Granite State College"
  },
  {
    Name: "Gratz College"
  },
  {
    Name: "Grays Harbor College"
  },
  {
    Name: "Grayson College"
  },
  {
    Name: "Great Basin College"
  },
  {
    Name: "Great Bay Community College"
  },
  {
    Name: "Great Falls College Montana State University"
  },
  {
    Name: "Great Lakes Boat Building School"
  },
  {
    Name: "Great Lakes Christian College"
  },
  {
    Name: "Great Lakes Institute of Technology"
  },
  {
    Name: "Great Northern University"
  },
  {
    Name: "Great Oaks Career Campuses"
  },
  {
    Name: "Great Plains Technology Center"
  },
  {
    Name: "Greater Altoona Career & Technology Center"
  },
  {
    Name: "Greater Johnstown Career and Technology Center"
  },
  {
    Name: "Greater Lowell Technical School"
  },
  {
    Name: "Green Country Technology Center"
  },
  {
    Name: "Green River College"
  },
  {
    Name: "Greene County Career and Technology Center"
  },
  {
    Name: "Greene County Career Center"
  },
  {
    Name: "Greenfield Community College"
  },
  {
    Name: "Greensboro College"
  },
  {
    Name: "Greenville Technical College"
  },
  {
    Name: "Greenville University"
  },
  {
    Name: "Grinnell College"
  },
  {
    Name: "Grossmont College"
  },
  {
    Name: "Grove City College"
  },
  {
    Name: "Guam Community College"
  },
  {
    Name: "Guilford College"
  },
  {
    Name: "Guilford Technical Community College"
  },
  {
    Name: "Gulf Coast State College"
  },
  {
    Name: "Gupton Jones College of Funeral Service"
  },
  {
    Name: "Gurnick Academy of Medical Arts"
  },
  {
    Name: "Gustavus Adolphus College"
  },
  {
    Name: "Guy's Shreveport Academy of Cosmetology Inc"
  },
  {
    Name: "Gwinnett College"
  },
  {
    Name: "Gwinnett College-Lilburn"
  },
  {
    Name: "Gwinnett College-Marietta Campus"
  },
  {
    Name: "Gwinnett College-Sandy Springs"
  },
  {
    Name: "Gwinnett Institute"
  },
  {
    Name: "Gwinnett Technical College"
  },
  {
    Name: "Gwynedd Mercy University"
  },
  {
    Name: "Hacienda La Puente Adult Education"
  },
  {
    Name: "Hackensack Meridian School of Medicine"
  },
  {
    Name: "Hagerstown Community College"
  },
  {
    Name: "Hair Academy"
  },
  {
    Name: "Hair Academy II"
  },
  {
    Name: "Hair Academy School of Barbering & Beauty"
  },
  {
    Name: "Hair Arts Institute"
  },
  {
    Name: "Hair Expressions Academy"
  },
  {
    Name: "Hair Professionals Career College"
  },
  {
    Name: "Hair Professionals Career College"
  },
  {
    Name: "Hair Professionals School of Cosmetology"
  },
  {
    Name: "Hairmasters Institute of Cosmetology"
  },
  {
    Name: "Halifax Community College"
  },
  {
    Name: "Hallmark University"
  },
  {
    Name: "Hamilton College"
  },
  {
    Name: "Hamline University"
  },
  {
    Name: "Hampden-Sydney College"
  },
  {
    Name: "Hampshire College"
  },
  {
    Name: "Hampton University"
  },
  {
    Name: "Hamrick School"
  },
  {
    Name: "Hands on Therapy"
  },
  {
    Name: "Hannah E Mullins School of Practical Nursing"
  },
  {
    Name: "Hannibal-LaGrange University"
  },
  {
    Name: "Hanover College"
  },
  {
    Name: "Harcum College"
  },
  {
    Name: "Hardin-Simmons University"
  },
  {
    Name: "Harding School of Theology"
  },
  {
    Name: "Harding University"
  },
  {
    Name: "Harford Community College"
  },
  {
    Name: "Harmony Health Care Institute"
  },
  {
    Name: "Harris-Stowe State University"
  },
  {
    Name: "Harrisburg Area Community College"
  },
  {
    Name: "Harrisburg Area Community College-Gettysburg"
  },
  {
    Name: "Harrisburg Area Community College-Lancaster"
  },
  {
    Name: "Harrisburg Area Community College-Lebanon"
  },
  {
    Name: "Harrisburg Area Community College-York"
  },
  {
    Name: "Harrisburg University of Science and Technology"
  },
  {
    Name: "Hartford International University for Religion and Peace"
  },
  {
    Name: "Hartnell College"
  },
  {
    Name: "Hartwick College"
  },
  {
    Name: "Harvard University"
  },
  {
    Name: "Harvey Mudd College"
  },
  {
    Name: "Haskell Indian Nations University"
  },
  {
    Name: "Hastings Beauty School"
  },
  {
    Name: "Hastings College"
  },
  {
    Name: "Hatfield's Mississippi College of Beauty Culture"
  },
  {
    Name: "Haven University"
  },
  {
    Name: "Haverford College"
  },
  {
    Name: "Hawaii Community College"
  },
  {
    Name: "Hawaii Institute of Hair Design"
  },
  {
    Name: "Hawaii Medical College"
  },
  {
    Name: "Hawaii Pacific University"
  },
  {
    Name: "Hawkeye Community College"
  },
  {
    Name: "Hays Academy of Hair Design"
  },
  {
    Name: "Hays Academy of Hair Design"
  },
  {
    Name: "Haywood Community College"
  },
  {
    Name: "Hazard Community and Technical College"
  },
  {
    Name: "Hazelden Betty Ford Graduate School of Addiction Studies"
  },
  {
    Name: "Hazleton Area Career Center"
  },
  {
    Name: "HCI College"
  },
  {
    Name: "HCI College - Fort Lauderdale Campus"
  },
  {
    Name: "HDS Truck Driving Institute"
  },
  {
    Name: "Headmasters School of Hair Design"
  },
  {
    Name: "Healing Arts Center"
  },
  {
    Name: "Healing Hands School of Holistic Health"
  },
  {
    Name: "Healing Mountain Massage School"
  },
  {
    Name: "Health And Style Institute"
  },
  {
    Name: "Health and Technology Training Institute"
  },
  {
    Name: "Health-Tech Institute of Memphis"
  },
  {
    Name: "Healthcare Career College"
  },
  {
    Name: "Healthcare Training Institute"
  },
  {
    Name: "Healthcare Training Institute"
  },
  {
    Name: "Heartland Community College"
  },
  {
    Name: "Hebrew College"
  },
  {
    Name: "Hebrew Theological College"
  },
  {
    Name: "Hebrew Union College-Jewish Institute of Religion"
  },
  {
    Name: "Hebrew Union College-Jewish Institute of Religion-Cincinnati"
  },
  {
    Name: "Hebrew Union College-Jewish Institute of Religion-Los Angeles"
  },
  {
    Name: "Heidelberg University"
  },
  {
    Name: "Helena College University of Montana"
  },
  {
    Name: "Helene Fuld College of Nursing"
  },
  {
    Name: "Hellenic College-Holy Cross Greek Orthodox School of Theology"
  },
  {
    Name: "Helms College"
  },
  {
    Name: "Henderson Community College"
  },
  {
    Name: "Henderson State University"
  },
  {
    Name: "Hendrix College"
  },
  {
    Name: "Hennepin Technical College"
  },
  {
    Name: "Henrico County-Saint Marys Hospital School of Practical Nursing"
  },
  {
    Name: "Henry Ford College"
  },
  {
    Name: "Heritage Bible College"
  },
  {
    Name: "Heritage University"
  },
  {
    Name: "Heritage Valley Kennedy School of Nursing"
  },
  {
    Name: "Herkimer County BOCES-Practical Nursing Program"
  },
  {
    Name: "Herkimer County Community College"
  },
  {
    Name: "Herzing University-Akron"
  },
  {
    Name: "Herzing University-Atlanta"
  },
  {
    Name: "Herzing University-Brookfield"
  },
  {
    Name: "Herzing University-Kenosha"
  },
  {
    Name: "Herzing University-Madison"
  },
  {
    Name: "Herzing University-Minneapolis"
  },
  {
    Name: "Herzing University-New Orleans"
  },
  {
    Name: "Herzing University-Orlando"
  },
  {
    Name: "Herzing University-Tampa"
  },
  {
    Name: "Hesston College"
  },
  {
    Name: "High Desert Medical College"
  },
  {
    Name: "High Desert Medical College - Bakerfield"
  },
  {
    Name: "High Desert Medical College - Temecula"
  },
  {
    Name: "High Plains Technology Center"
  },
  {
    Name: "High Point University"
  },
  {
    Name: "High Tech High Graduate School of Education"
  },
  {
    Name: "Highland Community College"
  },
  {
    Name: "Highland Community College"
  },
  {
    Name: "Highlands College of Montana Tech"
  },
  {
    Name: "Highlights Beauty Schools"
  },
  {
    Name: "Highlights Beauty Schools"
  },
  {
    Name: "Highline College"
  },
  {
    Name: "Hilbert College"
  },
  {
    Name: "Hill College"
  },
  {
    Name: "Hillsborough Community College"
  },
  {
    Name: "Hillsdale Beauty College"
  },
  {
    Name: "Hillsdale Beauty College"
  },
  {
    Name: "Hillsdale College"
  },
  {
    Name: "Hilltop Beauty School"
  },
  {
    Name: "Hinds Community College"
  },
  {
    Name: "Hinton Barber and Beauty College"
  },
  {
    Name: "Hiram College"
  },
  {
    Name: "Hobart Institute of Welding Technology"
  },
  {
    Name: "Hobart William Smith Colleges"
  },
  {
    Name: "Hobe Sound Bible College"
  },
  {
    Name: "Hocking College"
  },
  {
    Name: "Hodges University"
  },
  {
    Name: "Hofstra University"
  },
  {
    Name: "Hogan Institute of Cosmetology and Esthetics"
  },
  {
    Name: "Hohokus School of Trade and Technical Sciences"
  },
  {
    Name: "Holistic Massage Training Institute"
  },
  {
    Name: "Hollins University"
  },
  {
    Name: "Hollywood Cultural College"
  },
  {
    Name: "Hollywood Institute"
  },
  {
    Name: "Hollywood Institute of Beauty Careers"
  },
  {
    Name: "Hollywood Institute of Beauty Careers-Casselberry"
  },
  {
    Name: "Hollywood Institute of Beauty Careers-West Palm Beach"
  },
  {
    Name: "Holmes Community College"
  },
  {
    Name: "Holy Apostles College and Seminary"
  },
  {
    Name: "Holy Cross College"
  },
  {
    Name: "Holy Family University"
  },
  {
    Name: "Holy Name Medical Center-Sister Claire Tynan School of Nursing"
  },
  {
    Name: "Holy Names University"
  },
  {
    Name: "Holyoke Community College"
  },
  {
    Name: "Homestead Schools"
  },
  {
    Name: "Hondros College of Nursing"
  },
  {
    Name: "Honolulu Community College"
  },
  {
    Name: "Hood College"
  },
  {
    Name: "Hood Theological Seminary"
  },
  {
    Name: "Hope College"
  },
  {
    Name: "Hope College of Arts and Sciences"
  },
  {
    Name: "Hope International University"
  },
  {
    Name: "Hopkinsville Community College"
  },
  {
    Name: "Horizon University"
  },
  {
    Name: "Horry-Georgetown Technical College"
  },
  {
    Name: "Hoss Lee Academy"
  },
  {
    Name: "Hot Springs Beauty College"
  },
  {
    Name: "Houghton University"
  },
  {
    Name: "Housatonic Community College"
  },
  {
    Name: "House of Heavilin Beauty College-Blue Springs"
  },
  {
    Name: "House of Heavilin Beauty College-Kansas City"
  },
  {
    Name: "Houston Baptist University"
  },
  {
    Name: "Houston Barber School"
  },
  {
    Name: "Houston Community College"
  },
  {
    Name: "Houston Graduate School of Theology"
  },
  {
    Name: "Houston International College Cardiotech Ultrasound School"
  },
  {
    Name: "Houston School of Carpentry"
  },
  {
    Name: "Houston Training School-Main Campus"
  },
  {
    Name: "Houston Training Schools-Gessner"
  },
  {
    Name: "Howard College"
  },
  {
    Name: "Howard Community College"
  },
  {
    Name: "Howard Payne University"
  },
  {
    Name: "Howard University"
  },
  {
    Name: "Hudson County Community College"
  },
  {
    Name: "Hudson Valley Community College"
  },
  {
    Name: "Huertas College"
  },
  {
    Name: "Hult International Business School"
  },
  {
    Name: "Humacao Community College"
  },
  {
    Name: "Humphreys College-Modesto"
  },
  {
    Name: "Humphreys University-Stockton and Modesto Campuses"
  },
  {
    Name: "Hunter Business School"
  },
  {
    Name: "Huntington Junior College"
  },
  {
    Name: "Huntington School of Beauty Culture"
  },
  {
    Name: "Huntington University"
  },
  {
    Name: "Huntington University of Health Sciences"
  },
  {
    Name: "Huntsville Bible College"
  },
  {
    Name: "Hussian College-Daymar College Clarksville"
  },
  {
    Name: "Hussian College-Daymar College Columbus"
  },
  {
    Name: "Hussian College-Daymar College Murfreesboro"
  },
  {
    Name: "Hussian College-Daymar College Nashville"
  },
  {
    Name: "Hussian College-Los Angeles"
  },
  {
    Name: "Hussian College-Philadelphia"
  },
  {
    Name: "Husson University"
  },
  {
    Name: "Huston-Tillotson University"
  },
  {
    Name: "Hutchinson Community College"
  },
  {
    Name: "HVAC Technical Institute"
  },
  {
    Name: "Hypnosis Motivation Institute"
  },
  {
    Name: "IBMC College"
  },
  {
    Name: "IBS School of Cosmetology and Massage"
  },
  {
    Name: "Icahn School of Medicine at Mount Sinai"
  },
  {
    Name: "ICOHS College"
  },
  {
    Name: "ICPR Junior College"
  },
  {
    Name: "ICPR Junior College"
  },
  {
    Name: "ICPR Junior College-Arecibo"
  },
  {
    Name: "ICPR Junior College-Mayaguez"
  },
  {
    Name: "Idaho College of Osteopathic Medicine"
  },
  {
    Name: "Idaho State University"
  },
  {
    Name: "IDEA at ATEP"
  },
  {
    Name: "Ideal Beauty Academy"
  },
  {
    Name: "Ideal Beauty Academy"
  },
  {
    Name: "IGlobal University"
  },
  {
    Name: "Iliff School of Theology"
  },
  {
    Name: "Ilisagvik College"
  },
  {
    Name: "Illinois Central College"
  },
  {
    Name: "Illinois College"
  },
  {
    Name: "Illinois College of Optometry"
  },
  {
    Name: "Illinois Institute of Technology"
  },
  {
    Name: "Illinois Media School"
  },
  {
    Name: "Illinois Media School-Chicago Campus"
  },
  {
    Name: "Illinois State University"
  },
  {
    Name: "Illinois Valley Community College"
  },
  {
    Name: "Illinois Wesleyan University"
  },
  {
    Name: "Image Maker Beauty Institute"
  },
  {
    Name: "Immaculata University"
  },
  {
    Name: "Immokalee Technical College"
  },
  {
    Name: "Imperial Valley College"
  },
  {
    Name: "Independence Community College"
  },
  {
    Name: "Independent Training & Apprenticeship Program"
  },
  {
    Name: "Indian Bible College"
  },
  {
    Name: "Indian Capital Technology Center-Muskogee"
  },
  {
    Name: "Indian Capital Technology Center-Sallisaw"
  },
  {
    Name: "Indian Capital Technology Center-Stilwell"
  },
  {
    Name: "Indian Capital Technology Center-Tahlequah"
  },
  {
    Name: "Indian Hills Community College"
  },
  {
    Name: "Indian River State College"
  },
  {
    Name: "Indiana County Technology Center"
  },
  {
    Name: "Indiana Institute of Technology"
  },
  {
    Name: "Indiana Institute of Technology-College of Professional Studies"
  },
  {
    Name: "Indiana State University"
  },
  {
    Name: "Indiana University of Pennsylvania-Main Campus"
  },
  {
    Name: "Indiana University-Bloomington"
  },
  {
    Name: "Indiana University-East"
  },
  {
    Name: "Indiana University-Kokomo"
  },
  {
    Name: "Indiana University-Northwest"
  },
  {
    Name: "Indiana University-Purdue University-Indianapolis"
  },
  {
    Name: "Indiana University-South Bend"
  },
  {
    Name: "Indiana University-Southeast"
  },
  {
    Name: "Indiana Wellness College"
  },
  {
    Name: "Indiana Wesleyan University-Marion"
  },
  {
    Name: "Indiana Wesleyan University-National & Global"
  },
  {
    Name: "Industrial Management Training Institute"
  },
  {
    Name: "Industrial Technical College"
  },
  {
    Name: "Infinity College"
  },
  {
    Name: "Inner State Beauty School"
  },
  {
    Name: "Innovate Salon Academy"
  },
  {
    Name: "Innovate Salon Academy"
  },
  {
    Name: "Innovations Design Academy"
  },
  {
    Name: "Installer Institute"
  },
  {
    Name: "Institucion Chaviano de Mayaguez"
  },
  {
    Name: "Institute for Business and Technology"
  },
  {
    Name: "Institute for Clinical Social Work"
  },
  {
    Name: "Institute for Doctoral Studies in the Visual Arts"
  },
  {
    Name: "Institute for Therapeutic Massage"
  },
  {
    Name: "Institute of Advanced Medical Esthetics"
  },
  {
    Name: "Institute of Allied Healthcare"
  },
  {
    Name: "Institute of American Indian and Alaska Native Culture and Arts Development"
  },
  {
    Name: "Institute of Beauty Careers"
  },
  {
    Name: "Institute of Buddhist Studies"
  },
  {
    Name: "Institute of Clinical Acupuncture & Oriental Med"
  },
  {
    Name: "Institute of Culinary Education"
  },
  {
    Name: "Institute of Culinary Education"
  },
  {
    Name: "Institute of Health Sciences"
  },
  {
    Name: "Institute of Medical Careers"
  },
  {
    Name: "Institute of Medical Ultrasound"
  },
  {
    Name: "Institute of Production and Recording"
  },
  {
    Name: "Institute of Professional Careers"
  },
  {
    Name: "Institute of Taoist Education and Acupuncture"
  },
  {
    Name: "Institute of Technology"
  },
  {
    Name: "Institute of Technology"
  },
  {
    Name: "Institute of World Politics"
  },
  {
    Name: "Instituto Educativo Premier"
  },
  {
    Name: "Instituto Tecnologico de Puerto Rico-Recinto de Guayama"
  },
  {
    Name: "Instituto Tecnologico de Puerto Rico-Recinto de Manati"
  },
  {
    Name: "Instituto Tecnologico de Puerto Rico-Recinto de Ponce"
  },
  {
    Name: "Instituto Tecnologico de Puerto Rico-Recinto de San Juan"
  },
  {
    Name: "Integrity College of Health"
  },
  {
    Name: "Intellitec College-Colorado Springs"
  },
  {
    Name: "Intellitec College-Grand Junction"
  },
  {
    Name: "Inter American University of Puerto Rico-Aguadilla"
  },
  {
    Name: "Inter American University of Puerto Rico-Arecibo"
  },
  {
    Name: "Inter American University of Puerto Rico-Barranquitas"
  },
  {
    Name: "Inter American University of Puerto Rico-Bayamon"
  },
  {
    Name: "Inter American University of Puerto Rico-Fajardo"
  },
  {
    Name: "Inter American University of Puerto Rico-Guayama"
  },
  {
    Name: "Inter American University of Puerto Rico-Metro"
  },
  {
    Name: "Inter American University of Puerto Rico-Ponce"
  },
  {
    Name: "Inter American University of Puerto Rico-San German"
  },
  {
    Name: "Inter American University of Puerto Rico-School of Law"
  },
  {
    Name: "Inter American University of Puerto Rico-School of Optometry"
  },
  {
    Name: "Interactive College of Technology"
  },
  {
    Name: "Interactive College of Technology"
  },
  {
    Name: "Interactive College of Technology"
  },
  {
    Name: "Interactive College of Technology-Chamblee"
  },
  {
    Name: "Interactive College of Technology-Gainesville"
  },
  {
    Name: "Interactive College of Technology-Morrow"
  },
  {
    Name: "Interactive College of Technology-Newport"
  },
  {
    Name: "InterAmerican Technical Institute"
  },
  {
    Name: "InterCoast Colleges-Fairfield"
  },
  {
    Name: "InterCoast Colleges-Rancho Cordova"
  },
  {
    Name: "InterCoast Colleges-Riverside"
  },
  {
    Name: "InterCoast Colleges-Santa Ana"
  },
  {
    Name: "InterCoast Colleges-West Covina"
  },
  {
    Name: "Interdenominational Theological Center"
  },
  {
    Name: "Interior Designers Institute"
  },
  {
    Name: "International Academy"
  },
  {
    Name: "International Academy of Style"
  },
  {
    Name: "International Air and Hospitality Academy"
  },
  {
    Name: "International Baptist College and Seminary"
  },
  {
    Name: "International Barber College"
  },
  {
    Name: "International Beauty College"
  },
  {
    Name: "International Beauty Education Center"
  },
  {
    Name: "International Beauty School 4"
  },
  {
    Name: "International Business College-Indianapolis"
  },
  {
    Name: "International College of Beauty Arts & Sciences"
  },
  {
    Name: "International College of Broadcasting"
  },
  {
    Name: "International College of Cosmetology"
  },
  {
    Name: "International Culinary Arts and Sciences Institute"
  },
  {
    Name: "International Institute for Restorative Practices"
  },
  {
    Name: "International Institute of Cosmetology"
  },
  {
    Name: "International Salon and Spa Academy"
  },
  {
    Name: "International School of Beauty Inc"
  },
  {
    Name: "International School of Cosmetology"
  },
  {
    Name: "International School of Cosmetology"
  },
  {
    Name: "International School of Skin Nailcare & Massage Therapy"
  },
  {
    Name: "International Technical College"
  },
  {
    Name: "International Technological University"
  },
  {
    Name: "International Training Careers"
  },
  {
    Name: "Inver Hills Community College"
  },
  {
    Name: "Iona University"
  },
  {
    Name: "Iowa Central Community College"
  },
  {
    Name: "Iowa Lakes Community College"
  },
  {
    Name: "Iowa School of Beauty-Des Moines"
  },
  {
    Name: "Iowa School of Beauty-Ottumwa"
  },
  {
    Name: "Iowa School of Beauty-Sioux City"
  },
  {
    Name: "Iowa State University"
  },
  {
    Name: "Iowa Wesleyan University"
  },
  {
    Name: "Iowa Western Community College"
  },
  {
    Name: "Irell & Manella Graduate School of Biological Sciences at City of Hope"
  },
  {
    Name: "Irene's Myomassology Institute"
  },
  {
    Name: "Irvine Valley College"
  },
  {
    Name: "Isabella Graham Hart School of Practical Nursing"
  },
  {
    Name: "Island Drafting and Technical Institute"
  },
  {
    Name: "Isothermal Community College"
  },
  {
    Name: "Itawamba Community College"
  },
  {
    Name: "Ithaca College"
  },
  {
    Name: "ITI Technical College"
  },
  {
    Name: "IVAEM College"
  },
  {
    Name: "Ivy Tech Community College"
  },
  {
    Name: "Ivy Tech Community College-Bloomington"
  },
  {
    Name: "Ivy Tech Community College-Columbus"
  },
  {
    Name: "Ivy Tech Community College-Evansville"
  },
  {
    Name: "Ivy Tech Community College-Fort Wayne"
  },
  {
    Name: "Ivy Tech Community College-Indianapolis"
  },
  {
    Name: "Ivy Tech Community College-Kokomo"
  },
  {
    Name: "Ivy Tech Community College-Lafayette"
  },
  {
    Name: "Ivy Tech Community College-Lake County"
  },
  {
    Name: "Ivy Tech Community College-Madison"
  },
  {
    Name: "Ivy Tech Community College-Muncie"
  },
  {
    Name: "Ivy Tech Community College-Richmond"
  },
  {
    Name: "Ivy Tech Community College-Sellersburg"
  },
  {
    Name: "Ivy Tech Community College-South Bend/Elkhart"
  },
  {
    Name: "Ivy Tech Community College-Terre Haute"
  },
  {
    Name: "IYRS School of Technology & Trades"
  },
  {
    Name: "J D Academy of Salon and Spa"
  },
  {
    Name: "J Michael Harrold Beauty Academy"
  },
  {
    Name: "J Sargeant Reynolds Community College"
  },
  {
    Name: "J's Barber College"
  },
  {
    Name: "Jackson College"
  },
  {
    Name: "Jackson State Community College"
  },
  {
    Name: "Jackson State University"
  },
  {
    Name: "Jacksonville College-Main Campus"
  },
  {
    Name: "Jacksonville University"
  },
  {
    Name: "James A. Rhodes State College"
  },
  {
    Name: "James Madison University"
  },
  {
    Name: "James Rumsey Technical Institute"
  },
  {
    Name: "James Sprunt Community College"
  },
  {
    Name: "Jamestown Business College"
  },
  {
    Name: "Jamestown Business College -"
  },
  {
    Name: "Jamestown Community College"
  },
  {
    Name: "Jarvis Christian University"
  },
  {
    Name: "Jay's Technical Institute"
  },
  {
    Name: "JB's Hair Design and Barber College"
  },
  {
    Name: "Jean Madeline Aveda Institute"
  },
  {
    Name: "Jefferson College"
  },
  {
    Name: "Jefferson Community and Technical College"
  },
  {
    Name: "Jefferson Community College"
  },
  {
    Name: "Jefferson County Dubois Area Vocational Technical Practical Nursing Program"
  },
  {
    Name: "Jefferson Lewis BOCES-Practical Nursing Program"
  },
  {
    Name: "Jefferson Regional School of Nursing"
  },
  {
    Name: "Jenks Beauty College"
  },
  {
    Name: "Jenny Lea Academy of Cosmetology"
  },
  {
    Name: "Jersey College"
  },
  {
    Name: "Jersey College"
  },
  {
    Name: "Jersey College"
  },
  {
    Name: "Jersey College"
  },
  {
    Name: "Jersey College"
  },
  {
    Name: "Jersey College"
  },
  {
    Name: "Jersey College"
  },
  {
    Name: "Jersey College - Fort Wayne"
  },
  {
    Name: "Jesuit School of Theology of Santa Clara University"
  },
  {
    Name: "Jewish Theological Seminary of America"
  },
  {
    Name: "JFK Muhlenberg Harold B. and Dorothy A. Snyder Schools"
  },
  {
    Name: "Jna Institute of Culinary Arts"
  },
  {
    Name: "Joe Kubert School of Cartoon and Graphic Art"
  },
  {
    Name: "Joffrey Ballet School"
  },
  {
    Name: "John A Gupton College"
  },
  {
    Name: "John A Logan College"
  },
  {
    Name: "John Amico School of Hair Design"
  },
  {
    Name: "John Brown University"
  },
  {
    Name: "John Carroll University"
  },
  {
    Name: "John D Rockefeller IV Career Center"
  },
  {
    Name: "John Jay Beauty College"
  },
  {
    Name: "John Patrick University of Health and Applied Sciences"
  },
  {
    Name: "John Paul the Great Catholic University"
  },
  {
    Name: "John Wesley International Barber and Beauty College"
  },
  {
    Name: "John Wood Community College"
  },
  {
    Name: "Johnny Matthew's Hairdressing Training School"
  },
  {
    Name: "Johns Hopkins University"
  },
  {
    Name: "Johnson & Wales University-Charlotte"
  },
  {
    Name: "Johnson & Wales University-Online"
  },
  {
    Name: "Johnson & Wales University-Providence"
  },
  {
    Name: "Johnson C Smith University"
  },
  {
    Name: "Johnson College"
  },
  {
    Name: "Johnson County Community College"
  },
  {
    Name: "Johnson University"
  },
  {
    Name: "Johnson University Florida"
  },
  {
    Name: "Johnston Community College"
  },
  {
    Name: "Jolie Hair Academy"
  },
  {
    Name: "Joliet Junior College"
  },
  {
    Name: "Jones County Junior College"
  },
  {
    Name: "Jones Technical Institute"
  },
  {
    Name: "Jose Maria Vargas University"
  },
  {
    Name: "Josef's School of Hair Skin & Body-Fargo"
  },
  {
    Name: "Josef's School of Hair Skin & Body-Grand Forks"
  },
  {
    Name: "Joseph F McCloskey School of Nursing"
  },
  {
    Name: "Joseph's College Cosmetology"
  },
  {
    Name: "Joyce University of Nursing and Health Sciences"
  },
  {
    Name: "Judson University"
  },
  {
    Name: "Jung Tao School of Classical Chinese Medicine"
  },
  {
    Name: "Juniata College"
  },
  {
    Name: "Jupiter Beauty Academy"
  },
  {
    Name: "Kairos University"
  },
  {
    Name: "Kaizen Beauty Academy"
  },
  {
    Name: "Kalamazoo College"
  },
  {
    Name: "Kalamazoo Valley Community College"
  },
  {
    Name: "Kankakee Community College"
  },
  {
    Name: "Kansas Christian College"
  },
  {
    Name: "Kansas City Art Institute"
  },
  {
    Name: "Kansas City Kansas Community College"
  },
  {
    Name: "Kansas City University"
  },
  {
    Name: "Kansas City University"
  },
  {
    Name: "Kansas State University"
  },
  {
    Name: "Kansas Wesleyan University"
  },
  {
    Name: "Kapiolani Community College"
  },
  {
    Name: "Kaskaskia College"
  },
  {
    Name: "Kauai Community College"
  },
  {
    Name: "KC Beauty Academy"
  },
  {
    Name: "KC's School of Hair Design"
  },
  {
    Name: "KCK Beauty & Barber Academy"
  },
  {
    Name: "KD Conservatory College of Film and Dramatic Arts"
  },
  {
    Name: "Kean University"
  },
  {
    Name: "Keck Graduate Institute"
  },
  {
    Name: "Keene Beauty Academy"
  },
  {
    Name: "Keene State College"
  },
  {
    Name: "Kehilath Yakov Rabbinical Seminary"
  },
  {
    Name: "Keiser University -  Clearwater"
  },
  {
    Name: "Keiser University - New Port Richey"
  },
  {
    Name: "Keiser University - Residential (Flagship)"
  },
  {
    Name: "Keiser University- Miami"
  },
  {
    Name: "Keiser University-Daytona"
  },
  {
    Name: "Keiser University-Ft Lauderdale"
  },
  {
    Name: "Keiser University-Ft Myers"
  },
  {
    Name: "Keiser University-Jacksonville"
  },
  {
    Name: "Keiser University-Lakeland"
  },
  {
    Name: "Keiser University-Melbourne"
  },
  {
    Name: "Keiser University-Orlando"
  },
  {
    Name: "Keiser University-Pembroke Pines"
  },
  {
    Name: "Keiser University-Port St Lucie"
  },
  {
    Name: "Keiser University-Sarasota"
  },
  {
    Name: "Keiser University-Tallahassee"
  },
  {
    Name: "Keiser University-Tampa"
  },
  {
    Name: "Keiser University-West Palm Beach"
  },
  {
    Name: "Kellogg Community College"
  },
  {
    Name: "Kennebec Valley Community College"
  },
  {
    Name: "Kennesaw State University"
  },
  {
    Name: "Kenneth Shuler School of Cosmetology and Nails-Columbia"
  },
  {
    Name: "Kenneth Shuler School of Cosmetology-Columbia"
  },
  {
    Name: "Kenneth Shuler School of Cosmetology-Florence"
  },
  {
    Name: "Kenneth Shuler School of Cosmetology-Goose Creek"
  },
  {
    Name: "Kenneth Shuler School of Cosmetology-Greenville"
  },
  {
    Name: "Kenneth Shuler School of Cosmetology-North Augusta"
  },
  {
    Name: "Kenneth Shuler School of Cosmetology-Rock Hill"
  },
  {
    Name: "Kenneth Shuler School of Cosmetology-Spartanburg"
  },
  {
    Name: "Kenny's Academy of Barbering"
  },
  {
    Name: "Kenrick Glennon Seminary"
  },
  {
    Name: "Kent State University at Ashtabula"
  },
  {
    Name: "Kent State University at East Liverpool"
  },
  {
    Name: "Kent State University at Geauga"
  },
  {
    Name: "Kent State University at Kent"
  },
  {
    Name: "Kent State University at Salem"
  },
  {
    Name: "Kent State University at Stark"
  },
  {
    Name: "Kent State University at Trumbull"
  },
  {
    Name: "Kent State University at Tuscarawas"
  },
  {
    Name: "Kentucky Christian University"
  },
  {
    Name: "Kentucky Horseshoeing School"
  },
  {
    Name: "Kentucky Mountain Bible College"
  },
  {
    Name: "Kentucky State University"
  },
  {
    Name: "Kentucky Wesleyan College"
  },
  {
    Name: "Kenyon College"
  },
  {
    Name: "Keser Torah-Mayan Hatalmud"
  },
  {
    Name: "Kettering College"
  },
  {
    Name: "Kettering College - Ollie Davis Medical Arts and Education Center"
  },
  {
    Name: "Kettering University"
  },
  {
    Name: "Keuka College"
  },
  {
    Name: "Keune Academy by 124"
  },
  {
    Name: "Keweenaw Bay Ojibwa Community College"
  },
  {
    Name: "Keweenaw Bay Ojibwa Community College - Wabanung Campus"
  },
  {
    Name: "Key College"
  },
  {
    Name: "Keystone College"
  },
  {
    Name: "Kiamichi Technology Center-McAlester"
  },
  {
    Name: "Kilgore College"
  },
  {
    Name: "King University"
  },
  {
    Name: "King's College"
  },
  {
    Name: "Kirksville Area Technical Center"
  },
  {
    Name: "Kirkwood Community College"
  },
  {
    Name: "Kirtland Community College"
  },
  {
    Name: "Kishwaukee College"
  },
  {
    Name: "Klamath Community College"
  },
  {
    Name: "Knox College"
  },
  {
    Name: "Knox County Career Center"
  },
  {
    Name: "Kor Beauty Academy"
  },
  {
    Name: "Kutztown University of Pennsylvania"
  },
  {
    Name: "Kuyper College"
  },
  {
    Name: "L Makeup Institute"
  },
  {
    Name: "L'esprit Academy"
  },
  {
    Name: "L'esprit Academy - Royal Oak"
  },
  {
    Name: "L3Harris Flight Academy"
  },
  {
    Name: "La Belle Beauty Academy"
  },
  {
    Name: "La Belle Beauty School"
  },
  {
    Name: "La James College of Hairstyling and Cosmetology"
  },
  {
    Name: "La James International College-Cedar Falls"
  },
  {
    Name: "La James International College-Davenport"
  },
  {
    Name: "La James International College-Ft Dodge"
  },
  {
    Name: "La James International College-Johnston"
  },
  {
    Name: "La Roche University"
  },
  {
    Name: "La Salle University"
  },
  {
    Name: "La Sierra University"
  },
  {
    Name: "LaBarberia Institute of Hair"
  },
  {
    Name: "Labette Community College"
  },
  {
    Name: "Laboure College of Healthcare"
  },
  {
    Name: "Lac Courte Oreilles Ojibwe University"
  },
  {
    Name: "Lackawanna College"
  },
  {
    Name: "Lafayette College"
  },
  {
    Name: "LaGrange College"
  },
  {
    Name: "Laguna College of Art and Design"
  },
  {
    Name: "Lake Area Technical College"
  },
  {
    Name: "Lake Career and Technical Center"
  },
  {
    Name: "Lake Erie College"
  },
  {
    Name: "Lake Erie College of Osteopathic Medicine"
  },
  {
    Name: "Lake Forest College"
  },
  {
    Name: "Lake Forest Graduate School of Management"
  },
  {
    Name: "Lake Land College"
  },
  {
    Name: "Lake Michigan College"
  },
  {
    Name: "Lake Region State College"
  },
  {
    Name: "Lake Superior College"
  },
  {
    Name: "Lake Superior State University"
  },
  {
    Name: "Lake Tahoe Community College"
  },
  {
    Name: "Lake Technical College"
  },
  {
    Name: "Lake Washington Institute of Technology"
  },
  {
    Name: "Lake-Sumter State College"
  },
  {
    Name: "Lakeland Community College"
  },
  {
    Name: "Lakeland University"
  },
  {
    Name: "Lakes Region Community College"
  },
  {
    Name: "Lakeshore Technical College"
  },
  {
    Name: "Lakeview College of Nursing"
  },
  {
    Name: "Lakewood School of Therapeutic Massage"
  },
  {
    Name: "Lakewood University"
  },
  {
    Name: "Lamar Community College"
  },
  {
    Name: "Lamar Institute of Technology"
  },
  {
    Name: "Lamar State College-Orange"
  },
  {
    Name: "Lamar State College-Port Arthur"
  },
  {
    Name: "Lamar University"
  },
  {
    Name: "Lamson Institute"
  },
  {
    Name: "Lancaster Beauty School"
  },
  {
    Name: "Lancaster Bible College"
  },
  {
    Name: "Lancaster County Career and Technology Center"
  },
  {
    Name: "Lancaster School of Cosmetology & Therapeutic Bodywork"
  },
  {
    Name: "Lancaster Theological Seminary"
  },
  {
    Name: "Lander University"
  },
  {
    Name: "Landmark College"
  },
  {
    Name: "Lane College"
  },
  {
    Name: "Lane Community College"
  },
  {
    Name: "Laney College"
  },
  {
    Name: "Langston University"
  },
  {
    Name: "Lanier Technical College"
  },
  {
    Name: "Lansdale School of Business"
  },
  {
    Name: "Lansdale School of Cosmetology Inc"
  },
  {
    Name: "Lansing Community College"
  },
  {
    Name: "Laramie County Community College"
  },
  {
    Name: "Laredo Beauty College Inc"
  },
  {
    Name: "Laredo CHI Academy Beauty School"
  },
  {
    Name: "Laredo College"
  },
  {
    Name: "Larry's Barber College"
  },
  {
    Name: "Larry's Barber College"
  },
  {
    Name: "Larry's Barber College-Joliet"
  },
  {
    Name: "Las Positas College"
  },
  {
    Name: "Las Vegas College"
  },
  {
    Name: "LaSalle Tech"
  },
  {
    Name: "Lasell University"
  },
  {
    Name: "Lassen Community College"
  },
  {
    Name: "Latin American Bible Institute"
  },
  {
    Name: "Latin Beauty Academy"
  },
  {
    Name: "Laurel Business Institute"
  },
  {
    Name: "Laurel Ridge Community College"
  },
  {
    Name: "Laurel Technical Institute"
  },
  {
    Name: "Laurel Technical Institute"
  },
  {
    Name: "Laurus College"
  },
  {
    Name: "Lawrence & Company College of Cosmetology"
  },
  {
    Name: "Lawrence & Company College of Cosmetology"
  },
  {
    Name: "Lawrence Memorial Hospital School of Nursing"
  },
  {
    Name: "Lawrence Technological University"
  },
  {
    Name: "Lawrence University"
  },
  {
    Name: "Le Moyne College"
  },
  {
    Name: "Le Moyne-Owen College"
  },
  {
    Name: "Learning Bridge Career Institute"
  },
  {
    Name: "Lebanon County Area Vocational Technical School"
  },
  {
    Name: "Lebanon Valley College"
  },
  {
    Name: "Lee College"
  },
  {
    Name: "Lee Professional Institute"
  },
  {
    Name: "Lee University"
  },
  {
    Name: "Leech Lake Tribal College"
  },
  {
    Name: "Lees-McRae College"
  },
  {
    Name: "Leeward Community College"
  },
  {
    Name: "LeGrand Institute of Cosmetology Inc"
  },
  {
    Name: "Lehigh Carbon Community College"
  },
  {
    Name: "Lehigh University"
  },
  {
    Name: "Lehigh Valley Barber School"
  },
  {
    Name: "Lenape Technical School Practical Nursing Program"
  },
  {
    Name: "Lenoir Community College"
  },
  {
    Name: "Lenoir-Rhyne University"
  },
  {
    Name: "Leon Studio One School of Beauty Knowledge"
  },
  {
    Name: "Leons Beauty School Inc"
  },
  {
    Name: "Lesley University"
  },
  {
    Name: "Leston College"
  },
  {
    Name: "Leston College -"
  },
  {
    Name: "LeTourneau University"
  },
  {
    Name: "Lewis & Clark College"
  },
  {
    Name: "Lewis and Clark Community College"
  },
  {
    Name: "Lewis University"
  },
  {
    Name: "Lewis-Clark State College"
  },
  {
    Name: "Lex La-Ray Technical Center"
  },
  {
    Name: "Lexington Healing Arts Academy"
  },
  {
    Name: "Lexington Theological Seminary"
  },
  {
    Name: "Lia Schorr Institute of Cosmetic Skin Care Training"
  },
  {
    Name: "Liberty University"
  },
  {
    Name: "Liceo de Arte y Tecnologia"
  },
  {
    Name: "Liceo de Arte-Dise-O y Comercio"
  },
  {
    Name: "Life Chiropractic College West"
  },
  {
    Name: "Life Pacific University"
  },
  {
    Name: "Life Pacific University-Virginia"
  },
  {
    Name: "Life University"
  },
  {
    Name: "Lil Lou's Beauty and Barber College"
  },
  {
    Name: "Lil Lou's Beauty and Barber College-Hammond"
  },
  {
    Name: "LIM College"
  },
  {
    Name: "Limestone University"
  },
  {
    Name: "Lincoln Christian University"
  },
  {
    Name: "Lincoln College"
  },
  {
    Name: "Lincoln College of Technology-Columbia"
  },
  {
    Name: "Lincoln College of Technology-Denver"
  },
  {
    Name: "Lincoln College of Technology-Grand Prairie"
  },
  {
    Name: "Lincoln College of Technology-Indianapolis"
  },
  {
    Name: "Lincoln College of Technology-Marietta"
  },
  {
    Name: "Lincoln College of Technology-Melrose Park"
  },
  {
    Name: "Lincoln College of Technology-Nashville"
  },
  {
    Name: "Lincoln Land Community College"
  },
  {
    Name: "Lincoln Memorial University"
  },
  {
    Name: "Lincoln Technical Institute-Allentown"
  },
  {
    Name: "Lincoln Technical Institute-East Windsor"
  },
  {
    Name: "Lincoln Technical Institute-Iselin"
  },
  {
    Name: "Lincoln Technical Institute-Lincoln"
  },
  {
    Name: "Lincoln Technical Institute-Mahwah"
  },
  {
    Name: "Lincoln Technical Institute-Moorestown"
  },
  {
    Name: "Lincoln Technical Institute-New Britain"
  },
  {
    Name: "Lincoln Technical Institute-Paramus"
  },
  {
    Name: "Lincoln Technical Institute-Philadelphia"
  },
  {
    Name: "Lincoln Technical Institute-Shelton"
  },
  {
    Name: "Lincoln Technical Institute-Somerville"
  },
  {
    Name: "Lincoln Technical Institute-South Plainfield"
  },
  {
    Name: "Lincoln Technical Institute-Union"
  },
  {
    Name: "Lincoln Technical Institute-Whitestone"
  },
  {
    Name: "Lincoln Trail College"
  },
  {
    Name: "Lincoln University"
  },
  {
    Name: "Lincoln University"
  },
  {
    Name: "Lincoln University"
  },
  {
    Name: "Lindenwood University"
  },
  {
    Name: "Lindsey Hopkins Technical College"
  },
  {
    Name: "Lindsey Institute of Cosmetology"
  },
  {
    Name: "Lindsey Wilson College"
  },
  {
    Name: "Linfield University"
  },
  {
    Name: "Linfield University-Online and Continuing Education"
  },
  {
    Name: "Linfield University-School of Nursing"
  },
  {
    Name: "Linn-Benton Community College"
  },
  {
    Name: "Lionel University"
  },
  {
    Name: "Lipscomb University"
  },
  {
    Name: "Little Big Horn College"
  },
  {
    Name: "Little Priest Tribal College"
  },
  {
    Name: "Lively Technical College"
  },
  {
    Name: "Living Arts College"
  },
  {
    Name: "Livingstone College"
  },
  {
    Name: "Lock Haven University"
  },
  {
    Name: "Logan University"
  },
  {
    Name: "Loma Linda University"
  },
  {
    Name: "Lone Star College System"
  },
  {
    Name: "Long Beach City College"
  },
  {
    Name: "Long Island Beauty School-Hauppauge"
  },
  {
    Name: "Long Island Beauty School-Hempstead"
  },
  {
    Name: "Long Island Business Institute"
  },
  {
    Name: "Long Island Nail Skin & Hair Institute"
  },
  {
    Name: "Long Island University"
  },
  {
    Name: "Longwood University"
  },
  {
    Name: "Longy School of Music of Bard College"
  },
  {
    Name: "Lorain County Community College"
  },
  {
    Name: "Lorain County Joint Vocational School District"
  },
  {
    Name: "Loraines Academy & Spa"
  },
  {
    Name: "Loras College"
  },
  {
    Name: "Lorenzo Walker Technical College"
  },
  {
    Name: "Los Angeles Academy of Figurative Art"
  },
  {
    Name: "Los Angeles Center"
  },
  {
    Name: "Los Angeles City College"
  },
  {
    Name: "Los Angeles College of Aesthetics"
  },
  {
    Name: "Los Angeles College of Music"
  },
  {
    Name: "Los Angeles County College of Nursing and Allied Health"
  },
  {
    Name: "Los Angeles Film School"
  },
  {
    Name: "Los Angeles Harbor College"
  },
  {
    Name: "Los Angeles Mission College"
  },
  {
    Name: "Los Angeles Pacific College"
  },
  {
    Name: "Los Angeles Pacific University"
  },
  {
    Name: "Los Angeles Pierce College"
  },
  {
    Name: "Los Angeles Southwest College"
  },
  {
    Name: "Los Angeles Trade Technical College"
  },
  {
    Name: "Los Angeles Valley College"
  },
  {
    Name: "Los Medanos College"
  },
  {
    Name: "Lotus Professional College"
  },
  {
    Name: "Louisburg College"
  },
  {
    Name: "Louisiana Academy of Beauty"
  },
  {
    Name: "Louisiana Christian University"
  },
  {
    Name: "Louisiana Culinary Institute"
  },
  {
    Name: "Louisiana Delta Community College"
  },
  {
    Name: "Louisiana State University and Agricultural & Mechanical College"
  },
  {
    Name: "Louisiana State University Health Sciences Center-New Orleans"
  },
  {
    Name: "Louisiana State University Health Sciences Center-Shreveport"
  },
  {
    Name: "Louisiana State University-Alexandria"
  },
  {
    Name: "Louisiana State University-Eunice"
  },
  {
    Name: "Louisiana State University-Shreveport"
  },
  {
    Name: "Louisiana Tech University"
  },
  {
    Name: "Louisville Presbyterian Theological Seminary"
  },
  {
    Name: "Lourdes University"
  },
  {
    Name: "Love Beauty School Inc"
  },
  {
    Name: "Lowell Academy Hairstyling Institute"
  },
  {
    Name: "Lower Columbia College"
  },
  {
    Name: "Loyola Marymount University"
  },
  {
    Name: "Loyola University Chicago"
  },
  {
    Name: "Loyola University Maryland"
  },
  {
    Name: "Loyola University New Orleans"
  },
  {
    Name: "Lu Ross Academy"
  },
  {
    Name: "Lubbock Christian University"
  },
  {
    Name: "Luckes Beauty Academy LLC"
  },
  {
    Name: "Luna Community College"
  },
  {
    Name: "Luther College"
  },
  {
    Name: "Luther Rice College & Seminary"
  },
  {
    Name: "Luther Seminary"
  },
  {
    Name: "Lutheran School of Nursing"
  },
  {
    Name: "Lutheran School of Theology at Chicago"
  },
  {
    Name: "Luzerne County Community College"
  },
  {
    Name: "Lycoming College"
  },
  {
    Name: "Lyle's College of  Beauty"
  },
  {
    Name: "Lyle's College of Beauty"
  },
  {
    Name: "Lynn University"
  },
  {
    Name: "Lynnes Welding Training"
  },
  {
    Name: "Lynnes Welding Training-Bismarck"
  },
  {
    Name: "Lyon College"
  },
  {
    Name: "Lytles Redwood Empire Beauty College"
  },
  {
    Name: "M J Murphy Beauty College of Mount Pleasant"
  },
  {
    Name: "M State - Detroit Lakes Campus"
  },
  {
    Name: "M State - Moorhead Campus"
  },
  {
    Name: "M State - Wadena Campus"
  },
  {
    Name: "M T Training Center"
  },
  {
    Name: "M-DCPS The English Center"
  },
  {
    Name: "Macalester College"
  },
  {
    Name: "Machzikei Hadath Rabbinical College"
  },
  {
    Name: "Macomb Community College"
  },
  {
    Name: "Madera Community College"
  },
  {
    Name: "Madison Adult Career Center"
  },
  {
    Name: "Madison Area Technical College"
  },
  {
    Name: "Madison Oneida BOCES-Practical Nursing Program"
  },
  {
    Name: "Madisonville Community College"
  },
  {
    Name: "Madonna University"
  },
  {
    Name: "Magdalen College"
  },
  {
    Name: "Maharishi International University"
  },
  {
    Name: "Mahoning County Career and Technical Center"
  },
  {
    Name: "Maine College of Art & Design"
  },
  {
    Name: "Maine College of Health Professions"
  },
  {
    Name: "Maine Maritime Academy"
  },
  {
    Name: "Maine Media College"
  },
  {
    Name: "MAK Beauty Institute"
  },
  {
    Name: "MAK Beauty Institute - Duluth"
  },
  {
    Name: "Makana Esthetics Wellness Academy"
  },
  {
    Name: "Make-up Designory"
  },
  {
    Name: "Malone University"
  },
  {
    Name: "Manatee Technical College"
  },
  {
    Name: "Manchester Community College"
  },
  {
    Name: "Manchester Community College"
  },
  {
    Name: "Manchester University"
  },
  {
    Name: "Mandalyn Academy"
  },
  {
    Name: "Mandl School-The College of Allied Health"
  },
  {
    Name: "Manhattan Area Technical College"
  },
  {
    Name: "Manhattan Christian College"
  },
  {
    Name: "Manhattan College"
  },
  {
    Name: "Manhattan School of Computer Technology"
  },
  {
    Name: "Manhattan School of Music"
  },
  {
    Name: "Manhattanville College"
  },
  {
    Name: "Manna University"
  },
  {
    Name: "Manor College"
  },
  {
    Name: "Mansfield University of Pennsylvania"
  },
  {
    Name: "Manuel and Theresa's School of Hair Design"
  },
  {
    Name: "Manuel and Theresa's School of Hair Design-Bryan"
  },
  {
    Name: "Manuel and Theresa's School of Hair Design-Victoria"
  },
  {
    Name: "Maple Springs Baptist Bible College and Seminary"
  },
  {
    Name: "Maranatha Baptist University"
  },
  {
    Name: "Margaret H Rollins School of Nursing at Beebe Medical Center"
  },
  {
    Name: "Maria College of Albany"
  },
  {
    Name: "Marian Health Careers Center-Los Angeles Campus"
  },
  {
    Name: "Marian Health Careers Center-Van Nuys Campus"
  },
  {
    Name: "Marian University"
  },
  {
    Name: "Marian University"
  },
  {
    Name: "Mariano Moreno Culinary Institute"
  },
  {
    Name: "Marietta College"
  },
  {
    Name: "Marion S Whelan School of Nursing of Geneva General Hospital"
  },
  {
    Name: "Marion Technical College"
  },
  {
    Name: "Marion Technical College"
  },
  {
    Name: "Marist College"
  },
  {
    Name: "Marketti Academy of Cosmetology"
  },
  {
    Name: "Marquette University"
  },
  {
    Name: "Mars Hill University"
  },
  {
    Name: "Marshall B Ketchum University"
  },
  {
    Name: "Marshall University"
  },
  {
    Name: "Marshalltown Community College"
  },
  {
    Name: "Martin Community College"
  },
  {
    Name: "Martin Luther College"
  },
  {
    Name: "Martin University"
  },
  {
    Name: "Martinsburg College"
  },
  {
    Name: "Mary Baldwin University"
  },
  {
    Name: "Maryland Beauty Academy of Essex"
  },
  {
    Name: "Maryland Institute College of Art"
  },
  {
    Name: "Maryland University of Integrative Health"
  },
  {
    Name: "Marymount California University"
  },
  {
    Name: "Marymount Manhattan College"
  },
  {
    Name: "Marymount University"
  },
  {
    Name: "Maryville College"
  },
  {
    Name: "Maryville University of Saint Louis"
  },
  {
    Name: "Marywood University"
  },
  {
    Name: "Mason Anthony School of Cosmetology Arts & Sciences"
  },
  {
    Name: "Massachusetts Bay Community College"
  },
  {
    Name: "Massachusetts College of Art and Design"
  },
  {
    Name: "Massachusetts College of Liberal Arts"
  },
  {
    Name: "Massachusetts Institute of Technology"
  },
  {
    Name: "Massachusetts Maritime Academy"
  },
  {
    Name: "Massachusetts School of Barbering"
  },
  {
    Name: "Massachusetts School of Law"
  },
  {
    Name: "Massage Institute of Memphis"
  },
  {
    Name: "Massasoit Community College"
  },
  {
    Name: "Master's Barber & Styling College"
  },
  {
    Name: "Mauna Loa Helicopters"
  },
  {
    Name: "Mayfield College"
  },
  {
    Name: "Mayland Community College"
  },
  {
    Name: "Maynard A. Traviss Technical College - Central Florida Aerospace Academy"
  },
  {
    Name: "Mayo Clinic College of Medicine and Science"
  },
  {
    Name: "Mayo Clinic College of Medicine and Science - Arizona"
  },
  {
    Name: "Mayo Clinic College of Medicine and Science - Florida"
  },
  {
    Name: "Maysville Community and Technical College"
  },
  {
    Name: "Mayville State University"
  },
  {
    Name: "McCormick Theological Seminary"
  },
  {
    Name: "McDaniel College"
  },
  {
    Name: "McDougle Technical  Institute"
  },
  {
    Name: "McDowell Technical Community College"
  },
  {
    Name: "McHenry County College"
  },
  {
    Name: "MCI"
  },
  {
    Name: "McKendree University"
  },
  {
    Name: "McLennan Community College"
  },
  {
    Name: "McMurry University"
  },
  {
    Name: "McNeese State University"
  },
  {
    Name: "McPherson College"
  },
  {
    Name: "MCPHS University"
  },
  {
    Name: "MCVSD"
  },
  {
    Name: "MDT College of Health Sciences"
  },
  {
    Name: "Meadville Theological School of Lombard College"
  },
  {
    Name: "Mech-Tech College"
  },
  {
    Name: "Mechon L'hoyroa"
  },
  {
    Name: "Med Academy"
  },
  {
    Name: "Medaille University"
  },
  {
    Name: "MediaTech Institute-Dallas"
  },
  {
    Name: "MediaTech Institute-Houston"
  },
  {
    Name: "Medical Allied Career Center"
  },
  {
    Name: "Medical Career & Technical College"
  },
  {
    Name: "Medical Career College of Northern California"
  },
  {
    Name: "Medical Career Institute"
  },
  {
    Name: "Medical College of Wisconsin"
  },
  {
    Name: "Medical Institute of Palm Beach"
  },
  {
    Name: "Medical Training College"
  },
  {
    Name: "Medical University of South Carolina"
  },
  {
    Name: "Medina County Career Center"
  },
  {
    Name: "MedQuest College"
  },
  {
    Name: "Medspa Academies"
  },
  {
    Name: "Medspa Academies-National Institute of Modern Aesthetics"
  },
  {
    Name: "Meharry Medical College"
  },
  {
    Name: "Mei Barber School"
  },
  {
    Name: "Memorial Hospital School of Radiation Therapy Technology"
  },
  {
    Name: "Memphis Theological Seminary"
  },
  {
    Name: "Mendocino College"
  },
  {
    Name: "Menlo College"
  },
  {
    Name: "Merced College"
  },
  {
    Name: "Mercer County Career Center"
  },
  {
    Name: "Mercer County Community College"
  },
  {
    Name: "Mercer County Technical Education Center"
  },
  {
    Name: "Mercer University"
  },
  {
    Name: "Mercy College"
  },
  {
    Name: "Mercy College of Health Sciences"
  },
  {
    Name: "Mercy College of Ohio"
  },
  {
    Name: "Mercy Hospital School of Practical Nursing"
  },
  {
    Name: "Mercy-St Luke's School of Radiologic Technology"
  },
  {
    Name: "Mercyhurst Municipal Police Training Academy"
  },
  {
    Name: "Mercyhurst University"
  },
  {
    Name: "Meredith College"
  },
  {
    Name: "Meridian College"
  },
  {
    Name: "Meridian Community College"
  },
  {
    Name: "Meridian Institute of Surgical Assisting"
  },
  {
    Name: "Meridian Technology Center"
  },
  {
    Name: "Meridian University"
  },
  {
    Name: "Merkaz Bnos-Business School"
  },
  {
    Name: "Merrimack College"
  },
  {
    Name: "Merritt College"
  },
  {
    Name: "Merryfield School of Pet Grooming"
  },
  {
    Name: "Meryma'at Barber College"
  },
  {
    Name: "Mesabi Range College"
  },
  {
    Name: "Mesalands Community College"
  },
  {
    Name: "Mesivta of Eastern Parkway-Yeshiva Zichron Meilech"
  },
  {
    Name: "Mesivta Torah Vodaath Rabbinical Seminary"
  },
  {
    Name: "Mesivtha Tifereth Jerusalem of America"
  },
  {
    Name: "Messenger College"
  },
  {
    Name: "Messiah University"
  },
  {
    Name: "Methodist College"
  },
  {
    Name: "Methodist Theological School in Ohio"
  },
  {
    Name: "Methodist University"
  },
  {
    Name: "Metro Beauty Academy"
  },
  {
    Name: "Metro Detroit Barber College"
  },
  {
    Name: "Metro Technology Centers"
  },
  {
    Name: "Metropolitan College of New York"
  },
  {
    Name: "Metropolitan Community College Area"
  },
  {
    Name: "Metropolitan Community College-Kansas City"
  },
  {
    Name: "Metropolitan Learning Institute"
  },
  {
    Name: "Metropolitan State University"
  },
  {
    Name: "Metropolitan State University of Denver"
  },
  {
    Name: "MGH Institute of Health Professions"
  },
  {
    Name: "Miami Ad School"
  },
  {
    Name: "Miami Ad School-Atlanta"
  },
  {
    Name: "Miami Ad School-New York"
  },
  {
    Name: "Miami Ad School-San Francisco"
  },
  {
    Name: "Miami Dade College"
  },
  {
    Name: "Miami International University of Art & Design-Art Institute Dallas"
  },
  {
    Name: "Miami Lakes Educational Center and Technical College"
  },
  {
    Name: "Miami Lakes Educational Center and Technical College -"
  },
  {
    Name: "Miami Media School"
  },
  {
    Name: "Miami Regional University"
  },
  {
    Name: "Miami University-Hamilton"
  },
  {
    Name: "Miami University-Middletown"
  },
  {
    Name: "Miami University-Oxford"
  },
  {
    Name: "Miami Valley Career Technology Center"
  },
  {
    Name: "MIAT College of Technology"
  },
  {
    Name: "Michael's Barber & Hair Stylist Academy"
  },
  {
    Name: "Michael's School of Hair Design & Esthetics"
  },
  {
    Name: "Michigan Career and Technical Institute"
  },
  {
    Name: "Michigan College of Beauty-Monroe"
  },
  {
    Name: "Michigan College of Beauty-Troy"
  },
  {
    Name: "Michigan School of Psychology"
  },
  {
    Name: "Michigan State University"
  },
  {
    Name: "Michigan Technological University"
  },
  {
    Name: "Mid Cities Barber College"
  },
  {
    Name: "Mid Michigan College"
  },
  {
    Name: "Mid-America Christian University"
  },
  {
    Name: "Mid-America College of Funeral Service"
  },
  {
    Name: "Mid-America Technology Center"
  },
  {
    Name: "Mid-Atlantic Christian University"
  },
  {
    Name: "Mid-Del Technology Center"
  },
  {
    Name: "Mid-EastCTC-Adult Education"
  },
  {
    Name: "Mid-Plains Community College"
  },
  {
    Name: "Mid-South Christian College"
  },
  {
    Name: "Mid-State Technical College"
  },
  {
    Name: "MidAmerica Nazarene University"
  },
  {
    Name: "Middle Georgia State University"
  },
  {
    Name: "Middle Tennessee School of Anesthesia Inc"
  },
  {
    Name: "Middle Tennessee State University"
  },
  {
    Name: "Middlebury College"
  },
  {
    Name: "Middlebury Institute of International Studies at Monterey"
  },
  {
    Name: "Middlesex College"
  },
  {
    Name: "Middlesex Community College"
  },
  {
    Name: "Middlesex Community College"
  },
  {
    Name: "Midfield Institute of Cosmetology"
  },
  {
    Name: "Midland College"
  },
  {
    Name: "Midland University"
  },
  {
    Name: "Midlands Technical College"
  },
  {
    Name: "Midway Paris Beauty School"
  },
  {
    Name: "Midway University"
  },
  {
    Name: "Midwest Barber College"
  },
  {
    Name: "Midwest College of Oriental Medicine-Racine"
  },
  {
    Name: "Midwest College of Oriental Medicine-Skokie"
  },
  {
    Name: "Midwest Institute"
  },
  {
    Name: "Midwest Technical Institute-Illinois"
  },
  {
    Name: "Midwest Technical Institute-Missouri"
  },
  {
    Name: "Midwestern Baptist Theological Seminary"
  },
  {
    Name: "Midwestern Career College"
  },
  {
    Name: "Midwestern State University"
  },
  {
    Name: "Midwestern University-Downers Grove"
  },
  {
    Name: "Midwestern University-Glendale"
  },
  {
    Name: "Midwives College of Utah"
  },
  {
    Name: "Mifflin County Academy of Science and Technology"
  },
  {
    Name: "Milan Institute of Cosmetology-El Paso"
  },
  {
    Name: "Milan Institute of Cosmetology-La Quinta"
  },
  {
    Name: "Milan Institute of Cosmetology-Reno"
  },
  {
    Name: "Milan Institute of Cosmetology-San Antonio Military"
  },
  {
    Name: "Milan Institute of Cosmetology-Vacaville"
  },
  {
    Name: "Milan Institute-Amarillo"
  },
  {
    Name: "Milan Institute-Bakersfield"
  },
  {
    Name: "Milan Institute-Boise"
  },
  {
    Name: "Milan Institute-Clovis"
  },
  {
    Name: "Milan Institute-Las Vegas"
  },
  {
    Name: "Milan Institute-Merced"
  },
  {
    Name: "Milan Institute-Palm Desert"
  },
  {
    Name: "Milan Institute-San Antonio Ingram"
  },
  {
    Name: "Milan Institute-Sparks"
  },
  {
    Name: "Milan Institute-Visalia"
  },
  {
    Name: "Mildred Elley School-Albany Campus"
  },
  {
    Name: "Mildred Elley-New York Campus"
  },
  {
    Name: "Mildred Elley-Pittsfield Campus"
  },
  {
    Name: "Miles Community College"
  },
  {
    Name: "Millennia Atlantic University"
  },
  {
    Name: "Millennium Training Institute"
  },
  {
    Name: "Miller-Motte College-Augusta"
  },
  {
    Name: "Miller-Motte College-Berks Technical Institute"
  },
  {
    Name: "Miller-Motte College-Charleston"
  },
  {
    Name: "Miller-Motte College-Chattanooga"
  },
  {
    Name: "Miller-Motte College-Chattanooga 2"
  },
  {
    Name: "Miller-Motte College-Columbus"
  },
  {
    Name: "Miller-Motte College-Conway"
  },
  {
    Name: "Miller-Motte College-Edge Tech Academy"
  },
  {
    Name: "Miller-Motte College-Fayetteville"
  },
  {
    Name: "Miller-Motte College-Jacksonville"
  },
  {
    Name: "Miller-Motte College-Macon"
  },
  {
    Name: "Miller-Motte College-McCann-Allentown"
  },
  {
    Name: "Miller-Motte College-McCann-Lewisburg"
  },
  {
    Name: "Miller-Motte College-McCann-Monroe"
  },
  {
    Name: "Miller-Motte College-Raleigh"
  },
  {
    Name: "Miller-Motte College-STVT-Corpus Christi"
  },
  {
    Name: "Miller-Motte College-STVT-McAllen"
  },
  {
    Name: "Miller-Motte College-STVT-San Antonio"
  },
  {
    Name: "Miller-Motte College-Tulsa"
  },
  {
    Name: "Miller-Motte College-Wilmington"
  },
  {
    Name: "Millersville University of Pennsylvania"
  },
  {
    Name: "Milligan University"
  },
  {
    Name: "Millikin University"
  },
  {
    Name: "Mills College"
  },
  {
    Name: "Millsaps College"
  },
  {
    Name: "Milwaukee Area Technical College"
  },
  {
    Name: "Milwaukee Career College"
  },
  {
    Name: "Milwaukee Institute of Art & Design"
  },
  {
    Name: "Milwaukee School of Engineering"
  },
  {
    Name: "Mind Body Institute"
  },
  {
    Name: "Mineral Area College"
  },
  {
    Name: "Mineral County Vocational Technical Center"
  },
  {
    Name: "Minerva University"
  },
  {
    Name: "Mingo Extended Learning Center"
  },
  {
    Name: "Minneapolis College of Art and Design"
  },
  {
    Name: "Minneapolis Community and Technical College"
  },
  {
    Name: "Minnesota North College"
  },
  {
    Name: "Minnesota North College - Itasca"
  },
  {
    Name: "Minnesota North College - Mesabi Range Virginia"
  },
  {
    Name: "Minnesota North College - Rainy River"
  },
  {
    Name: "Minnesota North College - Vermilion"
  },
  {
    Name: "Minnesota School of Cosmetology-Woodbury Campus"
  },
  {
    Name: "Minnesota State College Southeast"
  },
  {
    Name: "Minnesota State CollegeSoutheast-Red Wing Campus"
  },
  {
    Name: "Minnesota State Community and Technical College"
  },
  {
    Name: "Minnesota State University Moorhead"
  },
  {
    Name: "Minnesota State University-Mankato"
  },
  {
    Name: "Minnesota West Community and Technical College"
  },
  {
    Name: "Minot State University"
  },
  {
    Name: "MiraCosta College"
  },
  {
    Name: "MiraCosta College - San Elijo Campus"
  },
  {
    Name: "Mirrer Yeshiva Cent Institute"
  },
  {
    Name: "Misericordia University"
  },
  {
    Name: "Missio Theological Seminary"
  },
  {
    Name: "Mission Beauty Institute"
  },
  {
    Name: "Mission College"
  },
  {
    Name: "Mississippi College"
  },
  {
    Name: "Mississippi Delta Community College"
  },
  {
    Name: "Mississippi Gulf Coast Community College"
  },
  {
    Name: "Mississippi Institute of Aesthetics Nails & Cosmetology"
  },
  {
    Name: "Mississippi State University"
  },
  {
    Name: "Mississippi University for Women"
  },
  {
    Name: "Mississippi Valley State University"
  },
  {
    Name: "Missouri Baptist University"
  },
  {
    Name: "Missouri College of Cosmetology and Esthetics"
  },
  {
    Name: "Missouri College of Cosmetology North"
  },
  {
    Name: "Missouri Southern State University"
  },
  {
    Name: "Missouri State University-Springfield"
  },
  {
    Name: "Missouri State University-West Plains"
  },
  {
    Name: "Missouri University of Science and Technology"
  },
  {
    Name: "Missouri Valley College"
  },
  {
    Name: "Missouri Western State University"
  },
  {
    Name: "Mitchell College"
  },
  {
    Name: "Mitchell Community College"
  },
  {
    Name: "Mitchell Hamline School of Law"
  },
  {
    Name: "Mitchell Technical College"
  },
  {
    Name: "Mitchells Academy"
  },
  {
    Name: "Mitchells Academy"
  },
  {
    Name: "Mitsu Sato Hair Academy"
  },
  {
    Name: "MIXED Institute of Cosmetology & Barber"
  },
  {
    Name: "Moberly Area Community College"
  },
  {
    Name: "Mobile Technical Training"
  },
  {
    Name: "Model College of Hair Design"
  },
  {
    Name: "Modern Beauty Academy"
  },
  {
    Name: "Modern Hairstyling Institute-Arecibo"
  },
  {
    Name: "Modern Hairstyling Institute-Bayamon"
  },
  {
    Name: "Modern Hairstyling Institute-Carolina"
  },
  {
    Name: "Modern Technology School"
  },
  {
    Name: "Modern Welding School"
  },
  {
    Name: "Modesto Junior College"
  },
  {
    Name: "Mohawk Valley Community College"
  },
  {
    Name: "Moler Barber College"
  },
  {
    Name: "Moler Hollywood Beauty Academy"
  },
  {
    Name: "Moler-Pickens Beauty Academy"
  },
  {
    Name: "Molloy College"
  },
  {
    Name: "Monmouth College"
  },
  {
    Name: "Monmouth University"
  },
  {
    Name: "Monmouth University -  Monmouth Park Corporate Center"
  },
  {
    Name: "Monongalia County Technical Education Center"
  },
  {
    Name: "Monroe 2 Orleans BOCES-Center for Workforce Development"
  },
  {
    Name: "Monroe College"
  },
  {
    Name: "Monroe Community College"
  },
  {
    Name: "Monroe County Community College"
  },
  {
    Name: "Montana Academy of Salons"
  },
  {
    Name: "Montana Barber Institute"
  },
  {
    Name: "Montana Bible College"
  },
  {
    Name: "Montana State University"
  },
  {
    Name: "Montana State University Billings"
  },
  {
    Name: "Montana State University-Northern"
  },
  {
    Name: "Montana Technological University"
  },
  {
    Name: "Montcalm Community College"
  },
  {
    Name: "Montclair State University"
  },
  {
    Name: "Montefiore School of Nursing"
  },
  {
    Name: "Monterey Peninsula College"
  },
  {
    Name: "Montessori Education Center of the Rockies"
  },
  {
    Name: "Montgomery Beauty School"
  },
  {
    Name: "Montgomery College"
  },
  {
    Name: "Montgomery Community College"
  },
  {
    Name: "Montgomery County Community College"
  },
  {
    Name: "Montreat College"
  },
  {
    Name: "Montserrat College of Art"
  },
  {
    Name: "Monty Tech"
  },
  {
    Name: "Moody Bible Institute"
  },
  {
    Name: "Moody Bible Institute - Spokane"
  },
  {
    Name: "Moody Theological Seminary and Graduate School--Michigan"
  },
  {
    Name: "Moore Career College"
  },
  {
    Name: "Moore College of Art and Design"
  },
  {
    Name: "Moore Norman Technology Center"
  },
  {
    Name: "Moorpark College"
  },
  {
    Name: "Moraine Park Technical College"
  },
  {
    Name: "Moraine Valley Community College"
  },
  {
    Name: "Moravian University"
  },
  {
    Name: "More Tech Institute"
  },
  {
    Name: "Morehead State University"
  },
  {
    Name: "Morehouse College"
  },
  {
    Name: "Morehouse School of Medicine"
  },
  {
    Name: "Moreno Valley College"
  },
  {
    Name: "Morgan Community College"
  },
  {
    Name: "Morgan State University"
  },
  {
    Name: "Morgantown Beauty College Inc"
  },
  {
    Name: "Morningside University"
  },
  {
    Name: "Morris College"
  },
  {
    Name: "Morris County Vocational School District"
  },
  {
    Name: "Morrison Institute of Technology"
  },
  {
    Name: "Morton College"
  },
  {
    Name: "Motion Picture Institute"
  },
  {
    Name: "Motlow State Community College"
  },
  {
    Name: "Motoring Technical Training Institute"
  },
  {
    Name: "MotoRing Technical Training Institute"
  },
  {
    Name: "Mott Community College"
  },
  {
    Name: "Mount Aloysius College"
  },
  {
    Name: "Mount Angel Seminary"
  },
  {
    Name: "Mount Carmel College of Nursing"
  },
  {
    Name: "Mount Carmel College of Nursing - Fairfield"
  },
  {
    Name: "Mount Holyoke College"
  },
  {
    Name: "Mount Marty University"
  },
  {
    Name: "Mount Mary University"
  },
  {
    Name: "Mount Mercy University"
  },
  {
    Name: "Mount Saint Joseph University"
  },
  {
    Name: "Mount Saint Mary College"
  },
  {
    Name: "Mount Saint Mary's University"
  },
  {
    Name: "Mount Saint Mary's University - Doheny Campus"
  },
  {
    Name: "Mount St. Mary's University"
  },
  {
    Name: "Mount Vernon Nazarene University"
  },
  {
    Name: "Mount Wachusett Community College"
  },
  {
    Name: "Mountain Empire Community College"
  },
  {
    Name: "Mountain Gateway Community College"
  },
  {
    Name: "Mountain State College"
  },
  {
    Name: "Mountain State School of Massage"
  },
  {
    Name: "Mountainland Technical College"
  },
  {
    Name: "Mountwest Community and Technical College"
  },
  {
    Name: "Mr Leon's School of Hair Design-Moscow"
  },
  {
    Name: "Mr Wayne's School of Unisex Hair Design"
  },
  {
    Name: "Ms Roberts Academy of Beauty Culture"
  },
  {
    Name: "Mt Hood Community College"
  },
  {
    Name: "Mt San Antonio College"
  },
  {
    Name: "Mt San Jacinto Community College District"
  },
  {
    Name: "Mt. Diablo Adult Education-Mt. Diablo USD"
  },
  {
    Name: "MTI College"
  },
  {
    Name: "Muhlenberg College"
  },
  {
    Name: "Multnomah University"
  },
  {
    Name: "Murray State College"
  },
  {
    Name: "Murray State University"
  },
  {
    Name: "Musicians Institute"
  },
  {
    Name: "Muskegon Community College"
  },
  {
    Name: "Muskingum University"
  },
  {
    Name: "My Beauty & Barber College"
  },
  {
    Name: "My Le's Beauty College"
  },
  {
    Name: "My Le's Beauty College"
  },
  {
    Name: "MyComputerCareer at Columbus"
  },
  {
    Name: "MyComputerCareer at Indianapolis"
  },
  {
    Name: "MyComputerCareer at Raleigh"
  },
  {
    Name: "Myotherapy College of Utah"
  },
  {
    Name: "Myotherapy Institute"
  },
  {
    Name: "MyrAngel Beauty Institute"
  },
  {
    Name: "Mystros Barber Academy"
  },
  {
    Name: "Napa Valley College"
  },
  {
    Name: "Naropa University"
  },
  {
    Name: "NASCAR Technical Institute"
  },
  {
    Name: "Nash Community College"
  },
  {
    Name: "Nashotah House"
  },
  {
    Name: "Nashua Community College"
  },
  {
    Name: "Nashville Film Institute"
  },
  {
    Name: "Nashville State Community College"
  },
  {
    Name: "Nassau Community College"
  },
  {
    Name: "Nathan Layne Institute of Cosmetology"
  },
  {
    Name: "National American University-Ellsworth"
  },
  {
    Name: "National American University-Kings Bay"
  },
  {
    Name: "National American University-Rapid City"
  },
  {
    Name: "National Aviation Academy of New England"
  },
  {
    Name: "National Aviation Academy of Tampa Bay"
  },
  {
    Name: "National Beauty College"
  },
  {
    Name: "National Career College"
  },
  {
    Name: "National Career Education"
  },
  {
    Name: "National Career Institute"
  },
  {
    Name: "National Conservatory of Dramatic Arts"
  },
  {
    Name: "National Holistic Institute"
  },
  {
    Name: "National Institute for Medical Assistant Advancement (NIMAA)"
  },
  {
    Name: "National Latino Education Institute"
  },
  {
    Name: "National Louis University"
  },
  {
    Name: "National Paralegal College"
  },
  {
    Name: "National Park College"
  },
  {
    Name: "National Personal Training Institute"
  },
  {
    Name: "National Personal Training Institute-Tampa"
  },
  {
    Name: "National Polytechnic College"
  },
  {
    Name: "National Tractor Trailer School Inc-Buffalo"
  },
  {
    Name: "National Tractor Trailer School Inc-Liverpool"
  },
  {
    Name: "National University"
  },
  {
    Name: "National University of Health Sciences"
  },
  {
    Name: "National University of Natural Medicine"
  },
  {
    Name: "Natural Images Beauty College"
  },
  {
    Name: "Naugatuck Valley Community College"
  },
  {
    Name: "Navajo Technical University"
  },
  {
    Name: "Naval Postgraduate School"
  },
  {
    Name: "Navarro College"
  },
  {
    Name: "Nazarene Bible College"
  },
  {
    Name: "Nazarene Theological Seminary"
  },
  {
    Name: "Nazareth College"
  },
  {
    Name: "Nebraska College of Technical Agriculture"
  },
  {
    Name: "Nebraska Indian Community College"
  },
  {
    Name: "Nebraska Methodist College of Nursing & Allied Health"
  },
  {
    Name: "Nebraska Wesleyan University"
  },
  {
    Name: "Neecee's Barber College"
  },
  {
    Name: "Neighborhood Playhouse School of the Theater"
  },
  {
    Name: "Neo-Esthetique European Institute"
  },
  {
    Name: "Neosho Beauty College"
  },
  {
    Name: "Neosho County Community College"
  },
  {
    Name: "Ner Israel Rabbinical College"
  },
  {
    Name: "Networks Barber College"
  },
  {
    Name: "Networks Barber College"
  },
  {
    Name: "Networks Barber College"
  },
  {
    Name: "Neumann University"
  },
  {
    Name: "Neumont College of Computer Science"
  },
  {
    Name: "Nevada Career Institute"
  },
  {
    Name: "Nevada State College"
  },
  {
    Name: "New Age Training"
  },
  {
    Name: "New Beginnings Beauty Academy"
  },
  {
    Name: "New Brunswick Theological Seminary"
  },
  {
    Name: "New Castle School of Trades"
  },
  {
    Name: "New Castle School of Trades"
  },
  {
    Name: "New Castle School of Trades - East Liverpool Campus"
  },
  {
    Name: "New College of Florida"
  },
  {
    Name: "New Community Career & Technical Institute"
  },
  {
    Name: "New Concept Massage and Beauty School"
  },
  {
    Name: "New Dimensions School of Hair Design"
  },
  {
    Name: "New England College"
  },
  {
    Name: "New England College of Optometry"
  },
  {
    Name: "New England Hair Academy"
  },
  {
    Name: "New England Institute of Technology"
  },
  {
    Name: "New England Law-Boston"
  },
  {
    Name: "New England School of Hair Design"
  },
  {
    Name: "New England Tractor Trailer Training School of Connecticut"
  },
  {
    Name: "New England Tractor Trailer Training School of CT-Bridgeport"
  },
  {
    Name: "New England Tractor Trailer Training School of Massachusetts"
  },
  {
    Name: "New England Tractor Trailer Training School of Rhode Island"
  },
  {
    Name: "New Hampshire Institute for Therapeutic Arts"
  },
  {
    Name: "New Hampshire Institute for Therapeutic Arts"
  },
  {
    Name: "New Hope Christian College-Eugene"
  },
  {
    Name: "New Jersey City University"
  },
  {
    Name: "New Jersey Institute of Technology"
  },
  {
    Name: "New Mexico Highlands University"
  },
  {
    Name: "New Mexico Institute of Mining and Technology"
  },
  {
    Name: "New Mexico Junior College"
  },
  {
    Name: "New Mexico Military Institute"
  },
  {
    Name: "New Mexico State University-Alamogordo"
  },
  {
    Name: "New Mexico State University-Dona Ana"
  },
  {
    Name: "New Mexico State University-Grants"
  },
  {
    Name: "New Mexico State University-Main Campus"
  },
  {
    Name: "New Orleans Baptist Theological Seminary"
  },
  {
    Name: "New Professions Technical Institute"
  },
  {
    Name: "New River Community and Technical College"
  },
  {
    Name: "New River Community College"
  },
  {
    Name: "New Saint Andrews College"
  },
  {
    Name: "New Tyler Barber College Inc"
  },
  {
    Name: "New York Academy of Art"
  },
  {
    Name: "New York Automotive and Diesel Institute"
  },
  {
    Name: "New York College of Health Professions"
  },
  {
    Name: "New York College of Podiatric Medicine"
  },
  {
    Name: "New York College of Traditional Chinese Medicine"
  },
  {
    Name: "New York Conservatory for Dramatic Arts"
  },
  {
    Name: "New York Film Academy"
  },
  {
    Name: "New York Institute of Beauty"
  },
  {
    Name: "New York Institute of Massage Inc"
  },
  {
    Name: "New York Institute of Technology"
  },
  {
    Name: "New York Law School"
  },
  {
    Name: "New York Medical Career Training Center"
  },
  {
    Name: "New York Medical College"
  },
  {
    Name: "New York School for Medical and Dental Assistants"
  },
  {
    Name: "New York School of Esthetics & Day Spa"
  },
  {
    Name: "New York School of Interior Design"
  },
  {
    Name: "New York Seminary"
  },
  {
    Name: "New York Theological Seminary"
  },
  {
    Name: "New York University"
  },
  {
    Name: "Newberry College"
  },
  {
    Name: "Newman University"
  },
  {
    Name: "Newschool of Architecture and Design"
  },
  {
    Name: "NHTI-Concord's Community College"
  },
  {
    Name: "Niagara County Community College"
  },
  {
    Name: "Niagara University"
  },
  {
    Name: "Nicholls State University"
  },
  {
    Name: "Nichols College"
  },
  {
    Name: "Nicolet Area Technical College"
  },
  {
    Name: "Nightingale College"
  },
  {
    Name: "No Grease Barber School"
  },
  {
    Name: "Norco College"
  },
  {
    Name: "Norfolk State University"
  },
  {
    Name: "Normandale Community College"
  },
  {
    Name: "North Adrian's College of Beauty Inc"
  },
  {
    Name: "North American Trade Schools"
  },
  {
    Name: "North American University"
  },
  {
    Name: "North Arkansas College"
  },
  {
    Name: "North Bennet Street School"
  },
  {
    Name: "North Carolina A & T State University"
  },
  {
    Name: "North Carolina Central University"
  },
  {
    Name: "North Carolina State University at Raleigh"
  },
  {
    Name: "North Carolina Wesleyan University"
  },
  {
    Name: "North Central College"
  },
  {
    Name: "North Central Institute"
  },
  {
    Name: "North Central Kansas Technical College"
  },
  {
    Name: "North Central Michigan College"
  },
  {
    Name: "North Central Missouri College"
  },
  {
    Name: "North Central State College"
  },
  {
    Name: "North Central Texas College"
  },
  {
    Name: "North Central University"
  },
  {
    Name: "North Country Community College"
  },
  {
    Name: "North Dakota State College of Science"
  },
  {
    Name: "North Dakota State University-Main Campus"
  },
  {
    Name: "North Florida College"
  },
  {
    Name: "North Florida Cosmetology Institute"
  },
  {
    Name: "North Florida Technical College"
  },
  {
    Name: "North Georgia Technical College"
  },
  {
    Name: "North Greenville University"
  },
  {
    Name: "North Hennepin Community College"
  },
  {
    Name: "North Idaho College"
  },
  {
    Name: "North Iowa Area Community College"
  },
  {
    Name: "North Park University"
  },
  {
    Name: "North Seattle College"
  },
  {
    Name: "North Shore Community College"
  },
  {
    Name: "North-West College-Anaheim"
  },
  {
    Name: "North-West College-Glendale"
  },
  {
    Name: "North-West College-Long Beach"
  },
  {
    Name: "North-West College-Pomona"
  },
  {
    Name: "North-West College-Riverside"
  },
  {
    Name: "North-West College-San Diego"
  },
  {
    Name: "North-West College-Van Nuys"
  },
  {
    Name: "North-West College-West Covina"
  },
  {
    Name: "Northampton County Area Community College"
  },
  {
    Name: "Northampton County Area Community College-Monroe"
  },
  {
    Name: "Northcentral Technical College"
  },
  {
    Name: "Northcentral University"
  },
  {
    Name: "Northcoast Medical Training Academy"
  },
  {
    Name: "Northeast College of Health Sciences"
  },
  {
    Name: "Northeast Community College"
  },
  {
    Name: "Northeast Iowa Community College"
  },
  {
    Name: "Northeast Lakeview College"
  },
  {
    Name: "Northeast Mississippi Community College"
  },
  {
    Name: "Northeast Ohio Medical University"
  },
  {
    Name: "Northeast State Community College"
  },
  {
    Name: "Northeast Technical Institute"
  },
  {
    Name: "Northeast Technology Center"
  },
  {
    Name: "Northeast Texas Community College"
  },
  {
    Name: "Northeast Wisconsin Technical College"
  },
  {
    Name: "Northeastern Illinois University"
  },
  {
    Name: "Northeastern Junior College"
  },
  {
    Name: "Northeastern Oklahoma A&M College"
  },
  {
    Name: "Northeastern Seminary"
  },
  {
    Name: "Northeastern State University"
  },
  {
    Name: "Northeastern Technical College"
  },
  {
    Name: "Northeastern University"
  },
  {
    Name: "Northeastern University Professional Programs"
  },
  {
    Name: "Northern Baptist Theological Seminary"
  },
  {
    Name: "Northern Career Institute"
  },
  {
    Name: "Northern Essex Community College"
  },
  {
    Name: "Northern Illinois University"
  },
  {
    Name: "Northern Institute of Cosmetology"
  },
  {
    Name: "Northern Kentucky University"
  },
  {
    Name: "Northern Maine Community College"
  },
  {
    Name: "Northern Marianas College"
  },
  {
    Name: "Northern Michigan University"
  },
  {
    Name: "Northern New Mexico College"
  },
  {
    Name: "Northern Oklahoma College"
  },
  {
    Name: "Northern Pennsylvania Regional College"
  },
  {
    Name: "Northern State University"
  },
  {
    Name: "Northern Technical College"
  },
  {
    Name: "Northern Tier Career Center"
  },
  {
    Name: "Northern Vermont University"
  },
  {
    Name: "Northern Vermont University - Lyndon"
  },
  {
    Name: "Northern Virginia Community College"
  },
  {
    Name: "Northern Virginia School of Therapeutic Massage"
  },
  {
    Name: "Northern Wyoming Community College District"
  },
  {
    Name: "Northland College"
  },
  {
    Name: "Northland Community and Technical College"
  },
  {
    Name: "Northland Community and Technical College - East Grand Forks"
  },
  {
    Name: "Northpoint Bible College"
  },
  {
    Name: "Northshore Technical Community College"
  },
  {
    Name: "NorthShore University HealthSystem School of Nurse Anesthesia"
  },
  {
    Name: "NorthWest Arkansas Community College"
  },
  {
    Name: "Northwest Career College"
  },
  {
    Name: "Northwest College"
  },
  {
    Name: "Northwest College of Art & Design"
  },
  {
    Name: "Northwest College-Beaverton"
  },
  {
    Name: "Northwest College-Clackamas"
  },
  {
    Name: "Northwest College-Eugene"
  },
  {
    Name: "Northwest College-Hillsboro"
  },
  {
    Name: "Northwest College-Medford"
  },
  {
    Name: "Northwest College-Tualatin"
  },
  {
    Name: "Northwest Educational Center"
  },
  {
    Name: "Northwest Florida State College"
  },
  {
    Name: "Northwest HVAC/R Training Center"
  },
  {
    Name: "Northwest Indian College"
  },
  {
    Name: "Northwest Iowa Community College"
  },
  {
    Name: "Northwest Kansas Technical College"
  },
  {
    Name: "Northwest Louisiana Technical Community College"
  },
  {
    Name: "Northwest Mississippi Community College"
  },
  {
    Name: "Northwest Missouri State University"
  },
  {
    Name: "Northwest Nazarene University"
  },
  {
    Name: "Northwest School of Wooden Boat Building"
  },
  {
    Name: "Northwest State Community College"
  },
  {
    Name: "Northwest Technical College"
  },
  {
    Name: "Northwest Technical Institute"
  },
  {
    Name: "Northwest Technology Center-Alva"
  },
  {
    Name: "Northwest Technology Center-Fairview"
  },
  {
    Name: "Northwest University"
  },
  {
    Name: "Northwest University-Center for Online and Extended Education"
  },
  {
    Name: "Northwest Vista College"
  },
  {
    Name: "Northwestern College"
  },
  {
    Name: "Northwestern College"
  },
  {
    Name: "Northwestern Connecticut Community College"
  },
  {
    Name: "Northwestern Health Sciences University"
  },
  {
    Name: "Northwestern Michigan College"
  },
  {
    Name: "Northwestern Oklahoma State University"
  },
  {
    Name: "Northwestern State University of Louisiana"
  },
  {
    Name: "Northwestern Technological Institute"
  },
  {
    Name: "Northwestern University"
  },
  {
    Name: "Northwood Technical College"
  },
  {
    Name: "Northwood University"
  },
  {
    Name: "Norwalk Community College"
  },
  {
    Name: "Norwich University"
  },
  {
    Name: "Nossi College of Art"
  },
  {
    Name: "Notre Dame College"
  },
  {
    Name: "Notre Dame de Namur University"
  },
  {
    Name: "Notre Dame of Maryland University"
  },
  {
    Name: "Nouvelle Institute"
  },
  {
    Name: "Nova Academy of Cosmetology"
  },
  {
    Name: "Nova College de Puerto Rico"
  },
  {
    Name: "Nova Southeastern University"
  },
  {
    Name: "NTMA Training Centers of Southern California"
  },
  {
    Name: "NUC University"
  },
  {
    Name: "NUC University - Arecibo"
  },
  {
    Name: "NUC University - Caguas"
  },
  {
    Name: "NUC University - Florida Technical College - Cutler Bay"
  },
  {
    Name: "NUC University - Florida Technical College - Deland"
  },
  {
    Name: "NUC University - Florida Technical College - Kissimmee"
  },
  {
    Name: "NUC University - Florida Technical College - Lakeland"
  },
  {
    Name: "NUC University - Florida Technical College - Orlando"
  },
  {
    Name: "NUC University - Florida Technical College - Pembroke Pines"
  },
  {
    Name: "NUC University - Florida Technical College - Tampa"
  },
  {
    Name: "NUC University - IBC Technical Division - Aguadilla"
  },
  {
    Name: "NUC University - IBC Technical Division - Arecibo"
  },
  {
    Name: "NUC University - IBC Technical Division - Bayamon"
  },
  {
    Name: "NUC University - IBC Technical Division - Caguas"
  },
  {
    Name: "NUC University - IBC Technical Division - Escorial"
  },
  {
    Name: "NUC University - IBC Technical Division - Fajardo"
  },
  {
    Name: "NUC University - IBC Technical Division - Guayama"
  },
  {
    Name: "NUC University - IBC Technical Division - Los Colobos"
  },
  {
    Name: "NUC University - IBC Technical Division - Manati"
  },
  {
    Name: "NUC University - IBC Technical Division - Mayaguez"
  },
  {
    Name: "NUC University - IBC Technical Division - Moca"
  },
  {
    Name: "NUC University - IBC Technical Division - Ponce"
  },
  {
    Name: "NUC University - IBC Technical Division - Yauco"
  },
  {
    Name: "NUC University - Mayaguez"
  },
  {
    Name: "NUC University - Ponce"
  },
  {
    Name: "NUC University - Rio Grande"
  },
  {
    Name: "NUC University - South Florida"
  },
  {
    Name: "Nueta Hidatsa Sahnish College"
  },
  {
    Name: "Nunez Community College"
  },
  {
    Name: "Nuvani Institute"
  },
  {
    Name: "Nuvani Institute"
  },
  {
    Name: "Nuvani Institute-Del Rio"
  },
  {
    Name: "Nuvani Institute-South Campus"
  },
  {
    Name: "Nuvani Institute-Uvalde"
  },
  {
    Name: "Nuvo College of Cosmetology"
  },
  {
    Name: "NYSMedical&Dental Assistants - American Institute of Clinical Massage"
  },
  {
    Name: "O C Collins Career Center"
  },
  {
    Name: "O'Briens Aveda Institute"
  },
  {
    Name: "Oak Hills Christian College"
  },
  {
    Name: "Oak Point University"
  },
  {
    Name: "Oak Valley College"
  },
  {
    Name: "Oakland City University"
  },
  {
    Name: "Oakland Community College"
  },
  {
    Name: "Oakland University"
  },
  {
    Name: "Oakton Community College"
  },
  {
    Name: "Oberlin College"
  },
  {
    Name: "Oblate School of Theology"
  },
  {
    Name: "Occidental College"
  },
  {
    Name: "Ocean Corporation"
  },
  {
    Name: "Ocean County College"
  },
  {
    Name: "Ocean County Vocational-Technical School"
  },
  {
    Name: "Oconee Fall Line Technical College"
  },
  {
    Name: "Odessa College"
  },
  {
    Name: "Oehrlein School of Cosmetology"
  },
  {
    Name: "Ogden-Weber Technical College"
  },
  {
    Name: "Ogeechee Technical College"
  },
  {
    Name: "Oglala Lakota College"
  },
  {
    Name: "Ogle School Hair Skin Nails-Arlington"
  },
  {
    Name: "Ogle School Hair Skin Nails-Dallas"
  },
  {
    Name: "Ogle School Hair Skin Nails-Denton"
  },
  {
    Name: "Ogle School Hair Skin Nails-Ft Worth"
  },
  {
    Name: "Ogle School Hair Skin Nails-Hurst"
  },
  {
    Name: "Ogle School Hair Skin Nails-North Dallas"
  },
  {
    Name: "Ogle School Hair Skin Nails-San Antonio"
  },
  {
    Name: "Ogle School Hair Skin Nails-Stafford"
  },
  {
    Name: "Ogle School Hair Skin Nails-Willowbrook"
  },
  {
    Name: "Oglethorpe University"
  },
  {
    Name: "Ohel Margulia Seminary"
  },
  {
    Name: "Ohio Business College-Dayton-Driving Academy"
  },
  {
    Name: "Ohio Business College-Sandusky"
  },
  {
    Name: "Ohio Business College-Sheffield"
  },
  {
    Name: "Ohio Christian University"
  },
  {
    Name: "Ohio Dominican University"
  },
  {
    Name: "Ohio Institute of Allied Health"
  },
  {
    Name: "Ohio Media School-Cincinnati"
  },
  {
    Name: "Ohio Media School-Columbus"
  },
  {
    Name: "Ohio Media School-Valley View"
  },
  {
    Name: "Ohio Medical Career College"
  },
  {
    Name: "Ohio Northern University"
  },
  {
    Name: "Ohio State Beauty Academy"
  },
  {
    Name: "Ohio State College of Barber Styling"
  },
  {
    Name: "Ohio State School of Cosmetology-Canal Winchester"
  },
  {
    Name: "Ohio State School of Cosmetology-Heath"
  },
  {
    Name: "Ohio State University Agricultural Technical Institute"
  },
  {
    Name: "Ohio State University-Lima Campus"
  },
  {
    Name: "Ohio State University-Main Campus"
  },
  {
    Name: "Ohio State University-Mansfield Campus"
  },
  {
    Name: "Ohio State University-Marion Campus"
  },
  {
    Name: "Ohio State University-Newark Campus"
  },
  {
    Name: "Ohio Technical College"
  },
  {
    Name: "Ohio University-Chillicothe Campus"
  },
  {
    Name: "Ohio University-Eastern Campus"
  },
  {
    Name: "Ohio University-Lancaster Campus"
  },
  {
    Name: "Ohio University-Main Campus"
  },
  {
    Name: "Ohio University-Southern Campus"
  },
  {
    Name: "Ohio University-Zanesville Campus"
  },
  {
    Name: "Ohio Wesleyan University"
  },
  {
    Name: "Ohlone College"
  },
  {
    Name: "Ohr Hameir Theological Seminary"
  },
  {
    Name: "Okaloosa Technical College"
  },
  {
    Name: "Oklahoma Baptist University"
  },
  {
    Name: "Oklahoma Christian University"
  },
  {
    Name: "Oklahoma City Community College"
  },
  {
    Name: "Oklahoma City University"
  },
  {
    Name: "Oklahoma Panhandle State University"
  },
  {
    Name: "Oklahoma State University Center for Health Sciences"
  },
  {
    Name: "Oklahoma State University Institute of Technology"
  },
  {
    Name: "Oklahoma State University-Main Campus"
  },
  {
    Name: "Oklahoma State University-Oklahoma City"
  },
  {
    Name: "Oklahoma Technical College"
  },
  {
    Name: "Oklahoma Wesleyan University"
  },
  {
    Name: "Old Dominion University"
  },
  {
    Name: "Old Town Barber College - KC"
  },
  {
    Name: "Old Town Barber College-Wichita"
  },
  {
    Name: "Oliver Finley Academy of Cosmetology"
  },
  {
    Name: "Olivet College"
  },
  {
    Name: "Olivet Nazarene University"
  },
  {
    Name: "Olney Central College"
  },
  {
    Name: "Olympian Academy of Cosmetology"
  },
  {
    Name: "Olympic College"
  },
  {
    Name: "Omega Graduate School"
  },
  {
    Name: "Omega Institute of Cosmetology"
  },
  {
    Name: "Omega Studios' School of Applied Recording Arts & Sciences"
  },
  {
    Name: "Omnitech Institute"
  },
  {
    Name: "Onondaga Community College"
  },
  {
    Name: "Onondaga Cortland Madison BOCES"
  },
  {
    Name: "Opelousas School of Cosmetology"
  },
  {
    Name: "Oral Roberts University"
  },
  {
    Name: "Orange Coast College"
  },
  {
    Name: "Orange County Community College"
  },
  {
    Name: "Orange Technical College"
  },
  {
    Name: "Orange Technical College-East Campus"
  },
  {
    Name: "Orange Technical College-Mid Florida Campus"
  },
  {
    Name: "Orange Technical College-Westside Campus"
  },
  {
    Name: "Orange Ulster BOCES-Practical Nursing Program"
  },
  {
    Name: "Orangeburg Calhoun Technical College"
  },
  {
    Name: "Oregon Coast Community College"
  },
  {
    Name: "Oregon College of Oriental Medicine"
  },
  {
    Name: "Oregon Health & Science University"
  },
  {
    Name: "Oregon Institute of Technology"
  },
  {
    Name: "Oregon State University"
  },
  {
    Name: "Oregon State University-Cascades Campus"
  },
  {
    Name: "Orion Institute"
  },
  {
    Name: "Orion Technical College"
  },
  {
    Name: "Orleans Niagara BOCES-Practical Nursing Program"
  },
  {
    Name: "Orleans Technical College"
  },
  {
    Name: "Orlo School of Hair Design and Cosmetology"
  },
  {
    Name: "Osceola Technical College"
  },
  {
    Name: "Osceola Technical College - Poinciana Campus"
  },
  {
    Name: "Osceola Technical College - St. Cloud Campus"
  },
  {
    Name: "Otero College"
  },
  {
    Name: "Otero College - La Junta High School"
  },
  {
    Name: "Otis College of Art and Design"
  },
  {
    Name: "Otsego Area BOCES-Practical Nursing Program"
  },
  {
    Name: "Ottawa University-Kansas City"
  },
  {
    Name: "Ottawa University-Milwaukee"
  },
  {
    Name: "Ottawa University-Online"
  },
  {
    Name: "Ottawa University-Ottawa"
  },
  {
    Name: "Ottawa University-Surprise"
  },
  {
    Name: "Otterbein University"
  },
  {
    Name: "Ouachita Baptist University"
  },
  {
    Name: "Our Lady of the Lake University"
  },
  {
    Name: "Owens Community College"
  },
  {
    Name: "Owensboro Community and Technical College"
  },
  {
    Name: "Oxford Academy of Hair Design Inc"
  },
  {
    Name: "Oxnard College"
  },
  {
    Name: "Ozark Christian College"
  },
  {
    Name: "Ozarka College"
  },
  {
    Name: "Ozarks Technical Community College"
  },
  {
    Name: "P B Cosmetology Education Center"
  },
  {
    Name: "P C Age-Jersey City"
  },
  {
    Name: "P&A Scholars Beauty School"
  },
  {
    Name: "Pace University"
  },
  {
    Name: "Pacific Bible College"
  },
  {
    Name: "Pacific College"
  },
  {
    Name: "Pacific College of Health and Science"
  },
  {
    Name: "Pacific College of Health and Science"
  },
  {
    Name: "Pacific College of Health and Science"
  },
  {
    Name: "Pacific Islands University"
  },
  {
    Name: "Pacific Lutheran University"
  },
  {
    Name: "Pacific Northwest Christian College"
  },
  {
    Name: "Pacific Northwest College of Art"
  },
  {
    Name: "Pacific Northwest University of Health Sciences"
  },
  {
    Name: "Pacific Oaks College"
  },
  {
    Name: "Pacific Rim Christian University"
  },
  {
    Name: "Pacific School of Religion"
  },
  {
    Name: "Pacific States University"
  },
  {
    Name: "Pacific Union College"
  },
  {
    Name: "Pacific University"
  },
  {
    Name: "Pacifica Graduate Institute"
  },
  {
    Name: "Paier College"
  },
  {
    Name: "Paine College"
  },
  {
    Name: "Palau Community College"
  },
  {
    Name: "Palladium Technical Academy Inc"
  },
  {
    Name: "Palm Beach Academy of Health & Beauty"
  },
  {
    Name: "Palm Beach Atlantic University"
  },
  {
    Name: "Palm Beach State College"
  },
  {
    Name: "Palmer College of Chiropractic"
  },
  {
    Name: "Palo Alto College"
  },
  {
    Name: "Palo Alto University"
  },
  {
    Name: "Palo Verde College"
  },
  {
    Name: "Palomar College"
  },
  {
    Name: "Palomar Institute of Cosmetology"
  },
  {
    Name: "Pamlico Community College"
  },
  {
    Name: "Panache Academy of Beauty"
  },
  {
    Name: "Panola College"
  },
  {
    Name: "Paradise Valley Community College"
  },
  {
    Name: "Paramount Beauty Academy"
  },
  {
    Name: "Pardee RAND Graduate School"
  },
  {
    Name: "Paris Junior College"
  },
  {
    Name: "Parisian Beauty School"
  },
  {
    Name: "Parisian Spa Institute"
  },
  {
    Name: "Park Place Premier Barber School"
  },
  {
    Name: "Park University"
  },
  {
    Name: "Parker University"
  },
  {
    Name: "Parkland College"
  },
  {
    Name: "Paroba College of Cosmetology"
  },
  {
    Name: "Pasadena City College"
  },
  {
    Name: "Pasco-Hernando State College"
  },
  {
    Name: "Passaic County Community College"
  },
  {
    Name: "Pat Goins Benton Road Beauty School"
  },
  {
    Name: "Pathway Vocational Academy"
  },
  {
    Name: "Pathways College"
  },
  {
    Name: "Patrick & Henry Community College"
  },
  {
    Name: "Patrick Henry College"
  },
  {
    Name: "Paul D Camp Community College"
  },
  {
    Name: "Paul Mitchell The School Tinley Park"
  },
  {
    Name: "Paul Mitchell the School-Albuquerque"
  },
  {
    Name: "Paul Mitchell the School-Arkansas"
  },
  {
    Name: "Paul Mitchell the School-Arlington"
  },
  {
    Name: "Paul Mitchell the School-Atlanta"
  },
  {
    Name: "Paul Mitchell the School-Austin"
  },
  {
    Name: "Paul Mitchell the School-Baton Rouge"
  },
  {
    Name: "Paul Mitchell the School-Birmingham"
  },
  {
    Name: "Paul Mitchell the School-Boise"
  },
  {
    Name: "Paul Mitchell the School-Charleston"
  },
  {
    Name: "Paul Mitchell the School-Chicago"
  },
  {
    Name: "Paul Mitchell the School-Cincinnati"
  },
  {
    Name: "Paul Mitchell the School-Clear Lake"
  },
  {
    Name: "Paul Mitchell the School-Cleveland"
  },
  {
    Name: "Paul Mitchell the School-Colorado Springs"
  },
  {
    Name: "Paul Mitchell the School-Columbia"
  },
  {
    Name: "Paul Mitchell the School-Columbus"
  },
  {
    Name: "Paul Mitchell the School-Costa Mesa"
  },
  {
    Name: "Paul Mitchell the School-Dallas"
  },
  {
    Name: "Paul Mitchell the School-Delaware"
  },
  {
    Name: "Paul Mitchell the School-Denver"
  },
  {
    Name: "Paul Mitchell the School-East Bay"
  },
  {
    Name: "Paul Mitchell the School-Esani"
  },
  {
    Name: "Paul Mitchell the School-Farmington Hills"
  },
  {
    Name: "Paul Mitchell the School-Fayetteville"
  },
  {
    Name: "Paul Mitchell the School-Fort Lauderdale"
  },
  {
    Name: "Paul Mitchell the School-Fort Myers"
  },
  {
    Name: "Paul Mitchell the School-Fresno"
  },
  {
    Name: "Paul Mitchell the School-Gastonia"
  },
  {
    Name: "Paul Mitchell the School-Grand Rapids"
  },
  {
    Name: "Paul Mitchell the School-Great Lakes"
  },
  {
    Name: "Paul Mitchell the School-Greenville"
  },
  {
    Name: "Paul Mitchell the School-Honolulu"
  },
  {
    Name: "Paul Mitchell the School-Houston"
  },
  {
    Name: "Paul Mitchell the School-Huntsville"
  },
  {
    Name: "Paul Mitchell the School-Indianapolis"
  },
  {
    Name: "Paul Mitchell the School-Jacksonville"
  },
  {
    Name: "Paul Mitchell the School-Jersey Shore"
  },
  {
    Name: "Paul Mitchell the School-Jessup"
  },
  {
    Name: "Paul Mitchell the School-Knoxville"
  },
  {
    Name: "Paul Mitchell the School-Las Vegas"
  },
  {
    Name: "Paul Mitchell the School-Lexington"
  },
  {
    Name: "Paul Mitchell the School-Little Rock"
  },
  {
    Name: "Paul Mitchell the School-Logan"
  },
  {
    Name: "Paul Mitchell the School-Lombard"
  },
  {
    Name: "Paul Mitchell the School-Louisville"
  },
  {
    Name: "Paul Mitchell the School-Madison"
  },
  {
    Name: "Paul Mitchell the School-Memphis"
  },
  {
    Name: "Paul Mitchell the School-Merrillville"
  },
  {
    Name: "Paul Mitchell the School-Miami"
  },
  {
    Name: "Paul Mitchell the School-Michigan"
  },
  {
    Name: "Paul Mitchell the School-Milwaukee"
  },
  {
    Name: "Paul Mitchell the School-Missouri Columbia"
  },
  {
    Name: "Paul Mitchell the School-Modesto"
  },
  {
    Name: "Paul Mitchell the School-Murfreesboro"
  },
  {
    Name: "Paul Mitchell the School-Murfreesboro-Nashville"
  },
  {
    Name: "Paul Mitchell the School-Nampa"
  },
  {
    Name: "Paul Mitchell the School-New Orleans"
  },
  {
    Name: "Paul Mitchell the School-Normal"
  },
  {
    Name: "Paul Mitchell the School-North Haven"
  },
  {
    Name: "Paul Mitchell the School-North Tahoe"
  },
  {
    Name: "Paul Mitchell the School-NYC"
  },
  {
    Name: "Paul Mitchell the School-Ogden"
  },
  {
    Name: "Paul Mitchell the School-Orlando"
  },
  {
    Name: "Paul Mitchell the School-Overland Park"
  },
  {
    Name: "Paul Mitchell the School-Pasadena"
  },
  {
    Name: "Paul Mitchell the School-Phoenix"
  },
  {
    Name: "Paul Mitchell the School-Portsmouth"
  },
  {
    Name: "Paul Mitchell the School-Provo"
  },
  {
    Name: "Paul Mitchell the School-Raleigh"
  },
  {
    Name: "Paul Mitchell the School-Rapid City"
  },
  {
    Name: "Paul Mitchell the School-Reno"
  },
  {
    Name: "Paul Mitchell the School-Rexburg"
  },
  {
    Name: "Paul Mitchell the School-Rhode Island"
  },
  {
    Name: "Paul Mitchell the School-Richland"
  },
  {
    Name: "Paul Mitchell the School-Roanoke"
  },
  {
    Name: "Paul Mitchell the School-Sacramento"
  },
  {
    Name: "Paul Mitchell the School-Salt Lake City"
  },
  {
    Name: "Paul Mitchell the School-San Antonio"
  },
  {
    Name: "Paul Mitchell the School-San Diego"
  },
  {
    Name: "Paul Mitchell the School-San Jose"
  },
  {
    Name: "Paul Mitchell the School-Schenectady"
  },
  {
    Name: "Paul Mitchell the School-Sherman Oaks"
  },
  {
    Name: "Paul Mitchell the School-Spokane"
  },
  {
    Name: "Paul Mitchell the School-Springfield"
  },
  {
    Name: "Paul Mitchell the School-St Louis"
  },
  {
    Name: "Paul Mitchell the School-St. George"
  },
  {
    Name: "Paul Mitchell the School-Tampa"
  },
  {
    Name: "Paul Mitchell the School-Temecula"
  },
  {
    Name: "Paul Mitchell the School-Toledo"
  },
  {
    Name: "Paul Mitchell the School-Tulsa"
  },
  {
    Name: "Paul Mitchell the School-Twin Falls"
  },
  {
    Name: "Paul Mitchell the School-Tysons Corner"
  },
  {
    Name: "Paul Mitchell the School-Wichita"
  },
  {
    Name: "Paul Mitchell the School-Woodbridge"
  },
  {
    Name: "Paul Quinn College"
  },
  {
    Name: "Paul Smiths College of Arts and Science"
  },
  {
    Name: "Payne Theological Seminary"
  },
  {
    Name: "PC AGE-Metropark"
  },
  {
    Name: "PCI Academy-Ames"
  },
  {
    Name: "PCI Academy-Iowa City"
  },
  {
    Name: "PCI Academy-Plymouth"
  },
  {
    Name: "PCI College"
  },
  {
    Name: "PCI Health Training Center"
  },
  {
    Name: "Pearl River Community College"
  },
  {
    Name: "Pearl River Community College-Forrest County Campus"
  },
  {
    Name: "Pearlands Innovative School of Beauty"
  },
  {
    Name: "Peirce College"
  },
  {
    Name: "Pellissippi State Community College"
  },
  {
    Name: "Peloton College"
  },
  {
    Name: "Peloton College"
  },
  {
    Name: "Peninsula College"
  },
  {
    Name: "Penn Commercial Business/Technical School"
  },
  {
    Name: "Pennco Tech-Blackwood"
  },
  {
    Name: "Pennco Tech-Bristol"
  },
  {
    Name: "Pennsylvania Academy of the Fine Arts"
  },
  {
    Name: "Pennsylvania College of Art and Design"
  },
  {
    Name: "Pennsylvania College of Health Sciences"
  },
  {
    Name: "Pennsylvania College of Technology"
  },
  {
    Name: "Pennsylvania Gunsmith School"
  },
  {
    Name: "Pennsylvania Highlands Community College"
  },
  {
    Name: "Pennsylvania Institute of Technology"
  },
  {
    Name: "Pennsylvania State University-College of Medicine"
  },
  {
    Name: "Pennsylvania State University-Dickinson Law"
  },
  {
    Name: "Pennsylvania State University-Penn State Abington"
  },
  {
    Name: "Pennsylvania State University-Penn State Altoona"
  },
  {
    Name: "Pennsylvania State University-Penn State Beaver"
  },
  {
    Name: "Pennsylvania State University-Penn State Berks"
  },
  {
    Name: "Pennsylvania State University-Penn State Brandywine"
  },
  {
    Name: "Pennsylvania State University-Penn State DuBois"
  },
  {
    Name: "Pennsylvania State University-Penn State Erie-Behrend College"
  },
  {
    Name: "Pennsylvania State University-Penn State Fayette- Eberly"
  },
  {
    Name: "Pennsylvania State University-Penn State Great Valley"
  },
  {
    Name: "Pennsylvania State University-Penn State Greater Allegheny"
  },
  {
    Name: "Pennsylvania State University-Penn State Harrisburg"
  },
  {
    Name: "Pennsylvania State University-Penn State Hazleton"
  },
  {
    Name: "Pennsylvania State University-Penn State Lehigh Valley"
  },
  {
    Name: "Pennsylvania State University-Penn State Mont Alto"
  },
  {
    Name: "Pennsylvania State University-Penn State New Kensington"
  },
  {
    Name: "Pennsylvania State University-Penn State Schuylkill"
  },
  {
    Name: "Pennsylvania State University-Penn State Scranton"
  },
  {
    Name: "Pennsylvania State University-Penn State Shenango"
  },
  {
    Name: "Pennsylvania State University-Penn State Wilkes-Barre"
  },
  {
    Name: "Pennsylvania State University-Penn State York"
  },
  {
    Name: "Pennsylvania State University-World Campus"
  },
  {
    Name: "Penrose Academy"
  },
  {
    Name: "Pensacola School of Massage Therapy & Health Careers"
  },
  {
    Name: "Pensacola State College"
  },
  {
    Name: "Penta County Joint Vocational School"
  },
  {
    Name: "Pentecostal Theological Seminary"
  },
  {
    Name: "Pepperdine University"
  },
  {
    Name: "Perry Technical Institute"
  },
  {
    Name: "Peru State College"
  },
  {
    Name: "Pets Playground Grooming School"
  },
  {
    Name: "Pfeiffer University"
  },
  {
    Name: "Phagans Beauty College"
  },
  {
    Name: "Phagans Central Oregon Beauty College"
  },
  {
    Name: "Phagans Grants Pass College of Beauty"
  },
  {
    Name: "Phagans Medford Beauty School"
  },
  {
    Name: "Phagans School of Beauty"
  },
  {
    Name: "Phagans School of Hair Design"
  },
  {
    Name: "Philadelphia College of Osteopathic Medicine"
  },
  {
    Name: "Philadelphia Technician Training"
  },
  {
    Name: "Philander Smith College"
  },
  {
    Name: "Phillips Community College of the University of Arkansas"
  },
  {
    Name: "Phillips School of Nursing at Mount Sinai Beth Israel"
  },
  {
    Name: "Phillips Theological Seminary"
  },
  {
    Name: "Phipps Academy of Barbering"
  },
  {
    Name: "Phoenix Institute of Herbal Medicine & Acupuncture"
  },
  {
    Name: "Phoenix Seminary"
  },
  {
    Name: "PiBerry Institute"
  },
  {
    Name: "Pickaway Ross Joint Vocational School District"
  },
  {
    Name: "Pickens Technical College"
  },
  {
    Name: "Piedmont Community College"
  },
  {
    Name: "Piedmont Technical College"
  },
  {
    Name: "Piedmont University"
  },
  {
    Name: "Piedmont Virginia Community College"
  },
  {
    Name: "Pierce College District"
  },
  {
    Name: "Pierpont Community and Technical College"
  },
  {
    Name: "Pike County Joint Vocational School District"
  },
  {
    Name: "Pike-Lincoln Technical Center"
  },
  {
    Name: "Pikes Peak State College"
  },
  {
    Name: "Pillar College"
  },
  {
    Name: "Pima Medical Institute-Aurora"
  },
  {
    Name: "Pima Medical Institute-Chula Vista"
  },
  {
    Name: "Pima Medical Institute-Colorado Springs"
  },
  {
    Name: "Pima Medical Institute-Denver"
  },
  {
    Name: "Pima Medical Institute-Dillon"
  },
  {
    Name: "Pima Medical Institute-East Valley"
  },
  {
    Name: "Pima Medical Institute-El Paso"
  },
  {
    Name: "Pima Medical Institute-Houston"
  },
  {
    Name: "Pima Medical Institute-Las Vegas"
  },
  {
    Name: "Pima Medical Institute-Mesa"
  },
  {
    Name: "Pima Medical Institute-Phoenix"
  },
  {
    Name: "Pima Medical Institute-Renton"
  },
  {
    Name: "Pima Medical Institute-San Antonio"
  },
  {
    Name: "Pima Medical Institute-San Marcos"
  },
  {
    Name: "Pima Medical Institute-Seattle"
  },
  {
    Name: "Pine Manor College"
  },
  {
    Name: "Pine Technical & Community College"
  },
  {
    Name: "Pinellas Technical College-Clearwater"
  },
  {
    Name: "Pinellas Technical College-St. Petersburg"
  },
  {
    Name: "Pineville Beauty School"
  },
  {
    Name: "Pinnacle Career Institute"
  },
  {
    Name: "Pinnacle Institute of Cosmetology"
  },
  {
    Name: "Pioneer Career and Technology Center"
  },
  {
    Name: "Pioneer Technology Center"
  },
  {
    Name: "Pipo Academy of Hair Design"
  },
  {
    Name: "PITC Institute"
  },
  {
    Name: "Pitt Community College"
  },
  {
    Name: "Pittsburg State University"
  },
  {
    Name: "Pittsburgh Career Institute"
  },
  {
    Name: "Pittsburgh Institute of Aeronautics"
  },
  {
    Name: "Pittsburgh Institute of Mortuary Science Inc"
  },
  {
    Name: "Pittsburgh Technical College"
  },
  {
    Name: "Pittsburgh Theological Seminary"
  },
  {
    Name: "Pitzer College"
  },
  {
    Name: "Pivot Point Academy"
  },
  {
    Name: "PJ's College of Cosmetology- Brownsburg"
  },
  {
    Name: "PJ's College of Cosmetology- Greenfield"
  },
  {
    Name: "PJ's College of Cosmetology- Indianapolis"
  },
  {
    Name: "PJ's College of Cosmetology- Jeffersonville"
  },
  {
    Name: "PJ's College of Cosmetology- Louisville"
  },
  {
    Name: "PJ's College of Cosmetology- Muncie"
  },
  {
    Name: "PJ's College of Cosmetology- Plainfield"
  },
  {
    Name: "PJ's College of Cosmetology-Bowling Green"
  },
  {
    Name: "PJ's College of Cosmetology-Clarksville"
  },
  {
    Name: "PJ's College of Cosmetology-Glasgow"
  },
  {
    Name: "PJ's College of Cosmetology-Richmond"
  },
  {
    Name: "Platt College-Anaheim"
  },
  {
    Name: "Platt College-Aurora"
  },
  {
    Name: "Platt College-Los Angeles"
  },
  {
    Name: "Platt College-Ontario"
  },
  {
    Name: "Platt College-Riverside"
  },
  {
    Name: "Platt College-San Diego"
  },
  {
    Name: "Plaza College"
  },
  {
    Name: "Plymouth State University"
  },
  {
    Name: "PMCA Pittsburgh Multicultural Cosmetology Academy"
  },
  {
    Name: "Point Loma Nazarene University"
  },
  {
    Name: "Point Park University"
  },
  {
    Name: "Point University"
  },
  {
    Name: "Polaris Career Center"
  },
  {
    Name: "Polk State College"
  },
  {
    Name: "Polytech Adult Education"
  },
  {
    Name: "Polytechnic University of Puerto Rico-Miami"
  },
  {
    Name: "Polytechnic University of Puerto Rico-Orlando"
  },
  {
    Name: "Pomeroy College of Nursing at Crouse Hospital"
  },
  {
    Name: "Pomona College"
  },
  {
    Name: "Pomona Unified School District Adult and Career Education"
  },
  {
    Name: "Ponca City Beauty College"
  },
  {
    Name: "Ponce Health Sciences University"
  },
  {
    Name: "Ponce Health Sciences University-Centro Universitario de San Juan"
  },
  {
    Name: "Ponce Health Sciences University-East"
  },
  {
    Name: "Ponce Health Sciences University-St Louis"
  },
  {
    Name: "Pontifical Catholic University of Puerto Rico-Arecibo"
  },
  {
    Name: "Pontifical Catholic University of Puerto Rico-Mayaguez"
  },
  {
    Name: "Pontifical Catholic University of Puerto Rico-Ponce"
  },
  {
    Name: "Pontifical College Josephinum"
  },
  {
    Name: "Pontifical Faculty of the Immaculate Conception at the Dominican House of Studies"
  },
  {
    Name: "Pontifical John Paul II Institute for Studies on Marriage and Family"
  },
  {
    Name: "Pontotoc Technology Center"
  },
  {
    Name: "Pope St John XXIII National Seminary"
  },
  {
    Name: "Poplar Bluff Technical Career Center"
  },
  {
    Name: "Port Huron Cosmetology College"
  },
  {
    Name: "Portage Lakes Career Center"
  },
  {
    Name: "Porter & Chester Institute"
  },
  {
    Name: "Porter & Chester Institute of Hamden"
  },
  {
    Name: "Porter and Chester Institute - Brockton"
  },
  {
    Name: "Porter and Chester Institute - Chicopee"
  },
  {
    Name: "Porter and Chester Institute - New London"
  },
  {
    Name: "Porter and Chester Institute of Enfield"
  },
  {
    Name: "Porter and Chester Institute of Rocky Hill"
  },
  {
    Name: "Porter and Chester Institute of Waterbury"
  },
  {
    Name: "Porter and Chester Institute of Worcester"
  },
  {
    Name: "Porterville College"
  },
  {
    Name: "Portland Actors Conservatory"
  },
  {
    Name: "Portland Community College"
  },
  {
    Name: "Portland State University"
  },
  {
    Name: "Post University"
  },
  {
    Name: "Potomac State College of West Virginia University"
  },
  {
    Name: "Poway Adult School"
  },
  {
    Name: "PPG Technical College"
  },
  {
    Name: "Prairie State College"
  },
  {
    Name: "Prairie View A & M University"
  },
  {
    Name: "Pratt Community College"
  },
  {
    Name: "Pratt Institute-Main"
  },
  {
    Name: "Pratt Manhattan-A Division of Pratt Institute"
  },
  {
    Name: "Praxis Institute"
  },
  {
    Name: "Precision Manufacturing Institute"
  },
  {
    Name: "Premier Academy of Cosmetology"
  },
  {
    Name: "Premier Barber Institute"
  },
  {
    Name: "Premiere Aesthetics Institute"
  },
  {
    Name: "Premiere Career College"
  },
  {
    Name: "Premiere International College"
  },
  {
    Name: "Presbyterian College"
  },
  {
    Name: "Presbyterian Theological Seminary in America"
  },
  {
    Name: "Presentation College"
  },
  {
    Name: "Presidio Graduate School"
  },
  {
    Name: "Prestige Health & Beauty Sciences Academy"
  },
  {
    Name: "Prince George's Community College"
  },
  {
    Name: "Princess Institute of Beauty"
  },
  {
    Name: "Princeton Theological Seminary"
  },
  {
    Name: "Princeton University"
  },
  {
    Name: "Principia College"
  },
  {
    Name: "Prism Career Institute-Cherry Hill"
  },
  {
    Name: "Prism Career Institute-Philadelphia"
  },
  {
    Name: "Prism Career Institute-West Atlantic City"
  },
  {
    Name: "Pro Beauty Academy"
  },
  {
    Name: "Pro Way Hair School"
  },
  {
    Name: "Professional Academy of Cosmetology"
  },
  {
    Name: "Professional Cosmetology Education Center"
  },
  {
    Name: "Professional Culinary Academy"
  },
  {
    Name: "Professional Golfers Career College"
  },
  {
    Name: "Professional Institute of Beauty"
  },
  {
    Name: "Professional Skills Institute"
  },
  {
    Name: "Professional Technical Institution"
  },
  {
    Name: "Professional University Dr. Carlos J. Borrero Rios"
  },
  {
    Name: "Professional's Choice Hair Design Academy"
  },
  {
    Name: "Profile Institute of Barber-Styling"
  },
  {
    Name: "Protege Academy"
  },
  {
    Name: "Protege Academy"
  },
  {
    Name: "Providence Christian College"
  },
  {
    Name: "Providence College"
  },
  {
    Name: "Provo College"
  },
  {
    Name: "Provo College-Idaho Falls Campus"
  },
  {
    Name: "Pueblo Community College"
  },
  {
    Name: "Puerto Rico Conservatory of Music"
  },
  {
    Name: "Purdue University - Purdue Polytechnic Anderson"
  },
  {
    Name: "Purdue University - Purdue Polytechnic Columbus"
  },
  {
    Name: "Purdue University - Purdue Polytechnic Indianapolis"
  },
  {
    Name: "Purdue University - Purdue Polytechnic Kokomo"
  },
  {
    Name: "Purdue University - Purdue Polytechnic Lafayette"
  },
  {
    Name: "Purdue University - Purdue Polytechnic New Albany"
  },
  {
    Name: "Purdue University - Purdue Polytechnic Richmond"
  },
  {
    Name: "Purdue University - Purdue Polytechnic South Bend"
  },
  {
    Name: "Purdue University - Purdue Polytechnic Vincennes"
  },
  {
    Name: "Purdue University Fort Wayne"
  },
  {
    Name: "Purdue University Global"
  },
  {
    Name: "Purdue University Northwest"
  },
  {
    Name: "Purdue University-Main Campus"
  },
  {
    Name: "Pure Aesthetics Natural Skincare School"
  },
  {
    Name: "Putnam Career and Technical Center"
  },
  {
    Name: "Quality Technical and Beauty College"
  },
  {
    Name: "Queen City College"
  },
  {
    Name: "Queens University of Charlotte"
  },
  {
    Name: "Quest College"
  },
  {
    Name: "Quincy College"
  },
  {
    Name: "Quincy University"
  },
  {
    Name: "Quinebaug Valley Community College"
  },
  {
    Name: "Quinnipiac University"
  },
  {
    Name: "Quinsigamond Community College"
  },
  {
    Name: "Rabbi Jacob Joseph School"
  },
  {
    Name: "Rabbinical Academy Mesivta Rabbi Chaim Berlin"
  },
  {
    Name: "Rabbinical College Beth Shraga"
  },
  {
    Name: "Rabbinical College Bobover Yeshiva Bnei Zion"
  },
  {
    Name: "Rabbinical College of America"
  },
  {
    Name: "Rabbinical College of Long Island"
  },
  {
    Name: "Rabbinical College of Ohr Shimon Yisroel"
  },
  {
    Name: "Rabbinical College Ohr Yisroel"
  },
  {
    Name: "Rabbinical College Telshe"
  },
  {
    Name: "Rabbinical Seminary Mkor Chaim"
  },
  {
    Name: "Rabbinical Seminary of America"
  },
  {
    Name: "Rabbinical Seminary of America-Ma'yan HaTorah"
  },
  {
    Name: "Radford M Locklin Technical College"
  },
  {
    Name: "Radford University"
  },
  {
    Name: "Ralph R Willis Career and Technical Center"
  },
  {
    Name: "Ramapo College of New Jersey"
  },
  {
    Name: "Randall University"
  },
  {
    Name: "Randolph College"
  },
  {
    Name: "Randolph Community College"
  },
  {
    Name: "Randolph Technical Center"
  },
  {
    Name: "Randolph-Macon College"
  },
  {
    Name: "Ranger College"
  },
  {
    Name: "Ranken Technical College"
  },
  {
    Name: "Raphael's School of Beauty Culture Inc-Alliance"
  },
  {
    Name: "Raphael's School of Beauty Culture Inc-Boardman"
  },
  {
    Name: "Raphael's School of Beauty Culture Inc-Brunswick"
  },
  {
    Name: "Raphael's School of Beauty Culture Inc-Niles"
  },
  {
    Name: "Rappahannock Community College"
  },
  {
    Name: "Raritan Valley Community College"
  },
  {
    Name: "Rasmussen University - Orlando"
  },
  {
    Name: "Rasmussen University - Overland Park"
  },
  {
    Name: "Rasmussen University-Aurora"
  },
  {
    Name: "Rasmussen University-Blaine"
  },
  {
    Name: "Rasmussen University-Bloomington"
  },
  {
    Name: "Rasmussen University-Brooklyn Park"
  },
  {
    Name: "Rasmussen University-Central Pasco"
  },
  {
    Name: "Rasmussen University-Eagan"
  },
  {
    Name: "Rasmussen University-Florida"
  },
  {
    Name: "Rasmussen University-Fort Myers"
  },
  {
    Name: "Rasmussen University-Illinois"
  },
  {
    Name: "Rasmussen University-Kansas"
  },
  {
    Name: "Rasmussen University-Lake Elmo/Woodbury"
  },
  {
    Name: "Rasmussen University-Mankato"
  },
  {
    Name: "Rasmussen University-Minnesota"
  },
  {
    Name: "Rasmussen University-Mokena/Tinley Park"
  },
  {
    Name: "Rasmussen University-North Dakota"
  },
  {
    Name: "Rasmussen University-Romeoville/Joliet"
  },
  {
    Name: "Rasmussen University-Tampa/Brandon"
  },
  {
    Name: "Rasmussen University-Wausau"
  },
  {
    Name: "Rasmussen University-Wisconsin"
  },
  {
    Name: "Ravenscroft Beauty College"
  },
  {
    Name: "Ray J's College of Hair"
  },
  {
    Name: "Reading Area Community College"
  },
  {
    Name: "Reading Hospital School of Health Sciences"
  },
  {
    Name: "Reconstructionist Rabbinical College"
  },
  {
    Name: "Red Lake Nation College"
  },
  {
    Name: "Red River Technology Center"
  },
  {
    Name: "Red Rocks Community College"
  },
  {
    Name: "Redlands Community College"
  },
  {
    Name: "Redondo Beach Beauty College"
  },
  {
    Name: "Reed College"
  },
  {
    Name: "Reedley College"
  },
  {
    Name: "Reflections Academy of Beauty"
  },
  {
    Name: "Reformed University"
  },
  {
    Name: "Regan Career Institute"
  },
  {
    Name: "Regent University"
  },
  {
    Name: "Regina Webb Academy"
  },
  {
    Name: "Regional Center for Border Health"
  },
  {
    Name: "Regis College"
  },
  {
    Name: "Regis University"
  },
  {
    Name: "Reinhardt University"
  },
  {
    Name: "Reiss-Davis Graduate School"
  },
  {
    Name: "Relay Graduate School of Education"
  },
  {
    Name: "Relay Graduate School of Education - Atlanta"
  },
  {
    Name: "Relay Graduate School of Education - Baton Rouge"
  },
  {
    Name: "Relay Graduate School of Education - California"
  },
  {
    Name: "Relay Graduate School of Education - Chicago"
  },
  {
    Name: "Relay Graduate School of Education - Connecticut"
  },
  {
    Name: "Relay Graduate School of Education - Dallas-Fort Worth"
  },
  {
    Name: "Relay Graduate School of Education - Delaware"
  },
  {
    Name: "Relay Graduate School of Education - Denver"
  },
  {
    Name: "Relay Graduate School of Education - Houston"
  },
  {
    Name: "Relay Graduate School of Education - Indiana"
  },
  {
    Name: "Relay Graduate School of Education - Memphis"
  },
  {
    Name: "Relay Graduate School of Education - Nashville"
  },
  {
    Name: "Relay Graduate School of Education - New Orleans"
  },
  {
    Name: "Relay Graduate School of Education - Newark"
  },
  {
    Name: "Relay Graduate School of Education - Philadelphia & Camden"
  },
  {
    Name: "Relay Graduate School of Education - San Antonio"
  },
  {
    Name: "Relay Graduate School of Education - Washington D.C"
  },
  {
    Name: "Remington College-Baton Rouge Campus"
  },
  {
    Name: "Remington College-Cleveland Campus"
  },
  {
    Name: "Remington College-Dallas Campus"
  },
  {
    Name: "Remington College-Fort Worth Campus"
  },
  {
    Name: "Remington College-Houston Southeast Campus"
  },
  {
    Name: "Remington College-Knoxville"
  },
  {
    Name: "Remington College-Lafayette Campus"
  },
  {
    Name: "Remington College-Memphis Campus"
  },
  {
    Name: "Remington College-Mobile Campus"
  },
  {
    Name: "Remington College-Nashville Campus"
  },
  {
    Name: "Remington College-North Houston Campus"
  },
  {
    Name: "Remington College-Shreveport Campus"
  },
  {
    Name: "Renaissance Academie"
  },
  {
    Name: "Rend Lake College"
  },
  {
    Name: "Rensselaer at Hartford"
  },
  {
    Name: "Rensselaer Polytechnic Institute"
  },
  {
    Name: "Renton Technical College"
  },
  {
    Name: "Research College of Nursing"
  },
  {
    Name: "Rexburg College of Massage Therapy"
  },
  {
    Name: "Rhode Island College"
  },
  {
    Name: "Rhode Island School of Design"
  },
  {
    Name: "Rhodes College"
  },
  {
    Name: "Ricci's Toni & Guy Hairdressing Academy/TIGI Creative School"
  },
  {
    Name: "Rice University"
  },
  {
    Name: "Richard Bland College"
  },
  {
    Name: "Richland Community College"
  },
  {
    Name: "Richmond Community College"
  },
  {
    Name: "Richmont Graduate University"
  },
  {
    Name: "Richport Technical College"
  },
  {
    Name: "Rider University"
  },
  {
    Name: "Ridge Technical College"
  },
  {
    Name: "Ridgewater College"
  },
  {
    Name: "Riggins Urban Barber College"
  },
  {
    Name: "Ringling College of Art and Design"
  },
  {
    Name: "Rio Grande Valley College"
  },
  {
    Name: "Rio Hondo College"
  },
  {
    Name: "Ripon College"
  },
  {
    Name: "River Parishes Community College"
  },
  {
    Name: "River Valley Community College"
  },
  {
    Name: "River Valley School of Massage"
  },
  {
    Name: "Riverland Community College"
  },
  {
    Name: "Riveroak Technical College"
  },
  {
    Name: "Riverside City College"
  },
  {
    Name: "Riverside College of Health Careers"
  },
  {
    Name: "Riverside County Office of Education-School of Career Education"
  },
  {
    Name: "Rivertown School of Beauty Barber Skin Care and Nails"
  },
  {
    Name: "Rivier University"
  },
  {
    Name: "Rizzieri Aveda School for Beauty and Wellness"
  },
  {
    Name: "Roane State Community College"
  },
  {
    Name: "Roane-Jackson Technical Center"
  },
  {
    Name: "Roanoke College"
  },
  {
    Name: "Roanoke-Chowan Community College"
  },
  {
    Name: "Rob Roy Academy - Woonsocket"
  },
  {
    Name: "Rob Roy Academy-Fall River"
  },
  {
    Name: "Rob Roy Academy-New Bedford"
  },
  {
    Name: "Rob Roy Academy-Taunton"
  },
  {
    Name: "Rob Roy Academy-Worcester"
  },
  {
    Name: "Robert Fiance Beauty Schools"
  },
  {
    Name: "Robert Fiance Beauty Schools-North Plainfield"
  },
  {
    Name: "Robert Fiance Beauty Schools-West New York"
  },
  {
    Name: "Robert Morgan Educational Center and Technical College"
  },
  {
    Name: "Robert Morris University"
  },
  {
    Name: "Roberts Wesleyan University"
  },
  {
    Name: "Robeson Community College"
  },
  {
    Name: "Rochester Community and Technical College"
  },
  {
    Name: "Rochester Institute of Technology"
  },
  {
    Name: "Rochester University"
  },
  {
    Name: "Rock Valley College"
  },
  {
    Name: "Rockford University"
  },
  {
    Name: "Rockhurst University"
  },
  {
    Name: "Rockingham Community College"
  },
  {
    Name: "Rockland Community College"
  },
  {
    Name: "Rockland County BOCES-Practical Nursing Program"
  },
  {
    Name: "Rocky Mountain College"
  },
  {
    Name: "Rocky Mountain College of Art and Design"
  },
  {
    Name: "Rocky Mountain University of Health Professions"
  },
  {
    Name: "Rocky Vista University"
  },
  {
    Name: "Rocky Vista University - Southern Utah"
  },
  {
    Name: "Roger Williams University"
  },
  {
    Name: "Roger Williams University School of Law"
  },
  {
    Name: "Rogers Academy of Hair Design"
  },
  {
    Name: "Rogers State University"
  },
  {
    Name: "Rogue Community College"
  },
  {
    Name: "Rolla Technical Institute/Center"
  },
  {
    Name: "Rollins College"
  },
  {
    Name: "Roosevelt University"
  },
  {
    Name: "Rosalind Franklin University of Medicine and Science"
  },
  {
    Name: "Rose State College"
  },
  {
    Name: "Rose-Hulman Institute of Technology"
  },
  {
    Name: "Rosedale Bible College"
  },
  {
    Name: "Rosedale Technical College"
  },
  {
    Name: "Rosel School of Cosmetology"
  },
  {
    Name: "Roseman University of Health Sciences"
  },
  {
    Name: "Rosemont College"
  },
  {
    Name: "Ross College-Canton"
  },
  {
    Name: "Ross College-Davenport"
  },
  {
    Name: "Ross College-Grand Rapids North"
  },
  {
    Name: "Ross College-Hopkinsville"
  },
  {
    Name: "Ross College-Sylvania"
  },
  {
    Name: "Ross Medical Education Center - Kalamazoo"
  },
  {
    Name: "Ross Medical Education Center-Ann Arbor"
  },
  {
    Name: "Ross Medical Education Center-Battle Creek"
  },
  {
    Name: "Ross Medical Education Center-Bowling Green"
  },
  {
    Name: "Ross Medical Education Center-Brighton"
  },
  {
    Name: "Ross Medical Education Center-Canton"
  },
  {
    Name: "Ross Medical Education Center-Charleston"
  },
  {
    Name: "Ross Medical Education Center-Cincinnati"
  },
  {
    Name: "Ross Medical Education Center-Davison"
  },
  {
    Name: "Ross Medical Education Center-Dayton"
  },
  {
    Name: "Ross Medical Education Center-Elyria"
  },
  {
    Name: "Ross Medical Education Center-Erlanger"
  },
  {
    Name: "Ross Medical Education Center-Evansville"
  },
  {
    Name: "Ross Medical Education Center-Flint"
  },
  {
    Name: "Ross Medical Education Center-Fort Wayne"
  },
  {
    Name: "Ross Medical Education Center-Granger"
  },
  {
    Name: "Ross Medical Education Center-Huntsville"
  },
  {
    Name: "Ross Medical Education Center-Johnson City"
  },
  {
    Name: "Ross Medical Education Center-Kentwood"
  },
  {
    Name: "Ross Medical Education Center-Knoxville"
  },
  {
    Name: "Ross Medical Education Center-Kokomo"
  },
  {
    Name: "Ross Medical Education Center-Lafayette"
  },
  {
    Name: "Ross Medical Education Center-Lansing"
  },
  {
    Name: "Ross Medical Education Center-Midland"
  },
  {
    Name: "Ross Medical Education Center-Morgantown"
  },
  {
    Name: "Ross Medical Education Center-Muncie"
  },
  {
    Name: "Ross Medical Education Center-New Baltimore"
  },
  {
    Name: "Ross Medical Education Center-Niles"
  },
  {
    Name: "Ross Medical Education Center-Ontario"
  },
  {
    Name: "Ross Medical Education Center-Owensboro"
  },
  {
    Name: "Ross Medical Education Center-Port Huron"
  },
  {
    Name: "Ross Medical Education Center-Roosevelt Park"
  },
  {
    Name: "Ross Medical Education Center-Saginaw"
  },
  {
    Name: "Ross Medical Education Center-Taylor"
  },
  {
    Name: "Ross Medical Education Center-Warren"
  },
  {
    Name: "Rosslyn Training Academy of Cosmetology"
  },
  {
    Name: "Rowan College at Burlington County"
  },
  {
    Name: "Rowan College of South Jersey-Cumberland Campus"
  },
  {
    Name: "Rowan College of South Jersey-Gloucester Campus"
  },
  {
    Name: "Rowan University"
  },
  {
    Name: "Rowan-Cabarrus Community College"
  },
  {
    Name: "Roxborough Memorial Hospital School of Nursing"
  },
  {
    Name: "Roxbury Community College"
  },
  {
    Name: "Royal Learning Institute"
  },
  {
    Name: "Royal Learning Institute"
  },
  {
    Name: "Ruben's Five Star Academy"
  },
  {
    Name: "Rudae's School of Beauty Culture-Ft Wayne"
  },
  {
    Name: "Rudy & Kelly Academy A Paul Mitchell Partner School"
  },
  {
    Name: "Rush University"
  },
  {
    Name: "Russell Sage College"
  },
  {
    Name: "Rust College"
  },
  {
    Name: "Rutgers University-Camden"
  },
  {
    Name: "Rutgers University-New Brunswick"
  },
  {
    Name: "Rutgers University-Newark"
  },
  {
    Name: "SABER College"
  },
  {
    Name: "Sacramento Center"
  },
  {
    Name: "Sacramento City College"
  },
  {
    Name: "Sacramento Ultrasound Institute"
  },
  {
    Name: "Sacred Heart Major Seminary"
  },
  {
    Name: "Sacred Heart Seminary and School of Theology"
  },
  {
    Name: "Sacred Heart University"
  },
  {
    Name: "Saddleback College"
  },
  {
    Name: "SAE Expression College"
  },
  {
    Name: "SAE Institute of Technology-Atlanta"
  },
  {
    Name: "SAE Institute of Technology-Chicago"
  },
  {
    Name: "SAE Institute of Technology-Miami"
  },
  {
    Name: "SAE Institute of Technology-Nashville"
  },
  {
    Name: "SAE Institute of Technology-New York"
  },
  {
    Name: "Sage School of Massage & Esthetics"
  },
  {
    Name: "Saginaw Chippewa Tribal College"
  },
  {
    Name: "Saginaw Valley State University"
  },
  {
    Name: "Saint Ambrose University"
  },
  {
    Name: "Saint Anselm College"
  },
  {
    Name: "Saint Anthony College of Nursing"
  },
  {
    Name: "Saint Augustine's University"
  },
  {
    Name: "Saint Charles Borromeo Seminary-Overbrook"
  },
  {
    Name: "Saint Cloud State University"
  },
  {
    Name: "Saint Edward's University"
  },
  {
    Name: "Saint Elizabeth College of Nursing"
  },
  {
    Name: "Saint Elizabeth School of Nursing"
  },
  {
    Name: "Saint Elizabeth University"
  },
  {
    Name: "Saint Francis Medical Center College of Nursing"
  },
  {
    Name: "Saint Francis Medical Center School of Nursing"
  },
  {
    Name: "Saint Francis University"
  },
  {
    Name: "Saint John's Seminary"
  },
  {
    Name: "Saint John's University - Staten Island Campus"
  },
  {
    Name: "Saint Johns River State College"
  },
  {
    Name: "Saint Johns University"
  },
  {
    Name: "Saint Joseph Seminary College"
  },
  {
    Name: "Saint Joseph's College of Maine"
  },
  {
    Name: "Saint Joseph's University"
  },
  {
    Name: "Saint Leo University"
  },
  {
    Name: "Saint Louis Christian College"
  },
  {
    Name: "Saint Louis Community College"
  },
  {
    Name: "Saint Louis University"
  },
  {
    Name: "Saint Martin's University"
  },
  {
    Name: "Saint Mary-of-the-Woods College"
  },
  {
    Name: "Saint Mary's College"
  },
  {
    Name: "Saint Mary's College of California"
  },
  {
    Name: "Saint Mary's University of Minnesota"
  },
  {
    Name: "Saint Meinrad School of Theology"
  },
  {
    Name: "Saint Michael College of Allied Health"
  },
  {
    Name: "Saint Michael's College"
  },
  {
    Name: "Saint Norbert College"
  },
  {
    Name: "Saint Paul College"
  },
  {
    Name: "Saint Paul School of Theology"
  },
  {
    Name: "Saint Peter's University"
  },
  {
    Name: "Saint Vincent College"
  },
  {
    Name: "Saint Vincent de Paul Regional Seminary"
  },
  {
    Name: "Saint Vincent Seminary"
  },
  {
    Name: "Saint Vladimirs Orthodox Theological Seminary"
  },
  {
    Name: "Saint Xavier University"
  },
  {
    Name: "Salem College"
  },
  {
    Name: "Salem College of Hairstyling"
  },
  {
    Name: "Salem Community College"
  },
  {
    Name: "Salem State University"
  },
  {
    Name: "Salem University"
  },
  {
    Name: "Salina Area Technical College"
  },
  {
    Name: "Saline County Career Center"
  },
  {
    Name: "Salisbury University"
  },
  {
    Name: "Salish Kootenai College"
  },
  {
    Name: "Salon & Spa Institute"
  },
  {
    Name: "Salon Boutique Academy"
  },
  {
    Name: "Salon Institute - Columbus Campus"
  },
  {
    Name: "Salon Institute-Toledo Campus"
  },
  {
    Name: "Salon Professional Academy of San Antonio"
  },
  {
    Name: "Salon Professional Academy-Elevate Salon Institute"
  },
  {
    Name: "Salon Success Academy-Corona"
  },
  {
    Name: "Salon Success Academy-Fontana"
  },
  {
    Name: "Salon Success Academy-Redlands"
  },
  {
    Name: "Salon Success Academy-Riverside"
  },
  {
    Name: "Salon Success Academy-Upland"
  },
  {
    Name: "Salon Success Academy-West Covina"
  },
  {
    Name: "Salt Lake Community College"
  },
  {
    Name: "Salus University"
  },
  {
    Name: "Salve Regina University"
  },
  {
    Name: "Sam Houston State University"
  },
  {
    Name: "Samaritan Hospital School of Nursing"
  },
  {
    Name: "Sampson Community College"
  },
  {
    Name: "Samuel Merritt University"
  },
  {
    Name: "San Antonio College"
  },
  {
    Name: "San Bernardino Beauty College"
  },
  {
    Name: "San Bernardino Valley College"
  },
  {
    Name: "San Diego Christian College"
  },
  {
    Name: "San Diego City College"
  },
  {
    Name: "San Diego Global Knowledge University"
  },
  {
    Name: "San Diego Mesa College"
  },
  {
    Name: "San Diego Miramar College"
  },
  {
    Name: "San Diego State University"
  },
  {
    Name: "San Diego State University-Imperial Valley Campus"
  },
  {
    Name: "San Francisco Art Institute"
  },
  {
    Name: "San Francisco Bay University"
  },
  {
    Name: "San Francisco Conservatory of Music"
  },
  {
    Name: "San Francisco Film School"
  },
  {
    Name: "San Francisco Institute of Esthetics & Cosmetology Inc"
  },
  {
    Name: "San Francisco State University"
  },
  {
    Name: "San Ignacio University"
  },
  {
    Name: "San Jacinto College-North Campus"
  },
  {
    Name: "San Jacinto College-South Campus"
  },
  {
    Name: "San Jacinto Community College"
  },
  {
    Name: "San Jacinto Community College District - Generation Park Campus"
  },
  {
    Name: "San Joaquin College of Law"
  },
  {
    Name: "San Joaquin Delta College"
  },
  {
    Name: "San Joaquin General Hospital School of Radiation Technology"
  },
  {
    Name: "San Joaquin Valley College-Atascadero"
  },
  {
    Name: "San Joaquin Valley College-Bakersfield"
  },
  {
    Name: "San Joaquin Valley College-Delano"
  },
  {
    Name: "San Joaquin Valley College-Fresno"
  },
  {
    Name: "San Joaquin Valley College-Hanford Classroom"
  },
  {
    Name: "San Joaquin Valley College-Hesperia"
  },
  {
    Name: "San Joaquin Valley College-Lancaster"
  },
  {
    Name: "San Joaquin Valley College-Madera"
  },
  {
    Name: "San Joaquin Valley College-Modesto"
  },
  {
    Name: "San Joaquin Valley College-Ontario"
  },
  {
    Name: "San Joaquin Valley College-Porterville"
  },
  {
    Name: "San Joaquin Valley College-Rancho Cordova"
  },
  {
    Name: "San Joaquin Valley College-Rancho Mirage"
  },
  {
    Name: "San Joaquin Valley College-Santa Maria"
  },
  {
    Name: "San Joaquin Valley College-Temecula"
  },
  {
    Name: "San Joaquin Valley College-Trades Education Center"
  },
  {
    Name: "San Joaquin Valley College-Visalia"
  },
  {
    Name: "San Jose Campus"
  },
  {
    Name: "San Jose City College"
  },
  {
    Name: "San Jose State University"
  },
  {
    Name: "San Juan Bautista School of Medicine"
  },
  {
    Name: "San Juan College"
  },
  {
    Name: "Sandhills Community College"
  },
  {
    Name: "Sandra Academy of Salon Services"
  },
  {
    Name: "Sandusky Career Center"
  },
  {
    Name: "Sanford Burnham Prebys Medical Discovery Institute"
  },
  {
    Name: "Sanford Medical Center"
  },
  {
    Name: "SANS Technology Institute"
  },
  {
    Name: "Santa Ana Beauty Academy"
  },
  {
    Name: "Santa Ana Beauty College"
  },
  {
    Name: "Santa Ana College"
  },
  {
    Name: "Santa Barbara Business College - Ventura"
  },
  {
    Name: "Santa Barbara Business College-Bakersfield"
  },
  {
    Name: "Santa Barbara City College"
  },
  {
    Name: "Santa Clara University"
  },
  {
    Name: "Santa Fe College"
  },
  {
    Name: "Santa Fe Community College"
  },
  {
    Name: "Santa Monica College"
  },
  {
    Name: "Santa Rosa Junior College"
  },
  {
    Name: "Santiago Canyon College"
  },
  {
    Name: "Sarah Lawrence College"
  },
  {
    Name: "Sarasota School of Massage Therapy"
  },
  {
    Name: "Sauk Valley Community College"
  },
  {
    Name: "Savannah College of Art and Design"
  },
  {
    Name: "Savannah State University"
  },
  {
    Name: "Savannah Technical College"
  },
  {
    Name: "Saybrook University"
  },
  {
    Name: "Schenectady County Community College"
  },
  {
    Name: "Schiller International University"
  },
  {
    Name: "Schilling-Douglas School of Hair Design LLC"
  },
  {
    Name: "School of Automotive Machinists & Technology"
  },
  {
    Name: "School of Missionary Aviation Technology"
  },
  {
    Name: "School of Professional Horticulture New York Botanical Garden"
  },
  {
    Name: "School of the Art Institute of Chicago"
  },
  {
    Name: "School of Visual Arts"
  },
  {
    Name: "Schoolcraft Community College District"
  },
  {
    Name: "Schreiner University"
  },
  {
    Name: "Schuyler Steuben Chemung Tioga Allegany BOCES"
  },
  {
    Name: "Schuylkill Technology Center"
  },
  {
    Name: "Scioto County Career Technical Center"
  },
  {
    Name: "Scripps College"
  },
  {
    Name: "Searcy Beauty College"
  },
  {
    Name: "Seattle Central College"
  },
  {
    Name: "Seattle Film Institute"
  },
  {
    Name: "Seattle Institute of East Asian Medicine"
  },
  {
    Name: "Seattle Pacific University"
  },
  {
    Name: "Seattle University"
  },
  {
    Name: "Sebring Career Schools-Houston"
  },
  {
    Name: "Sebring Career Schools-Huntsville"
  },
  {
    Name: "Seguin Beauty School-New Braunfels"
  },
  {
    Name: "Seguin Beauty School-Seguin"
  },
  {
    Name: "Seminar L'moros Bais Yaakov"
  },
  {
    Name: "Seminario Evangelico de Puerto Rico"
  },
  {
    Name: "Seminary Bnos Chaim"
  },
  {
    Name: "Seminole State College"
  },
  {
    Name: "Seminole State College of Florida"
  },
  {
    Name: "Sentara College of Health Sciences"
  },
  {
    Name: "Sessions College for Professional Design"
  },
  {
    Name: "Seton Hall University"
  },
  {
    Name: "Seton Hill University"
  },
  {
    Name: "Seward County Community College"
  },
  {
    Name: "Sh'or Yoshuv Rabbinical College"
  },
  {
    Name: "Sharon Regional School of Nursing"
  },
  {
    Name: "Sharp Edgez Barber Institute"
  },
  {
    Name: "Sharp Edgez Barber Institute - Buffalo"
  },
  {
    Name: "Sharp's Academy of Hairstyling"
  },
  {
    Name: "Shasta Bible College and Graduate School"
  },
  {
    Name: "Shasta College"
  },
  {
    Name: "Shasta School of Cosmetology"
  },
  {
    Name: "Shaw University"
  },
  {
    Name: "Shawnee Beauty College"
  },
  {
    Name: "Shawnee Community College"
  },
  {
    Name: "Shawnee State University"
  },
  {
    Name: "Shawsheen Valley School of Practical Nursing"
  },
  {
    Name: "Shear Ego International School of Hair Design"
  },
  {
    Name: "Shear Excellence Hair Academy"
  },
  {
    Name: "Shear Finesse Beauty Academy"
  },
  {
    Name: "Shear Perfection Academy of Cosmetology"
  },
  {
    Name: "Shenandoah University"
  },
  {
    Name: "Shepherd University"
  },
  {
    Name: "Shepherds College"
  },
  {
    Name: "Shepherds Theological Seminary"
  },
  {
    Name: "Sheridan Technical College"
  },
  {
    Name: "Sherman College of Chiropractic"
  },
  {
    Name: "Shippensburg University of Pennsylvania"
  },
  {
    Name: "Shore Beauty School"
  },
  {
    Name: "Shoreline Community College"
  },
  {
    Name: "Shoreline Community College - CNC Machinists Program  Georgetown SSC"
  },
  {
    Name: "Shoreline Community College - Dental Hygiene"
  },
  {
    Name: "Shorter College"
  },
  {
    Name: "Shorter University"
  },
  {
    Name: "Siena College"
  },
  {
    Name: "Siena Heights University"
  },
  {
    Name: "Sierra Academy of Style"
  },
  {
    Name: "Sierra College"
  },
  {
    Name: "Sierra College of Beauty"
  },
  {
    Name: "Sierra Nevada University"
  },
  {
    Name: "Signature Healthcare Brockton Hospital School of Nursing"
  },
  {
    Name: "Simmons College of Kentucky"
  },
  {
    Name: "Simmons University"
  },
  {
    Name: "Simpson College"
  },
  {
    Name: "Simpson University"
  },
  {
    Name: "Sinclair Community College"
  },
  {
    Name: "Sinte Gleska University"
  },
  {
    Name: "Sisseton Wahpeton College"
  },
  {
    Name: "SIT Graduate Institute"
  },
  {
    Name: "Sitting Bull College"
  },
  {
    Name: "Skagit Valley College"
  },
  {
    Name: "Skidmore College"
  },
  {
    Name: "Skin Institute"
  },
  {
    Name: "Skin Science Institute"
  },
  {
    Name: "Skinworks School of Advanced Skincare"
  },
  {
    Name: "Skyline College"
  },
  {
    Name: "Slippery Rock University of Pennsylvania"
  },
  {
    Name: "Smith Chason College"
  },
  {
    Name: "Smith College"
  },
  {
    Name: "Snow College"
  },
  {
    Name: "Snow College-Richfield Campus"
  },
  {
    Name: "Sofia University"
  },
  {
    Name: "Soka University of America"
  },
  {
    Name: "Solano Community College"
  },
  {
    Name: "Soma Institute-The National School of Clinical Massage Therapy"
  },
  {
    Name: "Somerset Community College"
  },
  {
    Name: "Somerset County Technology Center"
  },
  {
    Name: "Sonoma State University"
  },
  {
    Name: "Sonoran Desert Institute"
  },
  {
    Name: "Sonoran University of Health Sciences"
  },
  {
    Name: "Sotheby's Institute of Art-NY"
  },
  {
    Name: "South Arkansas Community College"
  },
  {
    Name: "South Baylo University"
  },
  {
    Name: "South Carolina State University"
  },
  {
    Name: "South Central Career Center"
  },
  {
    Name: "South Central College"
  },
  {
    Name: "South Central College-Faribault"
  },
  {
    Name: "South Coast College"
  },
  {
    Name: "South College"
  },
  {
    Name: "South College-Asheville"
  },
  {
    Name: "South College-Atlanta"
  },
  {
    Name: "South College-Nashville"
  },
  {
    Name: "South Dade Technical College-South Dade Skills Center Campus"
  },
  {
    Name: "South Dakota School of Mines and Technology"
  },
  {
    Name: "South Dakota State University"
  },
  {
    Name: "South Eastern Beauty Academy"
  },
  {
    Name: "South Florida Bible College and Theological Seminary"
  },
  {
    Name: "South Florida Institute of Technology"
  },
  {
    Name: "South Florida State College"
  },
  {
    Name: "South Georgia State College"
  },
  {
    Name: "South Georgia Technical College"
  },
  {
    Name: "South Hills Beauty Academy"
  },
  {
    Name: "South Hills School of Business & Technology"
  },
  {
    Name: "South Hills School of Business and Technology-Altoona"
  },
  {
    Name: "South Louisiana Community College"
  },
  {
    Name: "South Piedmont Community College"
  },
  {
    Name: "South Plains College"
  },
  {
    Name: "South Puget Sound Community College"
  },
  {
    Name: "South Seattle College"
  },
  {
    Name: "South Suburban College"
  },
  {
    Name: "South Texas Barber College Inc"
  },
  {
    Name: "South Texas College"
  },
  {
    Name: "South Texas College of Law Houston"
  },
  {
    Name: "South Texas Training Center"
  },
  {
    Name: "South Texas Vocational Technical Institute-Brownsville"
  },
  {
    Name: "South Texas Vocational Technical Institute-Weslaco"
  },
  {
    Name: "South University-Austin"
  },
  {
    Name: "South University-Columbia"
  },
  {
    Name: "South University-High Point"
  },
  {
    Name: "South University-Richmond"
  },
  {
    Name: "South University-Savannah"
  },
  {
    Name: "South University-Savannah Online"
  },
  {
    Name: "South University-Tampa"
  },
  {
    Name: "South University-Virginia Beach"
  },
  {
    Name: "South University-West Palm Beach"
  },
  {
    Name: "Southcentral Kentucky Community and Technical College"
  },
  {
    Name: "Southeast Arkansas College"
  },
  {
    Name: "Southeast Community College Area"
  },
  {
    Name: "Southeast Kentucky Community & Technical College"
  },
  {
    Name: "Southeast Missouri Hospital College of Nursing and Health Sciences"
  },
  {
    Name: "Southeast Missouri State University"
  },
  {
    Name: "Southeast New Mexico College"
  },
  {
    Name: "Southeast Technical College"
  },
  {
    Name: "Southeast Texas Career Institute"
  },
  {
    Name: "Southeastern Baptist College"
  },
  {
    Name: "Southeastern Baptist Theological Seminary"
  },
  {
    Name: "Southeastern College-Charleston"
  },
  {
    Name: "Southeastern College-Charlotte"
  },
  {
    Name: "Southeastern College-Columbia"
  },
  {
    Name: "Southeastern College-Miami Lakes"
  },
  {
    Name: "Southeastern College-West Palm Beach"
  },
  {
    Name: "Southeastern Community College"
  },
  {
    Name: "Southeastern Community College"
  },
  {
    Name: "Southeastern Esthetics Institute"
  },
  {
    Name: "Southeastern Free Will Baptist Bible College"
  },
  {
    Name: "Southeastern Illinois College"
  },
  {
    Name: "Southeastern Louisiana University"
  },
  {
    Name: "Southeastern Louisiana University - Albert Cammon Middle School"
  },
  {
    Name: "Southeastern Louisiana University - Destrahan High School"
  },
  {
    Name: "Southeastern Louisiana University - EBR Parish School System Prof Dev"
  },
  {
    Name: "Southeastern Louisiana University - St Amant High School"
  },
  {
    Name: "Southeastern Oklahoma State University"
  },
  {
    Name: "Southeastern Technical College"
  },
  {
    Name: "Southeastern Technical Institute"
  },
  {
    Name: "Southeastern University"
  },
  {
    Name: "Southern Adventist University"
  },
  {
    Name: "Southern Arkansas University Main Campus"
  },
  {
    Name: "Southern Arkansas University Tech"
  },
  {
    Name: "Southern California Health Institute"
  },
  {
    Name: "Southern California Health Institute (SOCHI) - North Hollywood"
  },
  {
    Name: "Southern California Institute of Architecture"
  },
  {
    Name: "Southern California Institute of Technology"
  },
  {
    Name: "Southern California Seminary"
  },
  {
    Name: "Southern California University of Health Sciences"
  },
  {
    Name: "Southern Careers Institute-Austin"
  },
  {
    Name: "Southern Careers Institute-Brownsville"
  },
  {
    Name: "Southern Careers Institute-Corpus Christi"
  },
  {
    Name: "Southern Careers Institute-Harlingen"
  },
  {
    Name: "Southern Careers Institute-Pharr"
  },
  {
    Name: "Southern Careers Institute-San Antonio"
  },
  {
    Name: "Southern Careers Institute-San Antonio"
  },
  {
    Name: "Southern Careers Institute-Waco"
  },
  {
    Name: "Southern College of Optometry"
  },
  {
    Name: "Southern Connecticut State University"
  },
  {
    Name: "Southern Crescent Technical College"
  },
  {
    Name: "Southern Illinois University-Carbondale"
  },
  {
    Name: "Southern Illinois University-Edwardsville"
  },
  {
    Name: "Southern Maine Community College"
  },
  {
    Name: "Southern Methodist University"
  },
  {
    Name: "Southern Nazarene University"
  },
  {
    Name: "Southern New Hampshire University"
  },
  {
    Name: "Southern Oklahoma Technology Center"
  },
  {
    Name: "Southern Oregon University"
  },
  {
    Name: "Southern Regional Technical College"
  },
  {
    Name: "Southern School of Beauty Inc"
  },
  {
    Name: "Southern State Community College"
  },
  {
    Name: "Southern States University"
  },
  {
    Name: "Southern Technical College"
  },
  {
    Name: "Southern Technical College"
  },
  {
    Name: "Southern Texas Careers Academy"
  },
  {
    Name: "Southern Union State Community College"
  },
  {
    Name: "Southern University and A & M College"
  },
  {
    Name: "Southern University at New Orleans"
  },
  {
    Name: "Southern University at Shreveport"
  },
  {
    Name: "Southern University Law Center"
  },
  {
    Name: "Southern Utah University"
  },
  {
    Name: "Southern Virginia University"
  },
  {
    Name: "Southern Wesleyan University"
  },
  {
    Name: "Southern West Virginia Community and Technical College"
  },
  {
    Name: "Southern Worcester County Regional Vocational School District"
  },
  {
    Name: "Southside College of Health Sciences"
  },
  {
    Name: "Southside Virginia Community College"
  },
  {
    Name: "Southwest Acupuncture College-Boulder"
  },
  {
    Name: "Southwest Acupuncture College-Santa Fe"
  },
  {
    Name: "Southwest Baptist University"
  },
  {
    Name: "Southwest College for the Deaf"
  },
  {
    Name: "Southwest Institute of Healing Arts"
  },
  {
    Name: "Southwest Minnesota State University"
  },
  {
    Name: "Southwest Mississippi Community College"
  },
  {
    Name: "Southwest School of Business and Technical Careers-San Antonio"
  },
  {
    Name: "Southwest Technical College"
  },
  {
    Name: "Southwest Technology Center"
  },
  {
    Name: "Southwest Tennessee Community College"
  },
  {
    Name: "Southwest Texas Junior College"
  },
  {
    Name: "Southwest University at El Paso"
  },
  {
    Name: "Southwest Virginia Community College"
  },
  {
    Name: "Southwest Wisconsin Technical College"
  },
  {
    Name: "Southwestern Adventist University"
  },
  {
    Name: "Southwestern Assemblies of God University"
  },
  {
    Name: "Southwestern Christian College"
  },
  {
    Name: "Southwestern Christian University"
  },
  {
    Name: "Southwestern College"
  },
  {
    Name: "Southwestern College"
  },
  {
    Name: "Southwestern College"
  },
  {
    Name: "Southwestern Community College"
  },
  {
    Name: "Southwestern Community College"
  },
  {
    Name: "Southwestern Illinois College"
  },
  {
    Name: "Southwestern Indian Polytechnic Institute"
  },
  {
    Name: "Southwestern Law School"
  },
  {
    Name: "Southwestern Michigan College"
  },
  {
    Name: "Southwestern Oklahoma State University"
  },
  {
    Name: "Southwestern Oregon Community College"
  },
  {
    Name: "Southwestern University"
  },
  {
    Name: "Sovah School of Health Professions"
  },
  {
    Name: "SOWELA Technical Community College"
  },
  {
    Name: "Spa Tech Institute-Plymouth"
  },
  {
    Name: "Spa Tech Institute-Westboro"
  },
  {
    Name: "Spa Tech Institute-Westbrook"
  },
  {
    Name: "Spalding University"
  },
  {
    Name: "Spartan College of Aeronautics & Technology"
  },
  {
    Name: "Spartan College of Aeronautics and Technology"
  },
  {
    Name: "Spartan College of Aeronautics and Technology"
  },
  {
    Name: "Spartan College of Aeronautics and Technology"
  },
  {
    Name: "Spartanburg Community College"
  },
  {
    Name: "Spartanburg Methodist College"
  },
  {
    Name: "Spelman College"
  },
  {
    Name: "Spertus College"
  },
  {
    Name: "Spokane Community College"
  },
  {
    Name: "Spokane Falls Community College"
  },
  {
    Name: "Spoon River College"
  },
  {
    Name: "Spring Arbor University"
  },
  {
    Name: "Springfield College"
  },
  {
    Name: "Springfield College-Regional Online and Continuing Education"
  },
  {
    Name: "Springfield Technical Community College"
  },
  {
    Name: "Sri Sai Krish Institute"
  },
  {
    Name: "St Bernard's School of Theology and Ministry"
  },
  {
    Name: "St Bonaventure University"
  },
  {
    Name: "St Catherine University"
  },
  {
    Name: "St Charles Community College"
  },
  {
    Name: "St Clair County Community College"
  },
  {
    Name: "St Cloud Technical and Community College"
  },
  {
    Name: "St Francis Medical Center-School of Radiologic Technology"
  },
  {
    Name: "St Joseph School of Nursing"
  },
  {
    Name: "St Lawrence University"
  },
  {
    Name: "St Louis College of Health Careers-Fenton"
  },
  {
    Name: "St Louis College of Health Careers-St Louis"
  },
  {
    Name: "St Luke's College"
  },
  {
    Name: "St Lukes Hospital School of Nursing"
  },
  {
    Name: "St Olaf College"
  },
  {
    Name: "St Paul's School of Nursing-Queens"
  },
  {
    Name: "St Paul's School of Nursing-Staten Island"
  },
  {
    Name: "St Petersburg College"
  },
  {
    Name: "St Philip's College"
  },
  {
    Name: "St. Andrews University"
  },
  {
    Name: "St. Augustine College"
  },
  {
    Name: "St. Francis College"
  },
  {
    Name: "St. John Fisher University"
  },
  {
    Name: "St. John Vianney College Seminary"
  },
  {
    Name: "St. John's College"
  },
  {
    Name: "St. John's College"
  },
  {
    Name: "St. John's College-Department of Nursing"
  },
  {
    Name: "St. John's University-New York"
  },
  {
    Name: "St. Joseph's College of Nursing"
  },
  {
    Name: "St. Joseph's University-New York"
  },
  {
    Name: "St. Louis Med Tech"
  },
  {
    Name: "St. Mary's College of Maryland"
  },
  {
    Name: "St. Mary's University"
  },
  {
    Name: "St. Peter's Hospital College of Nursing"
  },
  {
    Name: "St. Thomas Aquinas College"
  },
  {
    Name: "St. Thomas University"
  },
  {
    Name: "Stacey James Institute"
  },
  {
    Name: "Stage One-The Hair School"
  },
  {
    Name: "Stanbridge University"
  },
  {
    Name: "Standard Healthcare Services-College of Nursing"
  },
  {
    Name: "Stanford University"
  },
  {
    Name: "Stanly Community College"
  },
  {
    Name: "Stark State College"
  },
  {
    Name: "Starr King School for the Ministry"
  },
  {
    Name: "State Career College"
  },
  {
    Name: "State College of Beauty Culture Inc"
  },
  {
    Name: "State College of Florida-Manatee-Sarasota"
  },
  {
    Name: "State Fair Community College"
  },
  {
    Name: "State Technical College of Missouri"
  },
  {
    Name: "State University of New York at New Paltz"
  },
  {
    Name: "State University of New York at Oswego"
  },
  {
    Name: "Staunton School of Cosmetology"
  },
  {
    Name: "Stautzenberger College-Brecksville"
  },
  {
    Name: "Stautzenberger College-Maumee"
  },
  {
    Name: "Stautzenberger College-Rockford Career College"
  },
  {
    Name: "Stellar Career College"
  },
  {
    Name: "Stellar Career College - Chicago IL"
  },
  {
    Name: "Stephen F Austin State University"
  },
  {
    Name: "Stephens College"
  },
  {
    Name: "Sterling College"
  },
  {
    Name: "Sterling College"
  },
  {
    Name: "Stetson University"
  },
  {
    Name: "Steven Papageorge Hair Academy"
  },
  {
    Name: "Stevens Institute of Technology"
  },
  {
    Name: "Stevens-The Institute of Business & Arts"
  },
  {
    Name: "Stevenson University"
  },
  {
    Name: "Stevensons Academy of Hair Design"
  },
  {
    Name: "Stewart School"
  },
  {
    Name: "Stockton University"
  },
  {
    Name: "Stone Academy-East Hartford"
  },
  {
    Name: "Stone Academy-Waterbury"
  },
  {
    Name: "Stone Academy-West Haven"
  },
  {
    Name: "Stone Child College"
  },
  {
    Name: "Stonehill College"
  },
  {
    Name: "Stony Brook University"
  },
  {
    Name: "Strand College of Hair Design"
  },
  {
    Name: "Strand Institute of Beauty & Esthetics"
  },
  {
    Name: "Stratford School for Aviation Maintenance Technicians"
  },
  {
    Name: "Stratford University"
  },
  {
    Name: "Strayer University - Macon Campus"
  },
  {
    Name: "Strayer University - Montgomery Campus"
  },
  {
    Name: "Strayer University - Northwest Houston Campus"
  },
  {
    Name: "Strayer University-Alabama"
  },
  {
    Name: "Strayer University-Alexandria Campus"
  },
  {
    Name: "Strayer University-Allentown Campus"
  },
  {
    Name: "Strayer University-Anne Arundel Campus"
  },
  {
    Name: "Strayer University-Arkansas"
  },
  {
    Name: "Strayer University-Augusta Campus"
  },
  {
    Name: "Strayer University-Baymeadows Campus"
  },
  {
    Name: "Strayer University-Cedar Hill"
  },
  {
    Name: "Strayer University-Center City Campus"
  },
  {
    Name: "Strayer University-Charleston Campus"
  },
  {
    Name: "Strayer University-Chesterfield Campus"
  },
  {
    Name: "Strayer University-Cobb Campus"
  },
  {
    Name: "Strayer University-Columbia Campus"
  },
  {
    Name: "Strayer University-Columbus"
  },
  {
    Name: "Strayer University-Delaware"
  },
  {
    Name: "Strayer University-Delaware County Campus"
  },
  {
    Name: "Strayer University-District of Columbia"
  },
  {
    Name: "Strayer University-Florida"
  },
  {
    Name: "Strayer University-Fredericksburg Campus"
  },
  {
    Name: "Strayer University-Georgia"
  },
  {
    Name: "Strayer University-Global Region"
  },
  {
    Name: "Strayer University-Huntsville Campus"
  },
  {
    Name: "Strayer University-Knoxville Campus"
  },
  {
    Name: "Strayer University-Lithonia Campus"
  },
  {
    Name: "Strayer University-Loudoun Campus"
  },
  {
    Name: "Strayer University-Maryland"
  },
  {
    Name: "Strayer University-Miramar Campus"
  },
  {
    Name: "Strayer University-Mississippi"
  },
  {
    Name: "Strayer University-Morrow Campus"
  },
  {
    Name: "Strayer University-Nashville Campus"
  },
  {
    Name: "Strayer University-New Jersey"
  },
  {
    Name: "Strayer University-Newport News Campus"
  },
  {
    Name: "Strayer University-North Carolina"
  },
  {
    Name: "Strayer University-North Charlotte"
  },
  {
    Name: "Strayer University-North Raleigh Campus"
  },
  {
    Name: "Strayer University-Orlando East Campus"
  },
  {
    Name: "Strayer University-Owings Mills Campus"
  },
  {
    Name: "Strayer University-Pennsylvania"
  },
  {
    Name: "Strayer University-Rockville Campus"
  },
  {
    Name: "Strayer University-San Antonio"
  },
  {
    Name: "Strayer University-Sand Lake Campus"
  },
  {
    Name: "Strayer University-Savannah Campus"
  },
  {
    Name: "Strayer University-Shelby Oaks Campus"
  },
  {
    Name: "Strayer University-South Carolina"
  },
  {
    Name: "Strayer University-South Charlotte"
  },
  {
    Name: "Strayer University-South Raleigh Campus"
  },
  {
    Name: "Strayer University-Stafford"
  },
  {
    Name: "Strayer University-Tennessee"
  },
  {
    Name: "Strayer University-Texas"
  },
  {
    Name: "Strayer University-Virginia"
  },
  {
    Name: "Strayer University-Virginia Beach Campus"
  },
  {
    Name: "Strayer University-West Virginia"
  },
  {
    Name: "Strayer University-White Marsh Campus"
  },
  {
    Name: "Strayer University-Woodbridge Campus"
  },
  {
    Name: "Studio Academy of Beauty"
  },
  {
    Name: "Studio Beauty School"
  },
  {
    Name: "Studio Incamminati"
  },
  {
    Name: "Studio Jewelers"
  },
  {
    Name: "Stylemaster College of Hair Design"
  },
  {
    Name: "Suffolk County Community College"
  },
  {
    Name: "Suffolk University"
  },
  {
    Name: "Sul Ross State University"
  },
  {
    Name: "Sullivan County Community College"
  },
  {
    Name: "Sullivan University"
  },
  {
    Name: "SUM Bible College and Theological Seminary"
  },
  {
    Name: "Summit Academy Opportunities Industrialization Center"
  },
  {
    Name: "Summit Christian College"
  },
  {
    Name: "Summit College"
  },
  {
    Name: "Summit Salon Academy"
  },
  {
    Name: "Summit Salon Academy"
  },
  {
    Name: "Summit Salon Academy"
  },
  {
    Name: "Summit Salon Academy Kansas City"
  },
  {
    Name: "Summit Salon Academy-Gainesville"
  },
  {
    Name: "Summit Salon Academy-Kokomo"
  },
  {
    Name: "Summit Salon Academy-Lexington"
  },
  {
    Name: "Summit Salon Academy-Perrysburg"
  },
  {
    Name: "Summit Salon Academy-Portland"
  },
  {
    Name: "Sumner College"
  },
  {
    Name: "Suncoast Technical College"
  },
  {
    Name: "Sunstate Academy"
  },
  {
    Name: "SUNY Adirondack"
  },
  {
    Name: "SUNY at Albany"
  },
  {
    Name: "SUNY at Fredonia"
  },
  {
    Name: "SUNY at Purchase College"
  },
  {
    Name: "SUNY Brockport"
  },
  {
    Name: "SUNY Broome Community College"
  },
  {
    Name: "SUNY Buffalo State University"
  },
  {
    Name: "SUNY College at Geneseo"
  },
  {
    Name: "SUNY College at Old Westbury"
  },
  {
    Name: "SUNY College at Plattsburgh"
  },
  {
    Name: "SUNY College at Potsdam"
  },
  {
    Name: "SUNY College of Agriculture and Technology at Cobleskill"
  },
  {
    Name: "SUNY College of Environmental Science and Forestry"
  },
  {
    Name: "SUNY College of Optometry"
  },
  {
    Name: "SUNY College of Technology at Alfred"
  },
  {
    Name: "SUNY College of Technology at Canton"
  },
  {
    Name: "SUNY College of Technology at Delhi"
  },
  {
    Name: "SUNY Corning Community College"
  },
  {
    Name: "SUNY Cortland"
  },
  {
    Name: "SUNY Downstate Health Sciences University"
  },
  {
    Name: "SUNY Empire State College"
  },
  {
    Name: "SUNY Maritime College"
  },
  {
    Name: "SUNY Morrisville"
  },
  {
    Name: "SUNY Oneonta"
  },
  {
    Name: "SUNY Polytechnic Institute"
  },
  {
    Name: "SUNY Westchester Community College"
  },
  {
    Name: "Surry Community College"
  },
  {
    Name: "Susquehanna County Career and Technology Center"
  },
  {
    Name: "Susquehanna University"
  },
  {
    Name: "Sussex County Community College"
  },
  {
    Name: "Sutter County Career Training Center"
  },
  {
    Name: "Swarthmore College"
  },
  {
    Name: "Swedish Institute a College of Health Sciences"
  },
  {
    Name: "Sweet Briar College"
  },
  {
    Name: "Sylvain Melloul International Hair Academy"
  },
  {
    Name: "Syracuse University"
  },
  {
    Name: "Tabor College"
  },
  {
    Name: "Tacoma Community College"
  },
  {
    Name: "Taft College"
  },
  {
    Name: "Taft University System"
  },
  {
    Name: "Tallahassee Community College"
  },
  {
    Name: "Talmudic College of Florida"
  },
  {
    Name: "Talmudical Academy-New Jersey"
  },
  {
    Name: "Talmudical Institute of Upstate New York"
  },
  {
    Name: "Talmudical Seminary of Bobov"
  },
  {
    Name: "Talmudical Seminary Oholei Torah"
  },
  {
    Name: "Talmudical Yeshiva of Philadelphia"
  },
  {
    Name: "Tarleton State University"
  },
  {
    Name: "Tarrant County College District"
  },
  {
    Name: "Taylor Andrews Academy of Hair Design-Hair Lab Detroit Barber School"
  },
  {
    Name: "Taylor Andrews Academy of Hair Design-Provo"
  },
  {
    Name: "Taylor Andrews Academy of Hair Design-West Jordan"
  },
  {
    Name: "Taylor Andrews Academy-St George"
  },
  {
    Name: "Taylor Business Institute"
  },
  {
    Name: "Taylor College"
  },
  {
    Name: "Taylor Institute of Cosmetology II"
  },
  {
    Name: "Taylor University"
  },
  {
    Name: "Taylortown School of Beauty Inc"
  },
  {
    Name: "Teachers College at Columbia University"
  },
  {
    Name: "Teachers College of San Joaquin"
  },
  {
    Name: "Technical College of the Lowcountry"
  },
  {
    Name: "Technical College of the Rockies"
  },
  {
    Name: "Technical Learning Centers Inc"
  },
  {
    Name: "Telshe Yeshiva-Chicago"
  },
  {
    Name: "Temple College"
  },
  {
    Name: "Temple University"
  },
  {
    Name: "Tenaj Salon Institute"
  },
  {
    Name: "Tennessee College of Applied Technology Nashville"
  },
  {
    Name: "Tennessee College of Applied Technology Northwest"
  },
  {
    Name: "Tennessee College of Applied Technology-Athens"
  },
  {
    Name: "Tennessee College of Applied Technology-Covington"
  },
  {
    Name: "Tennessee College of Applied Technology-Crossville"
  },
  {
    Name: "Tennessee College of Applied Technology-Crump"
  },
  {
    Name: "Tennessee College of Applied Technology-Dickson"
  },
  {
    Name: "Tennessee College of Applied Technology-Elizabethton"
  },
  {
    Name: "Tennessee College of Applied Technology-Harriman"
  },
  {
    Name: "Tennessee College of Applied Technology-Hartsville"
  },
  {
    Name: "Tennessee College of Applied Technology-Hohenwald"
  },
  {
    Name: "Tennessee College of Applied Technology-Jacksboro"
  },
  {
    Name: "Tennessee College of Applied Technology-Jackson"
  },
  {
    Name: "Tennessee College of Applied Technology-Knoxville"
  },
  {
    Name: "Tennessee College of Applied Technology-Livingston"
  },
  {
    Name: "Tennessee College of Applied Technology-McKenzie"
  },
  {
    Name: "Tennessee College of Applied Technology-McMinnville"
  },
  {
    Name: "Tennessee College of Applied Technology-Memphis"
  },
  {
    Name: "Tennessee College of Applied Technology-Morristown"
  },
  {
    Name: "Tennessee College of Applied Technology-Murfreesboro"
  },
  {
    Name: "Tennessee College of Applied Technology-Oneida-Huntsville"
  },
  {
    Name: "Tennessee College of Applied Technology-Paris"
  },
  {
    Name: "Tennessee College of Applied Technology-Pulaski"
  },
  {
    Name: "Tennessee College of Applied Technology-Ripley"
  },
  {
    Name: "Tennessee College of Applied Technology-Shelbyville"
  },
  {
    Name: "Tennessee School of Beauty of Knoxville Inc"
  },
  {
    Name: "Tennessee State University"
  },
  {
    Name: "Tennessee Technological University"
  },
  {
    Name: "Tennessee Wesleyan University"
  },
  {
    Name: "Terra State Community College"
  },
  {
    Name: "Texarkana College"
  },
  {
    Name: "Texas A & M International University"
  },
  {
    Name: "Texas A & M University Health Science Center"
  },
  {
    Name: "Texas A & M University-College Station"
  },
  {
    Name: "Texas A & M University-Commerce"
  },
  {
    Name: "Texas A & M University-Corpus Christi"
  },
  {
    Name: "Texas A & M University-Kingsville"
  },
  {
    Name: "Texas A&M University-Central Texas"
  },
  {
    Name: "Texas A&M University-San Antonio"
  },
  {
    Name: "Texas A&M University-Texarkana"
  },
  {
    Name: "Texas Barber College"
  },
  {
    Name: "Texas Barber College - Branch Campus #1"
  },
  {
    Name: "Texas Barber College - Branch Campus #2"
  },
  {
    Name: "Texas Barber College - Branch Campus #5"
  },
  {
    Name: "Texas Beauty College"
  },
  {
    Name: "Texas Chiropractic College Foundation Inc"
  },
  {
    Name: "Texas Christian University"
  },
  {
    Name: "Texas College"
  },
  {
    Name: "Texas College of Cosmetology-Abilene"
  },
  {
    Name: "Texas College of Cosmetology-Lubbock"
  },
  {
    Name: "Texas College of Cosmetology-San Angelo"
  },
  {
    Name: "Texas County Technical College"
  },
  {
    Name: "Texas Health and Science University"
  },
  {
    Name: "Texas Health School"
  },
  {
    Name: "Texas Healthtech Institute"
  },
  {
    Name: "Texas Lutheran University"
  },
  {
    Name: "Texas Southern University"
  },
  {
    Name: "Texas Southmost College"
  },
  {
    Name: "Texas State Technical College"
  },
  {
    Name: "Texas State University"
  },
  {
    Name: "Texas Tech University"
  },
  {
    Name: "Texas Tech University Health Sciences Center"
  },
  {
    Name: "Texas Tech University Health Sciences Center-El Paso"
  },
  {
    Name: "Texas Wesleyan University"
  },
  {
    Name: "Texas Woman's University"
  },
  {
    Name: "Textures Institute of Cosmetology"
  },
  {
    Name: "Thaddeus Stevens College of Technology"
  },
  {
    Name: "Thanh Le College School of Cosmetology"
  },
  {
    Name: "The  Beauty Institute"
  },
  {
    Name: "The  Salon Professional Academy of Holland"
  },
  {
    Name: "The Academy of Hair Design LLC"
  },
  {
    Name: "The Academy of Hair Design Six"
  },
  {
    Name: "The Ailey School"
  },
  {
    Name: "The Art Institute of Atlanta"
  },
  {
    Name: "The Art Institute of Austin"
  },
  {
    Name: "The Art Institute of Houston"
  },
  {
    Name: "The Art Institute of San Antonio"
  },
  {
    Name: "The Art Institute of Virginia Beach"
  },
  {
    Name: "The Baptist College of Florida"
  },
  {
    Name: "The Barber School"
  },
  {
    Name: "The Beauty Institute"
  },
  {
    Name: "The Beauty Institute"
  },
  {
    Name: "The Beauty Institute"
  },
  {
    Name: "The Beauty Institute-Ambler"
  },
  {
    Name: "The Catholic University of America"
  },
  {
    Name: "The Chicago School of Professional Psychology at Anaheim"
  },
  {
    Name: "The Chicago School of Professional Psychology at Chicago"
  },
  {
    Name: "The Chicago School of Professional Psychology at Los Angeles"
  },
  {
    Name: "The Chicago School of Professional Psychology at San Diego"
  },
  {
    Name: "The Chicago School of Professional Psychology at Washington DC"
  },
  {
    Name: "The Chicago School of Professional Psychology at Xavier University of Louisiana"
  },
  {
    Name: "The Christ College of Nursing and Health Sciences"
  },
  {
    Name: "The Chrysm Institute of Esthetics"
  },
  {
    Name: "The College of Health Care Professions-Austin"
  },
  {
    Name: "The College of Health Care Professions-Dallas"
  },
  {
    Name: "The College of Health Care Professions-Fort Worth"
  },
  {
    Name: "The College of Health Care Professions-McAllen Campus"
  },
  {
    Name: "The College of Health Care Professions-Northwest"
  },
  {
    Name: "The College of Health Care Professions-San Antonio"
  },
  {
    Name: "The College of Health Care Professions-South San Antonio"
  },
  {
    Name: "The College of Health Care Professions-Southwest Houston"
  },
  {
    Name: "The College of Idaho"
  },
  {
    Name: "The College of New Jersey"
  },
  {
    Name: "The College of Saint Rose"
  },
  {
    Name: "The College of Saint Scholastica"
  },
  {
    Name: "The College of the Florida Keys"
  },
  {
    Name: "The College of Westchester"
  },
  {
    Name: "The College of Wooster"
  },
  {
    Name: "The Cooper Union for the Advancement of Science and Art"
  },
  {
    Name: "The Creative Circus"
  },
  {
    Name: "The Culinary School of Fort Worth"
  },
  {
    Name: "The Esthetic Institute"
  },
  {
    Name: "The Evergreen State College"
  },
  {
    Name: "The Fab School"
  },
  {
    Name: "The General Theological Seminary"
  },
  {
    Name: "The Hair Academy"
  },
  {
    Name: "The Hair Academy LLC"
  },
  {
    Name: "The Institute of Beauty and Wellness"
  },
  {
    Name: "The Juilliard School"
  },
  {
    Name: "The King's College"
  },
  {
    Name: "The King's University"
  },
  {
    Name: "The Landing School"
  },
  {
    Name: "The Master's University and Seminary"
  },
  {
    Name: "The Michigan Barber School"
  },
  {
    Name: "The Modern College of Design"
  },
  {
    Name: "The New England Conservatory of Music"
  },
  {
    Name: "The New School"
  },
  {
    Name: "The New School Center for Media"
  },
  {
    Name: "The North Coast College"
  },
  {
    Name: "The Pennsylvania State University"
  },
  {
    Name: "The Professional Cosmetology Academy"
  },
  {
    Name: "The Professional Hair Design Academy"
  },
  {
    Name: "The Rapha School"
  },
  {
    Name: "The Recording Conservatory of Austin"
  },
  {
    Name: "The Rockefeller University"
  },
  {
    Name: "The Salon Professional Academy"
  },
  {
    Name: "The Salon Professional Academy"
  },
  {
    Name: "The Salon Professional Academy"
  },
  {
    Name: "The Salon Professional Academy-Altoona"
  },
  {
    Name: "The Salon Professional Academy-Appleton"
  },
  {
    Name: "The Salon Professional Academy-Battle Creek"
  },
  {
    Name: "The Salon Professional Academy-Cedar Falls"
  },
  {
    Name: "The Salon Professional Academy-Colorado Springs"
  },
  {
    Name: "The Salon Professional Academy-Delray Beach"
  },
  {
    Name: "The Salon Professional Academy-Evansville"
  },
  {
    Name: "The Salon Professional Academy-Fargo"
  },
  {
    Name: "The Salon Professional Academy-Ft Myers"
  },
  {
    Name: "The Salon Professional Academy-Georgetown"
  },
  {
    Name: "The Salon Professional Academy-Grand Junction"
  },
  {
    Name: "The Salon Professional Academy-Huntsville"
  },
  {
    Name: "The Salon Professional Academy-Kenosha"
  },
  {
    Name: "The Salon Professional Academy-Lewisville"
  },
  {
    Name: "The Salon Professional Academy-Melbourne"
  },
  {
    Name: "The Salon Professional Academy-Nampa"
  },
  {
    Name: "The Salon Professional Academy-Nashville"
  },
  {
    Name: "The Salon Professional Academy-Onalaska"
  },
  {
    Name: "The Salon Professional Academy-San Jose"
  },
  {
    Name: "The Salon Professional Academy-St Charles"
  },
  {
    Name: "The Salon Professional Academy-Tonawanda"
  },
  {
    Name: "The Salon Professional Academy-Washington DC"
  },
  {
    Name: "The Santa Barbara and Ventura Colleges of Law at Santa Barbara"
  },
  {
    Name: "The Santa Barbara and Ventura Colleges of Law at Ventura"
  },
  {
    Name: "The Seattle School of Theology & Psychology"
  },
  {
    Name: "The Southern Baptist Theological Seminary"
  },
  {
    Name: "The Southwestern Baptist Theological Seminary"
  },
  {
    Name: "The Spa School"
  },
  {
    Name: "The Temple Annapolis-A Paul Mitchell Partner School"
  },
  {
    Name: "The Temple-A Paul Mitchell Partner School"
  },
  {
    Name: "The University of Aesthetics & Cosmetology"
  },
  {
    Name: "The University of Findlay"
  },
  {
    Name: "The University of Montana"
  },
  {
    Name: "The University of Montana-Western"
  },
  {
    Name: "The University of Tampa"
  },
  {
    Name: "The University of Tennessee Health Science Center"
  },
  {
    Name: "The University of Tennessee Southern"
  },
  {
    Name: "The University of Tennessee-Chattanooga"
  },
  {
    Name: "The University of Tennessee-Knoxville"
  },
  {
    Name: "The University of Tennessee-Martin"
  },
  {
    Name: "The University of Texas at Arlington"
  },
  {
    Name: "The University of Texas at Austin"
  },
  {
    Name: "The University of Texas at Dallas"
  },
  {
    Name: "The University of Texas at El Paso"
  },
  {
    Name: "The University of Texas at San Antonio"
  },
  {
    Name: "The University of Texas at Tyler"
  },
  {
    Name: "The University of Texas Health Science Center at Houston"
  },
  {
    Name: "The University of Texas Health Science Center at San Antonio"
  },
  {
    Name: "The University of Texas MD Anderson Cancer Center"
  },
  {
    Name: "The University of Texas Medical Branch at Galveston"
  },
  {
    Name: "The University of Texas Permian Basin"
  },
  {
    Name: "The University of Texas Rio Grande Valley"
  },
  {
    Name: "The University of the Arts"
  },
  {
    Name: "The University of the South"
  },
  {
    Name: "The University of West Florida"
  },
  {
    Name: "The Vocational Nursing Institute Inc"
  },
  {
    Name: "The Wright Institute"
  },
  {
    Name: "Theatre of Arts"
  },
  {
    Name: "Theological Seminary of the Reformed Episcopal Church"
  },
  {
    Name: "Thiel College"
  },
  {
    Name: "Thomas Aquinas College"
  },
  {
    Name: "Thomas Aquinas College - New England"
  },
  {
    Name: "Thomas College"
  },
  {
    Name: "Thomas Edison State University"
  },
  {
    Name: "Thomas Jefferson School of Law"
  },
  {
    Name: "Thomas Jefferson University"
  },
  {
    Name: "Thomas More College of Liberal Arts"
  },
  {
    Name: "Thomas More University"
  },
  {
    Name: "Thomas University"
  },
  {
    Name: "Three Rivers College"
  },
  {
    Name: "Three Rivers Community College"
  },
  {
    Name: "Three Rivers Community College - Corrigan-Radgowski Correctional Center"
  },
  {
    Name: "Three Rivers Community College - York Correctional Institution"
  },
  {
    Name: "Tidewater Community College"
  },
  {
    Name: "Tidewater Tech-Trades"
  },
  {
    Name: "Tiffin Academy of Hair Design"
  },
  {
    Name: "Tiffin University"
  },
  {
    Name: "TIGI Hairdressing Academy Guilford"
  },
  {
    Name: "Tigi Hairdressing Academy-Colorado Springs"
  },
  {
    Name: "Tillamook Bay Community College"
  },
  {
    Name: "Tint School of Makeup & Cosmetology"
  },
  {
    Name: "Tint School of Makeup and Cosmetology-Dallas"
  },
  {
    Name: "Toccoa Falls College"
  },
  {
    Name: "Tohono O'odham Community College"
  },
  {
    Name: "Toledo Academy of Beauty Culture-East"
  },
  {
    Name: "Toledo Public Schools Adult and Continuing Education"
  },
  {
    Name: "Tom P. Haney Technical College"
  },
  {
    Name: "Tomorrow's Image Barber And Beauty Academy of Virginia"
  },
  {
    Name: "Tompkins Cortland Community College"
  },
  {
    Name: "Toni & Guy Hairdressing Academy-Atlanta"
  },
  {
    Name: "Toni & Guy Hairdressing Academy-Cranston"
  },
  {
    Name: "Toni & Guy Hairdressing Academy-Plano"
  },
  {
    Name: "Toni & Guy Hairdressing Academy-Shoreline"
  },
  {
    Name: "Toni & Guy Hairdressing Academy-Worcester"
  },
  {
    Name: "TONI&GUY Hairdressing Academy - Costa Mesa"
  },
  {
    Name: "Tonsorial Arts Barber College"
  },
  {
    Name: "Tooele Technical College"
  },
  {
    Name: "Top Nails & Hair Beauty School"
  },
  {
    Name: "Top of the Line Barber College"
  },
  {
    Name: "Torah Temimah Talmudical Seminary"
  },
  {
    Name: "Total Beauty Institute"
  },
  {
    Name: "Total Image Beauty Academy"
  },
  {
    Name: "Total Transformation Institute of Cosmetology"
  },
  {
    Name: "Totally Cosmo School of Modern Cosmetology"
  },
  {
    Name: "Tougaloo College"
  },
  {
    Name: "Touro University"
  },
  {
    Name: "Touro University California"
  },
  {
    Name: "Touro University Nevada"
  },
  {
    Name: "Touro University Worldwide"
  },
  {
    Name: "Towson University"
  },
  {
    Name: "Toyota Technological Institute at Chicago"
  },
  {
    Name: "Transitions Career Institute School of Nursing"
  },
  {
    Name: "Transylvania University"
  },
  {
    Name: "Traviss Technical College"
  },
  {
    Name: "Traxlers School of Hair"
  },
  {
    Name: "Treasure Coast Technical College"
  },
  {
    Name: "Treasure Valley Community College"
  },
  {
    Name: "Trend Barber College"
  },
  {
    Name: "Trend Barber College"
  },
  {
    Name: "Trend Setters School"
  },
  {
    Name: "Trendsetters School of Beauty & Barbering"
  },
  {
    Name: "Trenz Beauty Academy"
  },
  {
    Name: "Trevecca Nazarene University"
  },
  {
    Name: "Tri County Regional Vocational Technical High School"
  },
  {
    Name: "Tri-Community Adult Education"
  },
  {
    Name: "Tri-County Adult Career Center"
  },
  {
    Name: "Tri-County Beauty Academy"
  },
  {
    Name: "Tri-County Community College"
  },
  {
    Name: "Tri-County Technical College"
  },
  {
    Name: "Tri-Rivers Career Center"
  },
  {
    Name: "Tri-State Bible College"
  },
  {
    Name: "Tri-State Cosmetology Institute"
  },
  {
    Name: "Triangle Tech Inc-Bethlehem"
  },
  {
    Name: "Triangle Tech Inc-Dubois"
  },
  {
    Name: "Triangle Tech Inc-Greensburg"
  },
  {
    Name: "Triangle Tech Inc-Pittsburgh"
  },
  {
    Name: "Triangle Tech Inc-Sunbury"
  },
  {
    Name: "Triangle Tech-Chambersburg"
  },
  {
    Name: "Tricoci University of Beauty Culture"
  },
  {
    Name: "Tricoci University of Beauty Culture LLC-Bloomington"
  },
  {
    Name: "Tricoci University of Beauty Culture-Bridgeview"
  },
  {
    Name: "Tricoci University of Beauty Culture-Chicago NE"
  },
  {
    Name: "Tricoci University of Beauty Culture-Chicago NW"
  },
  {
    Name: "Tricoci University of Beauty Culture-Elgin"
  },
  {
    Name: "Tricoci University of Beauty Culture-Glendale Heights"
  },
  {
    Name: "Tricoci University of Beauty Culture-Highland"
  },
  {
    Name: "Tricoci University of Beauty Culture-Indianapolis"
  },
  {
    Name: "Tricoci University of Beauty Culture-Janesville"
  },
  {
    Name: "Tricoci University of Beauty Culture-Lafayette"
  },
  {
    Name: "Tricoci University of Beauty Culture-Libertyville"
  },
  {
    Name: "Tricoci University of Beauty Culture-Normal"
  },
  {
    Name: "Tricoci University of Beauty Culture-Peoria"
  },
  {
    Name: "Tricoci University of Beauty Culture-Rockford"
  },
  {
    Name: "Trident Technical College"
  },
  {
    Name: "Trine University"
  },
  {
    Name: "Trine University-Regional/Non-Traditional Campuses"
  },
  {
    Name: "Trinidad State College"
  },
  {
    Name: "Trinity Baptist College"
  },
  {
    Name: "Trinity Bible College and Graduate School"
  },
  {
    Name: "Trinity Christian College"
  },
  {
    Name: "Trinity College"
  },
  {
    Name: "Trinity College of Florida"
  },
  {
    Name: "Trinity College of Nursing & Health Sciences"
  },
  {
    Name: "Trinity Episcopal School for Ministry"
  },
  {
    Name: "Trinity Health System School of Nursing"
  },
  {
    Name: "Trinity International University-Florida"
  },
  {
    Name: "Trinity International University-Illinois"
  },
  {
    Name: "Trinity Law School"
  },
  {
    Name: "Trinity University"
  },
  {
    Name: "Trinity Valley Community College"
  },
  {
    Name: "Trinity Washington University"
  },
  {
    Name: "Triton College"
  },
  {
    Name: "Triton College - Intl Union of Operating Engr Local 399 Trning Fac."
  },
  {
    Name: "Trocaire College"
  },
  {
    Name: "Troy University-Dothan Campus"
  },
  {
    Name: "Troy University-Montgomery Campus"
  },
  {
    Name: "Troy University-Online"
  },
  {
    Name: "Troy University-Phenix City Campus"
  },
  {
    Name: "Troy University-Support Sites"
  },
  {
    Name: "Truckee Meadows Community College"
  },
  {
    Name: "Truett McConnell University"
  },
  {
    Name: "Truman State University"
  },
  {
    Name: "Trumbull Career & Technical Center"
  },
  {
    Name: "Tuana European Beauty Academy"
  },
  {
    Name: "Tucson College of Beauty"
  },
  {
    Name: "Tufts University"
  },
  {
    Name: "Tulane University of Louisiana"
  },
  {
    Name: "Tulsa Community College"
  },
  {
    Name: "Tulsa Technology Center"
  },
  {
    Name: "Tulsa Welding School-Houston"
  },
  {
    Name: "Tulsa Welding School-Jacksonville"
  },
  {
    Name: "Tulsa Welding School-Jacksonville"
  },
  {
    Name: "Tulsa Welding School-Tulsa"
  },
  {
    Name: "Tunxis Community College"
  },
  {
    Name: "Turing School of Software & Design"
  },
  {
    Name: "Turning Point Beauty College"
  },
  {
    Name: "Turtle Mountain Community College"
  },
  {
    Name: "Tusculum University"
  },
  {
    Name: "Twin City Beauty College"
  },
  {
    Name: "Tyler Junior College"
  },
  {
    Name: "U.S. Truck Driver Training School"
  },
  {
    Name: "UCAS University of Cosmetology Arts & Sciences"
  },
  {
    Name: "UCAS University of Cosmetology Arts & Sciences-Harlingen"
  },
  {
    Name: "UCAS University of Cosmetology Arts & Sciences-La Joya"
  },
  {
    Name: "UCAS University of Cosmetology Arts & Sciences-McAllen"
  },
  {
    Name: "UCAS University of Cosmetology Arts & Sciences-San Antonio 410"
  },
  {
    Name: "UEI College-Bakersfield"
  },
  {
    Name: "UEI College-Chula Vista"
  },
  {
    Name: "UEI College-Fresno"
  },
  {
    Name: "UEI College-Garden Grove"
  },
  {
    Name: "UEI College-Gardena"
  },
  {
    Name: "UEI College-Huntington Park"
  },
  {
    Name: "UEI College-Mesa"
  },
  {
    Name: "UEI College-Oceanside"
  },
  {
    Name: "UEI College-Ontario"
  },
  {
    Name: "UEI College-Phoenix"
  },
  {
    Name: "UEI College-Reseda"
  },
  {
    Name: "UEI College-Riverside"
  },
  {
    Name: "UEI College-Sacramento"
  },
  {
    Name: "UEI College-Stockton"
  },
  {
    Name: "UEI College-West Covina"
  },
  {
    Name: "Uintah Basin Technical College"
  },
  {
    Name: "Ukiah Adult School"
  },
  {
    Name: "Ulster BOCES-School of Practical Nursing"
  },
  {
    Name: "Ulster County Community College"
  },
  {
    Name: "Ultimate Medical Academy"
  },
  {
    Name: "Ultrasound Medical Institute"
  },
  {
    Name: "Umpqua Community College"
  },
  {
    Name: "Unification Theological Seminary"
  },
  {
    Name: "Union Bible College"
  },
  {
    Name: "Union College"
  },
  {
    Name: "Union College"
  },
  {
    Name: "Union College"
  },
  {
    Name: "Union County College"
  },
  {
    Name: "Union County Vocational Technical School"
  },
  {
    Name: "Union Institute & University"
  },
  {
    Name: "Union Presbyterian Seminary"
  },
  {
    Name: "Union Presbyterian Seminary-Charlotte"
  },
  {
    Name: "Union Theological Seminary in the City of New York"
  },
  {
    Name: "Union University"
  },
  {
    Name: "Unitech Training Academy-Alexandria"
  },
  {
    Name: "Unitech Training Academy-Baton Rouge"
  },
  {
    Name: "Unitech Training Academy-Houma"
  },
  {
    Name: "Unitech Training Academy-Lafayette"
  },
  {
    Name: "Unitech Training Academy-New Orleans"
  },
  {
    Name: "Unitech Training Academy-West Monroe"
  },
  {
    Name: "United Beauty College"
  },
  {
    Name: "United College of Health and Beauty"
  },
  {
    Name: "United Education Institute-Las Vegas"
  },
  {
    Name: "United Education Institute-Morrow"
  },
  {
    Name: "United International College"
  },
  {
    Name: "United Lutheran Seminary"
  },
  {
    Name: "United States Air Force Academy"
  },
  {
    Name: "United States Coast Guard Academy"
  },
  {
    Name: "United States Merchant Marine Academy"
  },
  {
    Name: "United States Military Academy"
  },
  {
    Name: "United States Naval Academy"
  },
  {
    Name: "United States University"
  },
  {
    Name: "United Talmudical Seminary"
  },
  {
    Name: "United Technical Center"
  },
  {
    Name: "United Theological Seminary"
  },
  {
    Name: "United Theological Seminary of the Twin Cities"
  },
  {
    Name: "United Tribes Technical College"
  },
  {
    Name: "Unitek College"
  },
  {
    Name: "Unitek College"
  },
  {
    Name: "Unitek College"
  },
  {
    Name: "Unitek College"
  },
  {
    Name: "Unity College"
  },
  {
    Name: "UnityPoint Health-Des Moines School of Radiologic Technology"
  },
  {
    Name: "Universal Career School"
  },
  {
    Name: "Universal College of Beauty Inc-Los Angeles 2"
  },
  {
    Name: "Universal College of Healing Arts"
  },
  {
    Name: "Universal Healthcare Careers College"
  },
  {
    Name: "Universal Spa Training Academy"
  },
  {
    Name: "Universal Technical Institute of Arizona Inc"
  },
  {
    Name: "Universal Technical Institute of California Inc"
  },
  {
    Name: "Universal Technical Institute of Illinois Inc"
  },
  {
    Name: "Universal Technical Institute of Northern California Inc"
  },
  {
    Name: "Universal Technical Institute of Pennsylvania Inc"
  },
  {
    Name: "Universal Technical Institute of Texas Inc."
  },
  {
    Name: "Universal Technical Institute-Auto Motorcycle & Marine Mechanics Institute Division-Orlando"
  },
  {
    Name: "Universal Technical Institute-Bloomfield"
  },
  {
    Name: "Universal Technical Institute-Dallas Fort Worth"
  },
  {
    Name: "Universal Technical Institute-Southern California"
  },
  {
    Name: "Universal Technical Institute-West Texas"
  },
  {
    Name: "Universal Technology College of Puerto Rico"
  },
  {
    Name: "Universal Training Institute"
  },
  {
    Name: "Universidad Adventista de las Antillas"
  },
  {
    Name: "Universidad Ana G. Mendez-Carolina Campus"
  },
  {
    Name: "Universidad Ana G. Mendez-Cupey Campus"
  },
  {
    Name: "Universidad Ana G. Mendez-Gurabo Campus"
  },
  {
    Name: "Universidad Central de Bayamon"
  },
  {
    Name: "Universidad Central Del Caribe"
  },
  {
    Name: "Universidad del Sagrado Corazon"
  },
  {
    Name: "Universidad Pentecostal Mizpa"
  },
  {
    Name: "Universidad Politecnica de Puerto Rico"
  },
  {
    Name: "Universidad Teologica del Caribe"
  },
  {
    Name: "University Academy of Hair Design"
  },
  {
    Name: "University at Buffalo"
  },
  {
    Name: "University of Advancing Technology"
  },
  {
    Name: "University of Aesthetics & Cosmetology"
  },
  {
    Name: "University of Akron Main Campus"
  },
  {
    Name: "University of Akron Wayne College"
  },
  {
    Name: "University of Antelope Valley"
  },
  {
    Name: "University of Arkansas"
  },
  {
    Name: "University of Arkansas at Little Rock"
  },
  {
    Name: "University of Arkansas at Monticello"
  },
  {
    Name: "University of Arkansas at Pine Bluff"
  },
  {
    Name: "University of Arkansas Community College at Hope - Texarkana"
  },
  {
    Name: "University of Arkansas Community College Rich Mountain"
  },
  {
    Name: "University of Arkansas Community College-Batesville"
  },
  {
    Name: "University of Arkansas Community College-Morrilton"
  },
  {
    Name: "University of Arkansas for Medical Sciences"
  },
  {
    Name: "University of Arkansas Grantham"
  },
  {
    Name: "University of Arkansas Hope-Texarkana"
  },
  {
    Name: "University of Arkansas System eVersity"
  },
  {
    Name: "University of Arkansas-Fort Smith"
  },
  {
    Name: "University of Arkansas-Pulaski Technical College"
  },
  {
    Name: "University of Baltimore"
  },
  {
    Name: "University of Bridgeport"
  },
  {
    Name: "University of California-Berkeley"
  },
  {
    Name: "University of California-Davis"
  },
  {
    Name: "University of California-Hastings College of Law"
  },
  {
    Name: "University of California-Irvine"
  },
  {
    Name: "University of California-Los Angeles"
  },
  {
    Name: "University of California-Merced"
  },
  {
    Name: "University of California-Riverside"
  },
  {
    Name: "University of California-San Diego"
  },
  {
    Name: "University of California-San Francisco"
  },
  {
    Name: "University of California-Santa Barbara"
  },
  {
    Name: "University of California-Santa Cruz"
  },
  {
    Name: "University of Central Arkansas"
  },
  {
    Name: "University of Central Florida"
  },
  {
    Name: "University of Central Missouri"
  },
  {
    Name: "University of Central Oklahoma"
  },
  {
    Name: "University of Charleston"
  },
  {
    Name: "University of Chicago"
  },
  {
    Name: "University of Cincinnati-Blue Ash College"
  },
  {
    Name: "University of Cincinnati-Clermont College"
  },
  {
    Name: "University of Cincinnati-Main Campus"
  },
  {
    Name: "University of Colorado Boulder"
  },
  {
    Name: "University of Colorado Colorado Springs"
  },
  {
    Name: "University of Colorado Denver/Anschutz Medical Campus"
  },
  {
    Name: "University of Connecticut"
  },
  {
    Name: "University of Connecticut-Avery Point"
  },
  {
    Name: "University of Connecticut-Hartford Campus"
  },
  {
    Name: "University of Connecticut-Stamford"
  },
  {
    Name: "University of Connecticut-Waterbury Campus"
  },
  {
    Name: "University of Dallas"
  },
  {
    Name: "University of Dayton"
  },
  {
    Name: "University of Delaware"
  },
  {
    Name: "University of Denver"
  },
  {
    Name: "University of Detroit Mercy"
  },
  {
    Name: "University of Dubuque"
  },
  {
    Name: "University of East-West Medicine"
  },
  {
    Name: "University of Evansville"
  },
  {
    Name: "University of Florida"
  },
  {
    Name: "University of Florida-Online"
  },
  {
    Name: "University of Fort Lauderdale"
  },
  {
    Name: "University of Georgia"
  },
  {
    Name: "University of Guam"
  },
  {
    Name: "University of Hartford"
  },
  {
    Name: "University of Hawaii at Hilo"
  },
  {
    Name: "University of Hawaii at Manoa"
  },
  {
    Name: "University of Hawaii Maui College"
  },
  {
    Name: "University of Hawaii-West Oahu"
  },
  {
    Name: "University of Health Sciences and Pharmacy in St. Louis"
  },
  {
    Name: "University of Holy Cross"
  },
  {
    Name: "University of Houston"
  },
  {
    Name: "University of Houston-Clear Lake"
  },
  {
    Name: "University of Houston-Downtown"
  },
  {
    Name: "University of Houston-Victoria"
  },
  {
    Name: "University of Idaho"
  },
  {
    Name: "University of Illinois Chicago"
  },
  {
    Name: "University of Illinois Springfield"
  },
  {
    Name: "University of Illinois Urbana-Champaign"
  },
  {
    Name: "University of Indianapolis"
  },
  {
    Name: "University of Iowa"
  },
  {
    Name: "University of Jamestown"
  },
  {
    Name: "University of Kansas"
  },
  {
    Name: "University of Kentucky"
  },
  {
    Name: "University of La Verne"
  },
  {
    Name: "University of Louisiana at Lafayette"
  },
  {
    Name: "University of Louisiana at Monroe"
  },
  {
    Name: "University of Louisville"
  },
  {
    Name: "University of Lynchburg"
  },
  {
    Name: "University of Maine"
  },
  {
    Name: "University of Maine - Machias"
  },
  {
    Name: "University of Maine at Augusta"
  },
  {
    Name: "University of Maine at Farmington"
  },
  {
    Name: "University of Maine at Fort Kent"
  },
  {
    Name: "University of Maine at Presque Isle"
  },
  {
    Name: "University of Management and Technology"
  },
  {
    Name: "University of Mary"
  },
  {
    Name: "University of Mary Hardin-Baylor"
  },
  {
    Name: "University of Mary Washington"
  },
  {
    Name: "University of Maryland Baltimore"
  },
  {
    Name: "University of Maryland Eastern Shore"
  },
  {
    Name: "University of Maryland Global Campus"
  },
  {
    Name: "University of Maryland-Baltimore County"
  },
  {
    Name: "University of Maryland-College Park"
  },
  {
    Name: "University of Massachusetts Chan Medical School"
  },
  {
    Name: "University of Massachusetts Global"
  },
  {
    Name: "University of Massachusetts-Amherst"
  },
  {
    Name: "University of Massachusetts-Boston"
  },
  {
    Name: "University of Massachusetts-Dartmouth"
  },
  {
    Name: "University of Massachusetts-Lowell"
  },
  {
    Name: "University of Memphis"
  },
  {
    Name: "University of Miami"
  },
  {
    Name: "University of Michigan-Ann Arbor"
  },
  {
    Name: "University of Michigan-Dearborn"
  },
  {
    Name: "University of Michigan-Flint"
  },
  {
    Name: "University of Minnesota-Crookston"
  },
  {
    Name: "University of Minnesota-Duluth"
  },
  {
    Name: "University of Minnesota-Morris"
  },
  {
    Name: "University of Minnesota-Rochester"
  },
  {
    Name: "University of Minnesota-Twin Cities"
  },
  {
    Name: "University of Mississippi"
  },
  {
    Name: "University of Mississippi Medical Center"
  },
  {
    Name: "University of Missouri-Columbia"
  },
  {
    Name: "University of Missouri-Kansas City"
  },
  {
    Name: "University of Missouri-St Louis"
  },
  {
    Name: "University of Mount Olive"
  },
  {
    Name: "University of Mount Union"
  },
  {
    Name: "University of Nebraska at Kearney"
  },
  {
    Name: "University of Nebraska at Omaha"
  },
  {
    Name: "University of Nebraska Medical Center"
  },
  {
    Name: "University of Nebraska-Lincoln"
  },
  {
    Name: "University of Nevada-Las Vegas"
  },
  {
    Name: "University of Nevada-Reno"
  },
  {
    Name: "University of New England"
  },
  {
    Name: "University of New Hampshire at Manchester"
  },
  {
    Name: "University of New Hampshire-Franklin Pierce School of Law"
  },
  {
    Name: "University of New Hampshire-Main Campus"
  },
  {
    Name: "University of New Haven"
  },
  {
    Name: "University of New Mexico-Gallup Campus"
  },
  {
    Name: "University of New Mexico-Los Alamos Campus"
  },
  {
    Name: "University of New Mexico-Main Campus"
  },
  {
    Name: "University of New Mexico-Taos Campus"
  },
  {
    Name: "University of New Mexico-Valencia County Campus"
  },
  {
    Name: "University of New Orleans"
  },
  {
    Name: "University of North Carolina at Asheville"
  },
  {
    Name: "University of North Carolina at Chapel Hill"
  },
  {
    Name: "University of North Carolina at Charlotte"
  },
  {
    Name: "University of North Carolina at Greensboro"
  },
  {
    Name: "University of North Carolina at Pembroke"
  },
  {
    Name: "University of North Carolina School of the Arts"
  },
  {
    Name: "University of North Carolina Wilmington"
  },
  {
    Name: "University of North Dakota"
  },
  {
    Name: "University of North Florida"
  },
  {
    Name: "University of North Georgia"
  },
  {
    Name: "University of North Texas"
  },
  {
    Name: "University of North Texas at Dallas"
  },
  {
    Name: "University of North Texas Health Science Center"
  },
  {
    Name: "University of Northern Colorado"
  },
  {
    Name: "University of Northern Iowa"
  },
  {
    Name: "University of Northwestern Ohio"
  },
  {
    Name: "University of Northwestern-St Paul"
  },
  {
    Name: "University of Notre Dame"
  },
  {
    Name: "University of Notre Dame -"
  },
  {
    Name: "University of Oklahoma-Health Sciences Center"
  },
  {
    Name: "University of Oklahoma-Norman Campus"
  },
  {
    Name: "University of Oregon"
  },
  {
    Name: "University of Pennsylvania"
  },
  {
    Name: "University of Phoenix-Arizona"
  },
  {
    Name: "University of Phoenix-California"
  },
  {
    Name: "University of Phoenix-Hawaii"
  },
  {
    Name: "University of Phoenix-Nevada"
  },
  {
    Name: "University of Phoenix-Texas"
  },
  {
    Name: "University of Pikeville"
  },
  {
    Name: "University of Pittsburgh-Bradford"
  },
  {
    Name: "University of Pittsburgh-Greensburg"
  },
  {
    Name: "University of Pittsburgh-Johnstown"
  },
  {
    Name: "University of Pittsburgh-Pittsburgh Campus"
  },
  {
    Name: "University of Pittsburgh-Titusville"
  },
  {
    Name: "University of Portland"
  },
  {
    Name: "University of Providence"
  },
  {
    Name: "University of Puerto Rico at Ponce"
  },
  {
    Name: "University of Puerto Rico-Aguadilla"
  },
  {
    Name: "University of Puerto Rico-Arecibo"
  },
  {
    Name: "University of Puerto Rico-Bayamon"
  },
  {
    Name: "University of Puerto Rico-Carolina"
  },
  {
    Name: "University of Puerto Rico-Cayey"
  },
  {
    Name: "University of Puerto Rico-Humacao"
  },
  {
    Name: "University of Puerto Rico-Mayaguez"
  },
  {
    Name: "University of Puerto Rico-Medical Sciences"
  },
  {
    Name: "University of Puerto Rico-Rio Piedras"
  },
  {
    Name: "University of Puerto Rico-Utuado"
  },
  {
    Name: "University of Puget Sound"
  },
  {
    Name: "University of Redlands"
  },
  {
    Name: "University of Rhode Island"
  },
  {
    Name: "University of Richmond"
  },
  {
    Name: "University of Rio Grande"
  },
  {
    Name: "University of Rochester"
  },
  {
    Name: "University of Saint Francis-Fort Wayne"
  },
  {
    Name: "University of Saint Joseph"
  },
  {
    Name: "University of Saint Katherine"
  },
  {
    Name: "University of Saint Mary"
  },
  {
    Name: "University of Saint Mary of the Lake"
  },
  {
    Name: "University of San Diego"
  },
  {
    Name: "University of San Francisco"
  },
  {
    Name: "University of Science and Arts of Oklahoma"
  },
  {
    Name: "University of Scranton"
  },
  {
    Name: "University of Silicon Valley"
  },
  {
    Name: "University of Sioux Falls"
  },
  {
    Name: "University of South Carolina Aiken"
  },
  {
    Name: "University of South Carolina Beaufort"
  },
  {
    Name: "University of South Carolina-Columbia"
  },
  {
    Name: "University of South Carolina-Lancaster"
  },
  {
    Name: "University of South Carolina-Salkehatchie"
  },
  {
    Name: "University of South Carolina-Sumter"
  },
  {
    Name: "University of South Carolina-Union"
  },
  {
    Name: "University of South Carolina-Upstate"
  },
  {
    Name: "University of South Dakota"
  },
  {
    Name: "University of South Florida"
  },
  {
    Name: "University of Southern California"
  },
  {
    Name: "University of Southern Indiana"
  },
  {
    Name: "University of Southern Maine"
  },
  {
    Name: "University of Southern Mississippi"
  },
  {
    Name: "University of Spa & Cosmetology Arts"
  },
  {
    Name: "University of St Francis"
  },
  {
    Name: "University of St Thomas"
  },
  {
    Name: "University of St Thomas"
  },
  {
    Name: "University of St. Augustine for Health Sciences"
  },
  {
    Name: "University of Texas Southwestern Medical Center"
  },
  {
    Name: "University of the Cumberlands"
  },
  {
    Name: "University of the District of Columbia"
  },
  {
    Name: "University of the Incarnate Word"
  },
  {
    Name: "University of the Ozarks"
  },
  {
    Name: "University of the Pacific"
  },
  {
    Name: "University of the People"
  },
  {
    Name: "University of the Potomac-VA Campus"
  },
  {
    Name: "University of the Potomac-Washington DC Campus"
  },
  {
    Name: "University of the Sciences"
  },
  {
    Name: "University of the Southwest"
  },
  {
    Name: "University of the Virgin Islands"
  },
  {
    Name: "University of the Virgin Islands-Albert A. Sheen"
  },
  {
    Name: "University of the West"
  },
  {
    Name: "University of Toledo"
  },
  {
    Name: "University of Tulsa"
  },
  {
    Name: "University of Utah"
  },
  {
    Name: "University of Valley Forge"
  },
  {
    Name: "University of Vermont"
  },
  {
    Name: "University of Virginia-Main Campus"
  },
  {
    Name: "University of Virginia's College at Wise"
  },
  {
    Name: "University of Washington-Bothell Campus"
  },
  {
    Name: "University of Washington-Seattle Campus"
  },
  {
    Name: "University of Washington-Tacoma Campus"
  },
  {
    Name: "University of West Georgia"
  },
  {
    Name: "University of West Los Angeles"
  },
  {
    Name: "University of West Los Angeles - Chatsworth"
  },
  {
    Name: "University of Western States"
  },
  {
    Name: "University of Wisconsin-Eau Claire"
  },
  {
    Name: "University of Wisconsin-Green Bay"
  },
  {
    Name: "University of Wisconsin-La Crosse"
  },
  {
    Name: "University of Wisconsin-Madison"
  },
  {
    Name: "University of Wisconsin-Milwaukee"
  },
  {
    Name: "University of Wisconsin-Milwaukee Flex"
  },
  {
    Name: "University of Wisconsin-Oshkosh"
  },
  {
    Name: "University of Wisconsin-Parkside"
  },
  {
    Name: "University of Wisconsin-Parkside Flex"
  },
  {
    Name: "University of Wisconsin-Platteville"
  },
  {
    Name: "University of Wisconsin-River Falls"
  },
  {
    Name: "University of Wisconsin-Stevens Point"
  },
  {
    Name: "University of Wisconsin-Stout"
  },
  {
    Name: "University of Wisconsin-Superior"
  },
  {
    Name: "University of Wisconsin-Whitewater"
  },
  {
    Name: "University of Wyoming"
  },
  {
    Name: "Unlimited Cosmetology School"
  },
  {
    Name: "UPMC Jameson School of Nursing"
  },
  {
    Name: "UPMC Jameson School of Nursing - UPMC Hamot"
  },
  {
    Name: "UPMC Mercy School of Nursing"
  },
  {
    Name: "UPMC Shadyside School of Nursing"
  },
  {
    Name: "UPMC St. Margaret School of Nursing"
  },
  {
    Name: "Upper Cape Cod Regional Technical School"
  },
  {
    Name: "Upper Iowa University"
  },
  {
    Name: "Upper Valley Career Center"
  },
  {
    Name: "Upper Valley Educators Institute"
  },
  {
    Name: "Upstate Medical University"
  },
  {
    Name: "UR Beauty & Barber Academy"
  },
  {
    Name: "Urban Academy of Beauty"
  },
  {
    Name: "Urban Barber College"
  },
  {
    Name: "Urban Barber College - San Jose"
  },
  {
    Name: "Urban College of Boston"
  },
  {
    Name: "Urshan College"
  },
  {
    Name: "Urshan Graduate School of Theology"
  },
  {
    Name: "Ursinus College"
  },
  {
    Name: "Ursuline College"
  },
  {
    Name: "Uta Mesivta of Kiryas Joel"
  },
  {
    Name: "Utah County Campus"
  },
  {
    Name: "Utah State University"
  },
  {
    Name: "Utah Tech University"
  },
  {
    Name: "Utah Valley University"
  },
  {
    Name: "Utica University"
  },
  {
    Name: "Valdosta State University"
  },
  {
    Name: "Valencia College"
  },
  {
    Name: "Valley City State University"
  },
  {
    Name: "Valley College - Fairlawn - School of Nursing"
  },
  {
    Name: "Valley College of Medical Careers"
  },
  {
    Name: "Valley College-Beckley"
  },
  {
    Name: "Valley College-Cleveland"
  },
  {
    Name: "Valley College-Martinsburg"
  },
  {
    Name: "Valley Forge Military College"
  },
  {
    Name: "Valley Grande Institute for Academic Studies"
  },
  {
    Name: "Valor Christian College"
  },
  {
    Name: "Valparaiso University"
  },
  {
    Name: "Vance-Granville Community College"
  },
  {
    Name: "Vanderbilt University"
  },
  {
    Name: "VanderCook College of Music"
  },
  {
    Name: "Vanguard University of Southern California"
  },
  {
    Name: "Vanguard-Sentinel Adult Career and Technology Center"
  },
  {
    Name: "Vantage Career Center"
  },
  {
    Name: "Vassar College"
  },
  {
    Name: "Vaughn Beauty College"
  },
  {
    Name: "Vaughn College of Aeronautics and Technology"
  },
  {
    Name: "Veeb Nassau County School of Practical Nursing"
  },
  {
    Name: "Velvatex College of Beauty Culture"
  },
  {
    Name: "Venango County Area Vocational Technical School"
  },
  {
    Name: "Ventura Adult and Continuing Education"
  },
  {
    Name: "Ventura College"
  },
  {
    Name: "Venus Beauty Academy"
  },
  {
    Name: "Veritas Baptist College"
  },
  {
    Name: "Vermont College of Fine Arts"
  },
  {
    Name: "Vermont Law and Graduate School"
  },
  {
    Name: "Vermont Technical College"
  },
  {
    Name: "Vernon College"
  },
  {
    Name: "Verve College"
  },
  {
    Name: "Vet Tech Institute"
  },
  {
    Name: "Vet Tech Institute of Houston"
  },
  {
    Name: "VH Barber & Styling Academy"
  },
  {
    Name: "Vibe Barber College"
  },
  {
    Name: "VICI Beauty School"
  },
  {
    Name: "Victor Valley College"
  },
  {
    Name: "Victor Valley Community College - Aviation Technology"
  },
  {
    Name: "Victoria Beauty & Barber College"
  },
  {
    Name: "Victoria College"
  },
  {
    Name: "Victoria's Academy of Cosmetology"
  },
  {
    Name: "Victory Career College"
  },
  {
    Name: "Villa Maria College"
  },
  {
    Name: "Villanova University"
  },
  {
    Name: "Vincennes Beauty College"
  },
  {
    Name: "Vincennes University"
  },
  {
    Name: "Virginia Beach City Public Schools School of Practical Nursing"
  },
  {
    Name: "Virginia Beach Theological Seminary"
  },
  {
    Name: "Virginia Commonwealth University"
  },
  {
    Name: "Virginia Highlands Community College"
  },
  {
    Name: "Virginia Military Institute"
  },
  {
    Name: "Virginia Peninsula Community College"
  },
  {
    Name: "Virginia Polytechnic Institute and State University"
  },
  {
    Name: "Virginia State University"
  },
  {
    Name: "Virginia Union University"
  },
  {
    Name: "Virginia University of Integrative Medicine"
  },
  {
    Name: "Virginia University of Integrative Medicine - New Jersey"
  },
  {
    Name: "Virginia University of Lynchburg"
  },
  {
    Name: "Virginia Wesleyan University"
  },
  {
    Name: "Virginia Western Community College"
  },
  {
    Name: "Visible Music College"
  },
  {
    Name: "Vista Adult School"
  },
  {
    Name: "Viterbo University"
  },
  {
    Name: "Vogue College of Cosmetology"
  },
  {
    Name: "Vogue College of Cosmetology-McAllen"
  },
  {
    Name: "Vogue College of Cosmetology-San Antonio Fredericksburg"
  },
  {
    Name: "Vogue College of Cosmetology-Santa Fe"
  },
  {
    Name: "Vogue International Academy"
  },
  {
    Name: "Volunteer State Community College"
  },
  {
    Name: "Voorhees University"
  },
  {
    Name: "Vski Cosmetology School"
  },
  {
    Name: "Wabash College"
  },
  {
    Name: "Wabash Valley College"
  },
  {
    Name: "Wade College"
  },
  {
    Name: "Wade Gordon Hairdressing Academy"
  },
  {
    Name: "Wade Gordon Hairdressing Academy-Lubbock"
  },
  {
    Name: "Wagner College"
  },
  {
    Name: "Wake Forest University"
  },
  {
    Name: "Wake Technical Community College"
  },
  {
    Name: "Walden University"
  },
  {
    Name: "Waldorf University"
  },
  {
    Name: "Walla Walla Community College"
  },
  {
    Name: "Walla Walla University"
  },
  {
    Name: "Walnut Hill College"
  },
  {
    Name: "Walsh College"
  },
  {
    Name: "Walsh University"
  },
  {
    Name: "Walters State Community College"
  },
  {
    Name: "Warner Pacific University"
  },
  {
    Name: "Warner Pacific University Professional and Graduate Studies"
  },
  {
    Name: "Warner University"
  },
  {
    Name: "Warren County Career Center"
  },
  {
    Name: "Warren County Community College"
  },
  {
    Name: "Warren Wilson College"
  },
  {
    Name: "Warrensburg Area Career Center"
  },
  {
    Name: "Wartburg College"
  },
  {
    Name: "Wartburg Theological Seminary"
  },
  {
    Name: "Washburn Institute of Technology"
  },
  {
    Name: "Washburn University"
  },
  {
    Name: "Washington & Jefferson College"
  },
  {
    Name: "Washington Adventist University"
  },
  {
    Name: "Washington and Lee University"
  },
  {
    Name: "Washington Barber College Inc"
  },
  {
    Name: "Washington College"
  },
  {
    Name: "Washington County Career Center-Adult Technical Training"
  },
  {
    Name: "Washington County Community College"
  },
  {
    Name: "Washington Health System School of Nursing"
  },
  {
    Name: "Washington Saratoga Warren Hamilton Essex BOCES-Practical Nursing Program"
  },
  {
    Name: "Washington State Community College"
  },
  {
    Name: "Washington State University"
  },
  {
    Name: "Washington State University - Everett Campus"
  },
  {
    Name: "Washington State University-Spokane"
  },
  {
    Name: "Washington State University-Tri Cities"
  },
  {
    Name: "Washington State University-Vancouver"
  },
  {
    Name: "Washington University in St Louis"
  },
  {
    Name: "Washtenaw Community College"
  },
  {
    Name: "Watts School of Nursing"
  },
  {
    Name: "Waubonsee Community College"
  },
  {
    Name: "Waukesha County Technical College"
  },
  {
    Name: "Wave Leadership College"
  },
  {
    Name: "Wayland Baptist University"
  },
  {
    Name: "Wayne Community College"
  },
  {
    Name: "Wayne County Community College District"
  },
  {
    Name: "Wayne County Schools Career Center"
  },
  {
    Name: "Wayne Finger Lakes BOCES-Practical Nursing Program"
  },
  {
    Name: "Wayne State College"
  },
  {
    Name: "Wayne State University"
  },
  {
    Name: "Waynes College of Beauty"
  },
  {
    Name: "Waynesburg University"
  },
  {
    Name: "Waynesville Career Center"
  },
  {
    Name: "Weatherford College"
  },
  {
    Name: "Webb Institute"
  },
  {
    Name: "Webb's Barber School of Arts"
  },
  {
    Name: "Webber International University"
  },
  {
    Name: "Weber State University"
  },
  {
    Name: "Webster University"
  },
  {
    Name: "Weill Medical College of Cornell University"
  },
  {
    Name: "Welch College"
  },
  {
    Name: "Welder Training and Testing Institute"
  },
  {
    Name: "Wellesley College"
  },
  {
    Name: "Wells College"
  },
  {
    Name: "WellSpring School of Allied Health-Kansas City"
  },
  {
    Name: "WellSpring School of Allied Health-Lawrence"
  },
  {
    Name: "WellSpring School of Allied Health-Springfield"
  },
  {
    Name: "WellSpring School of Allied Health-Wichita"
  },
  {
    Name: "Wenatchee Valley College"
  },
  {
    Name: "Wentworth Institute of Technology"
  },
  {
    Name: "Wes Watkins Technology Center"
  },
  {
    Name: "Wesley Biblical Seminary"
  },
  {
    Name: "Wesley Theological Seminary"
  },
  {
    Name: "Wesleyan College"
  },
  {
    Name: "Wesleyan University"
  },
  {
    Name: "West Chester University of Pennsylvania"
  },
  {
    Name: "West Coast University-Center for Graduate Studies"
  },
  {
    Name: "West Coast University-Dallas"
  },
  {
    Name: "West Coast University-Los Angeles"
  },
  {
    Name: "West Coast University-Miami"
  },
  {
    Name: "West Coast University-Ontario"
  },
  {
    Name: "West Coast University-Orange County"
  },
  {
    Name: "West Georgia Technical College"
  },
  {
    Name: "West Hills College-Coalinga"
  },
  {
    Name: "West Hills College-Lemoore"
  },
  {
    Name: "West Kentucky Community and Technical College"
  },
  {
    Name: "West Liberty University"
  },
  {
    Name: "West Los Angeles College"
  },
  {
    Name: "West Michigan College of Barbering and Beauty"
  },
  {
    Name: "West Shore Community College"
  },
  {
    Name: "West Texas A & M University"
  },
  {
    Name: "West Valley College"
  },
  {
    Name: "West Virginia Junior College-Bridgeport"
  },
  {
    Name: "West Virginia Junior College-Charleston"
  },
  {
    Name: "West Virginia Junior College-Morgantown"
  },
  {
    Name: "West Virginia Junior College-United Career Institute"
  },
  {
    Name: "West Virginia Junior College-United Career Institute"
  },
  {
    Name: "West Virginia Northern Community College"
  },
  {
    Name: "West Virginia School of Osteopathic Medicine"
  },
  {
    Name: "West Virginia State University"
  },
  {
    Name: "West Virginia University"
  },
  {
    Name: "West Virginia University at Parkersburg"
  },
  {
    Name: "West Virginia University Hospital Departments of Rad Tech and Nutrition"
  },
  {
    Name: "West Virginia University Institute of Technology"
  },
  {
    Name: "West Virginia Wesleyan College"
  },
  {
    Name: "Westchester College of Nursing & Allied Health"
  },
  {
    Name: "Westchester School for Medical & Dental Assistants"
  },
  {
    Name: "Westchester School of Beauty Culture"
  },
  {
    Name: "Westcliff University"
  },
  {
    Name: "Western Area Career & Technology Center"
  },
  {
    Name: "Western Carolina University"
  },
  {
    Name: "Western Colorado University"
  },
  {
    Name: "Western Connecticut State University"
  },
  {
    Name: "Western Dakota Technical College"
  },
  {
    Name: "Western Governors University"
  },
  {
    Name: "Western Illinois University"
  },
  {
    Name: "Western Iowa Tech Community College"
  },
  {
    Name: "Western Kentucky University"
  },
  {
    Name: "Western Maricopa Education Center"
  },
  {
    Name: "Western Maricopa Education Center - Northeast Campus"
  },
  {
    Name: "Western Maricopa Education Center - Southwest Campus"
  },
  {
    Name: "Western Michigan University"
  },
  {
    Name: "Western Michigan University Homer Stryker M.D. School of Medicine"
  },
  {
    Name: "Western Michigan University-Thomas M. Cooley Law School"
  },
  {
    Name: "Western Nebraska Community College"
  },
  {
    Name: "Western Nevada College"
  },
  {
    Name: "Western New England University"
  },
  {
    Name: "Western New Mexico University"
  },
  {
    Name: "Western Oklahoma State College"
  },
  {
    Name: "Western Oregon University"
  },
  {
    Name: "Western Pennsylvania Hospital School of Nursing"
  },
  {
    Name: "Western Piedmont Community College"
  },
  {
    Name: "Western Seminary"
  },
  {
    Name: "Western Seminary-Sacramento"
  },
  {
    Name: "Western Seminary-San Jose"
  },
  {
    Name: "Western Suffolk BOCES"
  },
  {
    Name: "Western Technical College"
  },
  {
    Name: "Western Technical College"
  },
  {
    Name: "Western Technical College"
  },
  {
    Name: "Western Technology Center"
  },
  {
    Name: "Western Texas College"
  },
  {
    Name: "Western Theological Seminary"
  },
  {
    Name: "Western University of Health Sciences"
  },
  {
    Name: "Western Washington University"
  },
  {
    Name: "Western Wyoming Community College"
  },
  {
    Name: "Westfield State University"
  },
  {
    Name: "Westminster College"
  },
  {
    Name: "Westminster College"
  },
  {
    Name: "Westminster College"
  },
  {
    Name: "Westminster Theological Seminary"
  },
  {
    Name: "Westminster Theological Seminary in California"
  },
  {
    Name: "Westmont College"
  },
  {
    Name: "Westmoreland County Community College"
  },
  {
    Name: "Wharton County Junior College"
  },
  {
    Name: "Whatcom Community College"
  },
  {
    Name: "Wheaton College"
  },
  {
    Name: "Wheaton College (Massachusetts)"
  },
  {
    Name: "Wheeling University"
  },
  {
    Name: "White Earth Tribal and Community College"
  },
  {
    Name: "White Mountains Community College"
  },
  {
    Name: "Whitman College"
  },
  {
    Name: "Whittier College"
  },
  {
    Name: "Whitworth University"
  },
  {
    Name: "Whitworth University-Adult Degree Programs"
  },
  {
    Name: "Wichita State University"
  },
  {
    Name: "Wichita State University-Campus of Applied Sciences and Technology"
  },
  {
    Name: "Wichita Technical Institute"
  },
  {
    Name: "Widener University"
  },
  {
    Name: "Wilberforce University"
  },
  {
    Name: "Wiley College"
  },
  {
    Name: "Wilkes Community College"
  },
  {
    Name: "Wilkes University"
  },
  {
    Name: "Wilkes-Barre Area Career and Technical Center Practical Nursing"
  },
  {
    Name: "Willamette University"
  },
  {
    Name: "William & Mary"
  },
  {
    Name: "William Carey University"
  },
  {
    Name: "William Edge Institute"
  },
  {
    Name: "William James College"
  },
  {
    Name: "William Jessup University"
  },
  {
    Name: "William Jewell College"
  },
  {
    Name: "William Paterson University of New Jersey"
  },
  {
    Name: "William Peace University"
  },
  {
    Name: "William Penn University"
  },
  {
    Name: "William R Moore College of Technology"
  },
  {
    Name: "William Rainey Harper College"
  },
  {
    Name: "William T McFatter Technical College"
  },
  {
    Name: "William Woods University"
  },
  {
    Name: "Williams Baptist University"
  },
  {
    Name: "Williams College"
  },
  {
    Name: "Williamsburg Technical College"
  },
  {
    Name: "Williamson Christian College"
  },
  {
    Name: "Williamson College of the Trades"
  },
  {
    Name: "Williston State College"
  },
  {
    Name: "Wilmington College"
  },
  {
    Name: "Wilmington University"
  },
  {
    Name: "Wilson College"
  },
  {
    Name: "Wilson Community College"
  },
  {
    Name: "Wilton Simpson Technical College"
  },
  {
    Name: "Wilton Simpson Technical College"
  },
  {
    Name: "Windward Community College"
  },
  {
    Name: "Winebrenner Theological Seminary"
  },
  {
    Name: "Wingate University"
  },
  {
    Name: "Winona State University"
  },
  {
    Name: "Winonah's International School of Cosmetology"
  },
  {
    Name: "Winston - Salem Barber School - Satellite"
  },
  {
    Name: "Winston Salem Barber School"
  },
  {
    Name: "Winston-Salem State University"
  },
  {
    Name: "Winthrop University"
  },
  {
    Name: "Wiregrass Georgia Technical College"
  },
  {
    Name: "Wisconsin Lutheran College"
  },
  {
    Name: "Wisconsin School of Professional Psychology"
  },
  {
    Name: "Withlacoochee Technical College"
  },
  {
    Name: "Wittenberg University"
  },
  {
    Name: "Wofford College"
  },
  {
    Name: "Women's Institute of Torah Seminary and College"
  },
  {
    Name: "Won Institute of Graduate Studies"
  },
  {
    Name: "Wongu University of Oriental Medicine"
  },
  {
    Name: "Wood County School of Practical Nursing"
  },
  {
    Name: "Woodbury University"
  },
  {
    Name: "Woodland Community College"
  },
  {
    Name: "Woodruff Medical and Wellness Training"
  },
  {
    Name: "Wor-Wic Community College"
  },
  {
    Name: "Worcester Polytechnic Institute"
  },
  {
    Name: "Worcester State University"
  },
  {
    Name: "Word of Life Bible Institute"
  },
  {
    Name: "World Class Academy of Beauty Careers"
  },
  {
    Name: "World Mission University"
  },
  {
    Name: "Worsham College of Mortuary Science"
  },
  {
    Name: "Wright Graduate University for the Realization of Human Potential"
  },
  {
    Name: "Wright Institute (The) -"
  },
  {
    Name: "Wright State University-Lake Campus"
  },
  {
    Name: "Wright State University-Main Campus"
  },
  {
    Name: "WyoTech"
  },
  {
    Name: "Wytheville Community College"
  },
  {
    Name: "Xavier College School of Nursing"
  },
  {
    Name: "Xavier University"
  },
  {
    Name: "Xavier University of Louisiana"
  },
  {
    Name: "Xenon International Academy-Omaha"
  },
  {
    Name: "Xtylo Beauty College"
  },
  {
    Name: "Yahweh Beauty Academy"
  },
  {
    Name: "Yakima Valley College"
  },
  {
    Name: "Yale University"
  },
  {
    Name: "Yavapai College"
  },
  {
    Name: "Yellowstone Christian College"
  },
  {
    Name: "Yeshiva Bais Aharon"
  },
  {
    Name: "Yeshiva Chemdas Hatorah"
  },
  {
    Name: "Yeshiva College of the Nations Capital"
  },
  {
    Name: "Yeshiva D'monsey Rabbinical College"
  },
  {
    Name: "Yeshiva Derech Chaim"
  },
  {
    Name: "Yeshiva Gedola Tiferes Yaakov Yitzchok"
  },
  {
    Name: "Yeshiva Gedola Tiferes Yerachmiel"
  },
  {
    Name: "Yeshiva Gedolah Imrei Yosef D'spinka"
  },
  {
    Name: "Yeshiva Gedolah Keren Hatorah"
  },
  {
    Name: "Yeshiva Gedolah Kesser Torah"
  },
  {
    Name: "Yeshiva Gedolah of Cliffwood"
  },
  {
    Name: "Yeshiva Gedolah of Greater Detroit"
  },
  {
    Name: "Yeshiva Gedolah of Woodlake Village"
  },
  {
    Name: "Yeshiva Gedolah Shaarei Shmuel"
  },
  {
    Name: "Yeshiva Gedolah Tiferes Boruch"
  },
  {
    Name: "Yeshiva Gedolah Zichron Leyma"
  },
  {
    Name: "Yeshiva Karlin Stolin"
  },
  {
    Name: "Yeshiva Kollel Tifereth Elizer"
  },
  {
    Name: "Yeshiva of Far Rockaway Derech Ayson Rabbinical Seminary"
  },
  {
    Name: "Yeshiva of Machzikai Hadas"
  },
  {
    Name: "Yeshiva of Nitra Rabbinical College"
  },
  {
    Name: "Yeshiva of Ocean"
  },
  {
    Name: "Yeshiva of the Telshe Alumni"
  },
  {
    Name: "Yeshiva Ohr Elchonon Chabad West Coast Talmudical Seminary"
  },
  {
    Name: "Yeshiva Ohr Naftoli"
  },
  {
    Name: "Yeshiva Ohr Yisrael"
  },
  {
    Name: "Yeshiva Shaar Ephraim"
  },
  {
    Name: "Yeshiva Shaarei Torah of Rockland"
  },
  {
    Name: "Yeshiva Sholom Shachna"
  },
  {
    Name: "Yeshiva Toras Chaim"
  },
  {
    Name: "Yeshiva University"
  },
  {
    Name: "Yeshiva Yesoda Hatorah Vetz Chaim"
  },
  {
    Name: "Yeshiva Yesodei Hatorah"
  },
  {
    Name: "Yeshiva Zichron Aryeh"
  },
  {
    Name: "Yeshivah Gedolah Rabbinical College"
  },
  {
    Name: "Yeshivas Be'er Yitzchok"
  },
  {
    Name: "Yeshivas Emek Hatorah"
  },
  {
    Name: "Yeshivas Maharit D'Satmar"
  },
  {
    Name: "Yeshivas Novominsk"
  },
  {
    Name: "Yeshivat Hechal Shemuel"
  },
  {
    Name: "Yeshivath Beth Moshe"
  },
  {
    Name: "Yeshivath Shaar Hatorah"
  },
  {
    Name: "Yeshivath Viznitz"
  },
  {
    Name: "Yeshivath Zichron Moshe"
  },
  {
    Name: "Yo San University of Traditional Chinese Medicine"
  },
  {
    Name: "York College of Pennsylvania"
  },
  {
    Name: "York County Community College"
  },
  {
    Name: "York County School of Technology-Adult & Continuing Education"
  },
  {
    Name: "York Technical College"
  },
  {
    Name: "York University"
  },
  {
    Name: "Young Americans College of the Performing Arts"
  },
  {
    Name: "Young Harris College"
  },
  {
    Name: "Youngstown State University"
  },
  {
    Name: "YTI Career Institute-Altoona"
  },
  {
    Name: "YTI Career Institute-York"
  },
  {
    Name: "Yuba College"
  },
  {
    Name: "Yukon Beauty College Inc"
  },
  {
    Name: "Z Hair Academy"
  },
  {
    Name: "Zane State College"
  },
  {
    Name: "Zen Shiatsu Chicago"
  },
  {
    Name: "Zion Massage College"
  },
  {
    Name: "ZMS The Academy"
  }
]




function populateColleges() {
  const select = document.getElementById("colleges");
  // const defaultOption = document.createElement("option");
  // defaultOption.value = "NA";
  // defaultOption.text = "My university is not listed";
  // select.appendChild(defaultOption);

  universities.forEach(college => {
    const option = document.createElement("option");
    option.value = college.Name;
    option.text = college.Name;
    select.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  populateColleges();
});
  
