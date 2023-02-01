import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../views/pages/Layout';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import ForgotPassword from '../views/auth/ForgotPassword';
import ResetPassword from '../views/auth/ResetPassword';
import Dashboard from '../views/pages/Dashboard'
import Page from '../views/pages/Page'
import Category from '../views/pages/Category'
import SubCategory from '../views/pages/SubCategory'
import Profile from '../views/pages/Profile'
import About from '../views/pages/About'
import Faq from '../views/pages/Faq'
import Contact from '../views/pages/Contact'
import Slider from '../views/pages/Slider'
import Blog from '../views/pages/Blog'
import Award from '../views/pages/Award'
import Gallery from '../views/pages/Gallery'
import Social from '../views/pages/Social'
import Portfolio from '../views/pages/Portfolio'
import Testimonial from '../views/pages/Testimonial'
import Store from '../views/pages/Store'
import Address from '../views/pages/Address'
import Location from '../views/pages/Location'
import Career from '../views/pages/Career'
import Team from '../views/pages/Team'
import Payment from '../views/pages/Payment'
import Logout from '../views/pages/Logout'


import PageNotFound from '../views/pages/PageNotFound';
import Layout from '../views/auth/Layout';

const RoutInfo = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Route>

            <Route path="/" element={<Home />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/page" element={<Page />} />
                <Route path="/category" element={<Category />} />
                <Route path="/subcategory" element={<SubCategory />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/slider" element={<Slider />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/award" element={<Award />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/social" element={<Social />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/store" element={<Store />} />
                <Route path="/address" element={<Address />} />
                <Route path="/location" element={<Location />} />
                <Route path="/career" element={<Career />} />
                <Route path="/team" element={<Team />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/logout" element={<Logout />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default RoutInfo