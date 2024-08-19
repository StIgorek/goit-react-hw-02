export default function Feedback({ values, total, positiv }) {
  return (
    <div>
      <p> Good: {values["good"]}</p>
      <p> Neutral: {values["neutral"]}</p>
      <p> Bad: {values["bad"]}</p>
      <p> Total: {total}</p>
      <p> Positiv feedback: {positiv}%</p>
    </div>
  );
}
