import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
<div className="navbar">

<img src="/Vector.png" alt="" />
      <b>
        Аренда спецтехники <br /> LIEBHERR c 2000 года
      </b>
      <span>  
      <img src="/Group.svg" alt="" />
      <p>10:00-17:00</p>
</span>
     <span>
     <img src="/Group.png" alt="" /> 
      <p>
        г. Москва, <br />
        ул. Куликовская, 12
      </p>
     </span>

<div className="btn">
<button>Свяжитесь со мной</button>
  
  </div>  
      <span>
      <img src="/Group (1).png" alt="" />
      <p>
        +7 (495) 645-19-20 <br />
        +7 (495) 226-20-30 <br />
        +7 (499) 929-96-66
      </p>
      </span>
</div>
<div className="link">
<Link href={'/'}>Каталог</Link> 

<Link href={'/'}>Услуги</Link>

<Link href={'/'}>О компании</Link>

<Link href={'/'}>Объекты</Link>

<Link href={'/about'}>Блог</Link>

<div className="inp">  <input type="text" /></div>
</div>
    </div>
  );
};

export default Nav;
