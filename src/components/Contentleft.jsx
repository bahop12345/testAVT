import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Relate from "./Relate";

const Contentleft = () => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("dataNew");
    if (data) {
      const newDataArray = JSON.parse(data);
      const dataSlice = newDataArray.slice(0, 4);
      setNewData(dataSlice);
    }
  }, []);

  return (
    <>
      <div className="content">
        {newData.length > 0 &&
          newData.map((item, index) => {
            return (
              <div key={`index${index}`} className="content_left">
                <div>
                  <img
                    src={item.imageUrl}
                    alt="image"
                    className="content_left--img"
                  />
                </div>
                <h2 className="content_left_title">
                  <Link to={`/articleDetail/${item.title}`}>{item.title}</Link>
                </h2>
              </div>
            );
          })}
      </div>
      <Relate />
    </>
  );
};

export default Contentleft;
