import React, {useEffect} from 'react'
import auth0 from '../lib/auth0'
import router from 'next/router'
import {db} from '../lib/db'
import {distance} from '../lib/geo'

const App = (props) => {
    useEffect(() => {
        if(!props.isAuth){
            router.push('/');
        }else if(props.forceCreate){
            router.push('/create-status');
        }
    })
    if(!props.isAuth || props.forceCreate){
        return null;
    }   
    return (
        <div>
            <h1>Status proximos a você</h1>
            <table>
                    {props.chekins.map(checkin => {
                        return (
                                <tr>
                                    <td>{checkin.id === props.user.sub && 'Seu status'}</td>
                                    <td>{checkin.status}</td>
                                    <td>{JSON.stringify(checkin.coords)}</td>
                                    <td>{checkin.distance}</td>
                                </tr>
                        )
                    })}
            </table>
        </div>
    );

}


export default App;

export async function getServerSideProps({ req, res }){
    const session = await auth0.getSession(req);
    console.log(session);

    if(session){
        const today = new Date();
        const currentDate = today.getFullYear()+'-'+today.getMonth()+'-'+today.getDay();

        const checkToday = await db.collection('markers')
          .doc(currentDate)
          .collection('checks')
          .doc(session.user.sub)
          .get();


        const todayData = checkToday.data();
        let forceCreate = true;

        if(todayData){
            //pode ver outros checkins
            forceCreate = false;
            const checkins  = await db
            .collection('markers')
            .doc(currentDate)
            .collection('checks')
            .near({
                center: todayData.coordinates,
                radius: 1000
            })
            .get();

            const checkinsList = [];
            checkins.docs.forEach(element => {
                checkinsList.push({
                    id: element.id,
                    status: element.data().status,
                    coords: {
                        lat: element.data().coordinates.latitude,
                        long: element.data().coordinates.longitude
                    },
                    distance: distance(todayData.coordinates.latitude,
                                       todayData.coordinates.longitude,
                                       element.data().coordinates.latitude,
                                       element.data().coordinates.longitude)
                })
            })

            return {
                props:{
                   user: session.user,
                   isAuth: true,
                   forceCreate: false,
                   chekins: checkinsList
                }
            }
            
        }
        

        return {
            props:{
               user: session.user,
               isAuth: true,
               forceCreate
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