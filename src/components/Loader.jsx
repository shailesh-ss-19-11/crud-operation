import React from 'react'
import { DNA } from 'react-loader-spinner'

const Loader = () => {
    return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <DNA
        visible={true}
        height="250"
        width="250"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        
    />
    </div> )
}

export default Loader