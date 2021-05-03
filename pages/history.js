import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getHistory, changeHistory } from './../redux/actions/history';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import GridPanel from '../components/GridPanel';
import Head from 'next/head';

function History({ history }) {

    let data = history.text
    const [collection, setCollection] = useState([])

    useEffect(() => {
        axios.get('https://api.unsplash.com/search/photos?page=2&per_page=30&query=' + data + '&client_id=js3Pd6NCqLkdlI5s0BBlxvkmAweJ7C54zq6csCzEvps')
            .then(response => {
                setCollection(response.data.results)
            })
    }, [data])

    const breakpointColumnsObj = {
        default: 6,
        1200: 4,
        992: 3,
        768: 2,
        576: 1
    };
    return (
        <div>

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title> History</title>
            </Head>
            <div>
                <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
                    {collection.map((photo) => (<GridPanel key={photo.id} photo={photo} />))}
                </Masonry>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    userInfo: state.main,
    history: state.history
})
const mapDispatchToProps = {
    getHistory, changeHistory
}
export default connect(mapStateToProps, mapDispatchToProps)(History)

