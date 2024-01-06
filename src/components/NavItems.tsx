"use client";

import { PRODUCT_CATEGORIES } from '@/config';
import React, { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem';
import { useOnClickOutside } from 'usehooks-ts'

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null); // Learnings : this will be initialized only once when the page loads and which acts as the active navbar selected functionality.
  const isAnyOpen = activeIndex !== null; 

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setActiveIndex(null);
  };

  useEffect(() => {

    const escTrigger = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener('keydown', escTrigger);
  
    return () => document.removeEventListener('keydown', (e)=> escTrigger(e));
  }, []);

  useOnClickOutside(ref, handleClickOutside, 'mouseup');

  return (
    <div className='flex gap-4 h-full items-center' ref={ref}>
      {PRODUCT_CATEGORIES.map((category, i) => {        
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex; // Learnings : this becomes true only if activeIndex contains the index of the navItem else it will just be false which will result in the unselected navItem

        return (
          <NavItem
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
            category={category} />
        );
      })}
      
    </div>
  )
}

export default NavItems