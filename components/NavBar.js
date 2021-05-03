import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchPanel from './SearcPanel';
import HistoryPanel from './HistoryPanel';
import { connect } from 'react-redux';
import { signOut, restore } from './../redux/actions/main';
import Gallery from './Gallery';
import { getDop, changeDop } from './../redux/actions/dop';


function NavBar(props) {
    const router = useRouter()
    const { userInfo, restore } = props

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user_info'))
        if (userData) {
            restore(userData)
        }
    }, [])

    function showSearch(route) {
        if (route == router.pathname) {
            return { display: 'flex' }
        } else {
            return { display: 'none' }
        }
    }

    function showGrid() {
        if (router.pathname == '/signin') {
            return { display: 'none' }
        } else if (router.pathname == '/register') {
            return { display: 'none' }
        } else if (router.pathname == '/photos/[id]') {
            return { display: 'none' }
        } else {
            return { display: 'flex' }
        }
    }

    const hasItem = () => {
        if (userInfo.items && userInfo.items.length > 0) {
            return { color: 'red' }
        }
    }
    useEffect(() => {
        if (!userInfo.token) {
            return router.push('/')
        }
    }, [props.signOut])

    return (
        <div className="fixed-top sticky-top">
            <nav className="navbar navbar-expand sticky-top pb-0" >
                <div className="home">
                    <Link href="/">
                        <a className="navbar-brand text-white" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-card-image fab" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                            </svg>
                            <span className="hide">ImageStore</span>
                        </a>
                    </Link>
                </div>
                <div className="navbar-collapse collapse justify-content-end" >
                    <ul className="navbar-nav " >
                        <li className="nav-item " >
                            <Link href="/search">
                                <a className="nav-link text-white" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search fas" viewBox="0 0 16 16" aria-hidden='true'>
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                    <span className="hide">Searh</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link href="/favorite">
                                <a className="nav-link text-white" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-heart-fill far" viewBox="0 0 16 16" aria-hidden='true' style={hasItem()}>
                                        <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                    </svg>
                                    <span className="hide">Favorite</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link href="/history">
                                <a className="nav-link text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock-history  fas" viewBox="0 0 16 16" aria-hidden='true'>
                                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                    <span className="hide">History</span>
                                </a>
                            </Link>
                        </li>
                        {userInfo.token &&
                            <li className="nav-item ">
                                <a className="nav-link text-white" role="button" onClick={() => props.signOut()}>
                                    <span className="hide ml-1">{`Welcome ` + userInfo.name}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right text-light " viewBox="0 0 16 16" style={{ marginLeft: "10px" }}>
                                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                    </svg>
                                </a>
                            </li>
                        }

                        {!userInfo.token &&
                            <li className="nav-item" >
                                <Link href="/login">
                                    <a className="nav-link text-white" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-right fas lext-light" viewBox="0 0 16 16" aria-hidden="true" >
                                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                        </svg>
                                        <span className="hide" >Sign-in</span>
                                    </a>
                                </Link>
                            </li>
                        }
                    </ul>
                </div>
            </nav>

            <nav
                className="navbar down-row line bg-black"
                style={showSearch('/search')}
            >
                <SearchPanel />
            </nav>
            <nav
                className="navbar down-row line  text-white"
                style={showSearch('/history')}
            >
                <HistoryPanel />
            </nav>
            <nav
                className="navbar down-row grid"
                style={showGrid()}
            >
                <Gallery />
            </nav>
            <style jsx>{`
.home {
    margin-left: 150px;
}
.navbar-nav {
    margin-right: 150px;
}
.navbar {
    font-size: 20px;
}
.navbar-expand, .line{
    background-color:black;
}
.fas,
.far,
.fab {
    margin-right: 10px;
}
.line {
    margin-top: -1px;
}
.nav-link {
    margin-right: 30px;
}
.grid{
    background-color:wite;
    opacity:0.8;
    padding:0px;
}
@media (max-width: 1200px) {
    .navbar-nav {
        margin-right: 100px;
    }
    .home {
        margin-left: 100px;
    }
}

@media (max-width: 992px) {
    .navbar-nav {
        margin-right: 0px;
    }
    .home {
        margin-left: 30px;
    }
    .nav-link {
        margin-right: 20px;
    }
}
@media (max-width: 771px) {
    .hide {
        display: none;
    }
}
@media (max-width: 576px) {
    .nav-link {
        margin-right: 10px;
    }
}

`}</style>

        </div>
    )
}
const mapStateToProps = state => ({
    userInfo: state.main,
    dop: state.dop
})

const mapDispatchToProps = {
    signOut, restore, getDop, changeDop
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)


