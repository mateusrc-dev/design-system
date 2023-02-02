import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Toast, ToastProps } from '@mateus-ignite-ui/react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado', // podemos passar esses argumentos porque colocamos as props
    date: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    title: {
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
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
