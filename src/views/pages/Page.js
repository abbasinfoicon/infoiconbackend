import React, { useEffect } from 'react';
import { CDBCard, CDBCardBody, CDBDataTable } from 'cdbreact';
import bsCustomFileInput from 'bs-custom-file-input';
import { CKEditor } from 'ckeditor4-react';

const Page = () => {
  const data = () => {
    return {
      columns: [
        {
          label: '#',
          field: 'id',
          width: 20,
        },
        {
          label: 'Title',
          field: 'title',
          width: 100,
        },
        {
          label: 'Image',
          field: 'img',
          width: 100,
        },
        {
          label: 'Small Desc',
          field: 'smalldesc',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Description',
          field: 'desc',
          sort: 'disabled',
          width: 200,
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'disabled',
          width: 100,
        },
        {
          label: '',
          field: 'action',
          sort: 'disabled',
          width: 100,
        }
      ],
      rows: [
        {
          id: '1',
          title: 'Mobile Apps Development',
          img: <img src='https://www.infoicontechnologies.com/img/mobile-appication.gif' alt="" className='img-style' style={{ width: '100px' }} />,
          smalldesc: 'Mobile Application Development is basically the progression by which application software is developed for low power handheld devices; this includes personal digital assistants, enterprise digital assistants or mobile phones.',
          desc: 'Mobile app development helps the individual business or a group to build up new contacts and later on use them for different marketing campaigns. We at Infoicon technologies provide the easy method to your customers to reach you on one touch application. We proffer number of services for the same that include.',
          status: 'Success',
          action: <div className='action align-middle text-nowrap'>
            <a className="btn btn-primary btn-sm" data-toggle="modal" data-target="#addNew"><i className="fas fa-folder"></i> View</a>
            <a className="btn btn-info btn-sm mx-2" data-toggle="modal" data-target="#addNew"><i className="fas fa-pencil-alt"></i> Edit</a>
            <a className="btn btn-danger btn-sm" data-toggle="modal" data-target="#addNew"><i className="fas fa-trash"></i> Delete</a>
          </div>,
        },
      ],
    };
  };

  useEffect(() => {
    bsCustomFileInput.init()
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="add-new">
            <button data-toggle="modal" data-target="#addNew">Add New</button>
          </div>
          <CDBCard className="p-2 border">
            <CDBCardBody>
              <CDBDataTable
                striped
                bordered
                hover
                checkbox
                maxHeight="55vh"
                entriesOptions={[5, 10, 15, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={data()}
                materialSearch={true}
              />
            </CDBCardBody>
          </CDBCard>
        </div>
      </div>


      <div className="modal fade" id="addNew" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="card-body">
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" id="" placeholder="Enter title" />
                  </div>

                  <div className="form-group">
                    <label>Small Description</label>
                    <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder='Please Enter small description for website...'></textarea>
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                    <CKEditor initData="<p>Full Description</p>" />
                  </div>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label>Status</label>
                        <select className="form-control">
                          <option>Success</option>
                          <option>Panding</option>
                          <option>Reject</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>File input</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input type="file" name="img" className="custom-file-input" id="file" />
                            <label className="custom-file-label" htmlFor="file">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default border" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Submit</button>
              </div>
            </form>

            <div className="view-data p-3">
              <h3 className="text-primary"><i className="fas fa-paint-brush"></i> Mobile Apps Development</h3>
              <p className="text-muted">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
              <br />

              <div className="row">
                <div className="col-md-8">
                  <div className="text-muted">
                    <p className="text-sm">Create by
                      <b className="d-block">Admin</b>
                    </p>
                    <p className="text-sm">Categories
                      <b className="d-block">App Developement</b>
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <img src='https://www.infoicontechnologies.com/img/mobile-appication.gif' alt="Mobile Apps Development" className='img-style img-fluid' />
                </div>
              </div>

              <h5 className="mt-5 text-muted">Full Description</h5>
              <p>Mobile app development helps the individual business or a group to build up new contacts and later on use them for different marketing campaigns. We at Infoicon technologies provide the easy method to your customers to reach you on one touch application. We proffer number of services for the same that include.</p>

              <div className="text-center mt-5 mb-3 d-flex justify-content-center gap-2">
                <button type="button" className="btn btn-sm btn-default border" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-sm btn-primary"><i className="fas fa-paper-plane"></i> Add New</button>
                <button type="button" className="btn btn-sm btn-warning"><i className="fas fa-paper-plane"></i> Edit</button>
                <button type="button" className="btn btn-sm btn-info"><i className="fas fa-paper-plane"></i> All Lists</button>
              </div>
            </div>

            <div className="delete-modal">
              <i class="fas fa-times"></i>
              <h3>Are you sure?</h3>
              <p>Do you really want to delete these records? This process cannot be undone.</p>

              <div className="action">
                <button className="btn btn-default border" data-dismiss="modal">Cancel</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page