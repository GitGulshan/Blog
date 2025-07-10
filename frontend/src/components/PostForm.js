// import React, { useState } from "react";
import React, { useState } from "react";
import { Plus, Edit3, Image, User } from "lucide-react";
import api from "../services/api";

function PostForm({ onPostCreated }) {
  const [form, setForm] = useState({
    title: "",
    context: "",
    author: "",
    image_url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/posts", form);
      onPostCreated(); // refresh posts in parent
      setForm({ title: "", context: "", author: "", image_url: "" }); // reset
    } catch (error) {
      console.error("Error creating post:", error);
    }
    setLoading(false);
  };

  const styles = {
    formCard: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      borderRadius: "24px",
      padding: "40px",
      marginBottom: "40px",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      maxWidth: "800px",
      margin: "0 auto",
    },
    formTitle: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#2d3748",
      marginBottom: "30px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      marginBottom: "20px",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    label: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#4a5568",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    input: {
      padding: "12px 16px",
      border: "2px solid #e2e8f0",
      borderRadius: "12px",
      fontSize: "16px",
      backgroundColor: "white",
      outline: "none",
    },
    textarea: {
      padding: "12px 16px",
      border: "2px solid #e2e8f0",
      borderRadius: "12px",
      fontSize: "16px",
      minHeight: "120px",
      resize: "vertical",
      gridColumn: "1 / -1",
      backgroundColor: "white",
      outline: "none",
    },
    submitButton: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      border: "none",
      padding: "14px 28px",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      justifyContent: "center",
      minWidth: "150px",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formCard}>
      <h2 style={styles.formTitle}>
        <Plus size={28} />
        Create New Post
      </h2>
      <div style={styles.formGrid}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <Edit3 size={16} /> Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter your post title..."
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <User size={16} /> Author
          </label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Your name..."
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <Image size={16} /> Image URL
          </label>
          <input
            type="url"
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <Edit3 size={16} /> Content
          </label>
          <textarea
            name="context"
            value={form.context}
            onChange={handleChange}
            placeholder="Share your thoughts..."
            style={styles.textarea}
            required
          />
        </div>
      </div>
      <button type="submit" style={styles.submitButton} disabled={loading}>
        <Plus size={20} /> {loading ? "Publishing..." : "Publish Post"}
      </button>
    </form>
  );
}

export default PostForm;
