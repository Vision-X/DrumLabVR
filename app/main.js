import { h, Component } from 'preact';
import { Entity, Scene } from 'aframe-react';
import { Shape } from './components/Shape';

var interval = false;

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorIndex: 0,
      intervalId: 0,
      bpm: 80,
      inTime: 250,
      intervalLeft: 0,
      intervalRight: 0,
      sounds: {
                kick1: "src: url(/sounds/kick-1.wav); poolSize: 10; on: mousedown",
                kick2: "src: url(/sounds/kick-2.wav); poolSize: 10; on: mousedown",
                kick3: "src: url(/sounds/kick-3.wav); poolSize: 16; on: mousedown",
                snare1: "src: url(/sounds/snare-1.wav); poolSize: 10; on: mousedown",
                snare2: "src: url(/sounds/snare-2.wav); poolSize: 10; on: mousedown",
                snare3: "src: url(/sounds/snare-3.wav); poolSize: 10; on: mousedown",
                hihat1: "src: url(/sounds/E808_CH-03.wav); poolSize: 10; on: mousedown",
                hihat2: "src: url(/sounds/E808_CH-07.wav); poolSize: 10; on: mousedown",
                hihat3: "src: url(/sounds/E808_OH-07.wav); poolSize: 10; on: mousedown"
              }
    };
    this._handleClick = this._handleClick.bind(this);
    this._handleMouseUp = this._handleMouseUp.bind(this);
    this._handleMouseDown = this._handleMouseDown.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
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

      <a-scene stats>
        <a-assets>
          <img src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid" crossorigin="anonymous" />
          <img src="https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg" id="chrome" crossorigin="anonymous" />
          <img id="sky" src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg" crossorigin="anonymous" />
          <img id="floor" src="https://cdn.aframe.io/a-painter/images/floor.jpg" crossOrigin="anonymous" />
          <a-asset-item id="exoFont" src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2Black.typeface.json?1490305922150"></a-asset-item>
          <a-asset-item id="exoItalicFont" src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2BlackItalic.typeface.json?1490305922725"></a-asset-item>
        /*  <a-asset-item id="speaker-obj" src="/speaker-model.obj"></a-asset-item>
          <a-asset-item id="speaker-mtl" src="/speaker-materials.mtl"></a-asset-item>
          <a-asset-item id="studio-obj" src="/studio-minimal-object.obj"></a-asset-item>
          <a-asset-item id="studio-mtl" src="/studio-minimal-materials.mtl"></a-asset-item> */
        </a-assets>


      <a-entity wasd-controls id="cameraRig" position="2.339 0 1.614" rotation="0 90 0">
        <a-entity id="head" rotation="0 90 0" camera look-controls></a-entity>
        <a-entity id="left-hand" raycaster="objects: .clickable;" line="color: blue;" oculus-touch-controls="hand: left;" laser-controls="hand: left; objects: .clickable;"></a-entity>
        <a-entity id="right-hand" aabb-collider="objects: .clickable;" raycaster="objects: .clickable;" line="color: blue;" oculus-touch-controls="hand: right;" laser-controls="hand: right; objects: .clickable;"></a-entity>
      </a-entity>


       <a-entity id="ground"
                geometry="primitive: circle; radius: 100" rotation="-90 0 0"
                material="src: #floor; transparent: false; metalness:0.2; roughness: 0.4;">
       </a-entity>
       <a-entity light="color: #ccccff; intensity: 1; type: ambient;" visible=""></a-entity>
{/*        <a-entity light="color: #ffaaff; intensity: 1.5" position="5 5 5"></a-entity> */}

        <a-entity light="color: white; intensity: 0.5" position="-5 5 15"></a-entity>
        <a-entity light="color: white; type: ambient;"></a-entity>
        <a-sky src="#sky" rotation="0 -90 0"></a-sky>

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
{/*        <a-entity position="0 2 0">
          <a-entity position="0 0 0" rotation="0 -60 0">
            <a-entity geometry="primitive: cylinder"
                        mixin="curved-panel translucent-black"
                        scale="1.5 1.5 0.75">
                <a-entity layout="type:line; margin: 0.5" rotation="0 0 -90" position="-2.5 0.7 -3.7">
                  <a-entity bmfont-text="text: Welcome; color: white; align: center;" rotation="0 0 90"></a-entity>
                  <a-entity bmfont-text="text: to; color: white; align: center;" rotation="0 0 90"></a-entity>
                  <a-entity bmfont-text="text: DrumLabVR; color: white; align: center;" rotation="0 0 90"></a-entity>
                  <a-entity bmfont-text="text: by Mike Marlow; color: white; align: center;" rotation="0 0 90"></a-entity>
                </a-entity>
            </a-entity>
          </a-entity>
        </a-entity> */}

