import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type AppProps = {
  children: ReactNode;
};

const App = ({ children }: AppProps) => {
  const [clickType, setClickType] = useState<"none" | "left" | "right">("none");
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 0) setClickType("left");
      else if (e.button === 2) setClickType("right");
    };
    const onMouseUp = () => setClickType("none");

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "A") {
        setIsHoveringLink(true);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "A") {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  let cursorClass = "cursor-default";
  if (clickType === "left") cursorClass = "cursor-click-left";
  else if (clickType === "right") cursorClass = "cursor-click-right";
  else if (isHoveringLink) cursorClass = "cursor-hover";

  return (
    <div
      className={`${cursorClass} min-h-screen flex flex-col`}
    style={{ width: "100vw" }}
    >
      {children}
    </div>
  );
};

export default App;
