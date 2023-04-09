import "./styles.css";

export function Row({ children, style, ...props }) {
  return (
    <div {...props} style={{ display: "flex", flexDirection: "row" }}>
      {children}
    </div>
  );
}
