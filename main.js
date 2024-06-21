import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import {loadGLTF} from "./libs/loader.js";

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new MindARThree({
      container: document.body,
      imageTargetSrc: './assets/targets/musicband.mind'
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    // const earth = await loadGLTF('./assets/models/planets/Earth.glb');
    // earth.scene.scale.set(0.1, 0.1, 0.1);
    // earth.scene.position.set(0, -0.4, 0);

    const raccoon = await loadGLTF('./assets/models/musicband-raccoon/scene.gltf');
    raccoon.scene.scale.set(0.1, 0.1, 0.1);
    raccoon.scene.position.set(0, -0.4, 0);

    // const earthAnchor = mindarThree.addAnchor(0);
    // earthAnchor.group.add(earth.scene);

    const raccoonAnchor = mindarThree.addAnchor(0);
    raccoonAnchor.group.add(raccoon.scene);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
