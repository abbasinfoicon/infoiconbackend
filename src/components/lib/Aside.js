import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/dashboard" className="brand-link">
                <img src="assets/img/AdminLTELogo.png" alt="InfoICON Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">InfoICON</span>
            </Link>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="assets/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <Link to="/profile" className="d-block">Alexander Pierce</Link>
                    </div>
                </div>

                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item menu-open">
                            <Link to="/dashboard" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p> Dashboard </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-book"></i>
                                <p> Pages <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/page" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>All Page</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Category</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/subcategory" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Sub Category</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Profile</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>About us</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="faq" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>FAQ</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Contact us</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Invoice</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/slider" className="nav-link">
                                <i className="nav-icon fas fa-sliders-h"></i>
                                <p> Slider <span className="badge badge-info right">6</span></p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link">
                                <i className="nav-icon far fa-calendar-alt"></i>
                                <p> Blog <span className="badge badge-info right">6</span></p>
                            </Link>
                        </li>

                        <li className="nav-header">MEDIA</li>

                        <li className="nav-item">
                            <Link to="/award" className="nav-link">
                                <i className="nav-icon fas fa-award"></i>
                                <p> Award </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">
                                <i className="nav-icon far fa-image"></i>
                                <p> Gallery </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/social" className="nav-link">
                                <i className="nav-icon fas fa-share-alt"></i>
                                <p> Social </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p> Portfolio </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/testimonial" className="nav-link">
                                <i className="nav-icon fas fa-quote-right"></i>
                                <p> Testimonial </p>
                            </Link>
                        </li>

                        <li className="nav-header">STORE</li>

                        <li className="nav-item">
                            <Link to="/store" className="nav-link">
                                <i className="nav-icon fas fa-store"></i>
                                <p> Store </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="nav-icon far fa-plus-square"></i>
                                <p> Extras <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Lockscreen</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Legacy User Menu</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Language Menu</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Error 404</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Error 500</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Pace</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Blank Page</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Starter Page</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-header">CONTACT INFO</li>

                        <li className="nav-item">
                            <Link to="/address" className="nav-link">
                                <i className="nav-icon far fa-address-book"></i>
                                <p> Address </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/location" className="nav-link">
                                <i className="nav-icon fas fa-map-marker-alt"></i>
                                <p> Location </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/career" className="nav-link">
                                <i className="nav-icon fas fa-graduation-cap"></i>
                                <p> Career </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/team" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p> Team </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/payment" className="nav-link">
                                <i className="nav-icon fas fa-credit-card"></i>
                                <p> Payment </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">
                                <i className="nav-icon fas fa-sign-out-alt"></i>
                                <p> Logout </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Aside