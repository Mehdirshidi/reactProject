import "./Product.css"
const Product = (props) => {

    const title = () => {
        console.log(props.title);
    }

    return (
        <div id="product" className="product">
            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
            <button className="mybtn" onClick={title}>title</button>
        </div>
    )
}

export default Product



