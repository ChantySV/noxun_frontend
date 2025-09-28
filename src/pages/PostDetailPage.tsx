import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById, getPost } from "../api/Api";
import { JSONPlaceholderResponse } from "../api/post/post.interface";
import { Table } from "../components/table/Table";
import { CloseButton } from "../common/components/CloseButton";

export const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<JSONPlaceholderResponse | null>(null);
  const [allPosts, setAllPosts] = useState<JSONPlaceholderResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const detail = await getPostById(Number(id));
        const posts = await getPost();
        setPost(detail);
        setAllPosts(posts);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Table posts={allPosts} />
      {post && (
        <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Detalles del Post</h3>
            <CloseButton />
          </div>
          <p><b>ID:</b> {post.id}</p>
          <p><b>Título:</b> {post.title}</p>
          <p><b>Contenido:</b> {post.body}</p>
        </div>
      )}
    </div>
  );
};
