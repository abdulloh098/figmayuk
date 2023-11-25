import { useRouter } from 'next/router'
import React from 'react'

const Bitta = () => {
    const router = useRouter();
    const productId = router.query.id;


    const findProduct = api.find((el) => {
        return el.id == +productId;
    });
  return (
    <div className='cart'>
        
<img src={findProduct.image} alt="" />
<h2>{findProduct.name}</h2>
    </div>
  )
}

export default Bitta