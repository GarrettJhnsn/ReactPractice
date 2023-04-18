import "./CourseGoalItem.css";

export default function CourseGoalItem(props) {
  const deleteHanldler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHanldler}>
      {props.children}
    </li>
  );
}
