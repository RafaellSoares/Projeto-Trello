import React from "react";

export default function User(props) {
    return (
        <div className="container text-center">
            <img src={props.usuario?.avatarUrl + "/170.png"} />
            <p>{props.usuario?.id}</p>
            <p>{props.usuario?.fullName}</p>

            <div class="row justify-content-between">


                {props.usuario?.boards.map(quadro => {
                    return (
                        <div class="col-4 aqui">
                            <div className="Board">
                                <ul className="list-group">
                                    <li className="list-group-item">Nome da boards: {quadro.name}</li>
                                    <li className="list-group-item">id: {quadro.id}</li>
                                </ul>
                            </div>
                        </div>)
                })}

            </div>


        </div>
    )
}