///////////////////////////////////

        <a-entity position="-9.5 2 -9" rotation="10 25 0">
          <a-entity position="6.7 5.06 6.5" rotation="10 -25 5" scale="0.6 1.2 1" text-geometry="value: DrumLab; font: #exoFont; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; size: 1.0; height: 0.5;" material="color:blue; metalness:0.9; roughness: 0.05; sphericalEnvMap: #chrome;"></a-entity>
          <a-entity position="9.95 5.5 8.66" rotation="10 -25 5" text-geometry="value: VR; font: #exoItalicFont; style: italic; size: 0.8; weight: bold; height: 0;"
                    material="shader: flat; color: white"></a-entity>
          <a-entity position="9.95 5.5 8.66" rotation="10 -25 5" text-geometry="value: VR; font: #exoItalicFont; style: italic; size: 0.8; weight: bold; height: 0; bevelEnabled: true; bevelSize: 0.04; bevelThickness: 0.04; curveSegments: 1"
                    material="shader: flat; color: white; transparent: true; opacity: 0.4"></a-entity>
        </a-entity>

/////////////////////////////////

{/*        <a-entity obj-model="obj: #studio-obj; mtl: #studio-mtl" scale="1.3 1.3 1.3" position="1.634 0.743 1.979" rotation="0 90 0"></a-entity> */}

  { /*    <a-entity collider-check class="clickable" onMouseDown={this._handleMouseDownLeft} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.06 width=0.06"
          position="1.914 0.912 1.794"
          rotation="0 90 0"
          scale="0.100 0.100 0.100"
          material="color: #124E78"
          sound="src: url(/sounds/kick-1.wav); poolSize: 6; on: hover">
          <a-animation attribute="material.color" begin="mouseover" from="lightblue" to="#124E78" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="hover" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity collider-check class="clickable" onMouseDown={this._handleMouseDownLeft} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.06 width=0.06"
          position="1.914 0.912 1.665"
          rotation="0 90 0"
          scale="0.100 0.100 0.100"
          material="color: #124E78"
          sound="src: url(/sounds/kick-1.wav); poolSize: 6; on: hover">
          <a-animation attribute="material.color" begin="mouseover" from="lightblue" to="#124E78" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="hover" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity collider-check class="clickable" onMouseDown={this._handleMouseDownLeft} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.06 width=0.06"
          position="1.914 0.912 1.520"
          rotation="0 90 0"
          scale="0.100 0.100 0.100"
          material="color: #124E78"
          sound="src: url(/sounds/kick-1.wav); poolSize: 6; on: hover">
          <a-animation attribute="material.color" begin="mouseover" from="lightblue" to="#124E78" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="hover" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity collider-check class="clickable" onMouseDown={this._handleMouseDownLeft} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.06 width=0.06"
          position="1.773 0.912 1.793"
          rotation="0 90 0"
          scale="0.100 0.100 0.100"
          material="color: #104"
          sound="src: url(/sounds/kick-1.wav); poolSize: 6; on: hover">
          <a-animation attribute="material.color" begin="mouseover" from="lightblue" to="#104" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="hover" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity collider-check class="clickable" onMouseDown={this._handleMouseDownLeft} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.06 width=0.06"
          position="1.773 0.912 1.662"
          rotation="0 90 0"
          scale="0.100 0.100 0.100"
          material="color: #104"
          sound="src: url(/sounds/kick-1.wav); poolSize: 6; on: hover">
          <a-animation attribute="material.color" begin="mouseover" from="lightblue" to="#104" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="hover" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity collider-check class="clickable" onMouseDown={this._handleMouseDownLeft} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.06 width=0.06"
          position="1.773 0.912 1.520"
          rotation="0 90 0"
          scale="0.100 0.100 0.100"
          material="color: #104"
          sound="src: url(/sounds/kick-1.wav); poolSize: 6; on: hover">
          <a-animation attribute="material.color" begin="mouseover" from="lightblue" to="#104" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="hover" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity collider-check class="clickable" onMouseDown={this._handleMouseDownLeft} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.06 width=0.06"
          position="1.625 0.912 1.793"
          rotation="0 90 0"
          scale="0.100 0.100 0.100"
          material="color: #104"
          sound="src: url(/sounds/kick-1.wav); poolSize: 6; on: hover">
          <a-animation attribute="material.color" begin="mouseover" from="lightblue" to="#104" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="hover" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity collider-check class="clickable" onMouseDown={this._handleMouseDownLeft} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.06 width=0.06"
          position="1.625 0.912 1.662"
          rotation="0 90 0"
          scale="0.100 0.100 0.100"
          material="color: #104"
          sound="src: url(/sounds/kick-1.wav); poolSize: 6; on: hover">
          <a-animation attribute="material.color" begin="mouseover" from="lightblue" to="#104" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="hover" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity collider-check class="clickable" onMouseDown={this._handleMouseDownLeft} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.06 width=0.06"
          position="1.625 0.912 1.520"
          rotation="0 90 0"
          scale="0.100 0.100 0.100"
          material="color: #104"
          sound="src: url(/sounds/kick-1.wav); poolSize: 6; on: hover">
          <a-animation attribute="material.color" begin="mouseover" from="lightblue" to="#104" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="hover" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity> */}
