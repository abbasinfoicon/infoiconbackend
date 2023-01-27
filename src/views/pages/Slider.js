import React from 'react'

const Slider = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">All Pages</h3>

        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus"></i>
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div className="card-body p-0">
        <table className="table table-striped projects">
          <thead>
            <tr>
              <th style={{ width: '1%' }}>#</th>
              <th style={{ width: '20%' }}>Page Name</th>
              <th style={{ width: '30%' }}>Team Members</th>
              <th style={{ width: '8%' }} className="text-center">Status</th>
              <th style={{ width: '20%' }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#</td>
              <td><a>AdminLTE v3</a><br /><small>Created 01.01.2019</small></td>
              <td>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="assets/img/avatar.png" />
                  </li>
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="assets/img/avatar2.png" />
                  </li>
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="assets/img/avatar3.png" />
                  </li>
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="assets/img/avatar4.png" />
                  </li>
                </ul>
              </td>
              <td className="project-state">
                <span className="badge badge-success">Success</span>
              </td>
              <td className="project-actions text-right">
                <a className="btn btn-primary btn-sm" href="#"><i className="fas fa-folder"></i> View</a>
                <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i> Edit</a>
                <a className="btn btn-danger btn-sm" href="#"><i className="fas fa-trash"></i> Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Slider