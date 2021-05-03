import { getDop, changeDop } from './../redux/actions/dop';
import { connect } from 'react-redux';
import { Fragment } from 'react';



function Gallery(props) {

    const viewSquare = () => props.changeDop({ card: "card bg-dark text-white text-end card-square", img: "img-fluid img-square" })
    const viewMasonry = () => props.changeDop({ card: "card bg-dark text-white text-end", img: "img-square" })

    return (
        <Fragment>
            <div className="container-fluid justify-content-center line " >
                <ul className="nav nav-pills mb-1  " id="pills-tab " role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="btn active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={viewSquare}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-grid" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                        </svg></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="btn " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={viewMasonry}> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-columns-gap" viewBox="0 0 16 16">
                            <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
                        </svg></button>
                    </li>
                </ul>
            </div>

            {!props.userInfo.email &&
                <div style={{ color: 'red', fontSize: "12px", textAlign: 'center', width: '100%' }}>To create your own favorite list, please sign in or register!</div>
            }


            <style jsx>{`
            .container-fluid{
            background:white;
            }
            .btn {
                border: 0;
                cursor: pointer;
                border-radius: 5px;
                outline: none;
                padding: 3px;
                margin-right:10px;              
            }
            .bi {
                border: 1px solid rgb(255, 255, 255);
                background-color: rgb(255, 255, 255);
                opacity: 0.8;
                border-radius: 3px;
            }
            .btn:active .bi:hover {
                opacity: 1;
            }
            .btn:focus,
            .btn:active {
                box-shadow: none !important;
                opacity: 1;

            }
             `}</style>

        </Fragment>
    )
}

const mapStateToProps = state => ({
    userInfo: state.main,
    dop: state.dop
})

const mapDispatchToProps = {
    getDop, changeDop
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
