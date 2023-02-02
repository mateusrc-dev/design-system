import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { ButtonSvg, buttonSvgProps } from '@mateus-ignite-ui/react'
import { X } from 'phosphor-react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Form/ButtonSvg',
  component: ButtonSvg,
  args: {
    children: (
      <>
        <X />
      </>
    ),
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<buttonSvgProps>

export const Primary: StoryObj<buttonSvgProps> = {}
