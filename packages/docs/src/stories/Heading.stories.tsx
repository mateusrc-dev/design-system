import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'], // vamos colocar as opções que temos na propriedade size
      control: {
        type: 'inline-radio', // especificando o tipo de controle
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {} // aqui são as variantes do nosso componente que vão herdar as propriedades padrão acima

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1', // com essa propriedade podemos mudar a tag do componente que é um 'p'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um H2, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
