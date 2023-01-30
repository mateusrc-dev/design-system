import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ], // aqui podemos customizar o view do TextInput
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
