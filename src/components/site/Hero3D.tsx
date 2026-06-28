import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Hero3D({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div
      className="relative aspect-square w-full"
      style={{ perspective: "1400px" }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={i}
          initial={{ rotateY: 90, opacity: 0, scale: 0.85 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          exit={{ rotateY: -90, opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d" }}
          className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-soft"
        >
          <img
            src={images[i]}
            alt={alt}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
