export const ProjectItem = ({project}) => {
    return (
        <li>
            <button type="button"
                    className="btn btn-blank">
                {project.name}
            </button>
        </li>
    )
}