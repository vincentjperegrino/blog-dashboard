"use client";
import Grid from "@mui/material/Grid";
import PostCard from "@/components/PostCard";
import Post from "@/types/post";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {posts.map((post) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={post.id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
