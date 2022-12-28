import React, { useEffect,useState } from 'react';

import productService from '../../../16.dataFetching/Services/product';
import { Card } from 'react-bootstrap';


const ProductDetails = ({ id }) => {
    const [element, setelement] = useState({});
    useEffect(() => {
        productService.getProduct(id)
            .then(res => setelement(res.data))
            .catch(err => console.log(err))
    }, [id]);
    return (
        <div>

            <Card>
                <Card.Img variant="top" src={element.image} height={300} width={100} />
                <Card.Body>
                    <Card.Title>{element.Title}</Card.Title>
                    <Card.Text>
                        {element.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

        </div>
    );
}

export default ProductDetails;
