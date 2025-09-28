interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ page, setPage }: PaginationProps) => {
  return (
    <div>
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>
        Anterior
      </button>
      <span style={{ margin: "0 10px" }}>Página {page + 1}</span>
      <button onClick={() => setPage(page + 1)}>
        Siguiente
      </button>
    </div>
  );
};
