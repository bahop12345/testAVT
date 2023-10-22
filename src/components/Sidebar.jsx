import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const [searchText, setSearchText] = useState("");
  const [dataLocal, setDataLocal] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("dataNew");
    if (data) {
      const newDataArray = JSON.parse(data);
      setDataLocal(newDataArray);
    }
  }, []);

  const handleSearch = () => {
    const searchResults = dataLocal.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setDataLocal(searchResults);

    navigate(`/search?query=${searchText}`, {
      state: { searchResults },
    });
  };

  return (
    <Container>
      <Row className=" rowCustom">
        <Col lg={3} md={4} xs={3}>
          <Link to="/">
            <img
              className="Side_imge"
              src="/public/images/bm-logo.png"
              alt="image"
            />
          </Link>
        </Col>
        <Col lg={7} md={4} xs={7} className="search">
          <div className="search-content">
            <input
              className="input_search"
              value={searchText}
              placeholder="Nhập nội dung tìm kiếm"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="input_button" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </Col>
        <Col lg={2} md={4} xs={2}>
          <div className="sider_acc">
            <Link to="admin">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
