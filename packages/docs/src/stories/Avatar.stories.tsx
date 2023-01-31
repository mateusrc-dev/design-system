import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/mateusrc-dev.png', // podemos passar esses argumentos porque colocamos as props
    alt: 'Mateus Raimundo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined, // para a imagem da erro
  },
}
