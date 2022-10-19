import hyperscript from 'hyperscript';

const minimum = 1;
const maximum = 122;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

export const createImageNode = baseUrl => {
	const imageHTML = hyperscript('img.mx-auto.rounded-xl', {
		"width" : "350",
		"data-src" : `${baseUrl}${random()}.jpg`
	})

	const skeletonImageHTML = hyperscript('div.bg-gray-100.mx-auto.rounded-xl', {
		"width" : "350px",
		"height": "auto"
	}, imageHTML)

	const imageContainerHTML =  hyperscript('div.p-4', skeletonImageHTML);

	return imageContainerHTML;
};