//////////////////////////////////////////

{/*        <a-entity obj-model="obj: #speaker-obj; mtl: #speaker-mtl" scale="2 2 2" position="-2 1.900 -4" rotation="-10 160 10"></a-entity>
        <a-entity obj-model="obj: #speaker-obj; mtl: #speaker-mtl" scale="2 2 2" position="6 1.900 -4" rotation="-10 90 10"></a-entity> */}

//////////////////////////////////////////
        <a-entity collider-check class="one clickable" onMouseEnter={this.onMouseEnter} onMouseDown={this._handleMouseDown} onMouseUp={this._handleMouseUp} onClick={this._handleClick}
          geometry="primitive: box; depth=0.2 height=0.5 width=0.5"
          position="0.5 0.5 -4"
          rotation="0 0 0"
          material="color: #124E78"
          sound={this.state.sounds.kick1}>
          <a-animation attribute="material.color" begin="mousedown" from="lightblue" to="#124E78" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="two clickable" onMouseEnter={this.onMouseEnter} onMouseDown={this._handleMouseDown} onMouseUp={this._handleMouseUp}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="0.5 2 -4"
          rotation="0 0 0"
          material="color: #124E78"
          sound={this.state.sounds.kick2}>
          <a-animation attribute="material.color" begin="mousedown" from="lightblue" to="#124E78" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="three clickable" onMouseEnter={this.onMouseEnter} onMouseDown={this._handleMouseDown} onMouseUp={this._handleMouseUp} onClick={this._handleClick}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="0.5 3.5 -4"
          rotation="0 0 0"
          material="color: #124E78"
          sound={this.state.sounds.kick3}>
          <a-animation attribute="material.color" begin="mousedown" from="lightblue" to="#124E78" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>
///////////////////////////////////////////////
        <a-entity class="four clickable" onMouseEnter={this.onMouseEnter} onMouseDown={this._handleMouseDown} onMouseUp={this._handleMouseUp} onClick={this._handleClick}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="2 0.5 -4"
          rotation="0 0 0"
          material="color: #D74E09"
          sound={this.state.sounds.snare1}>
          <a-animation attribute="material.color" begin="mousedown" from="red" to="#D74E09" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="five clickable" onMouseEnter={this.onMouseEnter} onMouseDown={this._handleMouseDown} onMouseUp={this._handleMouseUp} onClick={this._handleClick}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="2 2 -4"
          rotation="0 0 0"
          material="color: #D74E09"
          sound={this.state.sounds.snare2}>
          <a-animation attribute="material.color" begin="mousedown" from="red" to="#D74E09" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="six clickable" onMouseEnter={this.onMouseEnter} onMouseDown={this._handleMouseDown} onMouseUp={this._handleMouseUp} onClick={this._handleClick}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="2 3.5 -4"
          rotation="0 0 0"
          material="color: #D74E09"
          sound={this.state.sounds.snare3}>
          <a-animation attribute="material.color" begin="mousedown" from="red" to="#D74E09" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>
