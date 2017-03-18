import React, { Component } from 'react';

let orbitNodeRadius = 10;
let originX = 100;
let originY = 50;

const makeNewOrbitNode = (radius) =>
{
	return class extends Component {
    constructor(props){
      super(props);

      this.state = { 
        radius: radius, 
        theta: 0,
        x: 0, 
        y: 0,
      };
    }

    componentDidMount()
    {
      setInterval(this.spin.bind(this), 1);
    }

    spin()
    {
      var {theta, radius} = this.state;
      theta = (theta + Math.PI / 360) % (Math.PI * 2); // Increment the angle

      let newX = originX + radius * Math.cos(theta); 
      let newY = originY + radius * Math.sin(theta);

      this.setState({ x: newX, y: newY, theta: theta });
    }

    render() 
    {
      return (
        <div>
          <div 
            style={{ 
              position: 'absolute',
              borderWidth: 1,
              top: (originY - this.state.radius) + orbitNodeRadius / 2, 
              left: (originX - this.state.radius) + orbitNodeRadius / 2, 
              width: this.state.radius * 2, 
              height: this.state.radius * 2, 
              borderRadius: this.state.radius * 2, 
              borderStyle: 'solid', 
              borderColor: '#123456' 
            }}
          />
          <div 
            style={{ 
              backgroundColor: 'red', 
              width: orbitNodeRadius, 
              height: orbitNodeRadius,
              borderRadius: orbitNodeRadius,
              position: 'absolute',
              top: this.state.y,
              left: this.state.x,
            }}
          />
        </div>
      );
    }
  };
};

export const LargeOrbit = makeNewOrbitNode(50);
export const SmallOrbit = makeNewOrbitNode(25);