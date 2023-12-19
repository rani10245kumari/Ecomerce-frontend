import React from 'react'

const Myimages = ({ images }) => {
    return (
        <div>
            <div className='grid-four-colmn'>

                {
                    images.map((curEle, index) => {
                        return (
                            <div className='item-grid'>
                                <img src={curEle} alt='#' key={index}></img>
                            </div>

                        )

                    })
                }
            </div>
        </div>
    )
}

export default Myimages
