import React from 'react'
import { Card, Image } from 'react-bootstrap'

class ProductImage extends React.Component {
  render () {
    return (
      <Card style={{ width: 'inherit' }}>
        <Card.Img variant='top' src='/images/product.jpg' />
        <Card.Body style={styles.body}>
          <Image style={styles.image} src="/images/product1.jpg" width={80}/>
          <Image style={styles.image} src="/images/product2.jpg" width={80}/>
          <Image style={styles.image} src="/images/product3.jpg" width={80}/>
        </Card.Body>
      </Card>
    )
  }
}
const styles = {
    body: {
        
    },
    image: {
        margin: 5
    }
}
export default ProductImage