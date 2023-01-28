import { styled } from './styles'
import { ComponentProps } from 'react' // ComponentProps herda naturalmente propriedades que o componente pode receber

export const Button = styled('button', {
  // com stitches podemos integrar o pacote de tokens
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    // quando usamos styled do stitches podemos acessar variants - vamos criar variantes e suas possíveis propriedades
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    // size padrão quando ele não for informado para o botão
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
