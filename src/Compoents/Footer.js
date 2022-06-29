import React from 'react'
import { Link } from 'react-router-dom'
import "../footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img className="footer_logo" src='https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png' alt='' />
                </div>
                <div className='col-lg-4'>
                    <h5>Connect with us</h5>
                    <a href='http://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6'>facebook</a><br />
                    <a href='http://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6'>twitter</a><br />
                    <a href='http://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6'>instagram</a><br />
                </div>
                <div className='col-lg-4'>
                    <h5>Let Us help you</h5>
                    <Link to='/login'>Sign in</Link><br />
                    <Link to='/checkout'>Your Cart</Link>
                </div>
            </div>
            <hr />
            <p style={{ textAlign: "center" }}>Copyright @2022</p>
        </div>
    )
}

export default Footer