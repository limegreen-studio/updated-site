"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  autoFlip = true,
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    if (items && items.length > 0) {
      setCards(items);
    }
  }, [items]);

  useEffect(() => {
    if (autoFlip && cards && cards.length > 0) {
      startFlipping();
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [cards, autoFlip]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <div className="relative h-64 sm:h-72 md:h-80 w-[85vw] sm:w-96 md:w-[28rem] mx-auto">
      {cards.map((card, index) => {
        // Last card (highest index) should be on top
        const stackIndex = cards.length - 1 - index;

        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-64 sm:h-72 md:h-80 w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-neutral-200 shadow-black/[0.1] flex flex-col justify-between overflow-hidden"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: stackIndex * -CARD_OFFSET,
              scale: 1 - stackIndex * SCALE_FACTOR,
              zIndex: index + 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="font-normal text-neutral-700 text-base sm:text-base md:text-lg leading-relaxed">
              {card.content}
            </div>
            <div className="mt-4">
              <p className="text-neutral-500 font-medium text-base sm:text-base md:text-lg">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal text-sm sm:text-sm md:text-base">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
