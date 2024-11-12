import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Register() {
    return (
        <>
            
            <div className="container-fluid" >
                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-lg-6  mt-3 mb-3 text-center">

                          <h1>Register form </h1>
                      
                       
                        <div className="card">
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" /><br></br>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" /><br></br>
                                    </div>

                                </div>

                                <div className="col">
                                    <input type="text" className="form-control" placeholder="email" aria-label="email" /><br></br>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="password" aria-label="password" />
                                </div>

                                <div class="form-check d-flex justify-content-center mb-4">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33"  />
                                    <label class="form-check-label" for="form2Example33">
                                        i accept the filled information
                                    </label>
                                </div>

                                <div className="col-lg-12 mt-3 mb-3">
                                    <input type="submit" name="name"
                                        className="form-control btn btn-info" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register