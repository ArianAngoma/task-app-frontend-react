export const NewProject = () => {
    return (
        <>
            <button type="button"
                    className="btn btn-block btn-primary">
                Nuevo Proyecto
            </button>

            <form className="new-project-form">
                <input type="text"
                       className="input-text"
                       placeholder="Nombre del proyecto"
                       name="projectName"/>

                <input type="submit"
                       className="btn btn-primary btn-block"
                       value="Agregar Proyecto"/>
            </form>
        </>
    )
}