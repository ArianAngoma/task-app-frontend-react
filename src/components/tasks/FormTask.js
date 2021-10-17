export const FormTask = () => {
    return (
        <div className="form">
            <form>
                <div className="container-input">
                    <input type="text"
                           className="input-text"
                           placeholder="Nombre de la tarea"
                           name="name"/>
                </div>

                <div className="container-input">
                    <input type="submit"
                           className="btn btn-primary btn-submit btn-block"
                           value="Agregar Tarea"/>
                </div>
            </form>
        </div>
    )
}