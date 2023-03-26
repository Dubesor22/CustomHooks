import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const FetchWithAxios = () => {



  const [usuario, setUsuario] = useState([])
  const [loading, setLoading] = useState(false)
  // console.log("Usuario: ", usuario);

  useEffect(() => {

    peticionAxios()

  }, [])




  const peticionAxios = async () => {
    const url = 'https://randomuser.me/api/?results=10'
    const resp = await axios.get(url)
    const data = resp.data.results
    console.log("data ", data);
    data ? setLoading(true) : setLoading(false)
    console.log(loading);


    if (loading) {
      console.log(loading);
      console.log("Cargando...");
      setUsuario(data)
    } else {
      console.log("No hay datos");
    }
  }


  return (
    <>
      {
        usuario?.map((user) => {
          return (
            <div key={user.login.uuid}>
              <h2>Hola! {user.name.first}</h2>
              <div className="card ">
                <img src={user.picture.large} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{user.name.title}. {user.name.first} {user.name.last}</h5>
                  <p className="card-text">Hola! soy de {user.location.city}, en {user.location.country} </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">email: {user.email}</li>
                  <li className="list-group-item">Nombre de usuario: {user.login.username}</li>
                  <li className="list-group-item">Telefono: {user.phone}</li>
                </ul>
              </div>
            </div>
          )
        })
      }
    </>


  )
}
