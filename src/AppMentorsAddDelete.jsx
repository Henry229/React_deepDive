import React, { useState } from 'react';

const AppMentorsAddDelete = () => {
  const [person, setPerson] = useState({
    name: 'Henry',
    title: 'developer',
    mentors: [
      {
        name: 'Bob',
        title: 'Senior developer',
      },
      {
        name: 'James',
        title: 'Senior developer',
      },
    ],
  });

  const nameSwitch = () => {
    const prevName = prompt(
      "What are you going to want to switch mentor's name?"
    );
    const switchName = prompt("What are you going to switch mentor's name to?");

    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.map((mentor) => {
        return mentor.name === prevName
          ? { ...mentor, name: switchName }
          : mentor;
      }),
    }));
  };

  const addMentor = () => {
    const addName = prompt(
      "What is a name of mentor you're going to want to add?"
    );
    const addTitle = prompt(
      "What is a title of mentor you're going to want to add?"
    );

    setPerson((prev) => ({
      ...prev,
      mentors: [...prev.mentors, { name: addName, title: addTitle }],
    }));
  };

  const deleteMentor = () => {
    const deleteName = prompt(
      "What is a name of mentor you're going to want to delete?"
    );

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== deleteName),
    }));
  };

  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            <p>
              {mentor.name} ({mentor.title})
            </p>
          </li>
        ))}
      </ul>
      <button onClick={nameSwitch}>Switch the name of mentor</button>
      <button onClick={addMentor}>Add Mentor</button>
      <button onClick={deleteMentor}>Delete Mentor</button>
    </div>
  );
};

export default AppMentorsAddDelete;
