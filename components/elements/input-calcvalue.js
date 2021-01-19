export default function Value({ onChange, value, symbol, size = "m" }) {
  return (
    <>
      <span className="value">
        <input
          value={value}
          onChange={onChange}
          type="value"
          name="calcField"
          aria-label="Campo Valore"
        ></input>
        {symbol ? <span className="symbol">{symbol}</span> : ""}
      </span>
      <style jsx>
        {`
          input {
            border: none;
            background-color: transparent;
            width: ${size == "s" ? "75px" : size == "l" ? "200px" : "100px"};
          }

          input:focus {
            outline: none;
          }

          .value {
            border: 1px solid #999;
            border-radius: 5px;
            padding: 0.1rem 0.3rem 0.3rem;
            background-color: rgba(0, 0, 0, 0.02);
          }

          .symbol {
            font-weight: 500;
            opacity: 75%;
          }
        `}
      </style>
    </>
  );
}
