function TopLeftMidBevel() {
  return (
    <div style={{ gridArea: "1 / 3", zIndex: 15 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 0 10  L 100 60"
          stroke="#9FFF82"
          strokeWidth="2"
          fill="none"
        ></path>
        <path
          d="M 0 40 L 100 90"
          stroke="#9FFF82"
          strokeWidth="2"
          fill="none"
        ></path>
        <polygon points="0,0 0,10 100,60 100,0" fill="#00000080"></polygon>
        <polygon points="0,40 0,10 100,60 100,90" fill="#9FFF8226"></polygon>
      </svg>
    </div>
  );
}

export default TopLeftMidBevel;
