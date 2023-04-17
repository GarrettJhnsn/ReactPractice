import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const day = new Intl.DateTimeFormat("en-us", {
    day: "numeric",
    timeZone: "UTC",
  }).format(props.date);

  const month = new Intl.DateTimeFormat("en-us", {
    month: "long",
    timeZone: "UTC",
  }).format(props.date);

  const year = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    timeZone: "UTC",
  }).format(props.date);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
