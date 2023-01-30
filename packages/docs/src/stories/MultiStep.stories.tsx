import type { StoryObj, Meta } from '@storybook/react' // são tipagens do typescript
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  // definindo configuração global do componente - tudo que temos aqui dentro do objeto principal vai aparecer em todas as variações desse componente
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4, // aqui vão ser os valores padrão dessas propriedades
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ], // aqui podemos customizar o view do MultiStep
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
