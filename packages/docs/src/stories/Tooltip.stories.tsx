import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Tooltip, TooltipProps } from '@mateus-ignite-ui/react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    date: 21,
    content: '21 de Outubro - Indisponível',
  },
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    date: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
