import { useState } from "react";
// UI components (presentation only)
import Card from "./ui/Card.jsx";
import CounterDisplay from "./ui/CounterDisplay.jsx";
import ButtonRow from "./ui/ButtonRow.jsx";
import Button from "./ui/Button.jsx";
import Hint from "./ui/ Hint.jsx";
/**
 * PROPS-ONLY CHILD COMPONENT
 * -------------------------
 * This component does NOT have state.
 * It receives everything via props.
 */
/**
 * This child is props-only: it receives data + callbacks.
 */
function PropsOnlyCounter({ count, onIncrement, onDecrement, onReset }) {
  return (
    <>
     {/* Uses count, but does not own it */}
      <CounterDisplay count={count} />
      <ButtonRow>
         {/* Calls parent functions when clicked */}
        <Button label="−" onClick={onDecrement} />
        <Button label="+" onClick={onIncrement} />
        <Button label="Reset" variant="secondary" onClick={onReset} />
      </ButtonRow>
    </>
  );
}
/**
 * PROPS-FOCUSED PARENT
 * -------------------
 * This component OWNS the state,
 * but delegates UI and interaction to a child.
 */
export default function PropsCounterCard() {
   // State lives in the parent, but the child can update it via callbacks
  const [count, setCount] = useState(5);

  return (
    <Card title="2) Props-focused component">
      <p>
        Parent owns state, child only receives <strong>props</strong>.
      </p>
    {/* Passing data and functions DOWN as props */}
      <PropsOnlyCounter
        count={count}
        onIncrement={() => setCount((c) => c + 1)}
        onDecrement={() => setCount((c) => c - 1)}
        onReset={() => setCount(5)}
      />

      <Hint>The child has no state—only props.</Hint>
    </Card>
  );
}