import { CustomHeader } from "../common/components/CustomHeader";
import { SearchBar } from "../common/components/SearchBar";
import { Table } from "../components/Table";

export const Home = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="JSONPlaceholder"
        description="Una simple y falsa REST API para testing y prototipado."
      />

      {/* Search Bar */}
      <SearchBar placeholder="Buscar por titulo o contenido " />

      {/* Table */}
      <Table />
    </>
  );
};
