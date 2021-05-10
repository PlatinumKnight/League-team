import React from 'react'
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const Mypaper = styled(Paper)({

})
const BackgroundStyle = {
    //Responsive Background
    width:'100vw',
    height:'100vh',
    position: 'fixed',
    top: 0,
    left:0,
    //Blur Effect
    opacity: .90,
    filter: 'blur(8px)',
}

export default function StyleImagen() {
    return (
        <div>
            <Mypaper>
                <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/es_MX/03a5e95dd434e72e5746eae1ee22f0b440c81c79/assets/es_MX/assets/bg-welcome.jpg'
                     alt='text' 
                     style ={BackgroundStyle}
                />
            </Mypaper>
            
        </div>
    )
}
