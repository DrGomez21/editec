import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <section class="cards">
            <article class="card">
                <div class="card-description">
                    <img src=".\src\assets\images\perfiles.svg" alt="Imagen referente a la opción de visualizar Perfiles de los niños en la guardería"/>
                    <h3>Perfiles</h3>
                    <p>Acceder a la información rápidamente</p> 
                </div>
            </article>
            
            <article class="card">
                <div class="card-description">
                    <img src="./images/informes.svg" alt="Imagen referente a la opción de gestionar informes de los niños en la guardería">
                    <h3>Informes</h3>
                    <p>Gestionar informes</p>
                </div>
            </article>
        </section>
    </>
  )
}

export default App
