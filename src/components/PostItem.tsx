import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/joy";
import { Link } from "react-router-dom";
import { Post } from "../utils/types";
import { sortByCreatedAt } from "../utils";

interface PostItemProps extends Post {
  onDelete: (postId: string) => void;
}

export const PostItem = ({
  id,
  content,
  title,
  images,
  onDelete,
}: PostItemProps) => {
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

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Link to={`/edit-post?id=${id}`}>
            <Button
              variant="solid"
              size="md"
              color="primary"
              aria-label="Explore Bahamas Islands"
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Show
            </Button>
          </Link>

          <Button
            variant="solid"
            size="md"
            color="danger"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
