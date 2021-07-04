import { Button } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from "react";

function SingleSearch({img,title,price,location}) {
  return (
    <div>
      <div className="search__card shadow d-flex align-items-center justify-content-between p-3 bg-white radius my-2 w-100">
        <div className="card__img__wrapper overflow-hidden radius w-25 me-md-3">
          <img
            src={img}
            alt="..."
            className="w-100 h-100"
          />
        </div>

        <div className="card__right d-flex flex-grow-1 justify-content-between px-4 h-100">
          <div>
            <div className="d-flex">
              <LocationOnIcon className="me-1 mb-2" />
              {location}
            </div>
            <h5 className="mb-0 fw-bold">{title}</h5>
            <p>15 guestes. 31 bedrooms. 30 beds. 31 baths</p>

            <Button className="bg-tomato border rounded-pill mt-4 text-white fs-13">
              Hotel room
            </Button>
          </div>

          <div>
            <FavoriteBorderIcon className="w-13 pointer" />
            <h5 className="mb-0 mt-2 fw-bold">${price}/ night</h5>
            <p>$113 total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSearch;
