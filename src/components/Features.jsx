// import React from 'react'
import { getText } from '../locales'

const Features = () => {
  return (
    <>
     <div className="features">
        <div className="bg"></div>
        <div className="container">
            <h4 className="main-title">{getText("features")}</h4>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4">
                    <div className="card draw-border">
                        <img src="./img/feat1.png" alt="" />
                        <h4>{getText("featT1")}</h4>
                        <p>{getText("featP1")}</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="card draw-border">
                        <img src="./img/feat2.png" alt="" />
                        <h4>{getText("featT2")}</h4>
                        <p>{getText("featP2")}</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="card draw-border">
                        <img src="./img/feat3.png" alt="" />
                        <h4>{getText("featT3")}</h4>
                        <p>{getText("featP3")}</p>
                    </div>
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Features
