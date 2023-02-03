import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '12px 20px',
  width: 360,
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  'span:nth-child(1)': {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    lineHeight: '$base',
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '$xl',
    color: '$white',
  },

  'span:nth-child(2)': {
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$sm',
    color: '$gray200',
    lineHeight: '$base',
  },
})
