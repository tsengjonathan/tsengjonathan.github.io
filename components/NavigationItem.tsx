import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { hoverOpacity } from '../utils/tailwind'

export type NavigationItemProps = {
  key: string
  isSelected?: boolean
  title: string
  url: string
}

const NavigationItem = ({ title, url, isSelected = false }: NavigationItemProps) => {
  return (
    <Link href={url}>
      <a className={classNames(
        'px-3 py-1 mx-1 rounded transition-colors',
        hoverOpacity,
        { 'underline bg-opacity-10 dark:bg-opacity-10': isSelected }
      )}>
        {title}
      </a>
    </Link>
  )
}

export default NavigationItem
