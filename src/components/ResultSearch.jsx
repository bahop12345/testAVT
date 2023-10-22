import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const ResultSearch = () => {
  const location = useLocation();
  const searchResults = location.state.searchResults || [];
  // console.log(searchResults);
  return (
    <Container>
      <div>
        <h2>Kết quả</h2>
        {searchResults?.length > 0 ? (
          searchResults?.map((item, index) => (
            <div key={index}>
              <img src={item.imageUrl} alt="image" className="" />
              <h2 className="">
                <Link to={`/articleDetail/${item.title}`}>{item.title}</Link>
              </h2>
              <p>{item.content}</p>
            </div>
          ))
        ) : (
          <p>Không có kết quả tìm kiếm.</p>
        )}
      </div>
    </Container>
  );
};

export default ResultSearch;
