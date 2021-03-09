import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionUpdateProductRequest, actionAddProductRequest, actionDeleteProductRequest, actionFetchProductsRequest, actionGetProductByIdRequest } from './../../actions/index'
import FileBase64 from 'react-file-base64'

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : '',
            name: '',
            image: [],
            detail: '',
            price: 0,
            color: '',
            quantity: 0,
            size: ''
        }
    }

    componentWillMount() {
        this.props.fetchAllProducts()
    }

    updateProduct = (id) => {
        console.log(id)
        var { products } = this.props
        if ( products.length > 0 ) {
            for ( var i = 0; i< products.length; i++) {
                if ( products[i].product_id === id) {
                    console.log( 'id =============== ', products[i].product_id)
                    console.log('render 1')
                    this.setState({
                        id : products[i].product_id,
                        name : products[i].name,
                        image : products[i].image,
                        detail : products[i].detail,
                        price : products[i].price,
                        color : products[i].color,
                        quantity : products[i].quantity,
                        size : products[i].size
                    })
                    console.log(this.state)
                    // this.props.updateProduct(products[i])
                }
            }
        }
    }

    deleteProduct = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.deleteProduct(id)
        }
    }

    showAllProducts = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr>
                        <td> {product.name} </td>
                        <td>
                            <img src={product.image} style={{ width: '75%' }} />
                        </td>
                        <td> {product.size} </td>
                        <td> {product.detail} </td>
                        <td> {product.price} </td>
                        <td> {product.color} </td>
                        <td> {product.quantity} </td>
                        <td>
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    onClick = { () => this.updateProduct(product.product_id) }
                                >
                                    EDIT
                                </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-danger"
                                onClick={ () => this.deleteProduct(product.product_id) }
                            >
                                X
                            </button>
                        </td>
                    </tr>
                )
            })
        }
        return result
    }

    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.type === 'file' ? target.files : target.value
        this.setState({
            [name]: value
        })
    }

    onSave = (event) => {
        event.preventDefault()
        var { id, name, image, detail, price, color, quantity, size, files } = this.state
        console.log(this.state)
        image = files
        // image = data
        var product = {
            id : id,
            name: name,
            image: image[0].base64,
            detail: detail,
            price: price,
            color: color,
            quantity: quantity,
            size: size
        }
        if (id) {
            this.props.updateProduct(product)
        } else {
            this.props.addProducts(product)
        }
    }

    getFiles(files){
        this.setState({ files: files })
        console.log(this.state)
      }

    render() {
        var { name, image, detail, price, color, quantity, size } = this.state

        return (
            <div className="container body">
                <div className="main_container">
                    {/* page content */}
                    <div className="right_col" role="main">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Đăng sản phẩm</h2>
                                <div className="clearfix" />
                            </div>
                            <div className="x_content">
                                <form className="form-horizontal form-label-left" method="POST" onSubmit={this.onSave} >
                                    <div className="form-group row">
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="name">Tên Sản Phẩm <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                required name="name"
                                                className="form-control col-md-7 "
                                                value = { name }
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="detail">Chi Tiết <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                required name="detail"
                                                className="form-control col-md-7 "
                                                value={ detail }
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="size">Size <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                required name="size"
                                                className="form-control col-md-7 "
                                                value={ size }
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="price">Giá <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                required name="price"
                                                className="form-control col-md-7 "
                                                value={ price }
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="price">Màu <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                required name="color"
                                                className="form-control col-md-7 "
                                                value={ color }
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="price">Số lượng <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                required name="quantity"
                                                className="form-control col-md-7 "
                                                value={ quantity }
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    {/* <input type="file" name="image" onChange={this.onChange} /> */}
                                    <FileBase64 
                                        multiple={ true }
                                        onDone={ this.getFiles.bind(this) }

                                    />
                                    <br />
                                    <br />
                                    <button type="submit" className="btn btn-primary">Tạo Sản Phẩm Mới</button>
                                    <button type="button" className="btn btn-primary"><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Về trang chính</a></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-wrap">
                    <div className="site-section">
                        <div className="container">
                            <div className="row mb-5">
                                <form className="col-md-12" method="post">
                                    <div className="site-blocks-table">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Image</th>
                                                    <th>Size</th>
                                                    <th>Detail</th>
                                                    <th>Price</th>
                                                    <th>Color</th>
                                                    <th>Quantity</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.showAllProducts(this.props.products)}
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actionFetchProductsRequest())
        },
        addProducts: (product) => {
            dispatch(actionAddProductRequest(product))
        },
        deleteProduct: (id) => {
            dispatch(actionDeleteProductRequest(id))
        },
        updateProduct: (product) => {
            dispatch(actionUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)