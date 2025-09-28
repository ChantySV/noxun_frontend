import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { PostDetailPage } from "./pages/PostDetailPage";
import { PostCommentsPage } from "./pages/PostCommentPage";
import { CustomHeader } from "./common/components/CustomHeader";

export const App = () => {
  return (
    <>
    <CustomHeader
            title="JSONPlaceholder"
            description="Una simple y falsa REST API para testing y prototipado."
          />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main-page" />} />
        <Route path="/main-page" element={<Home />} />
        <Route
          path="/main-page/detail/:id"
          element={<PostDetailPage />}
        />
        <Route
          path="/main-page/comments/:id"
          element={<PostCommentsPage />}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
};
