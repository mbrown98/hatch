export const createProject = (project) => {
  //usually would return an object with type and payload
  //thunk allows us to return a function
  return (dispatch, getState) => {
    //make async call

    //dispatch action again
    dispatch({ type: "CREATE_PROJECT", project: project });
  };
};
