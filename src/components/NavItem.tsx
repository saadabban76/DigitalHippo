"use client";

import React from 'react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className='flex flex-col'>
            <div className='relative  flex items-center'>
                <Button variant={isOpen ? "secondary" : "ghost"} className='gap-1.5 border-none outline-none' onClick={handleOpen} >
                    {category.label}
                    <ChevronDown className={cn('h-4 w-4 transition-all text-muted-foreground', {
                        "-rotate-180": isOpen,
                    })} />
                </Button>
            </div>
            {isOpen && (
                <div className={cn('absolute inset-x-0 top-[100%] text-sm text-muted-foreground', {
                    'animate-in fade-in-10 slide-in-from-tom-5': !isOpen,
                })}>
                    {/* custom shadow div */}
                    <div className='absolute inset-0 top-1/2 bg-white shadow' aria-hidden='true' />

                    <div className="relative bg-white">
                        <div className='mx-auto max-w-7xl px-8'>
                            <div className='grid grid-cols-4 gap-x-4 gap-y-10 py-16'>
                                <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                                    {category.features.map((feature, i) => (
                                        <div className='group relative text-base sm:text-sm' key={i}>
                                            <div className='relative aspect-video overflow-hidden rounded-lg 
                                            bg-gray-100 group-hover:opacity-75'>
                                                <Image src={feature.imageSrc} fill alt='img' className='flex-1 w-full h-full' />
                                            </div>
                                            <Link href={feature.href} className='mt-6 block font-medium text-gray-900'>{feature.name}</Link>
                                            <p className='mt-1' aria-hidden='true'>{feature.href}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* dropdown images container */}
        </div>
    )
}

export default NavItem