
import React, { useState } from 'react';
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon, TwitterShareButton, TwitterIcon  } from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import '../../styles/product/shareProducts.css'
  

const ShareProduct = () => {
  /*aca va la direccion del hotel*/  
  const url="";
    
    
    const [clicked, setClicked] = useState(true);
    
  
    const handleClick = () => {
      setClicked(!clicked);
    };

  return (
    <div style={{display:"flex"}}>
      <FontAwesomeIcon
        className='share-icon'
        icon={faShareNodes}
        onClick={handleClick}
        style={{fontSize:"1.5rem"}}

    /> {clicked ?  ""

    : 
    <div className='icons-container' style={{display:"flex", flexDirection:"row", margin: "0" }}>
      <FacebookShareButton  url={url}>
      <FacebookIcon className='icons-share'/>
      </FacebookShareButton>

      <TwitterShareButton url={url}>
      <TwitterIcon className='icons-share'/>
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
      <WhatsappIcon className='icons-share'/>
      </WhatsappShareButton>

      <EmailShareButton  url={url}> 
      <EmailIcon className='icons-share'/>
      </EmailShareButton>

    </div>
  }    
</div>
  )
}

export default ShareProduct 