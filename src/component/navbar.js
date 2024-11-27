import React from 'react';
import '../style/Nvbar.css'; // Import CSS file
function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo">
    <image src ="https://www.google.com/imgres?q=amg%20logo%20for%20website&imgurl=https%3A%2F%2Fdownload.logo.wine%2Flogo%2FMercedes-AMG%2FMercedes-AMG-Logo.wine.png&imgrefurl=https%3A%2F%2Fwww.logo.wine%2Flogo%2FMercedes-AMG&docid=nCBn2l8Fc7_WQM&tbnid=ziEegNs2EKQaMM&vet=12ahUKEwjipJSLo_yJAxUXVfEDHVN3BDcQM3oECGMQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjipJSLo_yJAxUXVfEDHVN3BDcQM3oECGMQAA"/>CAR HUB</div>
    <span className="brand-name">Mercedes-Benz</span>
    
<ul className="navbar-menu">
<li><a href="#" className="navbar-link">Home</a></li>
<li><a href="#" className="navbar-link">models</a></li>
<li><a href="#" className="navbar-link">technology</a></li>
<li><a href="#" className="navbar-link">service</a></li>
<li><a href="#" className="navbar-link">Contact</a></li>
</ul>
</nav>
);
}
export default Navbar;