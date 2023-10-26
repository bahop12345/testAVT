import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ArticleDetail from "./components/ArticleDetail";
import Sidebar from "./components/Sidebar";
import Admin from "./components/Admin";
import ResultSearch from "./components/ResultSearch";
import Menu from "./components/Menu";
import { ToastContainer } from "react-toastify";
import ManageImage from "./components/ManageImage";
import ManageVideo from "./components/ManageVideo";

function App() {
  return (
    <>
      <Sidebar />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/details/:title" element={<ArticleDetail />} />
        <Route path="/search" element={<ResultSearch />} />
        <Route path="/admin/image" element={<ManageImage />} />
        <Route path="/admin/video" element={<ManageVideo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