///////////////////////////////////////////////

        <a-entity class="seven clickable" onMouseEnter={this.onMouseEnter} onMouseDown={this._handleMouseDown} onMouseUp={this._handleMouseUp} onClick={this._handleClick}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="3.5 0.5 -4"
          rotation="0 0 0"
          material="color: #0C8346"
          sound={this.state.sounds.hihat1}>
          <a-animation attribute="material.color" begin="mousedown" from="purple" to="#0C8346" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="eight clickable" onMouseEnter={this.onMouseEnter} onMouseDown={this._handleMouseDown} onMouseUp={this._handleMouseUp} onClick={this._handleClick}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="3.5 2 -4"
          rotation="0 0 0"
          material="color: #0C8346"
          sound={this.state.sounds.hihat2}>
          <a-animation attribute="material.color" begin="mousedown" from="purple" to="#0C8346" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

        <a-entity class="nine clickable" onMouseEnter={this.onMouseEnter} onMouseDown={this._handleMouseDown} onMouseUp={this._handleMouseUp} onClick={this._handleClick}
          geometry="primitive: box; depth=0.0 height=0.5 width=0.5"
          position="3.5 3.5 -4"
          rotation="0 0 0"
          material="color: #0C8346"
          sound={this.state.sounds.hihat3}>
          <a-animation attribute="material.color" begin="mousedown" from="purple" to="#0C8346" dur="100"></a-animation>
          <a-animation attribute="rotation" begin="mousedown" dur="100" fill="forwards" to="0 90 0"></a-animation>
        </a-entity>

