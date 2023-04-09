import "./styles.css";

export function Column({ children, style, ...props }) {
  return (
    <div {...props} style={{ display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  );
}
