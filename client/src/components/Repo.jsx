import React from 'react';

const Repo = (props) => (
    <li>
        <a href={props.repo.url}><strong>{props.repo.name}</strong></a>
        <div id='fork'>Forks: {props.repo.forks}</div>
        <div id='user'>User: {props.repo.user}</div>
    </li>
  );
  
  export default Repo;