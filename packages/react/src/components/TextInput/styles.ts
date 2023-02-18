import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900', // vamos mudar a cor quando tiver com focus
  display: 'flex',
  alignItems: 'center', // para alinhar na parte abaixo do texto

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    // com has podemos selecionar estados - podemos selecionar um componente filho e fazer alterações no componente pai de acordo com o estado desse componente filho
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Prefix = styled('span', {
  fontfamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontfamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    // vamos tirar o outline quando o input estiver com focus
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
