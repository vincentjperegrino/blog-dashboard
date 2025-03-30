"use client";

import { useGetPostsQuery } from "@/store/api";
import PostList from "@/components/PostList";
import {
  Box,
  Button,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Home = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  return (
    <main>
      <Box
        sx={{
          p: 3,
          maxWidth: 1600,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1">
            Latest Posts
          </Typography>
          <Button
            component={Link}
            href="/posts/new"
            variant="contained"
            color="primary"
          >
            Create New Post
          </Button>
        </Box>

        {isLoading ? (
          <Box display="flex" justifyContent="center" p={4}>
            <CircularProgress />
          </Box>
        ) : isError ? (
          <Alert severity="error" sx={{ m: 2 }}>
            Error loading posts!
          </Alert>
        ) : (
          <PostList posts={posts || []} />
        )}
      </Box>
    </main>
  );
};

export default Home;
