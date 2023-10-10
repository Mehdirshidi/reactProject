
import "./User.css"
const User = (props) => {
    let { name, family, age } = props

    return (
        <div className="rowUser">
            <h2>{name}</h2>
            <h2>{family}</h2>
            <h2>{age}</h2>
        </div>
    )
}
export default User