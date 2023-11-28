import React from "react";

const Card = () => {
  return (

    <div className="card h-100">
      
      <img src="https://picsum.photos/500/326" className="card-img-top" alt="..." />
     
      <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      
      <div className="card-footer d-flex justify-content-center">
        <button type="button" className="btn btn-primary button">Let's Go!</button>
      </div>
    </div>

  );
};

export default Card;