import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {} // vamos colocar as propriedades em AvatarImage de uma tag img - podemos fazer isso colocando a tipagem em props

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        {/* para não aparecer o fallback antes da imagem carregar */}
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar' // vamos configurar como queremos que o nome do componente apareça dentro do story-book
