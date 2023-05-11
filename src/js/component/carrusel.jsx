import React from "react";
import Cards from "./card.jsx";

function Carrusel(props) {
    return (
        <div className="bg-secondary">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Cards
                            image="https://lh3.googleusercontent.com/efDnKF0DIMNKuBFmVG32VEIIyPhJ1S12MrgCDr2JwJ1rz1ST2gqoMeEq9T2VtVy3zhJOeqChoeWrmeaBRBRCN-573rwgRt_bKNv4rfz41A"
                            titulo="BAOBA"
                            descripcion="Es una cafetería cerrada, donde los padres nunca pierden de vista a sus hijos, permitiéndoles trabajar de forma tranquila y a la vez jugar con ellos."
                        />
                    </div>
                    <div className="carousel-item">
                        <Cards
                            image="https://static.emol.cl/emol50/Fotos/2019/03/08/file_20190308162150.jpg"
                            titulo="COCO CAFÉ"
                            descripcion="Antigua casona con un amplio patio con mesas para comer y descansar, los niños pueden gozar de una piscina de pelotas, salón de juegos dentro de la ca y de un menú especial para ellos."
                        />
                    </div>
                    <div className="carousel-item">
                        <Cards
                            image="https://static.emol.cl/emol50/Fotos/2019/03/08/file_20190308162536.jpg"
                            titulo="ETIENNE MARCEL"
                            descripcion="Es un lugar para que tanto niños como adultos disfruten de su repostería parisina, tienen un espacio dedicado para el entretenimiento de pequeños donde pueden jugar en una casita de madera, columpios, resbalines y un menú especial para ellos."
                        />
                    </div>
                    <div className="carousel-item">
                        <Cards
                            image="https://static.emol.cl/emol50/Fotos/2019/03/15/file_20190315160711.jpg"
                            titulo="BABARRÚN"
                            descripcion="Cafetería pensada en grandes y chicos, los padres cuentan con un lugar de co-work, que les da la tranquilidad y comodidades, mientras los más chicos tienen un Play with Me guiados por educadoras de párvulos."
                        />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
export default Carrusel;