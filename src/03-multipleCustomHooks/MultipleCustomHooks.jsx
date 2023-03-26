import React, { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
import "./styles3.css"
import useCounter from '../Hooks/useCounter'

export const MultipleCustomHooks = () => {

  const { counter, increment, decrement } = useCounter(1)
  const { data: data2 } = useFetch("https://dog.ceo/api/breeds/image/random")
  const { data, loading, error } = useFetch(`https://randomuser.me/api/?results=${counter + 3}`)



  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Error!</h4>
        <p>{error}</p>
      </div>
    )
  }


  return (
    <>
      <section id="team" class="pb-5">
        <div class="container">
          <h5 class="section-title h1">Nuestros Usuarios</h5>
          <div className='h-100 d-flex align-items-center justify-content-center'>
            <button onClick={() => { increment() }} className="m-5 btn btn-success">Añadir usuarios</button>
            <button onClick={() => { decrement() }} className="m-5 btn btn-danger">Quitar usuarios</button>

          </div>
          <div class="card-container">
            {
              loading ?
                <div className='spinner text-success'>
                  <h3>LLamando a los dueños!!!</h3>
                  <br />
                  <div className="position-absolute top-40 start-50 spinner-border text-success " role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
                :
                data.results?.map((user) => {
                  return (
                    <div class="">
                      <div class="image-flip" >
                        <div class="mainflip flip-0">
                          <div class="frontside">
                            <div class="card">
                              <div class="card-body text-center">
                                <p><img class=" img-fluid" src={user.picture.large} alt="card image" /></p>
                                <h4 class="card-title">{user.name.first} {user.name.last}</h4>
                                <p class="card-text">Hola! soy de {user.location.city}, en {user.location.country}</p>
                                <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                          <div class="backside">
                            <div class="card">
                              <div class="card-body text-center mt-4">
                                <img class=" img-fluid back-img" src={data2.message} alt="card image" />
                                <h4 class="card-title">{user.name.first} {user.name.last}</h4>
                                <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                <ul class="list-inline">
                                  <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                      <i class="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                      <i class="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                      <i class="fa fa-skype"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                      <i class="fa fa-google"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
          </div>
        </div>
      </section>




    </>
  )
}
