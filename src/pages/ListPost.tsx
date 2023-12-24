import { useEffect, useState } from "react";
import { Post } from "../utils";
import { PostItem } from "../components/PostItem";
import { getAllPosts } from "../services";
import { Container } from "@mui/joy";

export const ListPost = () => {
  const [allPost, setAllPost] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setAllPost);
  }, []);

  return (
    <Container sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {allPost.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </Container>
  );
};
