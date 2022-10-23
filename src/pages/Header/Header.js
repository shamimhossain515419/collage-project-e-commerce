import React from 'react';

const Header = () => {
    return (
        <div className='bg-base-100'>
            <div className='bg-orange-400 text-white fixed w-full'>
                <p className='text-sm text-center py-1'>Due to the <span className='font-bold'>COVID 19</span> epidemic, orders may be processed with a slight delay test</p>
            </div>
        </div>
    );
};

export default Header;