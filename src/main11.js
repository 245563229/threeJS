//BufferGeometry设置定点创建矩形
import { createApp } from "vue";
import "./style.css";
import * as THREE from "three";
import App from "./App.vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
import gsap from "gsap";
// 创建相机
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
const renderer = new THREE.WebGLRenderer();
//创建场景
const scene = new THREE.Scene();
renderer.setSize(window.innerWidth, window.innerHeight);
//创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1);
//设置材质
const material = new THREE.MeshBasicMaterial({ color: 0x4aa5f0 });
// const vertices = Float32Array([-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0]);
//设置相机高度
camera.position.z = 5;
//
document.body.appendChild(renderer.domElement);
// renderer.render(scene, camera);
//添加坐标轴服务器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
//设置时钟
const clock = new THREE.Clock();

//创建控制器
const controls = new OrbitControls(camera, renderer.domElement);
//设置控制器阻尼，让其更真实
controls.enableDamping = true;
//摄像头位置属性
camera.position.set(0, 20, 10);
controls.update();
function animate(time) {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
//gasp设置动画
window.addEventListener("resize", () => {
  console.log("画面变化");
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新摄像机的投影矩阵
  camera.updateProjectionMatrix();
  //更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  //设置渲染器像素比
  renderer.setPixelRatio(window.devicePixelRatio);
});
window.addEventListener("dblclick", () => {
  //双击控制屏幕全屏
  const fullScreenElement = document.fullscreenElement;
  if (fullScreenElement) {
    document.exitFullscreen();
  } else {
    renderer.domElement.requestFullscreen();
  }
});
//初始化gui
const gui = new dat.GUI();
gui
  .min(0)
  .max(5)
  .step(0.01)
  .name("移动x轴")
  .onChange((val) => {
    console.log("被修改为", val);
  })
  .onFinishChange((val) => {
    console.log("完全停下来触发", val);
  });
//设置按钮触发事件
gui.add(colorSet, "firstFun").name("物体运动");
//设置立方体
createApp(App).mount("#app");
