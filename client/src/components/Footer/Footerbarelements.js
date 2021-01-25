import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Foot = styled.footer`
background:#FFFFFF;
height :80px;
display:none;
justify-content:center;
align-items:center;
font-size:1rem;
position: sticky;
z-index:10;

@media screen and (max-width: 780px){
    display:flex;
}

@media screen and (max-width:960px){
    transition : 0.8s all ease;
}
`;

export const Thefooter = styled.div`{
    display: none;
     
    @media screen and (max-width: 700px){
        display:flex;
        position:fixed
    }
}`

export const FootbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 18px;



`;


export const FootMenu = styled.ul`
display: flex;
align-items:center;
list-style:none;
text-align:center;
padding-inline-start: 0px;
margin-top:20px;
margin-bottom:20px;

`;

export const FootItem = styled.li`
height:80px;
`;

export const FootLinks = styled(Link)`
color: #828282;
display:flex;
align-items:center;
text-decoration:none;
padding:0 10vw;
height:100%;
cursor:pointer;

font-family: Poppins;
font-weight: 600;
font-size: 14px;
letter-spacing: -0.035em;
&.active {
    border-bottom: 3px solid #2F80ED;
    color: #2F80ED;
 }
`;