import { useState } from "react"
import PropTypes from 'prop-types';

function CounterApp({ title }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count >= 0) {
            setCount(count + 1)
        }
    }
    const Decrement = () => {
        setCount(count > 0 ? count - 1 : 0)
    }
    const Reset = () => {
        setCount(0)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh', gap: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '600px', alignItems: 'center', border:'3px solid black'}}>
                <h1 style={{fontFamily:'sans-serif', fontSize: '32px', fontWeight:'bold', color:'#33', textAlign:'center', textTransform: 'uppercase'}}>{title}</h1>
                <h2 style={{fontSize:'80px', fontWeight: 'bold'}}>{count}</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '600px' }}>
                <button onClick={increment} style={{ border: '2px solid #4CAF50', borderRadius: '25px', background:'green'}}>
                    <h3>+Incrementar</h3>
                </button>
                <button onClick={Reset} style={{border: '2px solid #4CAF50', borderRadius: '25px'}} ><h3>Reset</h3></button>
                <button onClick={Decrement} style={{border: '2px solid #4CAF50', borderRadius: '25px', background: 'red'}}> <h3>-Decrementar</h3> </button>
            </div>

        </div>
    )
}
CounterApp.propTypes = {
    title: PropTypes.string.isRequired
}
export default CounterApp