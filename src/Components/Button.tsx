//custom button
interface Props {
  content: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit";
}
function Button({
  content,
  onClick,
  disabled = false,
  type = "button",
}: Props) {
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button
        className="btn btn-primary"
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {content}
      </button>
    </div>
  );
}
export default Button;
