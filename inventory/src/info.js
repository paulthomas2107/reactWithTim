import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const title = this.props.title;
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>Inventory System</h1>
          <p>Manage your stock.</p>
          <p>{showTitle ? title : "No title"}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Nothing to see !</p>
        </div>
      );
    }
  }
}

Info.defaultProps = {
  title: "<Default>",
};
export default Info;
