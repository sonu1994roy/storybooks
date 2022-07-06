import React, { useState } from 'react'
import Link from 'next/link'
import { BsPersonSquare } from 'react-icons/bs';
import { HiLibrary } from "react-icons/hi"
import { AiOutlineSearch } from "react-icons/ai"


function Nav() {
    const [IsOpen, Settoglle] = useState(false);
    const [serchbox, Setserchbox] = useState(true);
    const [sidebar, Setsidebar] = useState(false);
    function toggle() {

        Settoglle(!IsOpen)
    }
    function Serchtoggle() {
        Setserchbox(!serchbox)
    }
    function sidebartoggle() {
        Setsidebar(!sidebar)
    }
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h2 className="navbar-brand text-primary" href="#">Read & Kids</h2>


                <div className={IsOpen ? "menu" : "collapse navbar-collapse "} id="navbarSupportedContent" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className='nav-link'>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href="/blog">
                                <a className='nav-link'>Blog</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href="/Authour">
                                <a className='nav-link'>Authour</a>
                            </Link>
                        </li>

                    </ul>

                </div>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item px-3 active " >
                        <AiOutlineSearch onClick={Serchtoggle} className='adminIcone' data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" />
                        <div className='serch-box'>
                            <div className={serchbox ? "collapse collapse-horizontal" : ""} id="collapseWidthExample">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn  btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </div>



                    </li>
                    <li className="nav-item px-3 active">
                        <HiLibrary onClick={sidebartoggle} className='adminIcone' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" />

                        <div className={sidebar ? "offcanvas offcanvas-start " : "sidebarhide"} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header text-center p-3">
                                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">your library article</h5>

                            </div>
                            <div className="offcanvas-body p-3">
                                <ul>
                                    <li className='text-link '><Link href={"/"} ><a className="font-weight-bold text-primrey">lates news lorem isupm doler</a></Link></li>
                                    <li className='text-link '><Link href={"/"} ><a className="font-weight-bold text-primrey">lates news lorem isupm doler</a></Link></li>
                                    <li className='text-link '><Link href={"/"} ><a className="font-weight-bold text-primrey">lates news lorem isupm doler</a></Link></li>
                                    <li className='text-link '><Link href={"/"} ><a className="font-weight-bold text-primrey">lates news lorem isupm doler</a></Link></li>
                                    <li className='text-link '><Link href={"/"} ><a className="font-weight-bold text-primrey">lates news lorem isupm doler</a></Link></li>
                                    <li className='text-link '><Link href={"/"} ><a className="font-weight-bold text-primrey">lates news lorem isupm doler</a></Link></li>
                                </ul>
                            </div>
                        </div>


                    </li>
                    <li className=" bg-primery nav-item px-3 active">
                        <Link href="/adminlogin">
                            <BsPersonSquare className='adminIcone' />
                        </Link>
                    </li>
                </ul>

                <button className="navbar-toggler" onClick={toggle} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>

        </div>

    )
}

export default Nav
