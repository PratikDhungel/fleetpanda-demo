import { BrowserRouter } from 'react-router-dom'
import MainRouter from './router/MainRouter'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/libs/queryClient'

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
