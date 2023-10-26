import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Admin = () => {
  const [dataNew, setDataNew] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState({ image: null, imageUrl: "" });

  useEffect(() => {
    const data = localStorage.getItem("dataNew");
    if (data) {
      const newDataArray = JSON.parse(data);
      setDataNew(newDataArray);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUrl({ ...url, image: file, imageUrl: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUrl({ ...url, video: file, videoUrl: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addPost = async (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: title,
      author: author,
      content: content,
      videoUrl: url.videoUrl,
      description: description,
      urlToImage: url.imageUrl,
    };
    const newcc = [newPost, ...dataNew];
    setDataNew(newcc);
    localStorage.setItem("dataNew", JSON.stringify(newcc));

    setTitle("");
    setAuthor("");
    setContent("");
    setDescription("");
    setUrl({ image: null, imageUrl: "", video: null, videoUrl: "" });
  };

  const handleDelete = (id) => {
    const updatedDataNew = dataNew.filter((item) => item.id !== id);
    setDataNew(updatedDataNew);
    localStorage.setItem("dataNew", JSON.stringify(updatedDataNew));
  };

  return (
    <Container>
      <Row>
        <Col lg={6}></Col>
        <Col lg={6}>
          <div className="manage">
            <Link
              to="/admin/image"
              type="submit"
              variant="danger"
              className="buttonAdmin"
            >
              Management Image
            </Link>
            <Link
              to="/admin/video"
              type="submit"
              variant="danger"
              className="buttonAdmin"
            >
              Management Video
            </Link>
          </div>
        </Col>
      </Row>
      <Form>
        <Row>
          <Col log={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="imageUrl"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Form.Group>
            {url.image && (
              <img
                src={url.imageUrl}
                alt="Preview"
                style={{ height: 50, marginBottom: 30 }}
              />
            )}
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Video</Form.Label>
              <Form.Control
                type="file"
                name="video"
                accept="video/*"
                onChange={handleVideoUpload}
              />
            </Form.Group>
            {url.video && (
              <video controls width={200} height={100}>
                <source src={url.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" onClick={addPost}>
          Save
        </Button>
      </Form>

      {dataNew.length > 0 &&
        dataNew.map((item, index) => {
          return (
            <div key={`index${index}`} className="admin">
              <div>
                <img src={item.urlToImage} alt="image" className="contentImg" />
                <h2 className="adminTitle">
                  <Link to={`/details/${item.title}`}>{item.title}</Link>
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
