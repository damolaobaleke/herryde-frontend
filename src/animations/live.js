import React,{useState} from 'react';
import styled, { keyframes } from 'styled-components'

const ProjectHeading=()=>{
    const[initialHeadingState, setHeading]=  useState({h1:'Abuja!' })

    const firstFour = initialHeadingState.h1.slice(0,4).split('')
    console.log(firstFour)
    const lastFour = initialHeadingState.h1.slice(4,8).split('')
    console.log(lastFour)

    return(
        <div>
            Now live in 
            <Wrapper className='pl-2'>
                {firstFour.map((char, index) =>(
                    <span key={index}>{char}</span>
                    ))}
            </Wrapper>

            <WrapperTwo>
                {lastFour.map((char, index) =>(
                    <span key={index}>{char}</span>
                    ))}
            </WrapperTwo>
        </div>
    )
}

// using keyframes with styled components
const animationFirstFour = keyframes`
    0%{
        opacity:0;
        transform: translateX(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
        filter:blur(5px);
    }

    25%{
        opacity: 1;
        transform: translateX(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
        filter:blur(0px);
    }

    75%{
        opacity: 1;
        transform: translatex(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
        filter:blur(0px);
    }

    100%{
        opacity: 0;
        transform: translateX(-100px) skewY(0deg) skewX(0deg) rotateZ(0deg);
        filter:blur(5px);
    }
`

const animationLastFour = keyframes`
    0%{
        opacity:0;
        transform: translateX(100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
        filter:blur(5px);
    }

    25%{
        opacity: 1;
        transform: translateX(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
        filter:blur(0px);
    }

    75%{
        opacity: 1;
        transform: translatex(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
        filter:blur(0px);
    }

    100%{
        opacity: 0;
        transform: translateX(100px) skewY(0deg) skewX(0deg) rotateZ(0deg);
        filter:blur(5px);
    }
`

//Styling animation-fill-forward keeps it at its most recent styling, prevents it going back to previous state, in this case opacity 0

//selecting the span inside the Wrapper
const Wrapper = styled.span`
    display:inline-block;

    span{
        display:inline-block;
        animation-name: ${animationFirstFour};
        animation-duration: 5000ms;
        animation-fill-mode:forward; 
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-iteration-count:infinite;
    }

    span:nth-child(1){
        animation-delay:0.1s;
    }

    span:nth-child(2){
        animation-delay:0.2s;
    }

    span:nth-child(3){
        animation-delay:0.3s;
    }

    span:nth-child(4){
        animation-delay:0.4s;
    }

  
` 
const WrapperTwo = styled.span`
    display:inline-block;
    span{
        display:inline-block;
        animation-name: ${animationLastFour};
        animation-duration: 5000ms;
        animation-fill-mode:forward; 
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-iteration-count:infinite;
    }

    span:nth-child(1){
        animation-delay:0.1s;
    }

    span:nth-child(2){
        animation-delay:0.2s;
    }

    span:nth-child(3){
        animation-delay:0.3s;
    }

    span:nth-child(4){
        animation-delay:0.4s;
    }
`


export default ProjectHeading