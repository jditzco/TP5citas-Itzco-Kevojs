import { useRef, useState } from 'react'

const Form = ({submit}) => {

    const [data, setData] = useState({
        nombre: "",
        dueno: "",
        fecha: "",
        hora: "",
        sintomas: "",
    })
    
    return (
        <form onSubmit={() => console.log("asd")}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
            <label>Nombre Dueño</label>
            <input type="text" name="dueño" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} />
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}></textarea>
            <button type='button' className="u-full-width button-primary" onClick={() => submit(data)}>Agregar Cita</button>
        </form>
    )
}

export default Form