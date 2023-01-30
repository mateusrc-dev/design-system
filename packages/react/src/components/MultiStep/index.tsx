import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {/* --steps-size vai ser uma variável que vamos usar para criar barras de acordo com valor de size */}
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
      {/* todos os elementos do stitches recebe a propriedade css - Array.from é uma forma de criar um array, lembrando que size é um number */}
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep' // vamos configurar como queremos que o nome do componente apareça dentro do story-book
