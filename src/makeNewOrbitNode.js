import React, { Component } from 'react';

let orbitNodeRadius = 10;
let originX = 250;
let originY = 250;

let velocity = 40;
let originalRadius = 10;

const makeNewOrbitNode = (iterationNumber) =>
{
  let radius = originalRadius * Math.pow(2, iterationNumber);
  console.log(radius);
  let period = (2 * Math.PI * (radius / 10)) / velocity;
  let calculatedPeriod = (Math.PI / ((2 * Math.PI) / (1000 * period))) / 2;

	return class extends Component {
    constructor(props){
      super(props);

      this.state = { 
        radius: radius,
        theta: Math.PI / 2,
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
      theta = (theta + (Math.PI / calculatedPeriod)) % (Math.PI * 2); // Increment the angle

      let newX = originX + radius * Math.cos(theta); // Calculate new position
      let newY = originY + radius * Math.sin(theta);

      this.setState({ x: newX, y: newY, theta: theta });
    }

    render() 
    {
      return (
        <div>
          {/* Orbit ring */}
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
          {/* Orbit node */}
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

// Export orbits
export const OrbitFive = makeNewOrbitNode(4);
export const OrbitFour = makeNewOrbitNode(3);
export const OrbitThree = makeNewOrbitNode(2);
export const OrbitTwo = makeNewOrbitNode(1);
export const OrbitOne = makeNewOrbitNode(0);