import React from 'react'
import Content from '../components/Content'
import { Row, Col } from 'react-bootstrap'
import ProductImage from '../components/product-detail/ProductImage'
import ProductInfo from '../components/product-detail/ProductInfo'
import ProductDetailInfo from '../components/product-detail/ProductDetailInfo'

class ProductDetailPage extends React.Component {
  render () {
    return (
      <Content>
        <Row>
          <Col xs={12} md={5}>
            <ProductImage />
          </Col>
          <Col>
            <ProductInfo />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductDetailInfo />
          </Col>
        </Row>
      </Content>
    )
  }
}

export default ProductDetailPage
