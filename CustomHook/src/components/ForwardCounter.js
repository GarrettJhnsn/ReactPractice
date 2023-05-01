import useCounter from "../hooks/use-counter";
import Card from "./Card";

export default function ForwardCounter() {
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
}
