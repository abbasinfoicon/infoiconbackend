import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import bsCustomFileInput from 'bs-custom-file-input';
import { CKEditor } from 'ckeditor4-react';
import { useAddPageMutation, useGetPageQuery } from '../../features/services/pages/cmsPage';
import { toast } from 'react-toastify';

const Page = () => {
  const cmsPage = useGetPageQuery();
  const [main, setMain] = useState()
  // console.log(cmsPage?.data?.data)

  const [search, setSearch] = useState("");
  const [fltr, setFltr] = useState([]);


  const [addPage] = useAddPageMutation();
  const [desc, setDesc] = useState('')
  const [field, setfield] = useState({
    title: '',
    img: '',
    smallDesc: '',
    categories: '',
    subCategories: '',
    show: '',
    status: '',
  });

  const handleChange = (e) => {
    setfield({ ...field, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, smallDesc, categories, subCategories, show, status, img } = field;

    if (title && show && smallDesc && desc && categories) {
      const res = await addPage({ ...field, desc: desc });

      // console.log("Add Data: ", res);
      toast.success("Create Data Successfully!!!");
      setfield({
        title: '',
        img: '',
        smallDesc: '',
        categories: '',
        subCategories: '',
        show: '',
        status: '',
      });

      document.getElementById('customForm').reset();
      setDesc(CKEditor.getData(''))
    } else {
      toast.error("All Feild required!!!");
    }
  };

  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1
    },
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Image',
      selector: row => <img src={row.img} className="img-style" width={100} />
    },
    {
      name: 'Small Desc',
      selector: row => row.smallDesc.slice(0, 50) + '...',
    },
    {
      name: 'Categories',
      selector: row => row.categories,
    },
    {
      name: 'Sub Categories',
      selector: row => row.subCategories,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => <>
        <button className='btn btn-primary btn-sm' onClick={() => alert(row.title)}><i className="fas fa-eye"></i></button>
        <button className='btn btn-info btn-sm mx-2' onClick={() => alert(row.title)}><i className="fas fa-pencil-alt"></i></button>
        <button className='btn btn-danger btn-sm' onClick={() => deleteData(row._id)}><i className="fas fa-trash"></i></button>
      </>
    }
  ];

  const deleteData = (id) => { 
    console.log("delete-id-", id);
    
  }

  useEffect(() => {
    bsCustomFileInput.init()
  }, [])

  useEffect(() => {
    setMain(cmsPage?.data?.data)
    setFltr(main)
  }, [main, cmsPage])

  useEffect(() => {
    var result = main?.filter(list => {
      return list.title.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFltr(result);
  }, [search])

  const ExpandedComponent = ({ data }) => <div className='p-5' dangerouslySetInnerHTML={{ __html: JSON.stringify(data.desc) }}></div>;
  console.log("Filter data-", fltr);
  console.log("Main-", main);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="add-new">
            <button data-toggle="modal" data-target="#addNew">Add New</button>
          </div>
        </div>

        {/* modal-popup-start */}
        <div className="modal fade" id="addNew" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add New Data</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              {
                cmsPage.data && cmsPage.data.length ? (
                  <>
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
                      <i className="fas fa-times"></i>
                      <h3>Are you sure?</h3>
                      <p>Do you really want to delete these records? This process cannot be undone.</p>

                      <div className="action">
                        <button className="btn btn-default border" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-danger">Delete</button>
                      </div>
                    </div>
                  </>
                ) : <form encType="multipart/form-data" onSubmit={handleSubmit} id="customForm">
                  <div className="card-body">
                    <div className="form-group">
                      <label>Title</label>
                      <input type="text" name="title" value={field.title} onChange={handleChange} className="form-control" placeholder="Enter title" />
                    </div>

                    <div className="form-group">
                      <label>Small Description</label>
                      <textarea name="smallDesc" value={field.smallDesc} onChange={handleChange} cols="30" rows="2" className="form-control" placeholder='Please Enter small description for website...'></textarea>
                    </div>

                    <div className="form-group">
                      <label>Description</label>
                      <CKEditor name="desc" id="desc" onChange={({ editor }) => setDesc(editor.getData())} />
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Categories</label>

                          <select className="form-control" name="categories" defaultValue={field.categories} onChange={handleChange}>
                            <option value="" disabled>Select</option>
                            {
                              ["About us", "Services", "Expertise", "Infra Services", "Industries", "Custom Solution", "Products", "Big Data Analytics Solution", "Software Testing", "Digital Marketing", "Cloud Computing", "AWS-Migration"].map((item, i) => {
                                return (
                                  <option value={item} key={i}>{item}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Sub Categories</label>
                          <select className="form-control" name="subCategories" defaultValue={field.subCategories} onChange={handleChange}>
                            <option value="" disabled>Select</option>
                            {
                              ["Corporate Info", "Quick Contact Info", "Certifications", "Mobility Solution", "Tech Expertise", "Solution Design", "Success Stories", "CMS Development", "PHP Expertise", "Sforce Development", "JS Libraries & Frameworks", "Backend Support", "Cloud Services", "Sforce Development", "Sharepoint Developement"].map((item, i) => {
                                return (
                                  <option value={item} key={i}>{item}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-5">
                        <div className="form-group">
                          <label>Upload Image</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input type="file" name="img" onChange={handleChange} className="custom-file-input" id="file" />
                              <label className="custom-file-label" htmlFor="file">Choose image</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Show Direction</label>
                          <select className="form-control" name="show" defaultValue={field.show} onChange={handleChange}>
                            <option value="" disabled>Select</option>
                            {
                              ["Front Manu", "Toggle Menu"].map((item, i) => {
                                return (
                                  <option value={item} key={i}>{item}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-2">
                        <div className="form-group">
                          <label>Status</label>
                          <select className="form-control" name="status" defaultValue={field.status} onChange={handleChange}>
                            <option value="" disabled>Select</option>
                            {
                              ["success", "panding", "reject"].map((item, i) => {
                                return (
                                  <option value={item} key={i}>{item}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-default border" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Submit</button>
                  </div>
                </form>
              }

            </div>
          </div>
        </div>
        {/* modal-popup-end */}

        {/* modal-popup-start */}
        <div className="modal fade" id="delNew" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Delelte Data</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="delete-modal">
                <i className="fas fa-times"></i>
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
        {/* modal-popup-end */}

        {cmsPage.isError ? (
          <p className='iserror'>Oh no, there was an error</p>
        ) : cmsPage.isLoading ? (
          <p className='isloading'>Loading...</p>
        ) : cmsPage.data?.data.length ? (
          <div className="col-md-12">
            <div className="card">
              <div className="card-body1">
                <DataTable
                  title="Page Lists"
                  columns={columns}
                  data={fltr}
                  pagination
                  fixedHeader
                  fixedHeaderScrollHeight='525px'
                  selectableRows
                  selectableRowsHighlight
                  highlightOnHover
                  subHeader
                  subHeaderComponent={<input type='text' placeholder="Search here..." className='form-control w-25' value={search} onChange={(e) => setSearch(e.target.value)} />}
                  subHeaderAlign="right"
                  striped
                  expandableRows
                  expandableRowsComponent={ExpandedComponent}
                />
              </div>
            </div>
          </div>
        ) : <>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Data Not Found!!!</h3>
              </div>
            </div>
          </div>
        </>}
      </div>
    </div>
  )
}

export default Page