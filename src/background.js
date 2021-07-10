//const imgs = ["0.jpg", "1.jpg"];
const bg = document.body.style;
const bgApiKey = "22445647-5117f5e9f9c965aa3d5ec56ee";

//function imgChange() {
// const randomNum = Math.floor(Math.random() * parseInt(imgs.length));
//const imgNum = imgs[randomNum];
//console.log(randomNum);
// bg.background = 'url("img/' + imgNum + '")';
//}
//imgChange();
function imgResize() {
  const newGaro = window.innerWidth;
  const newSero = window.innerHeight;
  bg.backgroundSize = "" + newGaro + "px " + newSero + "px";
}
function scrollImgResize() {
  bg.backgroundSize = "cover";
  console.log("scrolled");
}
function imageApi() {
  const keyword = ["background+image", "background", "배경"];
  const randNum = Math.floor(Math.random() * parseInt(keyword.length));
  const url = `https://pixabay.com/api/?key=${bgApiKey}&q=${keyword[randNum]}&image_type=all`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const randomNum = Math.floor(Math.random() * parseInt(data.hits.length));
      const imgUrl = data.hits[randomNum].largeImageURL;
      bg.backgroundImage = 'url("' + imgUrl + '")';
      imgResize();
    });
}
window.addEventListener("resize", imgResize);
document.addEventListener("scroll", scrollImgResize);
imageApi();
