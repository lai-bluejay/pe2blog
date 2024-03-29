import React, { useRef, useState } from 'react'

import { useClickOutside } from '../../utils/hooks'
import { TocDiv, TocLink, TocIcon, Title, Toggle } from './styles'

export default function Toc({ headings, title = `Contents`, slug }) {
  const [open, setOpen] = useState(false)
  const minDepth = Math.min(...headings.map(({ depth }) => depth))
  const ref = useRef()
  useClickOutside(ref, () => setOpen(false))
  return (
    <>
      <Toggle opener onClick={() => setOpen(true)} size="1.6em" />
      <TocDiv ref={ref} open={open}>
        <Title open={open} css="margin: 0;">
          <TocIcon />
          {title}
          <Toggle closer onClick={() => setOpen(false)} />
        </Title>
        <nav open={open}>
          {headings.map(({ value, depth}) => (
            <TocLink
              key={value}
              depth={depth - minDepth}
              to={ '/blog' + slug + '/#'+ value}
              onClick={() => setOpen(false)}
            >
              {value}
            </TocLink>
          ))}
        </nav>
      </TocDiv>
    </>
  )
}
