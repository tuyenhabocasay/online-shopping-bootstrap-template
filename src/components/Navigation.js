import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Image
} from 'react-bootstrap'
import { PeopleCircle } from 'react-bootstrap-icons'
import history from '../history'
import { cateList } from '../constants'
import { Link } from 'react-router-dom'
import {routePath} from '../constants'
class Navigation extends React.Component {
  handleRedirect = slug => () => {
    history.push('/product-list')
  }
  handleRedirectHome = () => {
    history.push('/')
  }
  handleLoginRedirect = () => {
    history.push('/login')
  }
  handleCartRedirect = ()=>{
    console.log('redirect to cart')
    history.push('/cart')
  }
  render () {
    console.log('render navigate')
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand
          href='javascript:void(0)'
          onClick={this.handleRedirectHome}
        >
          <Image src='/logo.png' width='100' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <NavDropdown title='Danh mục' id='basic-nav-dropdown'>
              {Array.isArray(cateList) &&
                cateList.map(cate => (
                  <NavDropdown.Item
                    key={cate.slug}
                    active={window.location.href.includes('/' + cate.slug)}
                    as={Link}
                    to={'/cate/'+cate.slug}
                  >
                    {cate.name}
                  </NavDropdown.Item>
                ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Tất cả danh mục
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Nhập từ khóa tìm kiếm' className='mr-sm-2' />
            <Button variant='outline-success'>Tìm</Button>
          </Form>
          <Nav className='mr-auto' />
          <Nav>
            <Nav.Link href='javascript:void(0)' onClick={this.handleCartRedirect}>
              <Image src='/images/cart.png' width='20' />
            </Nav.Link>
            <Nav.Link
              href='javascript:void(0)'
              onClick={this.handleLoginRedirect}
            >
              Đăng nhập
            </Nav.Link>
            <Nav.Link as={Link} to={routePath.MY_PROFILE_PAGE}>
              <PeopleCircle />
            </Nav.Link>
            <Nav.Link href='#deets'>Đăng xuất</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
