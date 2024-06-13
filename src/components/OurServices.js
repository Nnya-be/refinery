import React from 'react'

const Services = () => {
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-primary font-semibold mb-2'>Our  Clients</h2>
                <p className='text-primary'> We have been working with some Fortunes 500+ clients</p>

                {/* {Company logo} */}
                <div className='my-12 flex flex-wrap jsutify-between items-center gap-8'>
                    <img src='../assets/icons/services1.webp' alt='' />
                    <img src='../assets/icons/services1.webp' alt='' />
                    <img src='../assets/icons/services1.webp' alt='' />
                    <img src='../assets/icons/services1.webp' alt='' />
                    <img src='../assets/icons/services1.webp' alt='' />
                    <img src='../assets/icons/services1.webp' alt='' />
                </div>
            </div>
        </div>
    )
};

export default Services;