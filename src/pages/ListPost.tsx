import { useEffect, useState } from "react";
import { Post, sortByCreatedAt } from "../utils";
import { PostItem } from "../components/PostItem";
import { getAllPosts } from "../services";
import { Container } from "@mui/joy";
import { Layout } from "../components/Layout";

export const ListPost = () => {
  const [allPost, setAllPost] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setAllPost);
  }, []);

  return (
    <Layout>
      <Container sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {sortByCreatedAt(allPost).map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </Container>
    </Layout>
  );
};
