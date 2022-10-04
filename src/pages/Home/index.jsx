import { useState } from 'react'
import './styles.css'
import { Card } from '../../components/Card';

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Hello word!!</h1>
      <input type="text" placeholder='Digite o nome...' />
      <button type='button'>Acionar</button>
      <Card />
      <Card />
      <Card />
   
    </div>
  )
}

// export default Home
