import ListGroup from "./components/ListGroup.tsx";

function App() {
  // Always close the component! <Message></Message> or /
  return (
    <div>
      <ListGroup />
    </div>
  );
}

// We have to export the component, so it can be used somewhere else.
export default App;
