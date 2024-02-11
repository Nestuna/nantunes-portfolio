'use client'
import { marked } from 'marked'

import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import parse from 'html-react-parser';

export const MarkdownText = ({ children } : { children: string}) => {
  const [text, setText] = useState('')

  useEffect(() => {
    const parseText = async () => {
      return await marked.parse(children)
    }
    parseText()
      .then((text) => setText(text))
  }, [children])

  return (
    <Prose flexWrap='wrap'>{ parse(text) } </Prose>
  )
}
