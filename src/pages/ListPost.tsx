import { useEffect, useState } from "react";
import { Post, sortByCreatedAt } from "../utils";
import { PostItem } from "../components/PostItem";
import { getAllPosts } from "../services";
import { Container } from "@mui/joy";
import { deletePost } from "../services";
import { Layout } from "../components/Layout";

export const ListPost = () => {
  const [allPost, setAllPost] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setAllPost);
  }, []);

  const handleDeletePost = async (postId: string) => {
    const userConfirmation = confirm("Are you sure to delete this post?");
    if (!userConfirmation) return;

    try {
      const { id } = await deletePost(postId);
      setAllPost(allPost.filter((post) => post.id !== id));
    } catch {
      window.location.reload();
    }
  };

  return (
    <Layout>
      <Container sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        hehe
        {sortByCreatedAt(allPost).map((post) => (
          <PostItem key={post.id} {...post} onDelete={handleDeletePost} />
        ))}
      </Container>
    </Layout>
  );
};
