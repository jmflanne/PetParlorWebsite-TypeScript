//basic paragraph body, used for descriptions or announcements
interface Props {
  content: string;
}
function Body({ content }: Props) {
  return (
    <div className="text-center" style={{ width: "30rem", margin: "auto" }}>
      <p className="fs-4">{content}</p>
    </div>
  );
}

export default Body;
