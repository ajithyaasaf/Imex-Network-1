import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";
import { cn } from "@/lib/utils";

interface MasonryItem {
  id: string | number;
  height: number;
  image: string;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface MasonryProps {
  data: MasonryItem[];
  inView?: boolean;
  onImageClick?: (index: number) => void;
}

function Masonry({ data, inView = true, onImageClick }: MasonryProps) {
  const [columns, setColumns] = useState<number>(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) {
        setColumns(5);
      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        setColumns(4);
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(3);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setContainerWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [columnHeights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const currentColumnHeights = new Array(columns).fill(0);
    const calculatedGridItems: GridItem[] = [];

    data.forEach((item) => {
      const targetColumnIndex = currentColumnHeights.indexOf(
        Math.min(...currentColumnHeights)
      );

      const itemCalculatedWidth = containerWidth / columns;
      const itemCalculatedHeight = item.height / 2;

      const x = itemCalculatedWidth * targetColumnIndex;
      const y = currentColumnHeights[targetColumnIndex];

      currentColumnHeights[targetColumnIndex] += itemCalculatedHeight;

      calculatedGridItems.push({
        ...item,
        x,
        y,
        width: itemCalculatedWidth,
        height: itemCalculatedHeight,
      });
    });

    return [currentColumnHeights, calculatedGridItems];
  }, [columns, data, containerWidth]);

  const transitions = useTransition<
    GridItem,
    { x: number; y: number; width: number; height: number; opacity: number; scale: number }
  >(gridItems, {
    keys: (item) => item.id,
    from: () => ({ 
      x: containerWidth / 2, 
      y: 0, 
      width: containerWidth * 0.8, 
      height: 250, 
      opacity: 0,
      scale: 0.8
    }),
    enter: ({ x, y, width, height }) => ({ 
      x: inView ? x : containerWidth / 2, 
      y: inView ? y : 0, 
      width: inView ? width : containerWidth * 0.8, 
      height: inView ? height : 250, 
      opacity: 1,
      scale: 1
    }),
    update: ({ x, y, width, height }) => ({ 
      x: inView ? x : containerWidth / 2, 
      y: inView ? y : 0, 
      width: inView ? width : containerWidth * 0.8, 
      height: inView ? height : 250,
      scale: 1
    }),
    leave: { height: 0, opacity: 0, scale: 0 },
    config: { mass: 1, tension: 280, friction: 60 },
    trail: 40,
  });

  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden")}
      style={{ height: Math.max(...columnHeights) || 0 }}
    >
      {transitions((style, item, _, index) => (
        <a.div
          key={item.id}
          style={{
            ...style,
            transform: style.scale.to(s => `scale(${s})`)
          }}
          className="absolute p-[15px] [will-change:transform,width,height,opacity]"
        >
          <div 
            className="relative w-full h-full overflow-hidden rounded-[4px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition duration-300 ease hover:scale-110 bg-white dark:bg-gray-800 cursor-pointer"
            onClick={() => onImageClick?.(index)}
          >
            <img
              src={item.image}
              alt={`Gallery item ${item.id}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </a.div>
      ))}
    </div>
  );
}

export default Masonry;
export { Masonry as Component };
