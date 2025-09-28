import { useNavigate } from "react-router-dom";

interface CloseButtonProps {
  to?: string;
  label?: string;
}

export const CloseButton = ({ to = "/main-page", label = "Cerrar" }: CloseButtonProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClose}
      style={{
        background: "#f44336",
        color: "white",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};
