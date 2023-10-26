import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageImage = () => {
  const [dataNew, setDataNew] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("dataNew");
    if (data) {
      const newDataArray = JSON.parse(data);
      setDataNew(newDataArray);
    }
  }, []);

  const handleDeleteImage = (article) => {
    const modifiedSource = { ...article };
    console.log(modifiedSource);
    const cc = delete modifiedSource.urlToImage;
    console.log(cc);
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
            article.urlToImage ? (
              <div key={index}>
                <Col>
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="manageImage_image"
                  />
                  <Button
                    type="submit"
                    onClick={() => handleDeleteImage(article)}
                    className="manageImage_button"
                  >
                    Delete Image
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

export default ManageImage;
