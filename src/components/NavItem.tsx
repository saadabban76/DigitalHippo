"use client";

import React from 'react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = typeof PRODUCT_CATEGORIES[number];

interface NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}


const NavItem = ({ category, isAnyOpen, handleOpen, isOpen }: NavItemProps) => {
    // console.log('navitem : ', isOpen);
    return (
        <div className='flex'>
            <div className='relative flex items-center'>
                <Button variant={isOpen ? "secondary" : "ghost"} className='gap-1.5' onClick={handleOpen} >
                    {category.label}
                    <ChevronDown className={cn('h-4 w-4 transition-all text-muted-foreground', {
                        "-rotate-180": isOpen,
                    })} />
                </Button>

                {/* dropdown images container */}
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default NavItem