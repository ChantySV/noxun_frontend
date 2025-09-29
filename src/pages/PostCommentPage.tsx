import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCommentsByPost } from "../api/Api";
import { CommentInterface } from "../api/user/comment.interface";
import { Table } from "../components/table/Table";
import { CloseButton } from "../common/components/CloseButton";

export const PostCommentsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<CommentInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const comms = await getCommentsByPost(Number(id));
        setComments(comms);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto p-gray-100 min-h-screen">
      <Table />

      <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Comentarios del Post {id}</h3>
          <CloseButton />
        </div>

        <div className="space-y-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="p-4 border border-gray-100 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <p className="font-medium text-gray-700">
                Email: <span className="font-normal">{c.email}</span>
              </p>
              <p className="font-medium text-gray-700 mt-2">Comentario:</p>
              <p className="text-gray-600 mt-1">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
