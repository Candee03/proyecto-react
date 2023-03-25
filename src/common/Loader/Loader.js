import React from 'react'
import { MutatingDots } from  'react-loader-spinner'

const Loader = () => {
    return (
        <div>
            <MutatingDots 
                height="100"
                width="100"
                color="#C5E6F9"
                secondaryColor= '#70cbff'
                radius='10.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader