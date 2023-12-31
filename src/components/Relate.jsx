import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Relate = () => {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("dataNew");
    if (data) {
      const newDataArray = JSON.parse(data);
      setNewData(newDataArray);
    }
  }, []);

  return (
    <>
      {newData.length > 0 &&
        newData.map((item, index) => {
          return (
            <div key={`index${index}`} className="relate">
              <div>
                <img src={item.urlToImage} alt="image" className="relateImg" />
              </div>
              <h2 className="relateTitle">
                <Link to={`/articleDetail/${item.title}`}>{item.title}</Link>
              </h2>
            </div>
          );
        })}
    </>
  );
};

export default Relate;
