// vamos criar aqui uma estrutura visual para mostrar as cores do nosso projeto

import { colors } from '@mateus-ignite-ui/tokens'
import { getContrast } from 'polished' // nos permite trabalhar com contrastes

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'spance-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff', // se o contrates for menos que 3.5, a cor da fonte será preta
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  }) // Object.entries retorna um array com vários arrays dentro onde a primeira posição do array é a chave e a segunda é o valor da chave, vamos desestrurar esse array
}
