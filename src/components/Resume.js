import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'


class Resume extends Component {
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = 'cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js';
    }

    
  render() {
    
    return (
      <div className='resume' id='resume'>
        <article>
          
          <Document file={process.env.PUBLIC_URL + "/images/KarenResume2019.pdf"} > 
            <Page  pageNumber= '1' />
          </Document>
          <img alt='resume page 1' className='resumePage' src={process.env.PUBLIC_URL + "/images/KarenResume1.jpg"} />
          <img alt='resume page 2' className='resumePage' src={process.env.PUBLIC_URL + "/images/KarenResume2.jpg"} />
        </article>
      </div>
    );
  }
}

export default Resume; 