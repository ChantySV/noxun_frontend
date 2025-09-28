import { CustomHeader } from "../common/components/CustomHeader";
import { Table } from "../components/table/Table";

export const Home = () => {

  return (
    <>
      <CustomHeader
        title="JSONPlaceholder"
        description="Una simple y falsa REST API para testing y prototipado."
      />
      <Table />
    </>
  );
};
