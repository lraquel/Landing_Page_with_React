import React from "react";
import Image from 'react-bootstrap/Image';


export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<span className="navbar-brand mx-2 rounded-circle">
					<Image src="https://img.freepik.com/premium-vector/coleccion-de-abejas-abeja-nino-y-nina-vector-aislado-dibujado-mano-lindo-personaje-de-mascota-de-dibujos-animados_529206-220.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.1832030905.1683567945&amp;semt=sph" height="60px" roundedCircle />
				</span>

				<h1 className="titulo d-flex justify-content-center text-center text-success">Vamos con Niños!!</h1>

				<span className="navbar-brand mx-2 rounded-circle">
					<Image src="https://img.freepik.com/premium-vector/coleccion-de-abejas-abeja-nino-y-nina-vector-aislado-dibujado-mano-lindo-personaje-de-mascota-de-dibujos-animados_529206-220.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.1832030905.1683567945&amp;semt=sph" height="60px" roundedCircle />
				</span>

			</div>
		</nav>
	);
};
