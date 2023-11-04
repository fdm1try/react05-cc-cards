import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Card } from './components/Card';

function App() {
  return (
    <div className="cards">
      <Card title='Card title' image='https://random.imagecdn.app/300/200' 
        text={`Some quick example text to build on the card title and make up the bulk of the card's content.`}>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
      <Card title='Special title treatment' text='With supporting text below as a natural lead-in to additional content.'>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  )
}

export default App
