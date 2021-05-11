import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from './../redux/actions/main';
import Masonry from 'react-masonry-css';
import GridPanel from '../components/GridPanel';
import Head from 'next/head';



function Favorite(props) {
   
    const { items } = props.userInfo
    useEffect(() => {
        props.getItems()
    }, [])

    const breakpointColumnsObj = {
        default: 6,
        1200: 4,
        992: 3,
        768: 2,
        576: 1
    };
    if (!items) {
        return 'Your favorite list is ampty!!!'
    }

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>
                    Favorite list
                </title>
            </Head>
            <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
                {items.map((photo) => (<GridPanel key={photo._id} photo={photo.body} idForDel={photo._id} />))}
            </Masonry>
        </div>
    )
}


const mapStateToProps = state => ({
    userInfo: state.main
})

const mapDispatchToProps = {
    getItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)