/////////////////////////////////

        <a-gui-flex-container class="increaser" flex-direction="column" justify-content="center"
            align-items="normal" opacity="0.7" width="4.5" height="4.5"
            position="7.5 2 -4" panel-color="lightblue" rotation="0 -20 0">
            <a-gui-label value="Select drums: " width="4" height="0.75"></a-gui-label>
            <a-gui-flex-container class="soundset" flex-direction="row" justify-content="center" align-items= "center" height="1" width="0">
              <a-gui-button id="set1" class="clickable" width="1.3" height="0.75"
                onclick={this._handleClick}
                value="808"
                hover-color="yellow"
                font-family="Arial"
                margin="0 0 0.05 0"
                border-color="black">
              </a-gui-button>
              <a-gui-button id="set2" class="clickable" width="1.3" height="0.75"
                onclick={this._handleClick}
                value="Modern"
                hover-color="yellow"
                font-family="Arial"
                margin="0 0 0.05 0"
                border-color="black">
              </a-gui-button>
              <a-gui-button id="set3" class="clickable" width="1.3" height="0.75"
                onclick={this._handleClick}
                value="Classic"
                hover-color="yellow"
                font-family="Arial"
                margin="0 0 0.05 0"
                border-color="black">
              </a-gui-button>
            </a-gui-flex-container>
            <a-gui-label value="Set repeat: " width="4" height="0.75"></a-gui-label>
            <a-gui-flex-container class="increaser" flex-direction="row" justify-content="center" align-items= "center" height="1" width="0">
              <a-gui-button id="quarter" class="clickable" width="1.3" height="0.75"
    				      onclick={this._handleClick}
    				      value="1/4"
                  hover-color="purple"
    				      font-family="Arial"
    				      margin="0 0 0.05 0"
                  border-color="black">
              </a-gui-button>
              <a-gui-button id="eighth" class="clickable" width="1.3" height="0.75"
        			    onclick={this._handleClick}
        			    value="1/8"
                  hover-color="purple"
      			      font-family="Arial"
      			      margin="0 0 0.05 0"
                  border-color="black">
              </a-gui-button>
              <a-gui-button id="sixteenth" class="clickable" width="1.3" height="0.75"
                  onclick={this._handleClick}
                  value="1/16"
                  hover-color="purple"
                  font-family="Arial"
                  margin="0 0 0.05 0"
                  border-color="black">
              </a-gui-button>
          </a-gui-flex-container>
        </a-gui-flex-container>

      {/*</Scene> */}
    </a-scene>
    )
  }

  inValue() {
    return this.state.inTime;
  }

  onMouseEnter(event) {

  }

  componentWillMount() {
    console.log(this.state.inTime, "will mount this.state.inTime");
  }

  _handleMouseDown(event) {
    event.preventDefault();
    if (event.detail.cursorEl.id === "right-hand" && this.state.intervalRight === 0) {
          let rI = setInterval(function() {
              event.target.components.sound.playSound();
            }, this.state.inTime);
            this.setState({intervalRight: rI});
    }
   if (event.detail.cursorEl.id === "left-hand" && this.state.intervalLeft === 0)  {
          let lI = setInterval(function() {
              event.target.components.sound.playSound();
            }, this.state.inTime);
            this.setState({intervalLeft: lI});
    }
  }

  _handleMouseUp(event) {
    event.preventDefault();
    if (event.detail.cursorEl.id === "right-hand") {
        if (this.state.intervalRight > 0) {
            clearInterval(this.state.intervalRight);
            this.setState({intervalRight: 0})
          }
    }
    if (event.detail.cursorEl.id === "left-hand") {
        if (this.state.intervalLeft > 0) {
            clearInterval(this.state.intervalLeft);
            this.setState({intervalLeft: 0});
          }
    }
  }

  _handleClick(event) {
    event.preventDefault();
    if (event.target.parentEl.id === "quarter") {
      this.setState({inTime: 500})
    }
    if (event.target.parentEl.id === "eighth") {
      this.setState({inTime: 250})
    }
    if (event.target.parentEl.id === "sixteenth") {
      this.setState({inTime: 125})
    }
    if (event.target.parentEl.id === "set1") {
      this.setState({sounds: {
                              kick1: "src: url(/sounds/kick-1.wav); poolSize: 10; on: mousedown",
                              kick2: "src: url(/sounds/kick-2.wav); poolSize: 10; on: mousedown",
                              kick3: "src: url(/sounds/kick-3.wav); poolSize: 16; on: mousedown",
                              snare1: "src: url(/sounds/snare-1.wav); poolSize: 10; on: mousedown",
                              snare2: "src: url(/sounds/snare-2.wav); poolSize: 10; on: mousedown",
                              snare3: "src: url(/sounds/snare-3.wav); poolSize: 10; on: mousedown",
                              hihat1: "src: url(/sounds/E808_CH-03.wav); poolSize: 10; on: mousedown",
                              hihat2: "src: url(/sounds/E808_CH-07.wav); poolSize: 10; on: mousedown",
                              hihat3: "src: url(/sounds/E808_OH-07.wav); poolSize: 10; on: mousedown"
                            }

    })
  }
    if (event.target.parentEl.id === "set2") {
      this.setState({sounds: {
                              kick1: "src: url(/sounds/m-kick1.wav); poolSize: 10; on: mousedown",
                              kick2: "src: url(/sounds/m-kick2.wav); poolSize: 10; on: mousedown",
                              kick3: "src: url(/sounds/m-kick3.wav); poolSize: 10; on: mousedown",
                              snare1: "src: url(/sounds/m-snare1.wav); poolSize: 10; on: mousedown",
                              snare2: "src: url(/sounds/m-snare2.wav); poolSize: 10; on: mousedown",
                              snare3: "src: url(/sounds/m-snare3.wav); poolSize: 10; on: mousedown",
                              hihat1: "src: url(/sounds/m-hh1.wav); poolSize: 10; on: mousedown",
                              hihat2: "src: url(/sounds/m-hh2.wav); poolSize: 10; on: mousedown",
                              hihat3: "src: url(/sounds/m-hh3.wav); poolSize: 10; on: mousedown"
                            }

    })
  }
    if (event.target.parentEl.id === "set3") {
      this.setState({sounds: {
                              kick1: "src: url(/sounds/c-kick1.wav); poolSize: 10; on: mousedown",
                              kick2: "src: url(/sounds/c-kick2.wav); poolSize: 10; on: mousedown",
                              kick3: "src: url(/sounds/c-kick3.wav); poolSize: 10; on: mousedown",
                              snare1: "src: url(/sounds/c-snare1.wav); poolSize: 10; on: mousedown",
                              snare2: "src: url(/sounds/c-snare2.wav); poolSize: 10; on: mousedown",
                              snare3: "src: url(/sounds/c-snare3.wav); poolSize: 10; on: mousedown",
                              hihat1: "src: url(/sounds/c-hh1.wav); poolSize: 10; on: mousedown",
                              hihat2: "src: url(/sounds/c-hh2.wav); poolSize: 10; on: mousedown",
                              hihat3: "src: url(/sounds/c-hh3.wav); poolSize: 10; on: mousedown"
                            }

    })
  }
}
}

export default Main
