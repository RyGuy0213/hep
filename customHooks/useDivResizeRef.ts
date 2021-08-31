import { useLayoutEffect, useState, useRef, MutableRefObject } from 'react';

type SizeProps = {
  width?: number;
  height?: number;
};

export const useDivResizeRef = (): [
  MutableRefObject<HTMLDivElement | null>,
  SizeProps | null
] => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<SizeProps | null>(null);

  useLayoutEffect(() => {
    const updateSize = () => {
      let width, height;
      if (ref.current) {
        width = ref.current.offsetWidth;
        height = ref.current.offsetHeight;
      }

      setSize({ width, height });
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return [ref, size];
};
