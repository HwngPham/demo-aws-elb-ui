import { Container, Typography } from "@mui/joy";

export const NotFound = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "50vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography level="title-lg">404</Typography>
      <a href="/">
        <Typography level="title-lg" color="primary">
          Go back
        </Typography>
      </a>
    </Container>
  );
};
