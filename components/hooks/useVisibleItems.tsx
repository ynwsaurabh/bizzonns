// useVisibleItems.ts
import { useState, useEffect, useRef } from 'react';

const useVisibleItems = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleItems = new Set<number>();
      const triggerOffset = 0; // Adjust this value to control when the animation should start

      refs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Check if the element is within the viewport or within the trigger offset
          if (top < viewportHeight + triggerOffset && bottom > -triggerOffset) {
            // Only add the item to visibleItems if it has not been animated before
            if (!animatedItems.has(index)) {
              newVisibleItems.add(index);
            }
          }
        }
      });

      // Update visibleItems and animatedItems
      if (newVisibleItems.size > 0) {
        setVisibleItems((prev) => new Set([...prev, ...newVisibleItems]));
        setAnimatedItems((prev) => new Set([...prev, ...newVisibleItems]));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animatedItems]);

  return { visibleItems, refs };
};

export default useVisibleItems;
