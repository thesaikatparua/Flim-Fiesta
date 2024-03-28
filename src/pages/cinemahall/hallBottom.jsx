import React from "react";
import Hall from "./hall";
import data from "../../data/hallData.json";

const hallBottom = () => {
  return (
    <>
      <div>
        {
          data.map((item)=>(
            <Hall
              hallName={item.hall}
              hallAddress={item.address}
              firstShow={item.show1}
              secondShow={item.show2}
              thirdShow={item.show3}
              location={item.Location}
            />
          ))
        }
      </div>
    </>
  );
};

export default hallBottom;
