"use client";

import { PRODUCT_CATEGORIES } from '@/config';
import React, { useState } from 'react'
import NavItem from './NavItem';

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null); // Learnings : this will be initialized only once when the page loads and which acts as the active navbar selected functionality.
  const isAnyOpen = activeIndex !== null; 

  console.log('active INdex : ', activeIndex);

  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category, i) => {        
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        }

        const isOpen = i === activeIndex; // Learnings : this becomes true only if activeIndex contains the index of the navItem else it will just be false which will result in the unselected navItem

        console.log(i + " = " + isOpen);
        // console.log(i + " = " + isOpen);

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