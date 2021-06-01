export default function AddItem() {
  const defaultName = "Donkey...";

  return (
    <form>
      <label for="text-input">Type something: </label>
      <input type="text" value={defaultName} id="text-input"></input>
    </form>
  );
}
