import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset', // para tirar todas as propriedades padrão que vem em um botão
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      // vamos criar variantes de cores
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',
      },

      '&:not(:disabled):hover': {
        color: '$white',
      },

      '&:disabled': {
        color: '$gray600',
      },
    },
    size: {
      // variantes de tamanhos
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary', // qual vai ser o padrão do botão caso não for especificado
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
