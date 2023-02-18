import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block', // nos permite colocar propriedades como altura e largura
  width: '$16',
  height: '$16',
  overflow: 'hidden', // para que todo conteúdo fique escondido para o border-radius funcionar
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover', // para imagem não distorcer
  borderRadius: 'inherit', // para herdar o borderRadius do elemento pai
})

export const AvatarFallback = styled(Avatar.Fallback, {
  // é o que vai ser mostrado quando não carregar a imagem do avatar
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
