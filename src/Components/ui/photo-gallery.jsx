import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer group",
              selected?.id === card.id
                ? "rounded-xl absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full shadow-lg"
                : "bg-white rounded-xl h-full w-full shadow-md hover:shadow-xl transition-all duration-300"
            )}
            whileHover={{ 
              scale: selected?.id === card.id ? 1 : 1.02,
              y: selected?.id === card.id ? 0 : -4
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} selected={selected} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: selected?.id ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

const ImageComponent = ({ card, selected }) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="500"
        width="500"
        className={cn(
          "object-cover object-center absolute inset-0 h-full w-full transition-all duration-500",
          selected?.id !== card.id && "group-hover:scale-110"
        )}
        alt="Photography showcase"
        loading="lazy"
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Hover overlay with photo info */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
      >
        <p className="text-sm font-medium opacity-90">Click to view</p>
      </motion.div>
    </div>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-xl shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.7,
        }}
        className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 rounded-xl"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="relative px-6 pb-6 z-[70]"
      >
        {selected?.content}
        
        {/* Close button */}
        <motion.button
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            // This will be handled by the outside click
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};
