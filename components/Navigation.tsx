import { useRouter } from 'next/router'
import React from 'react'
import { navigationItems } from './constant'
import NavigationItem from './NavigationItem'
import ToggleTheme from './ToggleTheme'

const Navigation = () => {
  const { pathname } = useRouter()
  
  return (
    <nav className="flex px-6 py-4 w-full">
      <div className="flex flex-grow">
        {navigationItems.map(item => (
          <NavigationItem
            isSelected={pathname === item.url}
            {...item}
          />
        ))}
      </div>
      <div>
        <ToggleTheme />
      </div>
    </nav>
  )
}

export default Navigation
