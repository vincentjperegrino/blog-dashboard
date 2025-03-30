"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAddPostMutation } from "@/store/api";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";

const NewPostPage = () => {
  const router = useRouter();
  const [addPost, { isLoading, error }] = useAddPostMutation();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    body: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addPost(formData).unwrap();
      router.push("/");
    } catch (err) {
      console.error("Failed to save post:", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create New Post
        </Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            Error creating post:{" "}
            {"data" in error ? JSON.stringify(error.data) : "Unknown error"}
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            required
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            variant="outlined"
          />

          <TextField
            required
            fullWidth
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            variant="outlined"
          />

          <TextField
            required
            fullWidth
            multiline
            rows={6}
            label="Content"
            name="body"
            value={formData.body}
            onChange={handleChange}
            variant="outlined"
          />

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => router.push("/")}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Create Post"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default NewPostPage;
