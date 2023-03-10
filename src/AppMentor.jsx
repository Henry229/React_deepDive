import React, { useState } from 'react';

const AppMentor = () => {
  const [person, setPerson] = useState({
    name: 'Henry',
    title: 'developer',
    mentor: {
      name: 'Bob',
      title: 'Senior developer',
    },
  });

  const nameSwitch = () => {
    const changeName = prompt("What are you going to switch mentor's name to?");
    setPerson((person) => ({
      ...person,
      mentor: { ...person.mentor, name: changeName },
    })); // 반드시 괄호를 써야 한다.
    // const updatedName = { ...person };
    // updatedName.mentor.name = changeName;
    // setPerson(updatedName);
  };

  const titleSwitch = () => {
    const changeTitle = prompt(
      "What are you going to switch mentor's title to?"
    );
    setPerson((person) => ({
      ...person,
      mentor: { ...person.mentor, title: changeTitle },
    })); // 반드시 괄호를 써야 한다.
    const updatedTitle = { ...person };
    updatedTitle.mentor.title = changeTitle;
    setPerson(updatedTitle);
  };

  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        The name of {person.name}'s mentor is {person.mentor.name}
      </p>
      <p>
        The title of {person.name}'s mentor is {person.mentor.title}
      </p>
      <button onClick={nameSwitch}>Switch the name of mentor</button>
      <button onClick={titleSwitch}>Switch the title of mentor</button>
    </div>
  );
};

export default AppMentor;
