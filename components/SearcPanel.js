import { connect } from 'react-redux';
import { getSearch, changeSearch } from './../redux/actions/search';
import { Fragment, useState } from 'react';

function SearchPanel(props) {

    const [newSearch, setNewSearch] = useState('')

    const startSearch = (e) => {
        e.preventDefault()
        props.changeSearch({ text: newSearch })
        setNewSearch('')
    }

    return (
        <Fragment>
            <div className="container-fluid justify-content-center">
                <form className="d-flex search-form mb-2 align-baseline" onSubmit={startSearch}>
                    <input className="form-control me-2 p-0 d-block" type="text" maxLength='15' placeholder="Search" aria-label="Search" value={newSearch} onChange={(e) => setNewSearch(e.target.value)} />
                    <button className="btn btn-outline-success" type='submit' >Search</button>
                </form>
            </div>
            <style jsx>{`
            .btn{
            padding:5px;
            height:40px;
            }
        .navbar {
            background-color: black;
            font-size: 18px;
        }
        .line {
            margin-top: -1px;
        }
        .form-control {
            padding: 0.5rem 0 0.75rem;
            background: none;
            border: none;
            border-bottom: 1px solid #636363;
            border-radius: 0;
            box-shadow: none;
            font-family: inherit;
            font-size: 1.4rem;
            color: #fff;
        }
        .form-control:focus {
            outline: 0;
            outline-offset: 0;
        }
        .form-control::placeholder {
            color: #8d917a;
            text-align: center;
            font-size: 16px;
        }
        `}</style>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    userInfo: state.main,
    dop: state.dop,
    search: state.search
})

const mapDispatchToProps = {
    getSearch, changeSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)


