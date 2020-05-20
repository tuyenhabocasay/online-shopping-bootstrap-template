import React from 'react'
import Content from '../components/Content';
import { Row, Col } from 'react-bootstrap';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';

class ProductListPage extends React.Component{
    render(){
        return(
            <Content>
              <Row>
                <Col xs={12} md={3}>
                    <ProductFilter/>
                </Col>
                <Col>
                   <ProductList/>
                </Col>
              </Row>
            </Content>
        )
    }
}

export default ProductListPage;