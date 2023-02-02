import { ComponentProps, ReactNode } from 'react'
import { ButtonSvgContainer } from './styles'

export interface buttonSvgProps
  extends ComponentProps<typeof ButtonSvgContainer> {
  children?: ReactNode
}

export function ButtonSvg({ children, ...props }: buttonSvgProps) {
  return <ButtonSvgContainer {...props}>{children}</ButtonSvgContainer>
}

ButtonSvg.displayName = 'ButtonSvg' // vamos configurar como queremos que o nome do componente apareça dentro do story-book
