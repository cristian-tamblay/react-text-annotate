import React from 'react'

import Mark from './Mark'
import {selectionIsEmpty, selectionIsBackwards, splitWithOffsets} from './utils'
import {Span} from './span'

const Split = props => {
  if (props.mark) return <Mark {...props} />

  return (
    <span
      data-start={props.start}
      data-end={props.end}
    >
      {props.content}
    </span>
  )
}

interface TextSpan extends Span {
  text: string
}

type TextBaseProps<T> = {
  content: string
  value: T[]
  getSpan?: (span: TextSpan) => T
  // TODO: determine whether to overwrite or leave intersecting ranges.
}

type TextAnnotatorProps<T> = React.HTMLAttributes<HTMLDivElement> & TextBaseProps<T>

const TextAnnotator = <T extends Span>(props: TextAnnotatorProps<T>) => {
  const getSpan = (span: TextSpan): T => {
    // TODO: Better typings here.
    if (props.getSpan) return props.getSpan(span) as T
    return {start: span.start, end: span.end} as T
  }

  const {content, value, style} = props
  const splits = splitWithOffsets(content, value)
  return (
    <div style={style}>
      {splits.map(split => (
        <Split key={`${split.start}-${split.end}`} {...split}/>
      ))}
    </div>
  )
}

export default TextAnnotator
