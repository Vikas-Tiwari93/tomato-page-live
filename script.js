let obj = [
  {
    img: "./images/restraunt/biryani house.avif",
    offer1: "50% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "14 min",
    restraunt: "Biriyani House",
    ratings: "3.9",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/banja.avif",
    offer1: "40% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "30 min",
    restraunt: "Banjara",
    ratings: "3.4",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/briwasji food.avif",
    offer1: "50% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "22 min",
    restraunt: "Briwasji food",
    ratings: "3.0",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/dominos pizza.avif",
    offer1: "10% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "34 min",
    restraunt: "Dominos",
    ratings: "2.9",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/dosa plaza.avif",
    offer1: "20% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "14 min",
    restraunt: "Dhosa plaza",
    ratings: "3.9",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/cafe 18.avif",
    offer1: "20% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "10 min",
    restraunt: "Biriyani mehal",
    ratings: "3.0",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/chasmebaddur.avif",
    offer1: "10% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "20 min",
    restraunt: "Chasmebaddur",
    ratings: "3.9",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/hitchki thela.avif",
    offer1: "30% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "15 min",
    restraunt: "hitchki thela",
    ratings: "3.1",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/hot lips.avif",
    offer1: "10% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "24 min",
    restraunt: "hot lips",
    ratings: "3.9",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/kfc.avif",
    offer1: "10% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "14 min",
    restraunt: "Kfc",
    ratings: "3.4",
    title: "Chicken Nuggets",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/jashn.avif",
    offer1: "30% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "24 min",
    restraunt: "Jashn",
    ratings: "3.4",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/raj sweets.avif",
    offer1: "20% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "10 min",
    restraunt: "Raj Sweets",
    ratings: "3.9",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/what a burger.avif",
    offer1: "10% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "14 min",
    restraunt: "What a burger",
    ratings: "3.0",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/punjabi kitchen.avif",
    offer1: "30% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "14 min",
    restraunt: "Punjabi",
    ratings: "3.7",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/lakeview.avif",
    offer1: "50% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "24 min",
    restraunt: "Lake View",
    ratings: "3.0",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
  {
    img: "./images/restraunt/nanal dhaba.avif",
    offer1: "50% OFF up to 100",
    offer2: "Pro extra 10% OFF",
    time: "14 min",
    restraunt: "What a burger",
    ratings: "3.0",
    title: "North indian, Biriyani",
    price: "&#8360; 200 for one",
  },
];
let cardplace = document.getElementById("cardplace");
let fragmentElm = document.createDocumentFragment();
for (let i = 0; i < obj.length; i++) {
  let card = document.createElement("div");
  card.className = "cards";
  card.innerHTML = `
  <div class="cardimgholder">
    <img
      src="${obj[i].img}"
      alt=""
      class="cardimg"
    />
    <div class="cardoffer1">${obj[i].offer1}</div>
    <div class="cardoffer2"  style="">${obj[i].offer2}</div>
    <div class="cardtime">${obj[i].time}</div>
  </div>
  <div class="carddiv">
    <div style="width: 87%">${obj[i].restraunt}</div>
    <div
      style="
        width: 13%;
        border-radius: 4px;
        background-color: green;
        padding-left: 4px;
        padding-left: 8px;
      "
    >
    ${obj[i].ratings}<img src="./svgs/empty star.svg" alt="" />
    </div>
  </div>

  <div class="carddiv">
    <div style="width: 70%">${obj[i].title}</div>
    <div style="width: 30%; text-align: right">${obj[i].price}</div>
  </div>

  <div class="carddiv">
    <div class="carddiv01">
      <img
        src="./images/restraunt/card bottom.webp"
        alt=""
        class="fitimg"
      />
    </div>
    <div class="carddiv02">
      Follows all Max Safety measures to ensure your food is safe
    </div>
    <div class="carddiv03">
      <img
        src="./images/restraunt/card bottom2.webp"
        alt=""
        class="fitimg"
      />
    </div>
  </div>
`;
  fragmentElm.appendChild(card);
}
cardplace.appendChild(fragmentElm);

let cardoffer1 = document.getElementsByClassName("cardoffer1");
let cardoffer2 = document.getElementsByClassName("cardoffer2");
for (let j = 0; j < 7; j++) {
  let random1 = Math.floor(15 * Math.random());
  console.log(random1);
  cardoffer1[random1].style.opacity = "0";
}

for (let j = 0; j < 7; j++) {
  let random1 = Math.floor(15 * Math.random());
  console.log(random1);
  cardoffer2[random1].style.opacity = "0";
}
