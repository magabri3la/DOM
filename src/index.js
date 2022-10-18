import {registerImage} from './utils/lazy';
import {createImageNode} from './utils/utils';

const imagesNode = document.querySelector('#images');
const buttonsNode = document.querySelector('#buttons');

const baseUrl = "https://randomfox.ca/images/";

function addImage () {
	const newImage = createImageNode(baseUrl);
	imagesNode.appendChild(newImage);
	registerImage(newImage);
}

function cleanImages () {
	imagesNode.innerHTML = "";
	window.location.reload();
}

const buttonAddImages = document.createElement('button');
buttonAddImages.innerText = "Agrega nueva imagen";
buttonAddImages.className = "bg-orange text-white font-semibold p-2 px-4 rounded-lg mr-8 border-2 border-black";
buttonsNode.append(buttonAddImages);
buttonAddImages.addEventListener('click', addImage);


const buttonCleanImages = document.createElement('button');
buttonCleanImages.innerText = "Limpiar todo";
buttonCleanImages.className = "text-gray font-semibold";
buttonsNode.append(buttonCleanImages);
buttonCleanImages.addEventListener('click', cleanImages);
