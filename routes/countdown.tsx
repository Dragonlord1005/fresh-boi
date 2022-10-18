import Countdown from "../islands/Countdown.tsx";

export default function CountdownPage() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <p>
      The big event will start in <Countdown target={date.toISOString()} />
    </p>
  );
}
