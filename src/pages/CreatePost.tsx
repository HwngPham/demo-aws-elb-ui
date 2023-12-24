import { Button, CircularProgress, Container, Input } from "@mui/joy";
import { useState } from "react";
import { Layout } from "../components/Layout";

export const CreatPost = () => {
  const [inputs, setInputs] = useState<Record<string, any>>({
    title: "",
    content: "",
    file: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!inputs.title || !inputs.content || isLoading) return;

    setIsLoading(true);
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
              name="file"
              size="md"
              placeholder="Upload"
              required
              value={inputs.file}
              sx={{ padding: "5px" }}
            />

            <Button type="submit">
              {isLoading ? <CircularProgress /> : "Post it!"}
            </Button>
          </Container>
        </form>
      </Container>
    </Layout>
  );
};
