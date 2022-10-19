const minimum = 1;
const maximum = 122;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

export const createImageNode = baseUrl => {
	const imageContainerHTML = document.createElement('div');
	imageContainerHTML.className = "p-4";

	const skeletonImageHTML = document.createElement('div');
	skeletonImageHTML.style.width = "350px";
	skeletonImageHTML.style.height = "auto";
	skeletonImageHTML.className = "bg-gray-100 mx-auto rounded-xl";

	const imageHTML = document.createElement('img');
	imageHTML.dataset.src = `${baseUrl}${random()}.jpg`;
	imageHTML.width = 350;
	imageHTML.className = "mx-auto rounded-xl";

	skeletonImageHTML.appendChild(imageHTML)
	imageContainerHTML.appendChild(skeletonImageHTML);

	return imageContainerHTML;
};