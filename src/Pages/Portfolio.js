import React from "react";
import "./../App.css";
import useFetch from "../utils/UseFetch";
// import RepoList from "../RepoList/RepoList";

const Portfolio = () => {
  const { error, isPending, data: repos } = useFetch(
    "https://api.github.com/users/lhutchinson22/repos"
  );

  return (
    <>
      <div className="banner-image paraPort">
        <h1 className="banner-header">Portfolio</h1>
      </div>
      <div className="container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {repos && repos.map((repo) => console.log(repo))}
      </div>
    </>
  );
};

export default Portfolio;
