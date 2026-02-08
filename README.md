# simple-count

**simple-count** is a small React application used to demonstrate the core concepts of:

- **State**
- **Props**
- **Components**
- **Component composition**

The application uses a simple counter (`+ / − / reset`) to clearly show the difference between:
- a component that **owns state**
- a component that **receives data via props**

This project is intended for learning and teaching React fundamentals.

---

## What the application demonstrates

### 1. State-focused component
- Uses `useState`
- Owns and controls the `count` value
- Decides how and when the state changes

### 2. Props-focused component
- Parent owns the state
- Child component is **props-only**
- Child receives:
  - data (`count`)
  - functions (`onIncrement`, `onDecrement`, `onReset`)
- Child cannot change state directly

### 3. Component-based design
- UI is split into small reusable components:
  - `Card`
  - `CounterDisplay`
  - `Button`
  - `ButtonRow`
  - `Hint`
- Each component has **one clear responsibility**

---

## Project structure

src/
components/
StateCounterCard.jsx     // State-focused example
PropsCounterCard.jsx     // Props-focused example
ui/
Card.jsx
CounterDisplay.jsx
Button.jsx
ButtonRow.jsx
Hint.jsx
App.jsx                    // Composes all components
App.css                    // Styling
main.jsx

---

## Technologies used

- React (with hooks)
- Vite
- JavaScript (ES6+)
- CSS

No external UI libraries are used, to keep the focus on React concepts.

---

## Getting started

### 1. Install dependencies

```bash
npm install

2. Start the development server

npm run dev

3. Open the app

Vite will output a local URL, usually:

http://localhost:5173

Open it in your browser.

⸻

Learning goals

After working with this project, you should be able to:
	•	Explain the difference between state and props
	•	Identify where state should live
	•	Pass data and event handlers via props
	•	Build small, reusable React components
	•	Understand how components are composed in App.jsx

⸻

Suggested exercises
	1.	Move the state from StateCounterCard up into App.jsx
	2.	Share one count value between both counters
	3.	Add a step size (+5, +10)
	4.	Create a new counter component using the same UI components
	5.	Remove comments and explain the code in your own words

⸻

Notes

This project is intentionally simple.
The goal is clarity, not completeness.

Once these concepts are understood, the same patterns apply to:
	•	larger applications
	•	forms
	•	APIs
	•	state management libraries



