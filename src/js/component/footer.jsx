import React from "react";

const Footer =() =>{
    return <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Catalog</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Shop</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Blogs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p className="text-center text-muted">© 2023 Shopper, Inc</p>
    </footer>
  </div>
}
export default Footer;