import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  padding: '0px 20px',
  width: 360,
  minHeight: 82,
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  span: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    height: 40,
    h2: {
      fontFamily: '$default',
      fontWeight: '$bold',
      fontSize: '$xl',
      color: '$white',
    },
  },

  p: {
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$sm',
    color: '$gray200',
  },
})
