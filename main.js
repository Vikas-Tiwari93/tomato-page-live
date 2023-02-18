let parent = document.getElementById("cardParent");

let cardsSection = document.createElement("div");
cardsSection.className = "cardSection";

let jsonData = [
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },

  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
  {
    img: "./images/restraunt/biryani house.avif",
    discount: "100%",
    proExtra: "100",
    time: 24,
    name: "Test",
  },
];
for (let i = 0; i < jsonData.length; i++) {
  let card = document.createElement("div");
  card.className = "cards";
  card.innerHTML = `<div class="cardimgholder">
    <img
      src="./images/restraunt/biryani house.avif"
      alt=""
      class="cardimg"
    />
    <div class="cardoffer1">${jsonData[i].discount} OFF up to 100</div>
    <div class="cardoffer2" style="opacity: 0">Pro extra 10% OFF</div>
    <div class="cardtime">${jsonData[i].time} min</div>
  </div>
  <div class="carddiv">
    <div style="width: 87%">${jsonData[i].name}</div>
    <div
      style="
        width: 13%;
        border-radius: 4px;
        background-color: green;
        padding-left: 4px;
        padding-left: 8px;
      "
    >
      3.9 <img src="./svgs/empty star.svg" alt="" />
    </div>
  </div>

  <div class="carddiv">
    <div style="width: 70%">North indian, Biriyani</div>
    <div style="width: 30%; text-align: right">&#8360; 200 for one</div>
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
  </div>`;
  cardsSection.appendChild(card);
  parent.appendChild(cardsSection);
}
