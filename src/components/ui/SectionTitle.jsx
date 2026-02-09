/**
 * SectionTitle is a very simple React component.
 *
 * - It is just a function.
 * - It receives "props" (input values).
 * - It returns JSX (what should appear on the screen).
 */
export default function SectionTitle({ title, children }) {
  return (
    <div className="section-title">
      <h2 className="section-title__heading">{title}</h2>
      <p className="section-title__text">{children}</p>
    </div>
  );
}