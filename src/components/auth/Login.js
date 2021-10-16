export const Login = () => {
    const handleOnChange = () => {

    }

    return (
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Iniciar Sesión</h1>

                <form>
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               name="email"
                               placeholder="Tu email"
                               onChange={handleOnChange}/>
                    </div>

                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="password"
                               name="password"
                               placeholder="Tu password"
                               onChange={handleOnChange}/>
                    </div>

                    <div className="field-form">
                        <input type="submit"
                               className="btn btn-primary btn-block"
                               value="Iniciar Sesión"/>
                    </div>
                </form>
            </div>
        </div>
    );
}