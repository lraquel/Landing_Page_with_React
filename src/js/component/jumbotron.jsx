import React from 'react';


function Headers(props) {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">{props.titulo}</h1>
                <p class="lead">{props.texto}</p>
            </div>
        </div>
    );
}
export default Headers;