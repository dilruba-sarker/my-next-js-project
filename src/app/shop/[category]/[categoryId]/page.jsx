import React from 'react';

const  CatergoryDetails = async({params}) => {
    const {category,categoryId}=await params
    return (
        <div>
           <h1> Catergory Details id is {categoryId}</h1>
           <h1> Catergory Details id is {category}</h1>
        </div>
    );
};

export default CatergoryDetails;