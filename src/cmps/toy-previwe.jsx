export function ToyPreview({ toy }) {
    return <article>
        <h3>{toy.name}</h3>
        <p>Price: {toy.price}$</p>
        {!toy.inStock && <p className='out-stock'>Out of stock</p>}
        <div className='preview-img'>

            
        {toy.imgUrl && <img src={require(`../assets/img/${toy.imgUrl}`)} />}
        {!toy.imgUrl &&  <img src={`https://robohash.org/${toy.name}?set=set2`} alt="" /> }
        </div>
    </article>

}