import { Table } from "../components/table/Table";
import { CustomHeader } from "../common/components/CustomHeader";

export const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-gray-100 min-h-screen">
      <CustomHeader
        title="JSONPlaceholder Posts"
        description="Explora los posts y sus comentarios"
      />
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <Table />
      </div>
    </div>
  );
};
