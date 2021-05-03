import { getDop } from './../redux/actions/dop';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createItem, deleteItem } from './../redux/actions/main';
import { Fragment } from 'react';


function GridPanel({ photo, dop, createItem, deleteItem, idForDel }) {

    const router = useRouter()

    const newItem = () => {
        createItem(photo)
    }
    if (!photo) {
        return 'Loading...'
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="rounded-lg overflow-hidden">
                        <div className={dop.card} >
                            <img src={photo.urls.small} alt={photo.alt_description} key={photo.id} className={dop.img} id={idForDel} />
                            {router.pathname == '/favorite'
                                ? <button className="btn plus outline-none" title='delete' data-toggle="modal" id={idForDel} data-target="#exampleModal" onClick={(e) => deleteItem(e.target.parentNode.id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" style={{ color: 'red', padding: '0', background: 'white' }}>
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg></button>
                                : <button className="btn plus outline-none" title='to favorite' onClick={newItem}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16" >
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg></button>
                            }

                            <button className="btn arrow" title="download"><Link href={`${photo.links.download}?force=true`}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg></Link></button>
                            <button className="btn right-arrow" title="about"><Link href={`/photos/${photo.id}`} ><a><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16" >
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg></a></Link></button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .card {
                position: relative;
                border: none;
                border-radius: 15px;
            }
            .card-square {
                width: 100%;
                height: 300px;
            }
            .btn {
                position: absolute;
                transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                /* color: rgba(12, 12, 12 0.5); */
                font-size: 16px;
                border: 0;
                cursor: pointer;
                border-radius: 5px;
                outline: none;
                padding: 0;
            }            
            .plus {
                top: 20px;
                right: 0;
            }
            .arrow {
                bottom: 0;
                right: 0;
                margin: none;
            }
            .right-arrow{
                bottom: 0;
                left: 20px;
                margin: none;
            }
            .bi {
                border: 1px solid rgb(255, 255, 255);
                background-color: rgb(255, 255, 255);
                opacity: 0.5;
                border-radius: 3px;
            }
            .btn .bi:hover {
                opacity: 1;
            }
            .btn:focus,
            .btn:active {
                box-shadow: none !important;
            }            
            .row {
                --bs-gutter-x: 0.5rem;
            }            
            .img-square {
                max-width: 100%;
                height: 100%;
            }            
            .img-fluid {
                border-radius: 15px;
                border: 1px solid white;
                border: none;
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
    getDop, createItem, deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(GridPanel)


