import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

/**
 * Base
 */
// Debug
// const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
}

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = -4.5
camera.position.y = -2 
camera.position.z = 5
scene.add(camera)


// camera.rotation.y = Math.PI * 2;

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTextTexture = textureLoader.load('/textures/matcaps/5.png')
const matcapDonutTexture = textureLoader.load('/textures/matcaps/9.png')
matcapTextTexture.colorSpace = THREE.SRGBColorSpace
matcapDonutTexture.colorSpace = THREE.SRGBColorSpace
// console.log(matcapTexture);


// axes helper
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);



// fonts
const fontLoader = new FontLoader();
// fontLoader.load(
// 	'fonts/helvetiker_regular.typeface.json',
// 	(font) => {
// 		// console.log('font loaded');
// 		const textGeometry = new TextGeometry(
// 			'Hello Three.js',
// 			{
// 				font: font,
// 				size: 0.5,
// 				height: 0.2,
// 				curveSegments: 5,
// 				bevelEnabled: true,
// 				bevelThickness: 0.03,
// 				bevelSize: 0.02,
// 				bevelOffset: 0,
// 				bevelSegments: 4
// 			}
// 		)


// 		textGeometry.center();

// 		// textGeometry.computeBoundingBox()

// 		// textGeometry.translate(
// 		// 	- (textGeometry.boundingBox.max.x * 0.5) - 0.03,
// 		// 	- (textGeometry.boundingBox.max.y * 0.5) - 0.03,
// 		// 	- (textGeometry.boundingBox.max.z * 0.5) - 0.02
// 		// ) 

// 		const textMaterial = new THREE.MeshMatcapMaterial();
// 		// textMaterial.wireframe = true;
// 		textMaterial.matcap = matcapTexture;

// 		const text = new THREE.Mesh(textGeometry, textMaterial);
// 		scene.add(text);

// 		const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
// 		// const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })


// 		console.time('donut'); // to calculate time taken ;))
// 		for (let i = 0; i < 100; i++) {

// 			const donut = new THREE.Mesh(donutGeometry, textMaterial)
// 			scene.add(donut)

// 			donut.position.x = (Math.random() - 0.5) * 10;
// 			donut.position.y = (Math.random() - 0.5) * 10;
// 			donut.position.z = (Math.random() - 0.5) * 10;

// 			// Add randomness to the rotation. No need to rotate all 3 axes, and because the donut is symmetric, half of a revolution is enough:
// 			donut.rotation.x = Math.random() * Math.PI
// donut.rotation.y = Math.random() * Math.PI

