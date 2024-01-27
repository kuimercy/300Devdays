import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
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
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, 1);
        }}
      ></Button>
      <Container styles={({border:'1px solid black', padding:'1rem',})}/>
    </div>
  )
}

export default App;
