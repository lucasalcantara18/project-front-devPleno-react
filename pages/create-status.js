import React, {useState} from 'react'
import auth0 from '../lib/auth0'
import axios from 'axios'

const CreateStatus = () => {

    const [dados, setDados] = useState({
        status: 'bem',
        coords: {
            lat: null,
            long: null
        }
    })

    

    const getMyLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position.coords);
                setDados(old => {
                    return {
                        ...old,
                        coords: {
                            lat: position.coords.latitude,
                            long: position.coords.longitude
                        }
                    }
                })                
            })
        }
    }


    const onStatusChange = evt => {
        const value = evt.target.value;

        setDados(old => {
            return {
                ...old,
                status: value
            }
        })                


    }

    const save = async() => {
        await axios.post('/api/save-status', dados);
    }


    return (
        <div>
            <h1>Create Status</h1>

            <label className='block'>
                <input type="radio" name="status" value="bem" onClick={onStatusChange}/> Estou bem
            </label>
            <label className='block'>
                <input type="radio" name="status" value="gripe" onClick={onStatusChange}/> Estou com sintomas de gripe
            </label>
            <label className='block'>
                <input type="radio" name="status" value="covid" onClick={onStatusChange}/> Estou com sintomas da coronga
            </label>

            <button onClick={getMyLocation}>Get My Location</button>
            <button onClick={save}>Save my status</button>

        </div>
    );

}

export default CreateStatus;


export async function getServerSideProps({ req, res }){
    const session = await auth0.getSession(req);

    if(session){
        return {
            props:{
            user: session.user,
            isAuth: true
            }
        }
    }

    return {
        props:{
            isAuth: false,
            user:{
            }
        }

    }

}