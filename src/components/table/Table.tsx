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

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.body.toLowerCase().includes(filter.toLowerCase()) ||
      (post.userName && post.userName.toLowerCase().includes(filter.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);

  const paginatedPosts = filteredPosts.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(totalPages > 0 ? totalPages - 1 : 0);
    }
  }, [totalPages, page]);

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Filtrar por título, contenido o usuario..."
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setPage(0);
        }}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr className="text-center">
              <th className="py-2 px-4 text-center">Título</th>
              <th className="py-2 px-4 text-center">Usuario</th>
              <th className="py-2 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {paginatedPosts.map((post, index) => (
              <TableData
                key={post.id}
                {...post}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};
