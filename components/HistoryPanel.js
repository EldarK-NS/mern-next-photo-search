import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSearch, changeSearch } from './../redux/actions/search';
import { changeHistory } from './../redux/actions/history';

function HistoryPanel(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        if (localStorage.getItem('history') == null) {
            localStorage.setItem('history', '[]')
        }
        let prev_history = JSON.parse(localStorage.getItem('history'))
        if (props.search.text != '') prev_history.push(props.search.text);
        localStorage.setItem('history', JSON.stringify(prev_history))
    }, [props.search.text])


    useEffect(() => {
        let historyItems = localStorage.getItem('history')
        historyItems = JSON.parse(historyItems)
        setData(historyItems)
    }, [props.search.text])

    const historySearch = (e) => {
        e.preventDefault()
        props.changeHistory({ text: e.target.innerHTML })
    }

    return (
        <Fragment>
            <div className="container-fluid justify-content-center" style={{ flexDirection: 'column' }}>
                <p className="fs-4 mb-0 pb-0">Search history</p>
                <div className="btn-toolbar mb-1" role="toolbar" aria-label="Toolbar with button groups">
                    <div className=" me-2" role="group" aria-label="First group">
                        {
                            data.map((el, idx) => {
                                return <button type="button" className="btn btn-primary" key={idx} onClick={historySearch}>{el}</button>

                            })
                        }

                    </div>
                </div>
            </div>
            <style jsx>{`
        .btn{
            text:black;
            padding:5px;
            margin-right:6px;
            font-size:12px;
        }
        `}</style>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    userInfo: state.main,
    dop: state.dop,
    search: state.search,
    history: state.history
})

const mapDispatchToProps = {
    getSearch, changeSearch, changeHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPanel)


