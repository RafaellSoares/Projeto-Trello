import React from "react";

export default function Formulario() {
    return (
        <div className="container formulario">
            <h3>Login</h3>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="123456751456" required/>
                        <label for="floatingInput">Chave API</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingToken" placeholder="456454" required/>
                        <label for="floatingToken">Chave Token</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input type="submit" className="btn btn-primary float-end"/>
                    </div>
                </form>
        </div>
    )
}