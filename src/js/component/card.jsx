import React from 'react';
import Button from '@mui/material/Button';
import Favorite from '@mui/icons-material/Favorite';

function Cards(item) {
  return (
    <div className="container">
          <div className="mt-5" >
            <img src={item.image} alt="cafeteria" class="d-block w-100" />
          </div>

            <div className="">
              <h2 className="text-center text-warning">{item.titulo}</h2>
              <h5 className=""> {item.descripcion} </h5>
            </div>
            <span className='justify-content-end'>
                  <Favorite color='error'/> 
                  <Button className="styles.button " color='warning' size="medium">Learn More</Button>
            </span>
    </div>
  );

}

export default Cards;