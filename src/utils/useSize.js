import { useState, useEffect } from 'react';

const useSize = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  let checksScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 600);
  }
  let handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return [width, height];
}

export default useSize;