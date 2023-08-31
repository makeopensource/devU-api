import LocalStorageService from 'services/localStorage.service'

export const LOCALSTORAGE_THEME_KEY = 'Theme' // the key used in local storage

const themes = {
  light: { name: 'light', class: '' },
  dark: { name: 'dark', class: 'dark-mode' },
}

export const isDarkMode = () => {
  // If they've set a theme, use that theme
  const localStorageTheme = LocalStorageService.get(LOCALSTORAGE_THEME_KEY)
  if (localStorageTheme) return themes.dark.name === localStorageTheme

  // If they have a system theme, use that
  const osDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (osDarkTheme) return osDarkTheme

  // If no theme was detected return light theme
  return false
}

export const setDarkMode = () => {
  setDarkModeFlag()
  setDarkModeCss()
}

export const setLightMode = () => {
  setLightModeFlag()
  setLightModeCss()
}

export const setLightModeFlag = () => LocalStorageService.set(LOCALSTORAGE_THEME_KEY, themes.light.name)
export const setDarkModeFlag = () => LocalStorageService.set(LOCALSTORAGE_THEME_KEY, themes.dark.name)

export const setLightModeCss = () => document.body.classList.remove(themes.dark.class)
export const setDarkModeCss = () => document.body.classList.add(themes.dark.class)

export function initializeTheme() {
  const isDark = isDarkMode()

  if (isDark) setDarkModeCss()
  else setLightModeCss()
}

export function getCssVariables() {
  const body = getComputedStyle(document.body)

  return {
    // Theme colors
    textColor: body.getPropertyValue('--text-color'),
    background: body.getPropertyValue('--background'),

    primary: body.getPropertyValue('--primary'),
    primaryDarker: body.getPropertyValue('--primary-darker'),

    secondary: body.getPropertyValue('--secondary'),
    secondaryDarker: body.getPropertyValue('--secondary-darker'),

    focus: body.getPropertyValue('--focus'),

    // Other CSS colors
    greyLightest: body.getPropertyValue('--grey-lightest'),
    greyLighter: body.getPropertyValue('--grey-lighter'),
    grey: body.getPropertyValue('--grey'),

    blueLighter: body.getPropertyValue('--blue-lighter'),
    blue: body.getPropertyValue('--blue'),

    redLighter: body.getPropertyValue('--red-lighter'),
    red: body.getPropertyValue('--red'),

    purpleLighter: body.getPropertyValue('--purple-lighter'),
    purple: body.getPropertyValue('--purple'),

    greenLighter: body.getPropertyValue('--green-lighter'),
    green: body.getPropertyValue('--green'),

    yellowLighter: body.getPropertyValue('--yellow-lighter'),
    yellow: body.getPropertyValue('--yellow'),
  }
}
