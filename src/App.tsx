import { CreatPost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { ListPost } from "./pages/ListPost";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  const routes: Record<string, any> = {
    "/": ListPost,
    "/edit-post": EditPost,
    "/new-post": CreatPost,
  };

  const Component = routes[window.location.pathname] ?? NotFound;
  return <Component />;
};
