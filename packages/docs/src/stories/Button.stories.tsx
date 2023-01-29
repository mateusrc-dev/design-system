import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  // definindo configuração global do botão - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse botão
  args: {
    // argumentos
    children: 'Enviar',
  },
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  // vamos ter variações do botão
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big', // se não for passado size colocamos como default small
  },
}
