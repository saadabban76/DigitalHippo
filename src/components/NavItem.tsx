import React from 'react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'

type Category = typeof PRODUCT_CATEGORIES[number];

interface NavItemProps {
    category: Category
}

const NavItem = ({category}: NavItemProps) => {
  return (
      <div className='flex'>
          <div className='relative flex items-center'>
              <Button variant={'link'} className='gap-1.5'>{category.label}</Button>
          </div>
          </div>
  )
}

export default NavItem