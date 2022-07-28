

const products = require("./products.json");

export default class Products2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/Product2")
      .then((response) => this.setState({ products: response.data }));
  }

  render() {
    return (
      <div id="products-wrapper">
        <div id="heroprod">
          <img
            className="prodhero"
            src="https://wallpaperaccess.com/full/1091307.jpg"
            alt="Albums"
          />

          <p className="herotext">DISCOGRAPHY 2013-2022</p>
        </div>
        <main>
          {this.state.products.map((product, index) => (
            <div className="prod">
              <img
                className="pro-img"
                src={product.image}
                alt={product.title}
              />
              <h4>{product.title} </h4>
              <p> {product.price}</p>
              <p> {product.item_description} </p> <br></br>
              <p>
                <button className="prodbtn">Add to Cart</button>{" "}
              </p>{" "}
            </div>
          ))}
        </main>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}