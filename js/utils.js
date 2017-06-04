var tester = document.createElement('div');
tester.style.position = 'absolute';
tester.style.width = 200;
tester.style.height = 200;
tester.style.backgroundColor = "blue";
tester.innerHTML = "";
tester.style.top = 0 + 'px';
tester.style.left = 0 + 'px';
document.body.appendChild(tester);

function updateText() {
	//tester.innerHTML = camera.rotation.x.toString() + " " + camera.rotation.y.toString() + " " + camera.rotation.z.toString() + " " + camera.position.x.toString() + " " + camera.position.y.toString() + " " + camera.position.z.toString()
	tester.innerHTML = cameraVector.x + " " + cameraVector.y;
}