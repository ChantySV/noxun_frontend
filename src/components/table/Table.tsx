import { useEffect, useState } from "react";
import { getPostsWithUserNames } from "../../api/Api";
import { JSONPlaceholderResponse } from "../../api/post/post.interface";
import { TableData } from "./TableData";
import { Pagination } from "../../common/components/Pagination";

const PAGE_SIZE = 10;

export const Table = () => {
  const [allPosts, setAllPosts] = useState<JSONPlaceholderResponse[]>([]);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPostsWithUserNames();
      setAllPosts(data);
    };
    fetchPosts();
  }, []);

  // Filter posts based on title, body, or userName
  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.body.toLowerCase().includes(filter.toLowerCase()) ||
      (post.userName && post.userName.toLowerCase().includes(filter.toLowerCase()))
  );

  const paginatedPosts = filteredPosts.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por título o contenido..."
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setPage(0); 
        }}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts.map((post) => (
            <TableData key={post.id} {...post} />
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
