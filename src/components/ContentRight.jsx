import { useEffect, useState } from "react";
import "../App.css";
import ContentRightBottom from "./ContentRightBottom";

function ContentRight() {
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
    <div>
      {newData.length > 0 &&
        newData.map((item, index) => {
          return (
            <div key={`index${index}`} className="content_right">
              <div>
                <img src={item.imageUrl} alt="image" className="content_img" />
              </div>
              <h2 className="content_title">{item.title}</h2>
            </div>
          );
        })}
      <ContentRightBottom />
    </div>
  );
}

export default ContentRight;
