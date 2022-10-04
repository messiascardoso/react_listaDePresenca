import { useState } from 'react'
import './styles.css'
import { Card } from '../../components/Card';

export function Home() {
  // 1 elemento => state
  // 2 elemento => funcão que atualiza o state, pode receber uma valor inicial 
  const [studentName, setStudentName]= useState('valor inicial');
  const [ students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br',{
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })
    };
    // Por padrão o state é imutable => toda vez que é adicionado um novo 
    // item no array ele substitui o item atual
    // setStudents([newStudent])

    // Para recuperar o state anterior com o novo item tem que utilizar a sintax abaixo
    // Será substituido o array inteiro com a novo que é prevstate + newStudent e utilizar o sprad Operator
    setStudents(prevState => [...prevState, newStudent])
  }
 
   return (
    <div className='container'>
      <h1>Nome: { studentName}</h1>
      <input 
        type="text" 
        placeholder='Digite o nome...' 
        onChange={e => setStudentName(e.target.value)}
        />
      <button type='button' onClick={handleAddStudent}>
        Adicionar
      </button>
      {
        // Ao utilizar o map, precisa incluir um atributo "key" e incluir um valor unico para ajudar o react na performace 
        students.map((student, index) => 
          <Card 
            key={index}
            name={student.name} 
            time={student.time}
          />
        ) 
      }
    </div>
  )
}

// export default Home
