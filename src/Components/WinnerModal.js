import ReactDOM from "react-dom";
import { useEffect } from 'react'
function WinnerModal(props) {

    useEffect(() => {
        // $(".modal").modal("show")
    })

    return ReactDOM.createPortal(<div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Winner</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>The Winner Is {props.winner}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => { window.location.reload(); }}>Restart</button>
                </div>
            </div>
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" hidden>
            test
        </button>
    </div>, document.getElementById("modal"))

}

export default WinnerModal;