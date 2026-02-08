export default function CounterDisplay({ count }) {
  return (
    <div className="counter">
      <span className="counter-label">Count</span>
      <span className="counter-value">{count}</span>
    </div>
  );
}