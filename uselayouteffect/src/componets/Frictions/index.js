import React, { useLayoutEffect, useRef, useState } from "react";

const FrictionOn = () => {
  const textRef = useRef(null);
  const [now, setNow] = useState(false);
 const [rect, setRect] = useState({})

  useLayoutEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setRect(rect)
      console.log(rect);
    }
  }, [now]); 

  return (
    <div>
      <h2>Nice to Friction here to see you!</h2>
      <button onClick={() => setNow(!now)}>Now Click Me</button>
      {now && <>
      <h3 ref={textRef}>Ref is fast in useLayoutEffect</h3>
      <p>Width on new: {rect.width}</p>
      <p>Height on new: {rect.height}</p>
      </>
      }
    </div>
  );
};

export default FrictionOn;
