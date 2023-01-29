import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Text, TextProps } from '@ignite-ui/react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem. Facilis quis quam corporis maxime. Voluptate aliquid excepturi modi corrupti, tempora deleniti nobis suscipit? Molestias corrupti doloremque velit aspernatur ullam.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {} // aqui são as variantes do nosso componente que vão herdar as propriedades padrão acima

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong', // com essa propriedade podemos mudar a tag do componente que é um 'p'
  },
}
