import { Button, CircularProgress, Container, Input, Snackbar } from "@mui/joy";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { createPost, uploadFile } from "../services";
import { useNavigate } from "react-router-dom";

const initState = {
  title: "",
  content: "",
};

export const CreatPost = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<Record<string, any>>(initState);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notiText, setNotitext] = useState<string>("");

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onFileChange = (e: any) => {
    const { files } = e.target;
    files[0] && setFile(files[0]);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!inputs.title || !inputs.content || isLoading) return;

    setIsLoading(true);

    try {
      const post = await createPost(inputs);

      if (post?.id) {
        if (file) await uploadFile(post.id, file);
        setNotitext(post.id + " is created!");
        setTimeout(() => navigate("/"), 500);
      }
    } catch (e) {
      console.warn(e);
    } finally {
      setIsLoading(false);
      setInputs(initState);
      setFile(null);
    }
  };

  return (
    <Layout>
      <Container
        sx={{
          margin: "auto",
          width: "500px",
          paddingTop: "100px",
        }}
      >
        <form onSubmit={onSubmit}>
          <Container sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Input
              name="title"
              size="md"
              placeholder="Title"
              required
              value={inputs.title}
              onChange={onChange}
            />
            <Input
              name="content"
              size="md"
              placeholder="Content"
              required
              value={inputs.content}
              onChange={onChange}
            />
            <Input
              type="file"
              size="md"
              placeholder="Upload"
              required
              onChange={onFileChange}
              sx={{ padding: "5px" }}
            />

            <Button type="submit">
              {isLoading ? <CircularProgress /> : "Post it!"}
            </Button>
          </Container>
        </form>
      </Container>

      <Snackbar open={Boolean(notiText)} variant="soft" color="success">
        {notiText}
      </Snackbar>
    </Layout>
  );
};
