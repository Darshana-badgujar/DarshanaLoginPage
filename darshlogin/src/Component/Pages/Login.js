import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <>



            <div className="container-fluid"  >
                <div className="row" style={{ justifyContent: 'right' }}>
                    <div className="col-lg-6  mt-3 mb-3 text-center">






                        <div className='h' style={{ marginTop: '60px', marginLeft: '55px' }}>
                            <h1>Login</h1>
                        </div>

                        <div className="card " style={{ height: '300px', width: '400px', marginLeft: '200px', marginTop: '40px' }}>
                            <div className="card-body">
                                <div className="container contact-form">

                                    <div className="contact-image">

                                    </div>

                                    <div className="row" style={{ marginTop: '30px', marginBottom: '30px' }}>
                                        <div className="col-lg-12" style={{ height: '500px', width: '400px' }}>
                                            <div className="col -lg-12"  >


                                                <input type="text" className="form-control" placeholder="username" aria-label="Username" />
                                            </div><br></br>
                                            <div className="col-lg-12">
                                                <input type="text" className="form-control" placeholder="password" aria-label="password" />
                                            </div><br></br>


                                            <div className="col-lg-12">

                                                <div className="form-group" style={{ justifyContent: 'center' }}>
                                                    <input type="submit" name="btnSubmit" className="form-control btn btn-info" value="Submit" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center" style={{ marginTop: '30px', marginBottom: '30px' }}>
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login