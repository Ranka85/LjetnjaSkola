import { useState } from 'react'
import { RickAndMorty } from './components/RickAndMorty'
// import { refDEMO } from './components/refDemo'
import './App.css'
import { Counter } from './components/reducerDemo'
import { ForwRefDemo } from './components/ForwardRefDemo'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { ThemeContext } from './contexts/ThemeContext'
import { Toolbar } from './components/Toolbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { AppLayout } from './layout'
import {HomePage} from './pages/home'
import {AboutPage} from './pages/about'
import { UsersPage } from './pages/users'



const { Provider } = ThemeContext

function App() {
  const router = createBrowserRouter([
    {
      path: "", element: <AppLayout />, children: [
        {
          index:true, element: <HomePage />, exact:true
        },
        {
          path: "about",
          children: [{
            index:true, element: <AboutPage />, exact:true,
          },{path: "team", element:<h1>Team page</h1>
        }]
        },
      
        {path:"users/:id", element: <UsersPage/>},
        {path:"*", element:<h1>404 Not found</h1>}]
    }])


  return <RouterProvider router={router} />
}

export default App;


// const  App = ()=> {
//   const router = createBrowserRouter([{
//     path:"", element: <AppLayout/>, children:[
//       {
//         index:true, element:<HomePage/>
//       },
//       {
//         path:"about", element:<AboutPage/>,
//       },{path:"team", element: <h1>Team</h1>
//         }]
//       }]
    

//   }])
  

//   // const [count, setCount] = useState(0)
//   // const [input, setInput] = useState('')
//   // const {Provider} = ThemeContext

//   // const handlerUserInput = (event) => {
//   //   console.log(event.target.value)
//   //   setInput(event.target.value)
  // }

  // const handlerInputWithoutA=(event) =>{
  //   console.log(event.target.value.replaceAll('a', ''))
  //   setInput(event.target.value)
  // }

  // const country = "PL";
  // const name = "Nenad ";
  // // return <RickAndMorty/>
  // return <Provider value='dark' >

  // <Toolbar/>
  
  // </Provider>
  // return <ThemeSwitcher /> 
  //<ForwRefDemo /> 
  // <RefDemo />
  // <Counter /> 
  // <RickAndMortyCharacters/>
  // return <Counter/>
  // return <refDemO/>
  // return (

  //   <>
  //   {/* <input type='text'  value={input}  placeholder='enter' onChange={handlerInputWithoutA}/> */}
  //   <RickAndMorty/>
  //   {/* <button onClick={()=> setCount(count+1)}>Click me {count}</button> */}
  //   {/* <text name={name} country={country}/> */}
  //     {/* <div>
  //      <h1 htmlFor="saf" className='first-h1' style={{backgroundColor: "lightBlue", fontSize: 58}}>DevLab React JS 2023</h1>
  //      <h2 onClick={() => console.log("Cao")}>{name} <span> Miks</span>- <span style={{fontStyle: "italic"}}> {country}</span></h2>
  //      <p dangerouslySetInnerHTML={{__html: "<b>Ponedeljak</b>"}}></p>
  //     </div> */}
  
  //   </>
  // )
// }

// export default App
// //
//React je JavaScript biblioteka,oristi se za izradu dinamičkih web aplikacija. 
//JSX (JavaScript XML) - sintaksna ekstenzija za JavaScript koja omogućava pisanje HTML elemenata unutar JavaScript koda.
// Babel - JavaScript kompajler koji razumije JSX. On pretvara JSX sintaksu u Vanilla ES5 JavaScript koji će svaki pretraživač moći interpretirati. 
// State - stanje, u React-u predstavlja interni objekat (varijabla) koji drži promenljive vrijednosti komponente.
// Props - properties ili svojstva, su način da se informacije prenose iz parent komponente u child komponentu
// omponenta - osnovna jedinica UI-a u React aplikaciji. Komponente u Reactu omogućavaju developerima da grade reusable djelove interfejsa koji mogu 
// da upravljaju sopstvenim state-om i da prihvataju props kako bi se konfigurisale za različite potrebe