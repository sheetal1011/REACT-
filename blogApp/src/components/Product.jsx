import "./product.css"
function Product(props){
    return(
        <>
        <div className="card">
             <div className="title">{props.title}</div>
             <div className="image"><img src={props.image} alt=""/></div>
             <div className="price">PRICE:{props.price}</div>
             <p className='description'>{props.description}</p>
        </div>
        </>
    )
}

export default Product;