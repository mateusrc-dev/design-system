import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Button, ButtonProps } from '@mateus-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Form/Button',
  component: Button,
  args: {
    // aqui vai ser o valor padrão das nossas propriedades
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'], // vamos colocar as opções que temos na propriedade variant
      control: {
        type: 'inline-radio', // especificando o tipo de controle
      },
    },
    size: {
      options: ['sm', 'md'], // vamos colocar as opções que temos na propriedade size
      control: {
        type: 'inline-radio', // especificando o tipo de controle
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
