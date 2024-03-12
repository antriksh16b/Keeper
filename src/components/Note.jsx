function Note(props) {
  return (
    <div className="note">
      <h4 style={{ margin: "2px" }}>{props.title}</h4>
      <p style={{ margin: "3px" }}>{props.content}</p>
    </div>
  );
}
export default Note;
