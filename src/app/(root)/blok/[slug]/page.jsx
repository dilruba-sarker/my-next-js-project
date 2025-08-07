import React from 'react';

const SingleBlokpage = ({ params, searchParams }) => {
  const { slug } = params;

  return (
    <div> 
      <h1>Single Blog Page: {slug}</h1>
      <ul>
        {
          Object.entries(searchParams).map(([key, value]) => (
            <li key={key}>
              {key}: {Array.isArray(value) ? value.join(", ") : value}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default SingleBlokpage;
