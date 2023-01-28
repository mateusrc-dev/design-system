/// <reference types="vite/client" />
// acima colocamos um comando para que o TS entenda que estamos usando o vite para ser liberado tipagens globais do vite

import react from '@vitejs/plugin-react' // importando plugin do react
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})