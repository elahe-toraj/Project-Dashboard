import './App.css'
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
