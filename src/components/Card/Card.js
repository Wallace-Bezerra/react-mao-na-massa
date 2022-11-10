export default function Card(){
  return (
      <div className="card">
        <img className="card-image" src="./image-product-desktop.jpg"></img>
        <div className="card-description">
          <h3 className="card-category">perfume</h3>
          <h1 className="card-title">Gabrielle Essence Eau de Parfum</h1>
          <p className="card-text">A floral, solar and voluptuos interpretation composed by Oliver Polge, Perfumer Creator for the House of CHANEL</p>
          <div className="card-price">
            <h1  className="card-price-discount">$149.99</h1>
            <p  className="card-price-full">$169.99</p>
          </div>
          <button><img src="./icon-cart.svg"/></button>
        </div>
      </div>
  )
}