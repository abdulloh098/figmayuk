import { api } from '@/styles/data';
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
        

       <div className="ota">
        {api?.map((el) => {
            return (
               
                <div key={el.id} className="card">
 
                    <img src={el.image} alt="" />
                <div className='text1'>
                <h2>{el.name}</h2>
                    <p>{el.dasc}</p>
                </div>
                    <div className='btn1'>
                    <Link href={`/bitta/${el.id}`} >
                    <button>Подробнее</button>
                </Link>
                    </div>
                </div>
            );
        })}
       </div>


    </>
  )
}

export default About