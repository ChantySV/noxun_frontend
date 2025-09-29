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
    <div className="max-w-6xl mx-auto p-gray-100 min-h-screen">
      <Table />

      {post && (
        <div className="mt-8 p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Detalles del Post</h3>
            <CloseButton />
          </div>

          <div className="space-y-3 text-gray-700">
            <p><span className="font-semibold">Título:</span> {post.title}</p>
            <p><span className="font-semibold">Contenido:</span> {post.body}</p>
            <p><span className="font-semibold">Nombre de Usuario:</span> {post.userName}</p>
          </div>
        </div>
      )}
    </div>
  );
};
