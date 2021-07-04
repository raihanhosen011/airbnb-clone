import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function SingleGuest({year,age}) {
  const [count,setCount] = useState(0)

  return (
    <div className="single__guest d-flex align-items-center justify-content-between py-3 border-bottom">
      <div>
        <h5 className="fw-bold mb-0 fs-14">{year}</h5>
        <span>{age}</span>
      </div>

      <div className="d-flex align-items-center">
        
        <div onClick={() => setCount(count - 1)} className="rounded-circle border min pointer">
          <RemoveIcon className="w-18" />
        </div>

        <span className="mx-2">{count}</span>

        <div onClick={() => setCount(count + 1)} className="rounded-circle border min pointer">
          <AddIcon className="w-18" />
        </div>

      </div>
    </div>
  );
}

export default SingleGuest;