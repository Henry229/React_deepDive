const personReducer = (person, action) => {
  switch (action.type) {
    case 'updated': {
      const { prevName, switchName } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          return mentor.name === prevName
            ? { ...mentor, name: switchName }
            : mentor;
        }),
      };
    }
    case 'added': {
      const { addName, addTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: addName, title: addTitle }],
      };
    }
    case 'deleted': {
      const { deleteName } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== deleteName),
      };
    }
    default:
      throw Error(`Unknown action type: ' ${action.type}`);
  }
};

export default personReducer;
