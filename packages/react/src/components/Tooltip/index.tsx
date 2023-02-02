import { TooltipContainer, Date } from './styles'
import { ComponentProps } from 'react'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string
  date: string
} // vamos colocar as propriedades em AvatarImage de uma tag img - podemos fazer isso colocando a tipagem em props

export function Tooltip(props: TooltipProps) {
  return (
    <Date>
      <Text>{props.date}</Text>
      <TooltipContainer>
        <Text>{props.content}</Text>
      </TooltipContainer>
    </Date>
  )
}

Tooltip.displayName = 'Tooltip' // vamos configurar como queremos que o nome do componente apareça dentro do story-book
