import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

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
        "px-3 py-1 mx-1 rounded transition-colors hover:bg-stone-200",
        { 'underline bg-stone-200': isSelected }
      )}>
        {title}
      </a>
    </Link>
  )
}

export default NavigationItem
