import { h, Component } from 'preact';
import { Entity, Scene } from 'aframe-react';

class Shape extends Component {
  render() {
    return (
      <a-entity class="clickable" onClick={this.onClick}
        geometry="primitive: box"
        position="-2 0.5 -3"
        rotation="0 45 0"
        material="color: #4CC3D9" />
    )
  }
}

export { Shape };
