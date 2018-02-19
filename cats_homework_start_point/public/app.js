const CATS_ARRAY = [
  { name: 'Boba', favouriteFood: 'Sock fluff', url: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  { name: 'Barnaby', favouriteFood: 'Tuna', url: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  { name: 'Max', favouriteFood: 'Whiskas Temptations', url: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  { name: 'Buster', favouriteFood: 'Cat food', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg"}
]

const createUnorderedList = function(){
  const unorderedList = document.createElement('ul');
  unorderedList.classList.add('cat');
  return unorderedList;
}

const createListItems = function(name, favouriteFood){
  const listItem1 = document.createElement('li');
  listItem1.innerText = "Name: " + name;
  const listItem2 = document.createElement('li');
  listItem2.innerText = "favourite food: " + favouriteFood;
  const listItem3 = document.createElement('li');
  return [listItem1, listItem2, listItem3];
}

const createImage = function(url){
  const image = document.createElement('img');
  image.setAttribute('width', '500');
  image.setAttribute('src', url);
  return image;
}

const appendElements = function(catsSection, unorderedList, listItem1, listItem2, listItem3, image) {
  listItem3.appendChild(image);
  unorderedList.appendChild(listItem1);
  unorderedList.appendChild(listItem2);
  unorderedList.appendChild(listItem3);
  catsSection.appendChild(unorderedList);
};

const addCat = function(name, favouriteFood, url) {
  const unorderedList = createUnorderedList();
  listItems = createListItems(name, favouriteFood)
  const listItem1 = listItems[0];
  const listItem2 = listItems[1];
  const listItem3 = listItems[2];
  const image = createImage(url);
  const catsSection = document.querySelector('#cats');
  appendElements(catsSection, unorderedList, listItem1, listItem2, listItem3, image);
}

const app = function() {
  for (const cat of CATS_ARRAY) {
    addCat(cat.name, cat.favouriteFood, cat.url);
  }
}

window.addEventListener("DOMContentLoaded", app);
