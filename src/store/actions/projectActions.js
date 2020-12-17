export const createProject = (project) => {
  //usually would return an object with type and payload
  //thunk allows us to return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    const firestore = getFirestore();
    console.log("firestore", firestore);
    firestore
      .collection("projects")
      .add({
        title: project.title,
        content: project.content,
        authorFirstName: "Matthew",
        authorLastName: "Brown",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        //dispatch action again
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
