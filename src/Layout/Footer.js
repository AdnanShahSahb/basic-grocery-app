import React from 'react'

import { Row, Col, } from 'react-bootstrap';

const Footer = () => {
    return (
        // <footer id='footer' className="bg-light py-4">
        //     <div className="container d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
        //         <p className="text-center mb-0">Copyright &copy; 2023 . All rights reserved.</p>
        //     </div>
        //     <p style={{ float: 'left', fontSize: '10px' }}>https://github.com/AdnanShahSahb</p>
        // </footer>
        <footer className="bg-light py-3" id='footer'>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-4">
                        <h5>Linked In
                            <svg style={{ marginLeft: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </h5>

                        <a href="https://www.linkedin.com/in/adnan-shah-a74599245">
                            <label id='profileLinks' >https://www.linkedin.com/in/adnan-shah-a74599245</label>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <h5>Github
                            <svg style={{ marginLeft: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </h5>

                        <a href="https://github.com/AdnanShahSahb">
                            <label id='profileLinks' >https://github.com/AdnanShahSahb</label>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <h5>Upwork

                            <svg style={{ marginLeft: '10px' }} height={16} fill='#00080' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" /></svg>
                        </h5>
                        <a href="https://www.upwork.com/freelancers/~0124c7faa79fa1d639">
                            <label id='profileLinks' >https://www.upwork.com/freelancers/~0124c7faa79fa1d639</label>
                        </a>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <p className="text-muted small">Copyright &copy; 2023 Adnan Shah.
                            All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer