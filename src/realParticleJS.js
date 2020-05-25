import React, { Component } from "react";
import Particles from "react-particles-js";

const particalOpt = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 8,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 0.3,
        size: 0,
        opacity: 0
      },
      repulse: {
        distance: 200,
        duration: 0.5
      }
    }
  }
};

class Canvas extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`
    });
  };
  render() {
    const { width, height } = this.state;

    return <Particles {...this.state} params={particalOpt} />;
  }
}

export default Canvas;
