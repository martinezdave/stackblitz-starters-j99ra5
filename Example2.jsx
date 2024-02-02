import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRaining: false };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(state => ({
      isRaining: !state.isRaining
    }));
  }

  render() {
    let date = new Date();
    let hour = date.getHours();
    let greeting;

    if (hour < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }

    return (
      <div>
        <h1>{greeting}</h1>
        <button onClick={this.handleToggle}>
          {this.state.isRaining ? "Rain" : "Shine"}
        </button>
      </div>
    );
  }
}

export default Greeting;
