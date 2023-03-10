import React from 'react'

const Login = () => {
  return (
    <form action="/" method="post">
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
      <div className="row">
        <div className="col-8">
          <div className="icheck-primary">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">
              Remember Me
            </label>
          </div>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default Login