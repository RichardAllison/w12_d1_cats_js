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
  addCat('Buster', 'Cat food', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg')
};

window.addEventListener("DOMContentLoaded", app);
