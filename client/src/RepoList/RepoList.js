import React from "react";
import "./../App";
// import { Link } from "react-router-dom";
import reactGif from "./../Pages/imgs/reactAPP.gif";
import fitnessGif from "./../Pages/imgs/fitnesstracker2.gif";
import recipeGif from "./../Pages/imgs/home_page_demo.gif";

const RepoList = ({ repos }) => {
  return (
    <>
      <h1 style={{ color: "#6c757d" }}>Pinned Repositories</h1>
      <div className="row pinned-repo">
        <div className="col-md-3">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src={recipeGif}
              className="pinned-card"
              alt="employee-directory"
            />
            <div className="card-body">
              <h5 className="card-title">Recipe Pal</h5>
              <p className="card-text">text</p>
              <a
                href="https://github.com/kaylamuraoka/Food_Application"
                className="btn btn-danger"
              >
                github
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "15rem", color: "6c757d" }}>
            <img src={fitnessGif} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fitness Tracker</h5>
              <p className="card-text">text</p>
              <a
                href="https://github.com/lhutchinson22/fitnessTracker"
                className="btn btn-danger"
              >
                github
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "15rem" }}>
            <img src={reactGif} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Employee Directory</h5>
              <p className="card-text">text</p>
              <a
                href="https://github.com/lhutchinson22/EmployeeDirectoryReact"
                className="btn btn-danger"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
      <>
        <h2 style={{ color: "#6c757d", textAlign: "center" }}>
          Other Repositories
        </h2>
        <div className="row" style={{}}>
          {repos &&
            repos.map((repo, index) => (
              <div key={index} className="card" style={{ width: "15rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{repo.full_name}</h5>
                  <p className="card-text">
                    {repo.html_url}
                    <br></br>
                    <strong>created</strong>: {repo.created_at}
                  </p>
                  <a
                    href="https://github.com/lhutchinson22"
                    className="btn btn-primary"
                  >
                    github
                  </a>
                </div>
              </div>
            ))}
        </div>
      </>
    </>
  );
};

export default RepoList;
