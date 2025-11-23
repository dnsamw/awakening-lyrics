function LeftVLong() {
  return (
    <div style={{ gridArea: "2 / 1", zIndex: 15 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 10 0 L 10 100"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <path
          d="M 40 0 L 40 100"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <polygon points="0,0 10,0 10,100 0,100" fill="#00000080"></polygon>
        <polygon points="40,0 10,0 10,100 40,100" fill="#9FFF8226"></polygon>
      </svg>
    </div>
  );
}

export default LeftVLong;
