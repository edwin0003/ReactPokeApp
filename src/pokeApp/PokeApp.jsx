import { useEffect, useState } from "react"

function PokeApp() {
    const urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"
    const [pokemos, setPokemos] = useState([]);
    const [searchItem, setSearchItem] =useState('');

    const onLoadpokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemos(data.results)
    }
    useEffect(() => {
        onLoadpokemon()
    }, [])

    return (
        <div style={{ display: 'grid', gap: '2rem' }}>

            <div style={{ display: "grid", placeItems: 'center', background: 'green', height: '25vh' }}>
                <div>
                    <h1>Pokemon</h1>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <form >
                        <input id="search" type="text" placeholder="Buscar Pokemon" />
                        <button type="submit" >Buscar</button>
                    </form>

                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: '2rem' }}>
                {
                    pokemos.map((item, index) => (
                        <div key={index} style={{ backgroundColor: 'blanchedalmond', borderRadius: '18px', padding: '1rem', textAlign: 'center' }}>
                            <img style={{ width: '280px', height: '380px' }} src={`${urlImg}/${index + 1}.png`} ></img>
                            <h4 style={{ fontFamily: 'sans-serif', fontSize: '20px' }}> {`${item.name}`} </h4>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
export default PokeApp