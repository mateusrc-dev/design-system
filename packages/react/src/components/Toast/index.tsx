import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ButtonSvg } from '../ButtonSvg'
import { ToastContainer } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  // vamos pegar as propriedades do input - vamos poder passar as propriedades do input
  title: string
  date: string
}

export function Toast(props: ToastProps) {
  return (
    <ToastContainer>
      <span>
        <h2>{props.title}</h2>
        <ButtonSvg>
          <X />
        </ButtonSvg>
      </span>
      <p>{props.date}</p>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast' // vamos configurar como queremos que o nome do componente apareça dentro do story-book
