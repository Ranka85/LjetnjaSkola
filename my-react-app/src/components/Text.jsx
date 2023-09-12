export const Text =({name = "Aleks", country="PL"})=>{

    return <>
     
       <h1 htmlFor="saf" className='first-h1' style={{backgroundColor: "lightBlue", fontSize: 58}}>DevLab React JS 2023</h1>
       <h2 onClick={() => console.log("Cao")}>{name} <span> Miks</span>- <span style={{fontStyle: "italic"}}> {country}</span></h2>
       <p dangerouslySetInnerHTML={{__html: "<b>Ponedeljak</b>"}}></p>
      </>
 }