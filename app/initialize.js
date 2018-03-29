/**
 * @fileoverview
 * This file imports all our required packages.
 * It also includes 3rd party A-Frame components.
 * Finally, it mounts the app to the root node.
 */

import 'aframe'
import 'aframe-animation-component'
import 'aframe-event-set-component'
import './components/aframe-lowpoly'
import './components/aframe-environment'
import './components/aframe-effects'
import 'aframe-controller-cursor-component';
import 'aframe-extras';
import 'aframe-dev-components';
import 'aframe-fps-counter-component';
import 'aframe-teleport-controls';
import 'aframe-aabb-collider-component';
// import 'aframe-text-component';
import 'aframe-mouse-cursor-component';
import 'aframe-text-geometry-component';
import 'aframe-gui';


import { h, render } from 'preact'
import Main from './main'

document.addEventListener('DOMContentLoaded', () => {
  render(<Main />, document.querySelector('#app'))
})
