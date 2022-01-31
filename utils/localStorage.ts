export const get = (key: string): string | null => {
  if (typeof window === 'undefined' || !window.localStorage) { return null }
  return window.localStorage.getItem(key)
}

export const set = (key: string, value: string): boolean => {
  if (typeof window === 'undefined' || !window.localStorage) { return false }
  window.localStorage.setItem(key, value)
  return true
}

export const remove = (key: string): boolean => {
  if (typeof window === 'undefined' || !window.localStorage) { return false }
  window.localStorage.removeItem(key)
  return true
}
