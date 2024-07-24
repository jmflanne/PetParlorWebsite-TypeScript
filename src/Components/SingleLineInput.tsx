//single line text input, includes props so that parent can use useState
interface Props {
  input: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur: () => void;
}

function SingleLineInput({
  input,
  placeholder,
  onChange,
  value,
  onBlur,
}: Props) {
  return (
    <div className="input-group" style={{ width: "40rem", padding: "10px" }}>
      <span className="input-group-text">{input}</span>
      <label htmlFor="singleLineInput" />
      <input
        name="singleLineInput"
        type="text"
        aria-label={input}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
    </div>
  );
}
export default SingleLineInput;
