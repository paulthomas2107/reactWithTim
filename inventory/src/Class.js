import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
      console.log("Clicked !");
      this.props.destroy(false);
  }

  componentDidMount() {
    console.log("Mounted !");
  }

  componentDidUpdate() {
    console.log("Updated !");
  }

  componentWillUnmount() {
    console.log("Will cleanup / unmount !");
  }
  render() {
    return (
      <div>
        <p>Clicked : {this.state.count}</p>
        <button
          button
          className="btn btn-primary"
          onClick={() => this.clickedButton()}
        >
          Click Me !
        </button>
      </div>
    );
  }
}
