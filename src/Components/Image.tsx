//want this to represent any image, so we use prop
interface Props {
  source: string;
  caption: string;
}
function Image({ source, caption }: Props) {
  return (
    <div className="text-center">
      <img src={source} className="rounded" alt="check" />
      <p className="text-center">
        <span className="fs-2">{caption}</span>
      </p>
    </div>
  );
}

export default Image;
