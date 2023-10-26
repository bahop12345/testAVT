import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { title } = useParams();
  // console.log(title);
  const [articleData, setArticleData] = useState([]);
  const article = articleData?.find((item) => item.title === title);
  console.log(article);

  useEffect(() => {
    const data = localStorage.getItem("dataNew");
    if (data) {
      const newDataArray = JSON.parse(data);
      setArticleData(newDataArray);
    }
  }, []);

  return (
    <Container>
      {article ? (
        <div className="article_detail">
          <h2 className="article_detail--title">{article.title}</h2>
          <p className="article_detail--description">{article.description}</p>
          <img src={article.urlToImage} alt="image" className="img_Details" />
          <p className="author_details"> Author:{article.author}</p>
          <p>{article.content}</p>
          {article.videoUrl && (
            <video controls width={400} height={300}>
              <source src={article.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ) : (
        <p>Không tìm thấy bài viết.</p>
      )}
    </Container>
  );
};

export default ArticleDetail;
