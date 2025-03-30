import { notFound } from "next/navigation";
import { api } from "@/store/api";
import { Typography, Container, Button, Box } from "@mui/material";
import Link from "next/link";
import makeStore from "@/store/store";

interface Params {
  id: string;
}

const getServerStore = () => {
  const store = makeStore();
  return store;
};

const PostDetail = async ({ params }: { params: Params }) => {
  const { id } = params;
  const store = await getServerStore();
  await store.dispatch(api.endpoints.getPost.initiate(id));

  const post = api.endpoints.getPost.select(id)(store.getState()).data;

  if (!post) return notFound();

  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: "100vh" }}>
      <Box sx={{ mb: 4 }}>
        <Button
          component={Link}
          href="/"
          variant="contained"
          color="primary"
          sx={{ borderRadius: 2, px: 3 }}
        >
          ← Back to Posts
        </Button>
      </Box>

      <Box
        sx={{
          backgroundColor: "background.paper",
          borderRadius: 2,
          p: 4,
          boxShadow: 3,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          {post.title}
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          sx={{ mb: 3 }}
        >
          By {post.author}
        </Typography>

        <Box
          sx={{
            borderLeft: 4,
            borderColor: "primary.main",
            pl: 3,
            ml: -3,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              whiteSpace: "pre-wrap",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            {post.body}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default PostDetail;
