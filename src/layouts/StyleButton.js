import React from 'react'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
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
    //size logo
    width: '132px',
    height: '54px',
    //Icon XY
    padding:'45px',

   }

   const TitleLog = {
     //text position
    position:'relative',
    //text style
    textAlign:'center',
    color: '#fff',
    fontSize: '6vw',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '6px',
    lineheight: 1.16,
    //Padding tittle
    padding: 0,
    paddingTop:'10px',
    //Margin tittle
    margin: 0,
    marginLeft:'15px',
    marginBottom:'10px',
   }

  

export default function StyleButton() {
    return (
        <>
        <div>
            <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/es_MX/03a5e95dd434e72e5746eae1ee22f0b440c81c79/assets/es_MX/assets/lol-logo.png'
                 alt=''
                 style={LogoImg}
            />

            <div className="Title-log">
              <h1 style={TitleLog}>Aquí comienza  
              <br/>tu Leyenda</h1>
            </div>

            <div className='Bar-Log'>
              <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/es_MX/03a5e95dd434e72e5746eae1ee22f0b440c81c79/assets/es_MX/assets/divider.png'
                alt='bar'
              />
            </div>
        </div>

         <div className='Buttom'>
              <MyButton>COMIENZA AHORA</MyButton>  
        </div> 
        
        <div >
          <footer className='Logo-log-footer'>
            <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/es_MX/03a5e95dd434e72e5746eae1ee22f0b440c81c79/assets/es_MX/assets/riotgames-logo-white-s.png'
            alt='log-footer'
            />
          </footer>
        </div>     
        </>
       
    )
}
