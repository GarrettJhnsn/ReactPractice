import Card from "./Card";
import useCounter from "../hooks/use-counter";

export default function BackwardsCounter() {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
}
