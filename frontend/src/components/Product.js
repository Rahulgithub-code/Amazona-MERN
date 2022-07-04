import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import Rating from './Rating';
function Product(props) {
  const { product } = props;

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>
      <CardBody>
        <Link to={`/product/${product.slug}`}>
          <CardTitle>{product.name}</CardTitle>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <CardText>${product.price}</CardText>
        <Button className="btn-primary">Add to cart</Button>
      </CardBody>
    </Card>
  );
}

export default Product;
