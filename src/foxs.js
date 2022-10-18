import {registerImage} from './lazy';

const foxNode = document.querySelector('#foxs');

const baseUrl = "https://randomfox.ca/images/";

function createImageNode (num) {
	const imageContainerHTML = document.createElement('div');
	imageContainerHTML.className = "p-4";

	const skeletonImageHTML = document.createElement('div');
	skeletonImageHTML.style.width = "350px";
	skeletonImageHTML.style.height = "auto";
	skeletonImageHTML.className = "bg-gray-100 mx-auto rounded-xl";

	const imageHTML = document.createElement('img');
	imageHTML.dataset.src = `${baseUrl}${num}.jpg`;
	// imageHTML.src = `${baseUrl}${num}.jpg`;
	imageHTML.width = 350;
	imageHTML.className = "mx-auto rounded-xl";

	skeletonImageHTML.appendChild(imageHTML)
	imageContainerHTML.appendChild(skeletonImageHTML);

	return imageContainerHTML;
}

function addImage () {
	const randomNum = Math.floor(Math.random() * 122);
	const newImage = createImageNode(randomNum);
	foxNode.appendChild(newImage);
	registerImage(newImage);
}

const buttonNode = document.createElement('button');
buttonNode.innerText = "Agrega nueva imagen";
buttonNode.className = "bg-blue-500 hover:bg-blue-600 text-white p-2 px-4 rounded-lg";

buttonNode.addEventListener('click', addImage)

foxNode.append(buttonNode);
