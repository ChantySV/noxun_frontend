import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { PostDetailPage } from "./pages/PostDetailPage";
import { PostCommentsPage } from "./pages/PostCommentPage";

export const App = () => {
  return (
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
  );
};
