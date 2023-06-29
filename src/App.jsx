import DataProvider from './context/DataProvider'
import Home from './components/Home'

const App = () => {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App