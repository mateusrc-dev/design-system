import { ComponentProps, ElementType } from 'react' // o ComponentProps faz a leitura dos tipos do componente
import { styled } from '../styles'

export const Heading = styled('h2', {
  // não vamos colocar h1 porque ele só pode ser utilizado uma vez por página, caso quiser mudar usar 'as'
  fontFamily: '&default',
  lineHeight: '&shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading' // vamos configurar como queremos que o nome do componente apareça dentro do story-book
