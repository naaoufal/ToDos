import './App.css';
import { useEffect, useState } from 'react';
//import { useHistory } from "react-router-dom";

function App() {

  const [name, setName] = useState("")
  const [currName, setCurrName] = useState("")
  const [toggle, setToggle] = useState(true)
  const [all, setAll] = useState(false)
  const [active, setActive] = useState(true)
  const [compeletd, setCompeletd] = useState(false)
  const [data, setData] = useState([])

  //let history = useHistory()

  // handle toggle and change state :
  const toggleInput = () => {
    setToggle(false);
  }
  const handleChange = (event) => {
    setName(event.target.value);
  }
  const showMethod = () => {
    //console.log(all, active, compeletd)
  }

  // render todo list data :
  const renderToDoData = () => {
    fetch(`http://localhost:3001/api/todos/all`).then(res => {
      return res.json()
    }).then(data => {
      setData(data)
    })
  }

  // archive a todo list :
  const archiveTodo = (id) => {
    console.log(id)
  }

  // edit on a todo list :
  const editValueData = (id) => {
    //console.log(id, currName)
    fetch(`http://localhost:3001/api/todos/edit/${id}`, {
      method : 'PATCH',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        name : currName,
        stat : "active"
      })
    }).then(res => {
      window.location()
    })
  }

  // add new todo list :
  const addTodo = () => {
    console.log("work", name)
    fetch(`http://localhost:3001/api/todos/add`, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        name : name,
        stat : "active"
      })
    }).then(res => {
      document.querySelector('.inp').value = ""
      renderToDoData()
    })
  }

  useEffect(() => {
    renderToDoData()
  }, [])

  return (
    <div className="App">
      <div>
        <section className="sec">
          <header className="header">
            <h1>todos</h1>
            <div className="for">
            <input
            type='text'
            class="inp"
            placeholder="What needs to be done?"
            onChange={(event) => {setName(event.target.value)}}
            onKeyDown={(e) => {
              if(e.key == 'Enter') {
                addTodo()
              }
            }}
            />
            </div>
            {data.map((i) => (
              i.stat == "active" ?
                <div className="data" key={i._id}>
                  {toggle ? 
                  <div className="ts">
                    <p onDoubleClick={toggleInput}> {i.name} {i._id}</p>
                    <button
                    onClick={archiveTodo(i._id)}
                    >
                      &#9747;
                    </button>
                  </div>
                  :
                  <input
                  onChange={handleChange}
                  type='text'
                  placeholder={i.name}
                  onChange={(event) => {setCurrName(event.target.value)}}
                  onKeyDown={(e) => {
                    if(e.key == 'Enter') {
                      editValueData(i._id)
                    }
                  }}
                  />
                  }
                  
                </div>
                :
                false
            ))}
            {/* <button>All</button>
            <button onClick={showMethod}>Active</button>
            <button onClick={showMethod}>Completed</button> */}
          </header>
          
        </section>
      </div>
    </div>
  );
}



export default App;
