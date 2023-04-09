export function Row({ children, style, ...props }) {
  return (
    <div {...props} style={{ ...style, display: "flex", flexDirection: "row" }}>
      {children}
    </div>
  );
}
