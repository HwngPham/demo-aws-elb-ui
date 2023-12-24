import { AspectRatio, Button, Card, CardContent, Typography } from "@mui/joy";
import { Post } from "../utils/types";
import { sortByCreatedAt } from "../utils";

export const PostItem = ({ id, content, title, images }: Post) => {
  const latestImage = sortByCreatedAt(images ?? [])[0]?.url;

  return (
    <Card sx={{ width: 320 }}>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={latestImage} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent
        orientation="horizontal"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Typography fontSize="md" fontWeight="lg">
            {title}
          </Typography>
          <Typography level="body-xs">{content}</Typography>
        </div>

        <a href={`/edit-post?id=${id}`}>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Show
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};
