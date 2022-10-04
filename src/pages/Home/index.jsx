import { useEffect, useState } from 'react'
import './styles.css'
import { Card } from '../../components/Card';

export function Home() {
  // 1 elemento => state
  // 2 elemento => funcão que atualiza o state, pode receber uma valor inicial 
  const [studentName, setStudentName]= useState('valor inicial');
  const [ students, setStudents] = useState([]);
  const [user, setUser ] = useState({ name: '', avatar: ''});

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
 
  useEffect(()=> {
    // corpo do useEffect => ações a ser executadas
    // É executado automaticamente quando a interface é inicializada / renderizada
    
    // fetch('https://api.github.com/users/messiascardoso')
    // .then(response => response.json())
    // .then(data => {
    //   setUser({
    //     name: data.name,
    //     avatar: data.avatar_url
    //   })
    // });

  // Para utilizar o async await

  async function fetchData() {
    const response =  await fetch('https://api.github.com/users/messiascardoso')
    const data = await response.json()
    setUser({
      name: data.name,
      avatar: data.avatar_url
    })
  }
  fetchData()
  console.log('useEffect foi chamado!!');
  }, []) 
  
  // [] => Quando o array é vazio o user effect é executado somente uma vez e quer dizer que não tem dependências. 
  // [students] => Ao passar um state assim que for alterado o valor o useEffect é executado novamente
  // Pode receber uma lista de states separados por virgulas
  // Bem utilizado ao buscar dados na API (Assincrono)
  
  
   return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{ user.name }</strong>
          <img src={ user.avatar } alt="Foto de perfil" />
        </div>
      </header>
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
