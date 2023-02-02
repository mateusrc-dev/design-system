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
  background: '#323238',
  borderRadius: 6,
  // border: 0,
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
  left: '-120%',
  // marginLeft: '-25%',
  marginBottom: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 219,
  height: 44,
  background: '#121214',
  borderRadius: 5,
  visibility: 'hidden',

  '&:after': {
    content: '',
    position: 'absolute',
    top: '100%',
    // left: '50%',
    // marginLeft: 5,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#000 transparent transparent transparent',
  },
})
