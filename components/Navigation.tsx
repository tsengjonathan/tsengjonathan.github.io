import { useRouter } from 'next/router'
import React from 'react'
import { navigationItems } from './constant'
import NavigationItem from './NavigationItem'

const Navigation = () => {
  const { pathname } = useRouter()
  
  return (
    <nav className="flex m-4">
      <div>

      </div>
      <div className="flex-grow">
        {navigationItems.map(item => (
          <NavigationItem
            isSelected={pathname === item.url}
            {...item}
          />
        ))}
      </div>
      <div>

      </div>
    </nav>
  )
}

export default Navigation
