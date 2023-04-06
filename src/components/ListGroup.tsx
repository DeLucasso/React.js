import { Fragment } from "react";

function ListGroup() {
  const items = ["Prague", "New York", "San Francisco", "Tokyo", "Bejrut"];

  return (
    // So we wrapped all items to a <Fragment> and it's same with <h1> only
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="true">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
