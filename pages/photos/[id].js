import React from 'react';
import PhotoPage from '../../components/PhotoPage';

function Photo({ photo }) {
    return (
        <div>
            <PhotoPage photo={photo} />
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://api.unsplash.com/photos/${params.id}?client_id=js3Pd6NCqLkdlI5s0BBlxvkmAweJ7C54zq6csCzEvps`)
    const photo = await res.json()
    return {
        props: {
            photo
        }
    }
}
export default Photo