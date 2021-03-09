import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Admin extends Component {
    render() {
        return (
            <div className="right_col container" role="main">
                <div className="x_panel">
                    <div className="x_title">
                        <h2>Đăng sản phẩm</h2>
                        <div className="clearfix" />
                    </div>
                    <div className="x_content">
                        <form className="form-horizontal form-label-left">
                            {/* <button type="submit" class="btn btn-primary"><a href="/add/postCategory" style="color: white;">Tạo danh sách sách sản phẩm</a></button> */}
                            <br />
                            <button type="submit" className="btn btn-primary">
                                <Link to = {'/post'} style={{ color: 'white' }}>
                                    Tạo sản phẩm
                                </Link>
                            </button>
                            {/* <br />
                            <button type="submit" className="btn btn-primary">
                                <a href="./edit" style={{ color: 'white' }}>
                                    Danh sách sản phẩm
                                </a>
                            </button> */}
                            <br />
                            <button type="submit" className="btn btn-primary">
                                <Link to = {'/report'} style={{ color: 'white' }}>
                                    Báo cáo
                                </Link>
                            </button>
                            <br />
                            <button type="submit" className="btn btn-primary"><a href="/" style={{ color: 'white' }}>Vể trang chủ</a></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin