import Travel from '../components/Travel'
import travelObj from '../data'
import Header from '../components/Header'

function App() {
  return (
    <div className="container">
      <Header />
      {travelObj.map(item => {
        return <Travel {...item} />
      })}
    </div>
  )
}

export default App
