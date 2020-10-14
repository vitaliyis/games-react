import React, {useEffect} from 'react'
import myPhoto from '../img/vetal.jpg'

export const About = () => {
  console.log('About')
  useEffect(() => {
    console.log('useEffect')
    return () => console.log('Clear about')
  }, [])
  return(
    <div className="card mb-3 mt-4">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={myPhoto} className="card-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Автор проекта: Виталий.</h5>
            <p className="card-text">Один из самых крутых фронт-енд (Реакт) разработчиков ))).</p>
            <p className="card-text"><small className="text-muted">Last updated 17.04.2020</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}