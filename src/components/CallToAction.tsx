"use client"
import HelixImage from '../assets/images/helix2.png'
import EmojiImage from '../assets/images/emojistar.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { use, useRef } from 'react';
import Link from 'next/link';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <div className="bg-black text-white py-[72px] sm:py-24" ref={containerRef}>
      
      <div className="container max-w-xl relative">
      <motion.div style={{translateY}}>
      <Image src={HelixImage} alt="helix" className="absolute top-6 left-[calc(100%+36px)]" />
      </motion.div>
      <motion.div style={{translateY}}>
       
      <Image src={EmojiImage} alt="emoji" className="absolute -top-[120px] right-[calc(100%+30px)]" />
      </motion.div>
       

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get Instant Access</h2>
        <p className="text-xl text-white/70  mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, veritatis? Omnis minima quisquam error accusamus?</p>
        <form className="mt-10 flex flex-col gap-2.5 md:max-w-xl mx-auto sm:flex-row">
  <input
    type="email"
    placeholder="bansodebhageshbb08@gmail.com"
    className="h-12 bg-white/20 rounded-lg font-medium placeholder:text-[#9CA3AF] sm:flex-1 px-4 text-start"
  />
  <Link
    href="mailto:bansodebhageshbb08@gmail.com"
    className="bg-white text-black h-12 rounded-lg px-10 flex items-center justify-center"
  >
    Get access
  </Link>
</form>
      </div>


    </div>
  )
};
