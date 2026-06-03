const buttonStyle = {
  width: "44px",
  height: "44px",
};

function Error({ error }) {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <span>
        <svg
          style={buttonStyle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </span>
      <p className="text-4xl text-red-600 font-bold">{error}</p>
    </div>
  );
}

export default Error;
