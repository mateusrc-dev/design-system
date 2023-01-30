import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ], // aqui podemos customizar o view do TextArea
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...!',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
