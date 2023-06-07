/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import "../public/styles.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Details = ({ onItemClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  //   function handleClick(event) {
  //     const itemId = event.target.id;
  //     console.log(itemId);
  //     setSelectedItemId(itemId);
  //   }

  return (
    <div className="container my-3">
      <div className="row">
        {data &&
          data.map((item) => {
            return (
              <div className="col-md-4" key={item.show.id}>
                <div className="card my-4" style={{ width: "18rem" }}>
                  <img
                    src={item.show.image.medium}
                    className="card-img-top"
                    alt="Logo Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.show.name}</h5>
                    <Link
                      to="/summary"
                      className="btn btn-primary"
                      onClick={() => onItemClick(item.show.id, item)}
                      id={item.show.id}
                    >
                      Show Summary
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Details;
