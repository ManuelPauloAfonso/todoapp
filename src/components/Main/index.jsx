
import { Container } from "./style"
import Logo from "../../assets/To-Do List.svg"
import Social1 from "../../assets/Vector(3).svg"
import Social2 from "../../assets/Vector(4).svg"
import Social3 from "../../assets/Vector(5).svg"
import Social4 from "../../assets/Vector(6).svg"
import Social5 from "../../assets/Vector(7).svg"
import { useState } from "react"


export default function Main() {

    const [task, setTask] = useState("")
    const [itemsList, setItemsList] = useState([])
    const [error, setError] = useState(false)


    function handleChangeInput(e) {
        const inputTask = e.target.value

        setTask(inputTask)
    }
    function handleaddInput(e) {
        e.preventDefault();
        const newItems =  [...itemsList, task];
        setTask("")

        if(!task){
            setError(true)
            return 
        }
        setItemsList(newItems)
    }
    function removeTask(e, item){
        e.preventDefault()
        const filter = itemsList.filter(items => 
            items  !== item
        )

        setItemsList(filter)
    }
    
    return(
        <Container>
            <div className="line1">
                <div className="lok">
                    <span> <a href=""> <img src={Social1} alt="" /></a> Criar nova tarefa </span>
                    <form onSubmit={handleaddInput} className="columm bf"> 
                            <input className={error ? 'active' : ''}  type="text" placeholder="Nome da tarefa" value={task} onChange={handleChangeInput} />
                        <button >
                            <img src={Social4} alt="" />
                        </button>
                    </form>
                </div>

                <div className="linha">

                </div>
                <div className="lok1">
                    <span> <a href=""> <img src={Social2} alt="" /></a> Tarefas de hoje </span>
                    <div className="columm">
                         <ul>


                                    {
                                        itemsList.length && 
                                            
                                        
                                       itemsList.map((item, index) => (  
                                          <li key={index}> <pre>{item}</pre>  <button onClick={(e) => removeTask(e, item)}><img src={Social3} alt="" /></button> </li>
                                       ))
                                   } 
                          </ul>
                    </div>
                </div>

            </div>
            <div className="lip">

            </div>
            <div className="lok1">
                    <span> <a href=""> <img src={Social5} alt="" /></a> Tarefas Concluidas </span>
                    <div className="columm">
                       <ul>
                            <li className="lo">Estudar React <button><img src={Social3} alt="" /></button> </li>
                            <li className="lo">Estudar React <button><img src={Social3} alt="" /></button> </li>
                            <li className="lo">Estudar React <button><img src={Social3} alt="" /></button> </li>

                       </ul>
                    </div>
            </div>
            
        </Container>
    )
}