interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
}

export const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
        className={`px-4 py-2 rounded-md text-white transition-colors ${
          page === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Anterior
      </button>

      <span className="font-medium">Página {page + 1} de {totalPages}</span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={totalPages !== undefined && page >= totalPages - 1}
        className={`px-4 py-2 rounded-md text-white transition-colors ${
          totalPages !== undefined && page >= totalPages - 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Siguiente
      </button>
    </div>
  );
};
