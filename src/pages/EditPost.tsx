import { useEffect, useState } from "react";
import { Post, sortByCreatedAt } from "../utils";
import { Layout } from "../components/Layout";
import { getDetailPost } from "../services";
import { Box, Container, Stack, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export const EditPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const postId = queryParams.get("id") ?? "";

    getDetailPost(postId)
      .then(setPost)
      .catch(() => navigate("/"));
  }, [navigate]);

  return (
    <Layout>
      <Container sx={{ display: "flex", gap: 4 }}>
        <Stack sx={{ flexGrow: 1, gap: 3 }}>
          <Typography variant="soft" level="h1">
            {post?.title}
          </Typography>
          <Stack sx={{ gap: 1 }}>
            <Typography level="body-lg">{post?.content}</Typography>
            <Typography level="body-xs">
              <strong>Created at: </strong>
              {post?.createdAt}
            </Typography>
            <Typography level="body-xs">
              <strong>Updated at: </strong>
              {post?.updatedAt}
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: "50%",
            height: "800px",
            backgroundImage: `url(${sortByCreatedAt(post?.images ?? [])[0]
              ?.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Container>
    </Layout>
  );
};
