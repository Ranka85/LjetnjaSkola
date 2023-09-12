import { useEffect, useState } from "react";
import { MemoDemo } from "./memoDemo";

export const RickAndMorty = () => {
    const [characters, setCharacters] = useState([]);

    const [page, setPage] = useState(1)
    
    const [disabled, setDisabled] = useState(false)

    const handlerFetchCharacters = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page= ${page}`);
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handlerFetchCharacters();
    }, [page]);

    useEffect(()=>{
        console.log(page)
    }, [page]);

    const handlePageChange = (currPage) => {
        if(currPage > 0) setPage(currPage)
        setDisabled(currPage==1)
    }

    return (
        <>
        <button disabled= {disabled} onClick={()=> {handlePageChange(page-1)}}> Prev</button>
        {/* <button disabled={page === 1} onClick={ () => (handlePageChange(page-1))}>Prev</button> /}
         {/ <button onClick={ () => (handlePageChange(page-1))}>Prev</button> */}
            <button onClick={ () => (handlePageChange(page+1))}>Next</button>
            <MemoDemo list={characters} page={page}/>
            {characters.map((character) => (
                <div key={character.id}>
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <p>{character.gender}</p>

                </div>
            ))}

            {/* {characters.length ?  <p>s</p> : <p>Loading data</p>} */}
        </>
    );
};

// useMemo - koristi se za memoizaciju neke teže kalkulacije ili operacije tako da se ne ponavlja pri svakom rerenderovanju komponente. 

// useCallback - koristi se za memoizaciju funkcije, tako da se funkcija ne rekreira pri svakom rerenderovanju komponente. 
// Ovo je korisno kada proslijeđujete callback funkciju kao prop u optimizovanu child komponentu koja se oslanja na referentnu jednakost.

// useReducer - obično se koristi za upravljanje složenijim state-om, ili kada sljedeći state zavisi od prethodnog

// useRef - koristi se za stvaranje promjenjivih referenci na DOM elemente ili na druge vrijednosti koje se ne bi trebale mijenjati 
// između rerenderovanja komponenti.
//useRef se takođe može koristiti za čuvanje bilo koje vrijednosti koja se treba zadržati između rendera, 
// a ne samo referenci na DOM elemente. 

// forwardRef - nije hook, već utiliti funkcija koja nam omogućava da proslijedimo ("forwardujemo") ref prop kroz komponentu do jedne od njenih child komponenti. 
// To je korisno kada želimo imati pristup DOM node-u ili komponenti koja je unutar child komponente.
// Funkcija forwardRef za argument prima funkciju koja prima props i ref kao svoje parametre.

// Custom hooks su naše funkcije koje koriste druge hooks da bi obavile neku specifičnu funkcionalnost. 
