import React from 'react';
import './SingleGun.css';

const SingleGun = ({ gun, countHandler }) => {
    const { action, bullet, capacity, category, img, name, price } = gun;
    return (
        <div>
            <div className="card w-full h-[500px] bg-base-100 shadow-md">
                <figure><img className='w-full h-[260px]' src={img} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline" title='category'>{category}</div>
                        <div className="badge badge-outline" title='bullet'>{bullet}</div>
                        <div className="badge badge-outline" title='action'>{action}</div>
                        <div className="badge badge-outline" title='capacity'>{capacity}</div>
                    </div>
                    <h1 className='text-2xl text-start'>Price : <span className='text-pink-500 font-bold'>{price}</span></h1>
                    <div className='text-start my-3'>
                        <label onClick={countHandler} className="bg-pink-600 mr-2 py-2 px-5 rounded-full text-white">BUY NOW</label>
                        <label htmlFor="my-modal-3" className="bg-indigo-600 py-2 px-5 rounded-full text-white">DETAILS</label>

                        {/* modal */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleGun;