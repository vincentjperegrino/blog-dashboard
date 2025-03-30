"use client";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import Post from "@/types/post";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          pb: 0,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            {post.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            By {post.author}
          </Typography>
          <Box sx={{ mt: 1.5 }}>
            <Typography variant="body2" color="text.secondary">
              {post.body.substring(0, 120)}...
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            pt: 2,
            pb: 2,
            mt: "auto",
          }}
        >
          <Button
            component={Link}
            href={`/posts/${post.id}`}
            variant="outlined"
            color="secondary"
            fullWidth
          >
            Continue Reading
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
