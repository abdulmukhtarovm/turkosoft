import { getText } from "../locales/index"

const Transfer = () => {
  return (
    <>
    <div className="transfer">
        <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 col-10 text-center">
                <h4 className="main-title">{getText("transferH4")}</h4>
                <h5>{getText("transferH5")}</h5>
                <h6>{getText("transferH6")}</h6>
            </div>
        </div>
        
        </div>      
    </>
  )
}

export default Transfer
