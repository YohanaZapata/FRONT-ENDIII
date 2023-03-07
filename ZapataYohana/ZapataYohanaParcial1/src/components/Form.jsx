import Card from './Card';
import { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({
    marca: '',
    color: '',
    tipo: ''
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.marca.length >= 3 && user.marca.charAt(0) !== " " && user.color.length>6) {
      setShow(true);
      setErr(false);c
    } else {
      setErr(true);
      setShow(false);
    }
  };

  return (
    <div className='formulario'>
      <form onSubmit= {handleSubmit} className input>
        <label>Marca de vehiculo</label>
        <input type="text" value={user.marca} onChange={(e) => setUser({ ...user, marca: e.target.value })} />
        <label>Color</label>
        <input type="text" value={user.color} onChange={(e) => setUser({ ...user, color: e.target.value })} />
        <label>Tipo vehiculo</label>
        <input type="text" value={user.tipo} onChange={(e) => setUser({ ...user, tipo: e.target.value })} />
        <button className='boton'>Enviar</button>
        {err && 'Por favor chequea que la información sea correcta'}
      </form>
      {show && <Card marca={user.marca} color={user.color} />}
    </div>
  );
};

export default Form;



