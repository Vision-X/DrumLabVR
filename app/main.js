/**
 * @fileoverview
 * This is our main A-Frame application.
 * It defines the main A-Frame Scene which gets mounted root div.
 */

import { h, Component } from 'preact';
import { Entity, Scene } from 'aframe-react';
import { Shape } from './components/Shape';
import 'aframe-controller-cursor-component';
import 'aframe-extras';
import 'aframe-dev-components';
import 'aframe-fps-counter-component';
import 'aframe-teleport-controls';
import 'aframe-aabb-collider-component';


const COLORS = ['#D92B6A', '#9564F2', '#FFCF59'];

class Main extends Component {
  constructor() {
    super()
    this.state = {
      colorIndex: 0,
      spherePosition: { x: 0.0, y: 4, z: -10.0 }

    }
    this._handleClick = this._handleClick.bind(this);

  }

  componentDidMount() {

  }

  render() {
    return (
       /* <Scene
        effects="bloom, film, fxaa"
        fxaa
        bloom={{
          radius: 0.99
        }}
        film={{
          sIntensity: 0.15,
          nIntensity: 0.25
        }}
        environment={{
          preset: 'starry',
          seed: 1,
          lightPosition: { x: 200.0, y: 30.0, z: -50.0 },
          fog: 0.8,
          ground: 'canyon',
          groundYScale: 5.0,
          groundTexture: 'walkernoise',
          groundColor: '#755b5c',
          grid: 'none'
        }}
      >
        <Entity
          primitive="a-light"
          type="directional"
          color="#FFF"
          intensity={1}
          position={{ x: 2.5, y: 0.0, z: 0.0 }}
          animation__oscillate={{
            property: 'position',
            dur: 2000,
            dir: 'alternate',
            easing: 'linear',
            loop: true,
            from: { x: 2.5, y: 0.0, z: 0.0 },
            to: { x: 3.0, y: 0.25, z: 0.0 }
          }}
        /> */
      <a-scene>
        <a-assets>
          <img id="pink" src="https://img.gs/bbdkhfbzkk/stretch/http://i.imgur.com/1hyyIUi.jpg" crossorigin="anonymous" />
          <img src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid" crossorigin="anonymous" />
          <img src="https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg" id="chrome" crossorigin="anonymous" />
          <img id="sky" src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg" crossorigin="anonymous" />
      { /*    <audio id="k3" src="./assets/sounds/kick-1" preload="auto" />
      <a-asset-item id="k1" src="kick1" response-type="arraybuffer"></a-asset-item>
          <audio id="k1" src="./assets/sounds/kick-1" preload="auto" />
          <audio id="k2" src="./assets/sounds/kick-1" preload="auto" />
          <audio id="s1" src="./assets/sounds/kick-1" preload="auto" />
          <audio id="s2" src="./assets/sounds/kick-1" preload="auto" />
          <audio id="s3" src="./assets/sounds/kick-1" preload="auto" />
          <audio id="hh1" src="./assets/sounds/kick-1" preload="auto" />
          <audio id="hh2" src="./assets/sounds/kick-1" preload="auto" />
          <audio id="hh3" src="./assets/sounds/kick-1" preload="auto" /> */}
        </a-assets>

      {/*
        <a-entity id="teleHand" hand-controls="left"></a-entity>
        <a-entity id="blockHand" hand-controls="right"></a-entity>
        <a-entity id="left-hand" teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head;"></a-entity>
        <a-entity id="right-hand" teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head;"></a-entity>
         <a-entity id="cameraRig">
         <a-entity id="head" camera positon ="0 1.6 0" look-controls wasd-controls="#cameraRig;"></a-entity>
         <a-entity teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head;" oculus-touch-controls="hand: right"></a-entity>
         </a-entity>
         <a-entity id="left-hand" raycaster="objects: .clickable" oculus-touch-controls="hand: left" controller-cursor line="color: red; opacity: 0.5"></a-entity>
         <a-entity teleport-controls="startEvents: teleportstart; endEvents: teleportend; type: line"></a-entity>
         */}
        <a-entity id="cameraRig">
          <a-entity id="head" camera wasd-controls look-controls></a-entity>
          <a-entity id="my-raycaster" aabb-collider="objects: .clickable;" raycaster="objects: .clickable;" line="color: blue;" oculus-touch-controls="hand: left;" laser-controls="hand: left; objects: .clickable;"></a-entity>
          <a-entity fps-counter id="right-hand" raycaster="objects: .clickable;" oculus-touch-controls="hand: right;" teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; type: parabolic;"></a-entity>
        </a-entity>


        <a-entity
          geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0"
          material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;"></a-entity>
        <a-entity light="color: #ccccff; intensity: 1; type: ambient;" visible=""></a-entity>
        <a-entity light="color: #ffaaff; intensity: 1.5" position="5 5 5"></a-entity>
        <a-entity light="color: white; intensity: 0.5" position="-5 5 15"></a-entity>
        <a-entity light="color: white; type: ambient;"></a-entity>
        <a-sky src="#sky" rotation="0 -90 0"></a-sky>
        <a-entity fps-counter></a-entity>

        {/* <Shape onClick={this._handleClick}/> */}
        { /*
        <Entity
          class="clickable"
          lowpoly={{
            color: COLORS[this.state.colorIndex],
            nodes: true,
            opacity: 0.15,
            wireframe: false
          }}
          primitive="a-cylinder"
          detail={2}
          events={{
            click: this._handleClick.bind(this)
          }}
          radius={1}
          position={this.state.spherePosition}
          color="#FAFAF1"
          animation__rotate={{
            property: 'rotation',
            dur: 6000,
            easing: 'linear',
            loop: true,
            to: { x: 0, y: 360, z: 0 }
          }}
          animation__oscillate={{
            property: 'position',
            dur: 2000,
            dir: 'alternate',
            easing: 'linear',
            loop: true,
            from: this.state.spherePosition,
            to: {
              x: this.state.spherePosition.x -.25,
              y: this.state.spherePosition.y + 1.25,
              z: this.state.spherePosition.z + .25
            }
          }}
        /> */}

      {/*  <a-entity class="clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: box"
          position="-2 0.5 -3"
          rotation="0 45 0"
          material="color: #4CC3D9" /> */}

      {/*  <a-entity
          geometry="primitive: sphere; radius: 1.25;"
          position=".5 0 -3"
          material="color: #EF2D5E" /> */}

      { /*  <a-entity class="clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: cylinder; radius: 0.5, height: 1.5"
          position="0.5 0.75 -2"
          <a-entity audio-visualizer="src: url(/sounds/kick-1.wav)" audio-visualizer-kick></a-entity>
          material="color: #FFC65D" /> */}


        <a-entity collider-check class="one clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: box; depth=0.2 height=0.5 width=0.5"
          position="0.5 0.5 -4"
          rotation="0 0 0"
          material="color: #104"
          sound="src: url(/sounds/kick-1.wav); poolSize: 10; on: mousedown">
          <a-animation attribute="material.color" begin="mousedown" from="lightblue" to="#104" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="two clickable"
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="0.5 2 -4"
          rotation="0 0 0"
          material="color: #104"
          sound="src: url(/sounds/kick-2.wav); poolSize: 10; on: mousedown">
          <a-animation attribute="material.color" begin="mousedown" from="lightblue" to="#104" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="three clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="0.5 3.5 -4"
          rotation="0 0 0"
          material="color: #104"
          sound="src: url(/sounds/kick-3.wav); poolSize: 10; on: mousedown">
          <a-animation attribute="material.color" begin="mousedown" from="lightblue" to="#104" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>
///////////////////////////////////////////////
        <a-entity class="four clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="2 0.5 -4"
          rotation="0 0 0"
          material="color: #404"
          sound="src: url(/sounds/snare-1.wav); poolSize: 10; mousedown">
          <a-animation attribute="material.color" begin="mousedown" from="red" to="#404" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="five clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="2 2 -4"
          rotation="0 0 0"
          material="color: #404"
          sound="src: url(/sounds/snare-2.wav); poolSize: 10; on: mousedown">
          <a-animation attribute="material.color" begin="mousedown" from="red" to="#404" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="six clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="2 3.5 -4"
          rotation="0 0 0"
          material="color: #404"
          sound="src: url(/sounds/snare-3.wav); poolSize: 10; on: mousedown">
          <a-animation attribute="material.color" begin="mousedown" from="red" to="#404" dur="250"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="250" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>
///////////////////////////////////////////////

        <a-entity class="seven clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="3.5 0.5 -4"
          rotation="0 0 0"
          material="color: #EEE"
          sound="src: url(/sounds/E808_CH-03.wav); poolSize: 10; on: mousedown">
          <a-animation attribute="material.color" begin="mousedown" from="purple" to="#EEE" dur="250"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="250" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="eight clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="3.5 2 -4"
          rotation="0 0 0"
          material="color: #EEE"
          sound="src: url(/sounds/E808_CH-07.wav); poolSize: 10; on: mousedown">
          <a-animation attribute="material.color" begin="mousedown" from="purple" to="#EEE" dur="250"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="250" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="nine clickable" onClick={this._handleClick.bind(this)}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="3.5 3.5 -4"
          rotation="0 0 0"
          material="color: #EEE"
          sound="src: url(/sounds/E808_OH-07.wav); poolSize: 10; on: mousedown">
          <a-animation attribute="material.color" begin="mousedown" from="purple" to="#EEE" dur="250"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="250" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

      { /*  <a-entity
          geometry="primitive: plane; width: 4; height: 4"
          position="0 0 -4"
          rotation="-90 0 0"
          material="color: #7BC8A4" />  */}

    {/*    <Entity primitive="a-camera" look-controls>
          <Entity
            primitive="a-cursor"
            cursor={{ fuse: false }}
            material={{ color: 'white', shader: 'flat', opacity: 0.75 }}
            geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
            event-set__1={{
              _event: 'mouseenter',
              scale: { x: 1.4, y: 1.4, z: 1.4 }
            }}
            event-set__2={{
              _event: 'mouseleave',
              scale: { x: 1, y: 1, z: 1 }
            }}
            raycaster={{
              objects: '.clickable'
            }}
          />
        </Entity> */}
      {/*</Scene> */}
    </a-scene>
    )
  }

  _handleClick(event) {
    console.log("clicked");
    console.log("event.target", event.target);
    var entity = document.querySelector('.clickable');
    console.log("sounddd entity val: ", entity.components.sound);
    console.log(event, " ....wtf is this event evaluate to?");
    if (event) {
      console.log("event!!!!");
      // if (entity.components.sound.evtDetail.isPlaying == true) {
      //   console.log("jeyahhh boiiiiiiiiiiiiii");
      //   entity.components.sound.evtDetail.isPlaying = false;
      //   entity.components.sound.playSound();
      // }
    }
    console.log("triggerdown");
    var caster = document.querySelector('#my-raycaster')
    var raycaster = document.querySelector('#my-raycaster').components.raycaster;
    // var cubes = document.querySelectorAll('.clickable');
    // console.log("current cube maybeeee?...", cubes);
    // cubes.components.raycaster.refreshObjects();
    // cubes.addEventListener("model-loaded", () => {
    //   raycaster.refreshObjects();
    // })
    // entity.components.sound.stopSound();
    // entity.components.sound.playSound();
    // this.setState({
    //   colorIndex: (this.state.colorIndex + 1) % COLORS.length
    // })
  }
}

export default Main
