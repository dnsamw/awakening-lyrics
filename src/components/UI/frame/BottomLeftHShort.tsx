function BottomLeftHShort() {
  return (
    <div className="flex-1">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 0 90 L 100 90"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <path
          d="M 0 60 L 100 60"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <polygon
          points="0,0 0,100 100,100 100,90 0,90"
          fill="#00000080"
        ></polygon>
        <polygon points="0,90 0,60 100,60 100,90" fill="#9FFF8226"></polygon>
      </svg>
    </div>
  );
}

export default BottomLeftHShort;
