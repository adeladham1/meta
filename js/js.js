document.querySelector(".header i").onclick = function () {
    document.querySelector("ul").classList.toggle("open")
};

document.querySelector(".toggle").onclick = function () {
  document.querySelector("body").classList.toggle("light")
};

let rightBtn = document.querySelector('.fa-chevron-right');
let leftBtn = document.querySelector('.fa-chevron-left');
rightBtn.addEventListener("click", function(event) {
  let conent = document.querySelector('.cards');
  conent.scrollLeft += 500;
  event.preventDefault();
});
leftBtn.addEventListener("click", function(event) {
  let conent = document.querySelector('.cards');
  conent.scrollLeft -= 500;
  event.preventDefault();
});

let json_url = "../json/movie.json";
fetch(json_url).then(Response => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let searchinput = document.querySelector('input');
      let cards = document.querySelector('.cardsbox');
      let {name, imdb, date, sposter, bposter, genre, url} = ele;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML = `
      <img src="${sposter}" alt="${name}">
        <div class="cont">
          <h3>${name}</h3>
            <p>${genre}, ${date}, <span>IMDB</span><i class="fa-solid fa-star"></i> ${imdb}</p>
              <h3></h3>
        </div>
      `
      cards.appendChild(card);
    });

    data.forEach(ele => {
      let cards = document.querySelector('.cards');
      let {name, imdb, date, sposter, bposter, genre, url} = ele;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML = `
      <img src="${sposter}" alt="${name}">
      <div class="rest">
          <img src="${bposter}" alt="">
          <div class="cont">
              <h4>${name}</h4>
              <div class="sub sb">
                  <p>${genre}, ${date}</p>
                  <h3><span>IMDB</span><i class="fa-solid fa-star"></i> ${imdb}</h3>
              </div>
          </div>
      </div>
      `
      cards.appendChild(card);
    });
});

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let div = document.querySelectorAll(".content > div");
let divArray = Array.from(div);
tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        divArray.forEach((div) => {
            div.style.display ="none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});

