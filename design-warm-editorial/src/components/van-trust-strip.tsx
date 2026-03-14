"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function VanTrustStrip() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.02]);

  return (
    <section ref={ref} className="relative h-[35vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
      {/* Parallax image — object-contain-ish to show full van */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <Image
          src="/images/real/van-widemouth-bay.jpg"
          alt="Green Stripe branded van at Widemouth Bay — serving North Cornwall and North Devon"
          fill
          className="object-cover"
          style={{ objectPosition: "center center" }}
          sizes="100vw"
        />
      </motion.div>

      {/* Subtle cinematic gradient — lighter so the van is fully visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-bg/20" />
    </section>
  );
}
