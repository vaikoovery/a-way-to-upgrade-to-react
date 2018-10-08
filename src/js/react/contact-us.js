import React from 'react'
import ReactDOM from 'react-dom'

class ContactUs extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <form action="" method="post">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" className="form-control" id="phone" />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<ContactUs />, document.getElementById('divContactUs'))
