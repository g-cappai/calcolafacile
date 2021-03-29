export default function InputLayout({ id, labelText, error, children }) {
  return (
    <div className="input-outer">
      {labelText ? (
        <label className="input-label" htmlFor={id}>
          {labelText}
        </label>
      ) : (
        ""
      )}
      <div className="input-wrapper">{children}</div>
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}
