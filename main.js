const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      height: "5 foot 5",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/4/2018/08/Suzhousaurus-c07b50e.jpg?quality=90&resize=700,466",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://www.montrealsciencecentre.com/sites/default/files/inline-images/2_6.png"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/4/2018/05/Amargasaurus-a4f591e.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/18/768x1151/gallery-neapolitan-mastiff.jpg?resize=1200:*"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://www.thoughtco.com/thmb/aVR8w5SHi8qfHFurkIRdQ1WeeSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4992124733_0642432592_o-5c4228fd46e0fb00011e365a.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/220px-Male_and_female_chicken_sitting_together.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/4/2018/05/Gigantoraptor-bab277f.jpg?quality=90&resize=700,466"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://scx2.b-cdn.net/gfx/news/2014/achickenfrom.jpg"
    }
  ];

  const targetingApp = document.querySelector("#app");

  //targeted the div id=app in the body of the HTML file

  const renderToDom = (divId, html) => {
    const targetedDiv = document.querySelector(divId)
    targetedDiv.innerHTML = html 
  };

  //created a variable renderToDom that contained two parameters and started an arrow function. function defined a new variable targetedDiv that used a query selector to link to a divID

  const cardsOnDom = (array) => {
  let domString = "";

  //defined a variable cardsOnDom that equaled an array parameter and assigned domString to "" utilizing an arrow function 

  for (const pet of array ) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt=${pet.name}>
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <p class="card-text">${pet.color}</p>
      <p class="card-text">${pet.specialSkill}</p>
      <p class="card-text">${pet.type}</p>
      <p class="card-text">${pet.id} </p>
      <button type="button" id="delete-btn-pet--${pet.id}">Delete</button>
    </div>
  </div>`
  }

  //inserted the card 

  renderToDom("#app", domString);

};

cardsOnDom(pets);

const filterContainer = document.querySelector("#filter-container")
const filterPetsByType = (type) => {
  const filteredPets = pets.filter((pets) => pets.type === type);
  cardsOnDom (filteredPets);
};

filterContainer.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "cats-btn":
      filterPetsByType("cat");
      break;
    case "dinos-btn":
      filterPetsByType("dino");
      break;
    case "dogs-btn":
      filterPetsByType("dog");
      break;
    case "dinos-btn":
      filterPetsByType("cat");
      break;
    
    default:
    cardsOnDom(pets)
    break;
  }
})

const petContainer = document.querySelector ("#pet-container")

petContainer.addEventListener("click", (e) => {
  console.log("We run this!")
});

 const petForm = () => {
  let domString = "";

  domString += `
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="id">ID</label>
      <input type="text" class="form-control mb-2" id="id" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="name">Name</label>
      <input type="text" class="form-control mb-2" id="name" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="color">Color</label>
      <input type="text" class="form-control mb-2" id="color" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="specialSkill">Special Skill</label>
      <input type="text" class="form-control mb-2" id="specialSkill" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="type">Type</label>
      <input type="text" class="form-control mb-2" id="type" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="imageUrl">Image Url</label>
      <input type="text" class="form-control mb-2" id="imageUrl" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>`

renderToDom("#pet-container", domString)
};

const formButton = document.querySelector("#show-form-button");

formButton.addEventListener("click", (e) => {
  petForm();
})

const form = document.querySelector("form");

const createPet = (e) => {
  e.preventDefault();

  const petObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value, 
    color: document.querySelector("#color").value, 
    specialSkill: document.querySelector("#specialSkill").value, 
    type: document.querySelector("#type").value, 
    imageURL: document.querySelector("#imageUrl").value, 
}

console.log(petObj);
pets.push(petObj);
cardsOnDom(pets);
form.reset();
};

form.addEventListener("submit", createPet);

//delete

 const app = document.querySelector("#app");

 app.addEventListener("click", (e) => {
  if (e.target.id.includes("delete-btn-pet")) {
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex((pet) => pet.id === Number (id));
    pets.splice(index, 1);
    cardsOnDom(pets);
  }

  cardsOnDom(pets);
});

  const eventListeners = () => {
    filterContainer.addEventListener("click", (e) => {
      switch (e.target.id) {
        case "cats-btn":
          filterPetsByType("cat");
          break;
        case "dinos-btn":
          filterPetsByType("dino");
          break;
        case "dogs-btn":
          filterPetsByType("dog");
          break;
        case "dinos-btn":
          filterPetsByType("cat");
          break;
        
        default:
        cardsOnDom(pets)
        break;
      }
    });

    formButton.addEventListener("click", (e) => {
      petForm();
    })

    form.addEventListener("submit", createPet)

  app.addEventListener("click", (e) => {
    if (e.target.id.includes("delete-btn-pet")) {
      const [, id] = e.target.id.split("--");
      const index = pets.findIndex((pet) => pet.id === Number (id));
      pets.splice(index, 1);
      cardsOnDom(pets);
    }
  })
  };

const startApp = () => {
  cardsOnDom(pets);
  eventListeners();
}

startApp();
