import React from 'react';
import { data } from '../data';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import './Grid.css'
const Grid = () => {

    const boxStyle = "bg-neutral-100 border-2 rounded-xl p-4 flex flex-col bg-white font-poppins ";

    return (
        <div className='grid grid-cols-5 grid-rows-9 gap-4 z-2 h-[calc(100vh-3rem)] w-[calc(100vw-3rem)]'>
            {data.map((item, i) => (
                <div
                    key={i}
                    className={`
                        ${boxStyle} 
                        ${i === 0 ? 'font-bold items-center justify-center' : ''}
                        ${i === 1 ? 'col-span-4 items-end pr-6' : ''}
                        ${i === 2 || i === 6 ? 'row-span-12' : ''}
                        ${i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9 ? 'row-span-3 justify-end p-8 bg-white/4  border-2  ' : ''}
                        ${i === 10 ? 'col-span-3 row-span-6 bg-white/40 border-2' : ''}
                    `}
                >
                    {i === 1 ? (
                        <Link to='./login'>
                            <button className="font-poppins font-bold bg-blue-500 text-white p-[8px] rounded">Sign In</button>
                        </Link>
                    ) : (
                        <>
                            {item.imgURL && (
                                <img src={item.imgURL} alt={item.title} className="data-image" />
                            )}
                            <h1 className='text-2xl'>{item.title}</h1>
                            <h4>{item.subtitle}</h4>

                        </>
                    )}      
                </div>
            ))}
        </div>
    );
};

export default Grid;
