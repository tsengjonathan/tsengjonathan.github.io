import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { LOCAL_STORAGE, THEME } from "../components/constant";
import { get, remove, set } from "./localStorage";

const getTheme = (): THEME => {
  const cachedTheme = get(LOCAL_STORAGE.THEME)

  switch (cachedTheme) {
    case THEME.LIGHT: return THEME.LIGHT
    case THEME.DARK: return THEME.DARK
    default: return THEME.SYSTEM
  }
}

const preferSystemDarkMode = () => (!get(LOCAL_STORAGE.THEME) && window.matchMedia('(prefers-color-scheme: dark)').matches)

type ThemeContextProps = {
  theme: THEME
  setTheme: (_theme: THEME) => void
  systemTheme: THEME.LIGHT | THEME.DARK | null
}

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: getTheme(),
  setTheme: (_theme: THEME) => console.warn('ThemeContext not initialized'),
  systemTheme: null,
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [ theme, setTheme ] = useState<THEME>(getTheme())
  const [ systemTheme, setSystemTheme ] = useState<THEME.LIGHT | THEME.DARK | null>(null)
  
  useEffect(() => {
    const cachedTheme = getTheme()

    if (theme !== cachedTheme) {
      if (theme === THEME.SYSTEM) {
        remove(LOCAL_STORAGE.THEME)
      } else {
        set(LOCAL_STORAGE.THEME, theme)
      }
    }

    if (theme === THEME.DARK || preferSystemDarkMode()) {
      window.document.documentElement.classList.add('dark')
    } else {
      window.document.documentElement.classList.remove('dark')
    }
  }, [ theme ])
  
  useEffect(() => {
    if (theme === THEME.SYSTEM) {
      setSystemTheme(preferSystemDarkMode() ? THEME.DARK : THEME.LIGHT)
    }
  }, [ theme, systemTheme ])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, systemTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export const useIsDarkMode = (): THEME.LIGHT | THEME.DARK | null => {
  const { theme, systemTheme } = useTheme()

  if (typeof window === 'undefined') { return null }
  
  if (theme === THEME.SYSTEM) {
    return systemTheme
  }

  return theme
}
