import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import './AllGun.css';

const AllGun = ({ countHandler }) => {

    const [guns, setGuns] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data));
    }, [])

    return (
        <div className='my-16'>
            <div className="gun-header mb-8">
                <h1 className='text-5xl uppercase'>Welcome To MY <span className='text-pink-600 font-bold'>GUN</span> Shops</h1>
            </div>
            {/* <div>
                {guns.map(gun => console.log(gun))}
            </div> */}
            <div className="all-guns-data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guns.map(gun => <SingleGun gun={gun} key={gun.id} countHandler={countHandler}></SingleGun>)}
            </div>
        </div>
    );
};

export default AllGun;