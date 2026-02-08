import { useState } from "react";
// UI components (pure presentation)
import Card from "./ui/Card.jsx";
import CounterDisplay from "./ui/CounterDisplay.jsx";
import ButtonRow from "./ui/ButtonRow.jsx";
import Button from "./ui/Button.jsx";
import Hint from "./ui/ Hint.jsx";

/**
 * STATE-FOCUSED COMPONENT
 * ----------------------
 * This component OWNS the state.
 * It creates the state, updates it, and decides what it means.
 */

export default function StateCounterCard() {
  // useState creates state for this component
  // count = current value
  // setCount = function used to update the value
  const [count, setCount] = useState(0);

  return (
    <Card title="1) State-focused component">
      <p>
        This component <strong>owns</strong> the state (<code>count</code>) and
        controls how it changes.
      </p>
 {/* Passing state DOWN as a prop */}
      <CounterDisplay count={count} />

      <ButtonRow>
        {/* Update state using setCount */}
        <Button label="−" onClick={() => setCount((c) => c - 1)} />
        <Button label="+" onClick={() => setCount((c) => c + 1)} />
        <Button
          label="Reset"
          variant="secondary"
          onClick={() => setCount(0)}
        />
      </ButtonRow>

      <Hint>State and update logic live here.</Hint>
    </Card>
  );
}