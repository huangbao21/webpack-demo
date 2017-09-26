// import _ from 'lodash';
import {cube} from './math.js';
import printMe from './print.js';
import './style.css'

if(process.env.NODE_ENV !== 'production'){
	console.log("looks like we are in development mode");
}

function component(){
	var element = document.createElement("pre");
	var btn = document.createElement('buttton');

	element.innerHTML = [
		'Hello webpack',
		'5 cubed in equle to '+ cube(5)
	].join('\n\n')

	btn.innerHTML = ' Click me and check the console';
	btn.onclick = printMe;
	element.appendChild(btn);


	return element;
}
var element = component();
document.body.appendChild(element);

if(module.hot){
	module.hot.accept('./print.js',function(){
		console.log('Accept the updated printMe module!');
		document.body.removeChild(element);
		element = component();
		docment.body.appendChild(element);
	})
}