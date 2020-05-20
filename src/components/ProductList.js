import React from 'react'
import ListHeader from './product-list/ProductCard'
import { Card, Button, Dropdown, DropdownButton, Pagination } from 'react-bootstrap'
import ProductCard from './product-list/ProductCard'

class ProductList extends React.Component {
  render () {
    return (
      <Card>
        <Card.Header style={styles.cardHeader}>
          <h5>
            Áo Khoác{' '}
            <small>
              (<span style={{ color: 'red' }}>300</span> Sản phẩm)
            </small>
          </h5>
          <DropdownButton
            style={styles.sortBtn}
            id='dropdown-basic-button'
            title='Lọc'
            size='sm'
          >
            <Dropdown.Item href='#/action-1'>Giá giảm</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Giá tăng</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>A-Z</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Z-A</Dropdown.Item>
          </DropdownButton>
        </Card.Header>
        <Card.Body>
          <div style={styles.list}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Card.Body>
        <Card.Footer className="text-center">
          
        </Card.Footer>
      </Card>
    )
  }
}

const styles = {
  cardHeader: {
    display: 'flex'
  },
  sortBtn: {
    marginLeft: 'auto'
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
  }
}

const mapStateToProps = state =>({
  products: state.products
})

export default ProductList
