import React from "react";
import '../App.css'

function Footer(){
    return(
        <div class="footer">
        <div class="footer-container">
          <div class="footer-column">
            <h2 class="footer-subheading">Managed Website</h2>
            <a href="#" class="footer-link">Manage Reputation</a>
            <a href="#" class="footer-link">Power Tools</a>
            <a href="#" class="footer-link">Marketing Service</a>
          </div>
          <div class="footer-column">
            <h2 class="footer-subheading">Jobs</h2>
            <a href="#" class="footer-link">Brand Assets</a>
            <a href="#" class="footer-link">Investor Relations</a>
            <a href="#" class="footer-link">Terms of Service</a>
          </div>
          <div class="footer-column">
            <h2 class="footer-subheading">Contact Us</h2>
            <a href="#" class="footer-link">Uttar Pradesh</a>
            <a href="#" class="footer-link">Ahemdabad</a>
            <a href="#" class="footer-link">Indore</a>
            <a href="#" class="footer-link">Mumbai</a>
          </div>
          <div class="footer-column">
            <h2 class="footer-subheading">Social Media</h2>
            <a href="#" class="footer-link">
              <i class="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a href="#" class="footer-link">
              <i class="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="#" class="footer-link">
              <i class="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="#" class="footer-link">
              <i class="fab fa-youtube"></i>
              <span>Youtube</span>
            </a>
          </div>
        </div>
      </div>
    )
}
export default Footer;