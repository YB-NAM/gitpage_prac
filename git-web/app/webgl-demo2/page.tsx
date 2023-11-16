"use client";
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import * as THREE from 'three';

const RollingGame: React.FC = () => {
  let numCylinders = 1;
  const cylinders: THREE.Mesh[] = [];
  let numCones = 1;
  const cones: THREE.Mesh[] = [];
  let rollLeft = false;
  let rollRight = false;
  let rollFar = false;
  let rollNear = false;
  let sphere: THREE.Mesh;

  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  useEffect(() => {
    createScene();

    // Cleanup function
    return () => {
      // Access the current value of the ref
      
      const renderer = rendererRef.current;
      // Check if the renderer is defined before accessing its properties
      if (renderer) {
        const rendererDom = renderer.domElement;
        rendererDom.parentNode?.removeChild(rendererDom);
      }
    };
  }, []);

  // Function to create cylinders
  function createCylinders(scene: THREE.Scene) {
    for (let i = 0; i < numCylinders; i++) {
      const cylinderGeometry = new THREE.CylinderGeometry(1.0, 1.0, getRandomHeight(), 100);
      const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder.position.set(getRandomPosition(), 0, getRandomPosition());
      cylinder.castShadow = true;
      scene.add(cylinder);
      cylinders.push(cylinder);
    }
  }

  // Function to create cones
  function createCones(scene: THREE.Scene) {
    for (let i = 0; i < numCones; i++) {
      const coneGeometry = new THREE.CylinderGeometry(0, 2, getRandomHeight(), 100);
      const coneMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
      const cone = new THREE.Mesh(coneGeometry, coneMaterial);
      cone.position.set(getRandomPosition(), 0, getRandomPosition());
      cone.castShadow = true;
      scene.add(cone);
      cones.push(cone);
    }
  }

  function getRandomPosition() {
    return Math.random() * 50 - 25;
  }

  function getRandomHeight() {
    return Math.random() * 30 + 10;
  }

  function handleCollisions(sphere: THREE.Mesh) {
    for (let i = 0; i < cylinders.length; i++) {
      const cylinder = cylinders[i];
      if (sphere.position.distanceTo(cylinder.position) < 2) {
        const direction = new THREE.Vector3().subVectors(cylinder.position, sphere.position).normalize();
        const distance = 2 - sphere.position.distanceTo(cylinder.position);
        cylinder.position.addScaledVector(direction, distance);
      }
    }
  }

  function handleCollisions2(sphere: THREE.Mesh) {
    for (let i = 0; i < cones.length; i++) {
      const cone = cones[i];
      if (sphere.position.distanceTo(cone.position) < 2) {
        const direction = new THREE.Vector3().subVectors(cone.position, sphere.position).normalize();
        const distance = 2 - sphere.position.distanceTo(cone.position);
        cone.position.addScaledVector(direction, distance);
      }
    }
  }

  function handleCollisions3(cylinder: THREE.Mesh) {
    for (let i = 0; i < cones.length; i++) {
      const cone = cones[i];
      if (cylinder.position.distanceTo(cone.position) < 2) {
        const direction = new THREE.Vector3().subVectors(cone.position, cylinder.position).normalize();
        const distance = 2 - cylinder.position.distanceTo(cone.position);
        cone.position.addScaledVector(direction, distance);
      }
    }
  }

  function handleCylinderCollisions() {
    for (let i = 0; i < numCylinders; i++) {
      for (let j = i + 1; j < numCylinders; j++) {
        const cylinder1 = cylinders[i];
        const cylinder2 = cylinders[j];

        if (cylindersIntersect(cylinder1, cylinder2)) {
          const direction = new THREE.Vector3().subVectors(cylinder1.position, cylinder2.position).normalize();
          const overlapDistance = getOverlapDistance(cylinder1, cylinder2);
          const displacement = direction.multiplyScalar(overlapDistance / 2);
          cylinder1.position.add(displacement);
          cylinder2.position.sub(displacement);
        }
      }
    }
  }

  function cylindersIntersect(cylinder1: THREE.Mesh, cylinder2: THREE.Mesh) {
    // Cast the geometries to CylinderGeometry
    const geometry1 = cylinder1.geometry as THREE.CylinderGeometry;
    const geometry2 = cylinder2.geometry as THREE.CylinderGeometry;
  
    // Use the 'parameters' property for the radius
    const combinedRadius = geometry1.parameters.radiusTop + geometry2.parameters.radiusTop;
    const distance = cylinder1.position.distanceTo(cylinder2.position);
    return distance < combinedRadius;
  }
  
  function getOverlapDistance(cylinder1: THREE.Mesh, cylinder2: THREE.Mesh) {
    // Cast the geometries to CylinderGeometry
    const geometry1 = cylinder1.geometry as THREE.CylinderGeometry;
    const geometry2 = cylinder2.geometry as THREE.CylinderGeometry;
  
    // Use the 'parameters' property for the radius
    const combinedRadius = geometry1.parameters.radiusTop + geometry2.parameters.radiusTop;
    const distance = cylinder1.position.distanceTo(cylinder2.position);
    return combinedRadius - distance;
  }

  let rotateAxis = new THREE.Vector3();

  function onKeyDown(event: React.KeyboardEvent) {
    const key = event.key.toLowerCase();
    if (key === 'arrowleft') {
      rollFar = false;
      rollNear = true;
      rotateAxis.set(0, 1, 0);
    } else if (key === 'arrowright') {
      rollFar = true;
      rollNear = false;
      rotateAxis.set(0, -1, 0);
    } else if (key === 'arrowup') {
      rollLeft = false;
      rollRight = true;
      rotateAxis.set(1, 0, 0);
    } else if (key === 'arrowdown') {
      rollLeft = true;
      rollRight = false;
      rotateAxis.set(-1, 0, 0);
    } else if (key === 'r') {
      resetSpherePosition();
    } else if (key === 'q') {
      location.reload();
    }
  }

  function resetSpherePosition() {
    sphere.position.set(0, 0, 0);
  }

  function createScene() {
    numCylinders = (10);
    numCones = (10);
    const inputContainer = document.getElementById('inputContainer');
    if (inputContainer) {
      inputContainer.style.display = 'none';
    }

  // Set up the scene
  const myScene = new THREE.Scene();

  // Set up the camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 40, 0);
  camera.lookAt(0, 0, 0);

  // Initialize renderer and assign it to the ref
  rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
  const renderer = rendererRef.current;

  
    renderer.setSize(window.innerWidth-50, window.innerHeight-50);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);

    // Create a sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x00aaff, roughness: 0.2, metalness: 0.9 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    myScene.add(sphere);

    // Create the floor
    const floorGeometry = new THREE.PlaneGeometry(50, 50);
    const floorMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1;
    floor.receiveShadow = true;
    myScene.add(floor);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    myScene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    const lightDistance = 10;
    directionalLight.position.set(lightDistance, camera.position.y, 0);
    directionalLight.target.position.set(0, -1, 0);
    directionalLight.castShadow = true;
    myScene.add(directionalLight);

    // Set up shadow
    directionalLight.shadow.mapSize.width = 8192;
    directionalLight.shadow.mapSize.height = 8192;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = -50;
    directionalLight.shadow.camera.bottom = 50;

    createCylinders(myScene);
    createCones(myScene);

    document.addEventListener("keydown", onKeyDown);
    const rotationSpeed = 0.03;

    function animate() {
      requestAnimationFrame(animate);

      handleCollisions(sphere);
      handleCollisions2(sphere);
      for (let i = 0; i < numCylinders; i++) {
        handleCollisions3(cylinders[i]);
      }
      handleCylinderCollisions();
      for (let i = 0; i < numCones; i++) {
        if (cones[i].position.x > 26 || cones[i].position.z > 26 || cones[i].position.z < -26 || cones[i].position.x < -26) {
          cones[i].position.y -= 0.1;
        }
      }

      for (let i = 0; i < numCylinders; i++) {
        if (cylinders[i].position.x > 26 || cylinders[i].position.z > 26 || cylinders[i].position.z < -26 || cylinders[i].position.x < -26) {
          cylinders[i].position.y -= 0.1;
        }
      }

      if (sphere.position.x > 26 || sphere.position.z > 26 || sphere.position.z < -26 || sphere.position.x < -26) {
        sphere.position.y -= 0.1;
        rollLeft = rollRight = rollFar = rollNear = false;
      } else if (rollLeft) {
        sphere.position.z += 0.05;
      } else if (rollRight) {
        sphere.position.z -= 0.05;
      }
      if (rollFar) {
        sphere.position.x += 0.05;
      } else if (rollNear) {
        sphere.position.x -= 0.05;
      }

      directionalLight.position.set(
        Math.cos(Date.now() * 0.001) * lightDistance,
        camera.position.y,
        Math.sin(Date.now() * 0.001) * lightDistance
      );

      sphere.rotateOnWorldAxis(rotateAxis, rotationSpeed);

      renderer.render(myScene, camera);
    }

    animate();
  }

  return (
    <div className="wrapper">
      <a href="/"><Button className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200" size="sm">
              Home
            </Button></a>
            <a href="/sample2"><Button className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200" size="sm">
              Back
            </Button></a>
    </div>
  );
};



export default RollingGame;
