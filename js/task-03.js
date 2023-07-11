const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");
const LiImgEl = ({ url, alt }, index) => `<!-- generated picture: #${++index} --> <li><img src="${url}" alt="${alt}"/></li>`;
const getListImages = (imagesList) => imagesList.map((item, index) => LiImgEl(item, index)).join("");
galleryRef.insertAdjacentHTML("afterbegin", getListImages(images));

galleryRef.style.display = "flex";
galleryRef.style.flexFlow = "row wrap";
galleryRef.style.gap = "50px";
galleryRef.style.justifyContent = "center";
galleryRef.style.alignItems = "center";
galleryRef.style.listStyle = "none";

const pictures = document.querySelectorAll("img");
pictures.forEach((element) => {
  element.style.width = "30vw";
  element.style.height = "auto";
});
