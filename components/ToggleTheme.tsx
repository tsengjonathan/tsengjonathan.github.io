import { Menu } from "@headlessui/react"
import classNames from "classnames"
import { Monitor, Moon, Sun } from "react-feather"
import { hoverOpacity } from "../utils/tailwind"
import { useTheme } from "../utils/ThemeContext"
import { THEME } from "./constant"

const getIcon = (theme: THEME, className?: string) => {
  switch (theme) {
    case THEME.LIGHT: return <Sun className={className} />
    case THEME.DARK: return <Moon className={className} />
    case THEME.SYSTEM: return <Monitor className={className} />
  }
}

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  const menuItemClasses = classNames(
    'flex p-2',
    hoverOpacity
  )

  return (
    <Menu>
      <Menu.Button className={classNames(hoverOpacity, 'rounded transition-colors p-1')}>
        { getIcon(theme) }
      </Menu.Button>
      <Menu.Items className={classNames(
        'absolute flex flex-col rounded mr-6 mt-2 right-0 shadow',
        'bg-stone-100 dark:bg-stone-800'
      )}>
        <Menu.Item>
          <button
            className={classNames(menuItemClasses, 'rounded-t')}
            onClick={() => setTheme(THEME.LIGHT)}
          >
            { getIcon(THEME.LIGHT, 'p-0.5') }
            <div className="ml-2">Light</div>
          </button>
        </Menu.Item>
        <Menu.Item>
          <button
            className={menuItemClasses}
            onClick={() => setTheme(THEME.DARK)}
          >
            { getIcon(THEME.DARK, 'p-0.5') }
            <div className="ml-2">Dark</div>
          </button>
        </Menu.Item>
        <Menu.Item>
          <button
            className={classNames(menuItemClasses, 'rounded-b')}
            onClick={() => setTheme(THEME.SYSTEM)}
          >
            { getIcon(THEME.SYSTEM, 'p-0.5') }
            <div className="ml-2">System</div>
          </button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default ToggleTheme
