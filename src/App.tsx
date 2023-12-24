import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreatPost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { ListPost } from "./pages/ListPost";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPost />} />
        <Route path="/edit-post" element={<EditPost />} />
        <Route path="/new-post" element={<CreatPost />} />
      </Routes>
    </Router>
  );
};
