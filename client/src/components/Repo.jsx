import React from 'react';

const Repo = (props) => (
    <li>
        <a href={props.repo.url}><strong>{props.repo.name}</strong></a><br/>
        Forks: {props.repo.forks}<br/>
        User: {props.repo.user}
    </li>
  );
  
  export default Repo;