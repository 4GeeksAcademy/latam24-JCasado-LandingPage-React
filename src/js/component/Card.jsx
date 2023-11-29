import React from "react";

const Card = () => {

  return (
    <div className="container mx-auto px-3 mb-3 ">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="card">
            <img
              src="https://picsum.photos/500/325"
              className="card-img-top"
              alt="..."/>
            <div className="card-body">
              <h4 className="card-title text-black">Card title</h4>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos neque eos, deleniti pariatur harum quia.
              </p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img
              src="https://picsum.photos/500/326"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-black">Card title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos neque eos, deleniti pariatur harum quia.
              </p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img
              src="https://picsum.photos/500/327"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-black">Card title</h4>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos neque eos, deleniti pariatur harum quia.
              </p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img
              src="https://picsum.photos/500/328"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-black">Card title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos neque eos, deleniti pariatur harum quia.
              </p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;