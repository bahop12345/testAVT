import { useParams } from "react-router-dom";
import { data } from "../data/newData";
import { Container } from "react-bootstrap";

const ArticleDetail = () => {
  const { title } = useParams();
  const article = data?.find((item) => item.title === title);

  if (!article) {
    return <div>Bài viết không tồn tại</div>;
  }
  console.log(article);

  return (
    <Container>
      <h2>{article?.title}</h2>
      <img src={article?.imageUrl} alt="" />
      <div>
        <video controls>
          <source src={article?.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p>{article?.content}</p>
    </Container>
  );
};

export default ArticleDetail;
