import { Link } from "react-router-dom";
import { JSONPlaceholderResponse } from "../../api/post/post.interface";

interface TableDataProps extends JSONPlaceholderResponse {
  className?: string;
}


export const TableData = (props: TableDataProps) => {
  return (
    <tr className="hover:bg-gray-100 transition-colors">
      <td className="py-2 px-4">{props.title}</td>
      <td className="py-2 px-4">{props.userName}</td>
      <td className="py-2 px-4 space-x-2">
        <Link to={`/main-page/detail/${props.id}`}>
          <button
            type="button"
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
          >
            Ver Detalles
          </button>
        </Link>
        <Link to={`/main-page/comments/${props.id}`}>
          <button
            type="button"
            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
          >
            Ver Comentarios
          </button>
        </Link>
      </td>
    </tr>
  );
};
