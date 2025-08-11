import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ offset = 0 }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll function with offset support
    const scroll = () => {
      window.scrollTo({
        top: offset,
        behavior: "auto", // instant scroll, change to "smooth" if you want smooth effect
      });
    };

    // Run scroll multiple times to ensure it works after content load
    scroll();
    const id1 = setTimeout(scroll, 50);
    const id2 = setTimeout(scroll, 150);
    const id3 = setTimeout(scroll, 300);

    // Cleanup timers on unmount or pathname change
    return () => {
      clearTimeout(id1);
      clearTimeout(id2);
      clearTimeout(id3);
    };
  }, [pathname, offset]);

  return null;
};

export default ScrollToTop;
