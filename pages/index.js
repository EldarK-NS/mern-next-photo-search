import Head from 'next/head';
import Masonry from 'react-masonry-css';
import GridPanel from '../components/GridPanel';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from './../redux/actions/main';
import Spinner from '../components/Spinner';

function Home(props) {

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
  if (!props.photos) {
    return (
      <div style={{ display: 'block', textAlign: 'center' }}>
        <Spinner />
      </div>

    )
  }
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Head>
      <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
        {props.photos.map((photo) => (<GridPanel key={photo.id} photo={photo} />))}
      </Masonry>

    </Fragment>
  )
}

Home.getInitialProps = async () => {
  const randomPage = Math.floor(Math.random() * Math.floor(50))
  const response = await fetch(`https://api.unsplash.com/photos?page=${randomPage}&per_page=30&client_id=js3Pd6NCqLkdlI5s0BBlxvkmAweJ7C54zq6csCzEvps`)
  const photos = await response.json()

  return {
    photos
  }
}

const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = {
  getItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)




