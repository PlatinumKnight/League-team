import React from 'react'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
    //ButtonCenterBackGround
    transform: 'translateY(50vh)',
    //ButtonBorder
    borderColor:'linear-gradient(180deg,#ecc572 0,#815500);',
    borderStyle:'solid',
    borderWidth:3,
    background: 'linear-gradient(0deg, rgba(9,28,28,1) 0%, rgba(17,17,17,1) 100%)',
    border: 3,
    borderRadius:0,
    //Text 
    fontSize: 22 ,
    letterSpacing:'3px',
    fontFamily:'family=BeaufortforLOL-Bold',
    color: '#937341',
    '&:hover': {
     //Transition timer
      transition: 'color 2s',
      transitionProperty: 'color',
      transitionDuration:'2s',
      transitionTimingFunction:'ease',
      transitionDelay:'0s',
      backgroundColor: '#111',
      color: '#c4b998',
   }});

   const LogoImg = {
   //Icon Size-Position
    position:'relative',
    width: '132px',
    height: '54px',
    //Icon XY
    padding:'45px',

   }

   const TitleLog = {
    position:'relative',
    textAlign:'center',
    color: '#fff',
    fontSize: '5vw',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '6px',
    lineheight: 1.16,
    margin: 0,
    marginTop:'5vh',
    padding: 0,
   }

  

export default function StyleButton() {
    return (
        <>
        <div>
            <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/es_MX/03a5e95dd434e72e5746eae1ee22f0b440c81c79/assets/es_MX/assets/lol-logo.png'
                 alt=''
                 style={LogoImg}
            />
            <h1 style={TitleLog}>Aquí comienza tu 
            <br/>Leyenda</h1>
            <div className='Bar-Log'>
              <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/es_MX/03a5e95dd434e72e5746eae1ee22f0b440c81c79/assets/es_MX/assets/divider.png'
                alt='bar'
              />
            </div>
        </div>

         <div className='Buttom'>
              <MyButton>COMIENZA AHORA</MyButton>  
        </div> 

       
        </>
       
    )
}
