const addCat = function(name, favouriteFood, url) {
  const unorderedList = document.createElement('ul');
  unorderedList.classList.add('cat');

  const listItem1 = document.createElement('li');
  listItem1.innerText = "Name: " + name;
  const listItem2 = document.createElement('li');
  listItem2.innerText = "favourite food: " + favouriteFood;
  const listItem3 = document.createElement('li');

  const image = document.createElement('img');
  image.setAttribute('width', '500');
  image.setAttribute('src', url);

  listItem3.appendChild(image);

  unorderedList.appendChild(listItem1);
  unorderedList.appendChild(listItem2);
  unorderedList.appendChild(listItem3);

  const catsSection = document.querySelector('#cats');
  catsSection.appendChild(unorderedList);

}

const app = function() {
  addCat('name', 'favouriteFood', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg')
};

window.addEventListener("DOMContentLoaded", app);
