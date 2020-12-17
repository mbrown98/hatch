import React from "react";

const ProjectDetails = ({ match }) => {
  const id = match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project {id}</span>
            <p>
              cccjnfdvdkj jk cnj sdkj ndfvjnvjvnsvcjn jkdfn jdnvdjbnvdj nfj
              bfdbv dvb
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Matt</div>
            <div>Sept 2nd</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
