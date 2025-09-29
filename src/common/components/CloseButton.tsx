import { useNavigate } from "react-router-dom";

interface CloseButtonProps {
  to?: string;
  label?: string;
}

export const CloseButton = ({
  to = "/main-page",
  label = "Cerrar",
}: CloseButtonProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(to);
  };

  return (
    <button
      type="button"
      onClick={handleClose}
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
    >
      {label}
    </button>
  );
};
