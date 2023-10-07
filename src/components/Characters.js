export default function Characters (props){
    //nos traemos la información de los props de app.js de characters
    const {characters, setCharacters} = props;
    console.log(props);
    console.log(characters);

    const resetCharacters = () =>{
        //console.log('resetear');
        setCharacters(null);
    }
    return(
        <div className="characters">
            <h1>
                Listado de personajes
            </h1>
            <span className="back-home" onClick={resetCharacters}>Inicio</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.image}></img>
                        </div>
                        <div>
                            <h3> {character.name} </h3>
                            <h6> {character.status === 'Alive' ? (
                                <span className="alive">Alive</span>
                            ) : (
                                <span className="dead">Dead</span>
                            )} 
                            </h6>
                            <p>
                                <span className="text-grey">Episodios:</span>
                                <span> {character.episode.length} </span>
                            </p>
                            <p>
                              <span className="text-grey">Especie:</span>  
                              <span> {character.species} </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Inicio</span>
        </div>
    )
    
}