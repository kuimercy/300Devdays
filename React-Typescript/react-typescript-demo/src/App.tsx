import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
function App() {
  const personName = {
    first: "Troy",
    last: "Smith",
  };

  const nameList = [
    {
      first: "Troy",
      last: "Smith",
    },
    {
      first: "John",
      last: "Doe",
    },
    {
      first: "Karl",
      last: "Walters",
    },
  ];

  return (
    <div className="App">
      <Greet name="John" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading> Oscar goes to Mexico</Heading>
      </Oscar>
    </div>
  );
}

export default App;
