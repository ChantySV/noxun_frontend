import { Link } from "react-router-dom";
import { JSONPlaceholderResponse } from "../../api/post/post.interface";

export const TableData = (props: JSONPlaceholderResponse) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.userName}</td>
      <td>
        <Link to={`/main-page/detail/${props.id}`}>
          <button>Ver Detalles</button>
        </Link>
        <br />
        <Link to={`/main-page/comments/${props.id}`}>
          <button>Ver Comentarios</button>
        </Link>
      </td>
    </tr>
  );
};
