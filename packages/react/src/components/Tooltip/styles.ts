import { styled } from '../../styles'

export const Date = styled('button', {
  position: 'relative',
  marginTop: 100,
  marginLeft: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 26px',
  width: 66.86,
  height: 58,
  background: '$gray600',
  borderRadius: '$sm',
  border: 0,
  '&:hover': {
    filter: 'brightness(0.8)',
    span: {
      visibility: 'visible',
    },
  },
})

export const TooltipContainer = styled('span', {
  position: 'absolute',
  bottom: '80%',
  left: '-115%',
  marginBottom: '$1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 219,
  height: 44,
  background: '$gray900',
  borderRadius: '$sm',
  visibility: 'hidden',

  '&:after': {
    content: '',
    position: 'absolute',
    top: '100%',
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '$black transparent transparent transparent',
  },
})
