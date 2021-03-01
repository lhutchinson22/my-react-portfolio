import React from "react";
import { Link } from "react-router-dom";

const RepoList = ({ repos }) => {
  return (
    <div className="blog-list">
      {repos &&
        repos.map((repo) => (
          <div className="repo-preview" key={repo.id}>
            {/* <Link to={`/blogs/${blog.id}`}> */}
            <h2>{repo.name}</h2>
            <p>{repos.archive_url}</p>
            <p>{repos.created_at}</p>
            {/* </Link> */}
          </div>
        ))}
    </div>
  );
};

export default RepoList;
