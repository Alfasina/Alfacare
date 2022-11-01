import React from 'react';

const ProjectCard = ({image,description,id, title}) => {
  return (
    <div className='projCardDiv'>
    
        <img src={`${image}`} width={'98%'} className='progImage' alt={title} />
        <h4>{title}</h4>

        <p>{description}</p>
        <button className='btn'>Read More</button>
      
    </div>
  );
}

export default ProjectCard;
