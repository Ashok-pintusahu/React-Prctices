import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams,useNavigate } from 'react-router-dom';
import productService from '../../16.dataFetching/Services/product';
import ProductDetails from './Productdetails';
import { Header } from '../component';


const Product = () => {
    const [data, setData] = useState([]);
    const [param, setParam] = useState(0);
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        productService.getAllProduct()
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        if (param > 0) {
            navigate(`/products/${param}`);
        }
    }, [param,navigate]);

    const handleclick = (e) => {
        setParam(parseInt(e))
    }

    return (
        <div>
            <Header />
            <Container>
                {
                    id ?
                        (<ProductDetails id={id} />) :
                        <Row xs={1} md={2} className="g-4">
                            {
                                data.map((element) => (
                                    <Col onClick={() => handleclick(element.id)} key={element.id}>
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
                                    </Col>
                                ))
                            }
                        </Row>}
            </Container>
        </div>
    );
}

export default Product;
