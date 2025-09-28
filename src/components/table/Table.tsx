import { useEffect, useState } from "react";
import { getPostsWithUserNames } from "../../api/Api";
import { JSONPlaceholderResponse } from "../../api/post/post.interface";
import { TableData } from "./TableData";
import { Pagination } from "../../common/components/Pagination";

export const Table = () => {
  const [posts, setPosts] = useState<JSONPlaceholderResponse[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPostsWithUserNames(page);
      setPosts(data);
    };
    fetchPosts();
  }, [page]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <TableData key={post.id} {...post} />
          ))}
        </tbody>
      </table>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
