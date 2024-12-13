import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

function ImageCard({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="image-card" style={{ width: "200px", height: "200px", margin: "10px" }}>
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`img-fluid ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.5s" }}
        />
      )}
    </div>
  );
}

export default React.memo(ImageCard);
