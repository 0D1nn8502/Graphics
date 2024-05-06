import * as THREE from 'three'; 
import { OrbitControls } from 'three/examples/jsm/Addons.js'; 

const w  = window.innerWidth 
const h = window.innerHeight 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h); 
document.body.appendChild(renderer.domElement);

/// THE EARTH SYSTEM /// 

const earth_system = new THREE.Group(); 
earth_system.rotation.z = -23.4 * Math.PI / 180; 
scene.add(earth_system) 

///             //// 

new OrbitControls(camera, renderer.domElement); 


const loader = new THREE.TextureLoader(); 
const geometry = new THREE.IcosahedronGeometry(1, 16);

const material = new THREE.MeshStandardMaterial({
    map: loader.load("textures/8081_earthmap4k.jpg"),  
});

const earth = new THREE.Mesh(geometry, material);
earth_system.add(earth); 

const sunlight = new THREE.DirectionalLight(0xffffff); 
sunlight.position.set(-2, 0.5, 1.5) 
scene.add(sunlight) 

camera.position.z = 5; 

function animate() {
	requestAnimationFrame(animate);

    //earth.rotation.x += 0.001;
    earth.rotation.y += 0.002; 

	renderer.render(scene, camera);
}
animate();