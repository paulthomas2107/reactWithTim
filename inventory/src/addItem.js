import { PropTypes } from "prop-types";

export default function AddItem(props) {
  //
  const propText = props.text; // props
  const propNumber = props.number; //props

  return (
    <form>
      <label for="text-input">Type something: </label>
      <input type="text" value={propText} id="text-input"></input>
      <p>
        {propNumber} and {props.myName}
      </p>
    </form>
  );
}

AddItem.defaultProps = {
  number: 217,
};

AddItem.prototypes = {
  number: PropTypes.number,
  text: PropTypes.string,
  myName: PropTypes.string,
};
