import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";

const Admin = () => {
  const [dataNew, setDataNew] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("dataNew");
    if (data) {
      const newDataArray = JSON.parse(data);
      console.log(newDataArray);
      setDataNew(newDataArray);
    }
  }, []);

  const [newArticle, setNewArticle] = useState({
    title: "",
    author: "",
    content: "",
    imageUrl: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({
      ...newArticle,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      setNewArticle({
        ...newArticle,
        image: file,
      });
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    const updatedDataNew = dataNew.filter((item) => item.id !== id);
    setDataNew(updatedDataNew);
    localStorage.setItem("dataNew", JSON.stringify(updatedDataNew));
  };

  const handleSaveArticle = (e) => {
    e.preventDefault();
    if (
      newArticle.title &&
      newArticle.author &&
      newArticle.content &&
      newArticle.image
    ) {
      const storedData = JSON.parse(localStorage.getItem("dataNew")) || [];

      const newId = storedData.length + 1;
      const newArticleObject = {
        ...newArticle,
        id: newId,
        imageUrl: URL.createObjectURL(newArticle.image),
      };

      const updatedDataNew = [...storedData, newArticleObject];
      setDataNew(updatedDataNew);

      localStorage.setItem("dataNew", JSON.stringify(updatedDataNew));

      toast.success("Add new successfully!");
      setNewArticle({
        title: "",
        author: "",
        content: "",
        image: null,
      });
    }
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col log={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={newArticle.title}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col log={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                name="author"
                value={newArticle.author}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Content"
            name="content"
            value={newArticle.content}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="imageUrl"
                accept="image/*"
                value={newArticle.imageUrl}
                onChange={handleImageUpload}
              />
            </Form.Group>
            {newArticle.image && (
              <img
                src={URL.createObjectURL(newArticle.image)}
                alt="Preview"
                style={{ height: 50, marginBottom: 30 }}
              />
            )}
          </Col>
          <Col lg={6}></Col>
        </Row>

        <Button type="submit" onClick={handleSaveArticle}>
          Save
        </Button>
      </Form>

      {dataNew.length > 0 &&
        dataNew.map((item, index) => {
          console.log(item);
          return (
            <div key={`index${index}`} className="admin">
              <div>
                <div>
                  <img src={item.imageUrl} alt="image" className="contentImg" />
                </div>
                <h2 className="adminTitle">
                  <Link to={`/articleDetail/${item.title}`}>{item.title}</Link>
                </h2>
              </div>
              <Button
                type="submit"
                variant="danger"
                className="buttonAdmin"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </div>
          );
        })}
    </Container>
  );
};

export default Admin;
