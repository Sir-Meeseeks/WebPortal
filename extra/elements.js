// GunRay
var geometryRay = new THREE.TorusKnotGeometry( 0.4, 0.01, 103, 8, 3, 9);
var materialRay = new THREE.MeshBasicMaterial( { color: 0xEF7A26 } );
var ray1 = new THREE.Mesh( geometryRay, materialRay );
var ray2 = new THREE.Mesh( geometryRay, materialRay );
ray1.position.x = 6;
ray1.position.y = 3.35;
ray1.position.z = -16.5;
ray2.rotation.x = THREE.Math.degToRad( 90 );
ray2.position.x = ray1.position.x;
ray2.position.y = ray1.position.y;
ray2.position.z = ray1.position.z;
scene.add( ray1 );
scene.add( ray2 );

//GunRayCore
var geometryRayCore = new THREE.SphereGeometry( 0.1, 32, 32 );
var materialRayCore = new THREE.MeshBasicMaterial( {color: 0xEF7A26} );
var rayCore = new THREE.Mesh( geometryRayCore, materialRayCore );
rayCore.position.x = ray1.position.x;
rayCore.position.y = ray1.position.y;
rayCore.position.z = ray1.position.z;
scene.add( rayCore );