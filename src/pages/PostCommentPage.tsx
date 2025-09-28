import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCommentsByPost, getPost } from "../api/Api";
import { JSONPlaceholderResponse } from "../api/post/post.interface";
import { CommentInterface } from "../api/user/comment.interface";
import { Table } from "../components/table/Table";
import { CloseButton } from "../common/components/CloseButton";

export const PostCommentsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<CommentInterface[]>([]);
  const [allPosts, setAllPosts] = useState<JSONPlaceholderResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const comms = await getCommentsByPost(Number(id));
        const posts = await getPost();
        setComments(comms);
        setAllPosts(posts);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Table posts={allPosts} />
      <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Comentarios del Post {id}</h3>
          <CloseButton />
        </div>
        {comments.map((c) => (
          <div key={c.id}>
            <b>{c.name}</b> ({c.email})
            <p>{c.body}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
