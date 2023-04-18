import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
// import { feedImgs } from './api';
// feedImgs();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Home />
    </QueryClientProvider>
  )
}

export default App
