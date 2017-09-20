import _ from 'lodash';
import './style.css';
import naruto from './naruto.jpg'

function component(){
	var element = document.createElement("div");

	element.innerHTML = _.join(['Hello','webpack'],' ');
	element.classList.add("hello");

	var img = new Image();
	img.src = naruto;
	element.appendChild(img);

	return element;
}
document.body.appendChild(component());