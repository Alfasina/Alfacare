import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({image,description,id, title}) => {
  return (
    <div className='projCardDiv'>
      <Link to={`/project/${title}`}>
    
        <img src={`${image}`} width={'98%'} className='progImage' alt={title} />
        <h3>{title}</h3>

        <p>{description}</p>
        <button className='btn'>Read More</button>
      </Link>
    </div>
  );
}

export default ProjectCard;
