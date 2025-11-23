function RightVLong() {
  return (
    <div style={{ gridArea: "2 / 7", zIndex: "15" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 90 0 L 90 100"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <path
          d="M 60 0 L 60 100"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <polygon points="90,0 90,100 100,100 100,0" fill="#00000080"></polygon>
        <polygon points="90,0 90,100 60,100 60,0" fill="#9FFF8226"></polygon>
      </svg>
    </div>
  );
}

export default RightVLong;
