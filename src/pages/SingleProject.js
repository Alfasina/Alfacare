import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SingleProject = () => {
    const {parags}=useParams()
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
                <title>{parags}| Alfacare</title>
      </Helmet>
      <h2>{parags}</h2>
    </div>
  );
}

export default SingleProject;
