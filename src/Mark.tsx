import React from 'react'
import Tooltip from '@mui/material/Tooltip';

export interface MarkProps {
  key: string
  content: string
  start: number
  end: number
  tag: string
  tooltip?: string
  color?: string
}

const Mark: React.SFC<MarkProps> = props => (
(props.tooltip !== "") ?
<Tooltip title={props.tooltip} arrow>
  <mark
    style={{backgroundColor: props.color || '#84d2ff', padding: '0 4px'}}
    data-start={props.start}
    data-end={props.end}
  >
    {props.content}
    {props.tag && (
      <span style={{fontSize: '0.7em', fontWeight: 500, marginLeft: 6}}>{props.tag}</span>
    )}
  </mark>
</Tooltip>
:
<mark
  style={{backgroundColor: props.color || '#84d2ff', padding: '0 4px'}}
  data-start={props.start}
  data-end={props.end}
>
  {props.content}
  {props.tag && (
    <span style={{fontSize: '0.7em', fontWeight: 500, marginLeft: 6}}>{props.tag}</span>
  )}
</mark>
)

export default Mark
