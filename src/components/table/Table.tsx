import { JSONPlaceholderResponse } from "../../api/post/post.interface";
import { TableData } from "./TableData";

export const Table = ({ posts }: { posts: JSONPlaceholderResponse[] }) => {
 
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <TableData
              {...post}              
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
