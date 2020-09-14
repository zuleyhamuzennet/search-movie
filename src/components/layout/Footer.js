import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-success text-light">
            Developed By : 
            <span className="text-warning font-weight-normal">
              Züleyha Müzennet
            </span>
            , Using React JS &amp; Redux JS,
             Movies Data API
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
