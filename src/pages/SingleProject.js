import React from 'react';
import { useParams } from 'react-router-dom';
const SingleProject = () => {
    const {parags}=useParams()
  return (
    <div>
      <h2>{parags}</h2>
    </div>
  );
}

export default SingleProject;
