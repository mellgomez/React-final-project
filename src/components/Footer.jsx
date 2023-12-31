import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';



export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2023 mellgomez.com</p> 
    </div>
  )
}
