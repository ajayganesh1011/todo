import React from 'react'
import Imagecard from './Imagecard';

function Gallery() {

    const images = [
        "https://via.placeholder.com/200?text=Image+1",
        "https://via.placeholder.com/200?text=Image+2",
        "https://via.placeholder.com/200?text=Image+3",
        "https://via.placeholder.com/200?text=Image+4",
        "https://via.placeholder.com/200?text=Image+5",
        "https://via.placeholder.com/200?text=Image+6",
        "https://via.placeholder.com/200?text=Image+7",
        "https://via.placeholder.com/200?text=Image+8",
    ];

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Image Gallery</h1>
                <div
                    className="d-flex flex-wrap justify-content-center"
                    style={{ gap: "10px" }}
                >
                    {images.map((src, index) => (
                        <Imagecard key={index} src={src} alt={`Image ${index + 1}`} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Gallery