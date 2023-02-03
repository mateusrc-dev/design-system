import { styled } from '../../styles'

export const ButtonSvgContainer = styled('button', {
  background: 'none',
  border: 0,
  cursor: 'pointer',
  width: 23,
  svg: {
    fontSize: '$lg',
    color: '$gray200',
    '&:hover': {
      filter: 'brightness(0.7)',
    },
  },
})
