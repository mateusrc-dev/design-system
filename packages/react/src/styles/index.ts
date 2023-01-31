import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@mateus-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  // vamos desestruturar o retorno desse createStitches
  // vamos passar várias opções para essa função
  themeMap: {
    // forma de mapear propriedades do css para algum tipo de token
    ...defaultThemeMap, // vamos importar o mapeamento padrão das propriedades do stitches
    height: 'space', // vamos usar os tokens de space nessa propriedade
    width: 'space',
  },
  theme: {
    // com ctrl + espaço vai aparecer variáveis que podemos usar em tipos de tokens para web - vamos importar os nossos tokens
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
