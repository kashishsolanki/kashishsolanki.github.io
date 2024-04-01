/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react';
import { useLayoutEffect } from 'react';

interface UseInViewProps {
  root?: any | null;
  threshold?: number;
}

export const useInView = (props: UseInViewProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useLayoutEffect(() => {
    // Use useLayoutEffect for initial render
    observer.current = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, props);

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref, props]);

  return { ref, isVisible };
};
