const projectReducer = (
  state = {
    projects: [
      { id: "1", title: "hello there", content: "blah blah blah" },
      { id: "2", title: "hello there", content: "blah blah blah" },
      { id: "3", title: "hello there", content: "blah blah blah" },
    ],
  },
  action
) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project: ", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
