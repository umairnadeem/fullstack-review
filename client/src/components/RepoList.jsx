import React from 'react';
import Repo from './Repo.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <p>There are {props.repos.length} repos.</p>
    <p>{props.newEntries} new repos added.</p>
    <ul>
      {props.repos.map((repo, key) => <Repo key={key} repo={repo}/>)}
    </ul>
  </div>
);

export default RepoList;