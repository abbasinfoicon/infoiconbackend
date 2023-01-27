import React from 'react'

const Register = () => {
  return (
    <form action="/" method="post">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Full name" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-user"></span>
          </div>
        </div>
      </div>
      <div className="input-group mb-3">
        <input type="email" className="form-control" placeholder="Email" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-envelope"></span>
          </div>
        </div>
      </div>
      <div className="input-group mb-3">
        <input type="password" className="form-control" placeholder="Password" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-lock"></span>
          </div>
        </div>
      </div>
      <div className="input-group mb-3">
        <input type="password" className="form-control" placeholder="Retype password" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-lock"></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="icheck-primary">
            <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
            <label htmlFor="agreeTerms">
              I agree to the <a href="#">terms</a>
            </label>
          </div>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </div>
      </div>
    </form>
  )
}

export default Register