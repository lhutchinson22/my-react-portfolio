import React from "react";
// import { Link } from "react-router-dom";
import "./../App";

const RepoList = ({ repos }) => {
  return (
    <div className="container">
      <h1>Pinned Repositories</h1>
      <div className="row pinned-repo">
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Reciple Pal</h5>
              <p className="card-text">text</p>
              <a
                href="https://github.com/kaylamuraoka/Food_Application"
                className="btn btn-primary"
              >
                github
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fitness Tracker</h5>
              <p className="card-text">text</p>
              <a
                href="https://github.com/lhutchinson22/fitnessTracker"
                className="btn btn-primary"
              >
                github
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Employee Directory</h5>
              <p className="card-text">text</p>
              <a
                href="https://github.com/lhutchinson22/EmployeeDirectoryReact"
                className="btn btn-primary"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-list">
        <h2>Other Repositories</h2>
        {repos &&
          repos.map((repo) => (
            <div className="repo-preview" key={repo.id}>
              <div className="card clearfix" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{repo.name}</h5>
                  <p className="card-text">
                    {repo.html_url}
                    {repo.created_at}
                  </p>
                  <a
                    href="https://github.com/lhutchinson22"
                    className="btn btn-primary"
                  >
                    github
                  </a>
                </div>
              </div>
              {/* <Link to={`https://github.com/lhutchinson22/`}>
                <h2>{repo.name}</h2>
                <p>{repo.html_url}</p>
                <p>{repo.created_at}</p>
              </Link> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RepoList;
