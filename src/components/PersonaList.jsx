import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PersonaList() {
    const [personas, setPersonas] = useState([]);
    const [name, setName] = useState('');
    const [identidad, setIdentidad] = useState('');
    const [celular, setCelular] = useState('');
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchPersonas();
    }, []);

    const fetchPersonas = async () => {
        const res = await axios.get('http://localhost:5000/personas');
        setPersonas(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const personaData = {
            name,
            identidad,
            celular
        }


        if (editId) {
            await axios.put(`http://localhost:5000/personas/${editId}`, personaData);
            setEditId(null);
        } else {
            await axios.post('http://localhost:5000/personas', personaData);
        }
        setName('');
        setIdentidad('');
        setCelular('');
        fetchPersonas();
    };

    const handleEdit = (persona) => {
        setName(persona.name);
        setEditId(persona.id);
        setIdentidad(persona.identidad); 
        setCelular(persona.celular);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/personas/${id}`);
        fetchPersonas();
    };

    return (
        <div>
            <h2>Crud</h2>
            <form onSubmit={handleSubmit} className='form-group'>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre"

                />
                <input
                    type="text"
                    value={identidad}
                    onChange={(e) => setIdentidad(e.target.value)}
                    placeholder="Identidad"
                />
                <input
                    type="text"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    placeholder="Celular"
                />

                <button type="submit">{editId ? 'Actualizar' : 'Agregar'}</button>
            </form>

            <ul>
                {personas.map((persona) => (
                    <li key={persona.id}>
                        <span><strong>Nombre:</strong> {persona.name}</span><br />
                        <span><strong>Identidad:</strong> {persona.identidad}</span><br />
                        <span><strong>Celular:</strong> {persona.celular}</span><br />
                        <button onClick={() => handleEdit(persona)}>Editar</button>
                        <button onClick={() => handleDelete(persona.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonaList;
