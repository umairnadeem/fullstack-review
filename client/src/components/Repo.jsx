import React from 'react';

const Repo = (props) => (
    <li>
        <strong>{props.repo.name}</strong><br/>
        Forks: {props.repo.forks}<br/>
        User: {props.repo.user}
    </li>
  );
  
  export default Repo;