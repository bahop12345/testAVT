import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageVideo = () => {
  const [dataNew, setDataNew] = useState([]);
  console.log(dataNew);
  useEffect(() => {
    const data = localStorage.getItem("dataNew");
    if (data) {
      const newDataArray = JSON.parse(data);
      setDataNew(newDataArray);
    }
  }, []);

  const handleDeleteVideo = (article) => {
    const modifiedSource = { ...article };
    delete modifiedSource.videoUrl;
    const updatedDataNew = dataNew.map((item) => {
      if (item === article) {
        return modifiedSource;
      }
      return item;
    });
    setDataNew(updatedDataNew);
    localStorage.setItem("dataNew", JSON.stringify(updatedDataNew));
  };

  return (
    <Container>
      <div className="manageImage_button">
        <Link
          to="/admin"
          type="submit"
          variant="danger"
          className="buttonAdmin"
        >
          {"<"} Admin
        </Link>
      </div>

      <Row>
        <div className="manage_Container">
          {dataNew.map((article, index) =>
            article.videoUrl ? (
              <div key={index}>
                <Col>
                  <video controls width={400} height={300}>
                    <source src={article.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <Button
                    type="submit"
                    onClick={() => handleDeleteVideo(article)}
                    className="manageImage_button"
                  >
                    Delete Video
                  </Button>
                </Col>
              </div>
            ) : null
          )}
        </div>
      </Row>
    </Container>
  );
};

export default ManageVideo;
