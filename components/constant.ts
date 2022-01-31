import { NavigationItemProps } from './NavigationItem';

export enum LOCAL_STORAGE {
  THEME = 'theme'
}

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system'
}

export const navigationItems: NavigationItemProps[] = [{
  key: 'home',
  title: 'HOME',
  url: '/'
}, {
  key: 'outtaink',
  title: 'OUTTAINK',
  url: 'https://outtaink.com'
}]
