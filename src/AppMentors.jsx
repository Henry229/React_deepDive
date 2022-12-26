import React, { useState } from 'react';

const AppMentors = () => {
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
    //----------------------------------------------------------------
    // setPerson((prev) => ({
    //   ...prev,
    //   mentors: prev.mentors.map((mentor) => {
    //     if (mentor.name === prevName) {
    //       return {
    //         ...mentor,
    //         name: switchName,
    //       };
    //     }
    //     return mentor;
    //   }),
    // }));

    //________________________________________________________________
    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.map((mentor) => {
        return mentor.name === prevName
          ? { ...mentor, name: switchName }
          : mentor;
      }),
    }));

    // const updated = { ...person };
    // updated.mentors.map((mentor) => {
    //   return mentor.name === prevName
    //     ? { ...mentor, name: switchName }
    //     : mentor;
    // });
    // console.log('---', updated);
    // setPerson(updated);

    // console.log(updated);
    // const updated = person.mentors.find(
    //   (mentor) => person.mentors.name === prevName
    // );
    // person.mentors.map((mentor) => {
    //   if (mentor.name === prevName) {
    //     console.log('****', prevName);
    //     setPerson((person) => ({
    //       ...person,
    //       mentor: { ...mentor, name: switchName },
    //     }));
    //   }
    //   return person;
    // });

    // ------------------------------------------------------------------
    // setPerson((person) => ({
    //   ...person,
    //   mentor: { ...person.mentor, name: changeName },
    // })); // 반드시 괄호를 써야 한다.
    // const updatedName = { ...person };
    // updatedName.mentor.name = changeName;
    // setPerson(updatedName);
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
    </div>
  );
};

export default AppMentors;
