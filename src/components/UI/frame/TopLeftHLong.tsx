function TopLeftHLong() {
  return (
    <div style={{ gridArea: "1 / 2", zIndex: 15 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="block"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 0 10 L 100 10"
          stroke="#9FFF82"
          strokeWidth="2"
          fill="none"
        ></path>
        <path
          d="M 0 40 L 100 40"
          stroke="#9FFF82"
          strokeWidth="2"
          fill="none"
        ></path>
        <polygon points="0,0 0,10 100,10 100,0" fill="#00000080"></polygon>
        <polygon points="0,40 0,10 100,10 100,40" fill="#9FFF8226"></polygon>
      </svg>
    </div>
  );
}

export default TopLeftHLong;