// 			// randomness to the scale. Be careful, though; we need to use the same value for all 3 axes (x, y, z):
// 			const scale = Math.random()
// donut.scale.set(scale, scale, scale)
// 		}
// 		console.timeEnd('donut');
// 	}
// fontLoader.load('fonts/helvetiker_regular.typeface.json', (font) => {
// fontLoader.load('fonts/Leoscar_Sans_Serif.typeface.json', (font) => {
// fontLoader.load('fonts/Skyer.typeface.json', (font) => {
// fontLoader.load('fonts/Baloo_Da_2_Regular.typeface.json', (font) => {
// fontLoader.load('fonts/Delius_Regular.json', (font) => {
// fontLoader.load('fonts/Gugi_Regular.json', (font) => {
// fontLoader.load('fonts/Comic_Neue_Regular.json', (font) => {
fontLoader.load('fonts/Itim_Regular.json', (font) => {

	// Create the first line: "Aswin V B"
	const nameGeometry = new TextGeometry('Aswin V B', {
		font: font,
		size: 0.7,
		height: 0.2,
		curveSegments: 10,
		bevelEnabled: true,
		bevelThickness: 0.03,
		bevelSize: 0.02,
		bevelOffset: 0,
		bevelSegments: 7
	});
	nameGeometry.center(); // Center horizontally
	nameGeometry.computeBoundingBox();

	// Create the second line: "3D Web Developer in the Making"
	const titleGeometry = new TextGeometry('3D Web Developer in the Making', {
		font: font,
		size: 0.35,
		height: 0.2,
		curveSegments: 10,
		bevelEnabled: true,
		bevelThickness: 0.03,
		bevelSize: 0.02,
		bevelOffset: 0,
		bevelSegments: 7
	});
	titleGeometry.center(); // Center horizontally
	titleGeometry.computeBoundingBox();


	// // Create the text
	// const textGeometry = new TextGeometry(
	// 	// 'Hello Three.js', 
	// 	// 'Aswin V B \n 3D Web Developer in the Making',
	// 	{
	// 		font: font,
	// 		size: 0.5,
	// 		height: 0.2,
	// 		curveSegments: 10,
	// 		bevelEnabled: true,
	// 		bevelThickness: 0.03,
	// 		bevelSize: 0.02,
	// 		bevelOffset: 0,
	// 		bevelSegments: 7
	// 	});
	// textGeometry.center();
	const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapDonutTexture });
	const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTextTexture });
	// const text = new THREE.Mesh(textGeometry, textMaterial);
	// scene.add(text);

	// Create meshes for both lines
	const nameMesh = new THREE.Mesh(nameGeometry, textMaterial);
	const titleMesh = new THREE.Mesh(titleGeometry, textMaterial);
	// scene.add(nameMesh);
	// scene.add(titleMesh);

	// Expand the text's bounding box for collision detection
	// const textBox = textGeometry.boundingBox.clone();
	// const textSpacing = 0.5; // Extra spacing around the text
	// textBox.expandByScalar(textSpacing); // Increases the box by 0.5 units in all directions

	// Calculate vertical offset
	const nameBox = nameGeometry.boundingBox;
	const titleBox = titleGeometry.boundingBox;
	const nameHeight = nameBox.max.y - nameBox.min.y;
	const titleHeight = titleBox.max.y - titleBox.min.y;
	const verticalGap = -0.12; // Small gap between the two lines

	// Position "Aswin V B" above "3D Web Developer in the Making"
	nameMesh.position.y = titleHeight / 2 + verticalGap + nameHeight / 2;
	titleMesh.position.y = -nameHeight / 2 - verticalGap - titleHeight / 2;

	// Create a group to hold both text meshes
	const textGroup = new THREE.Group();
	textGroup.add(nameMesh, titleMesh);
	scene.add(textGroup);

	// Compute the combined bounding box for collision detection
	textGroup.updateMatrixWorld();
	const textBox = new THREE.Box3().setFromObject(textGroup);
	const textSpacing = 0.5; // Extra spacing around the text
	textBox.expandByScalar(textSpacing);


	// const 

	// Donut setup
	// const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
	const donutGeometry = new THREE.SphereGeometry(0.3, 32, 16);
	const donuts = [];

	// Add 100 donuts
	for (let i = 0; i < 1000; i++) {
		const donut = new THREE.Mesh(donutGeometry, donutMaterial);

		// Step 1: Scale and rotate first
		const scale = (Math.random() - 0.5) * 2; // Scale between 0.5 and 1
		donut.scale.set(scale, scale, scale);
		donut.rotation.x = Math.random() * Math.PI;
		donut.rotation.y = Math.random() * Math.PI;

		// Step 2: Find a position with no collisions
		let placed = false;
		let tries = 0;
		const maxTries = 50;

		while (!placed && tries < maxTries) {
			// Set a random position
			donut.position.x = (Math.random() - 0.5) * 30;
			donut.position.y = (Math.random() - 0.5) * 30;
			donut.position.z = (Math.random() - 0.5) * 30;

			// Update and get donut’s bounding box
			donut.updateMatrixWorld();
			const donutBox = new THREE.Box3().setFromObject(donut);
			const donutSpacing = 0.5; // Spacing around each donut
			donutBox.expandByScalar(donutSpacing);

			// Check collision with text group
			if (donutBox.intersectsBox(textBox)) {
				tries++;
				continue;
			}

			// Check collision with other donuts
			placed = true;
			for (const otherDonut of donuts) {
				const otherBox = new THREE.Box3().setFromObject(otherDonut);
				otherBox.expandByScalar(donutSpacing);
				if (donutBox.intersectsBox(otherBox)) {
					placed = false;
					break;
				}
			}
			tries++;
		}

		// If we found a good spot, add the donut
		if (placed) {
			scene.add(donut);
			donuts.push(donut);
		} else {
			console.warn(`Could not place donut ${i} after ${maxTries} attempts`);
		}
	}
});





window.addEventListener('resize', () => {
	// Update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
	const elapsedTime = clock.getElapsedTime()

	// Update controls
	controls.update()

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame
	window.requestAnimationFrame(tick)
}

tick()