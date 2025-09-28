import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById } from "../api/Api";
import { JSONPlaceholderResponse } from "../api/post/post.interface";
import { Table } from "../components/table/Table";
import { CloseButton } from "../common/components/CloseButton";

export const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<JSONPlaceholderResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const detail = await getPostById(Number(id));
        setPost(detail);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Table />
      {post && (
        <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Detalles del Post</h3>
            <CloseButton />
          </div>
          <p>Título: {post.title}</p>
          <p>Contenido: {post.body}</p>
          <p>Nomber de Usuario: {post.userName}</p>
        </div>
      )}
    </div>
  );
};
