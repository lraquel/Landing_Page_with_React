import React from "react";
import Carrusel from "./carrusel.jsx";
import { Navbar } from "./navbar.jsx";
import Headers from "./jumbotron.jsx";





//create your first component
const Home = () => {
	
	return (

		<div>

			<Navbar />
			<Headers
				titulo="Hola Familia..."
				texto="Salir con niños es un desafío, por eso te muestro alternativas de algunos lugares donde tus hijos no se aburrirán y tú podrás disfrutar de una buena comida o realizar co-work."
			/>
			<Carrusel/>
			
		</div>
	);
};

export default Home;
