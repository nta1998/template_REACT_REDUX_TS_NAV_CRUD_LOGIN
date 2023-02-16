import React from 'react'
import {FaFacebookSquare,FaGithub,FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <div><footer className="footer">
      <div>
        <div>
     
            <h3 className="title">BY liloz</h3>
         
          <div>
          </div>
          <div>
            <h3 className="title">Follow me:</h3>
            <div className="btn-wrapper profile">
              <a
                href="https://github.com/nta1998"
              >
                <FaGithub/>
              </a>
              <a
                href="https://www.facebook.com/netanel.liluz"
              >
               <FaFacebookSquare/>
              </a>
              <a
                href="https://www.instagram.com/netanelliluz/"
              >
                <FaInstagramSquare/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer></div>
  )
}

export default Footer