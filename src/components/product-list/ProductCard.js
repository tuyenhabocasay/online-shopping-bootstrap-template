import React from 'react'
import { Card, Button } from 'react-bootstrap'
import history from '../../history'
import { Link } from 'react-router-dom'

class ProductCard extends React.Component {
  handleClick = id=> () =>{
    history.push('/product-detail?id='+id)
  }
  render () {
    return (
      <Card style={styles.root} >
        <Card.Img variant='top' src='/images/product.jpg' onClick={this.handleClick('123456')}/>
        <Card.Body>
          <Card.Title as={Link} to='/product-detail?id=123456'>Dung dịch sát khuẩn Betadine</Card.Title>
          <Card.Text>
            35000đ - 53000đ
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

const styles = {
  root: {
    margin: 5,
    width: '18rem'
  }
}

export default ProductCard
