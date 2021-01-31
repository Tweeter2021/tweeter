import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
background:#FFFFFF;
height :80px;
// margin-top:-80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position: sticky;
top:0;
z-index:10;


@media screen and (max-width:960px){
    transition : 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 18px;
max-width:1200px;
position:fixed;
background:#FFFFFF;
`;
export const NavLogo = styled(Link)`
font-family: Poppins;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 27px;
letter-spacing: -0.035em;
color: #333333;
justify-self:flex-start;
cursor:pointer;
display:flex;
align-items:center;
// margin-left:4px;
text-decoration:none

`;

export const NavLogoH = styled.h3`

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 27px;
letter-spacing: -0.035em;
color: #333333;
margin-top:10px;

@media screen and (max-width: 700px){
    display:none;
}
`;

export const UserName = styled.h3`


font-family: Noto Sans;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.035em;
color: #333333;
padding-bottom:25px;
@media screen and (max-width: 700px){
    display:none;
}
`;
export const Img = styled.img`
hight:100%;
align-items: center;
margin-right:10px;

`;

export const UserImg = styled.img`
width: 34px;
height: 34px;
border-radius:6px;
margin-right:6px





`;

export const NavUser = styled.div`
display:flex;
align-items:center;
padding:10px 22px;
margin-left:52px
@media screen and (max-width: 568px){
    margin-left:42px
}
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-2px;
margin-top:20px;
margin-bottom:20px;




@media screen and (max-width: 700px){
    display:none;
}
`;

export const NavItem = styled.li`
height:80px;
`;

export const NavLinks = styled(Link)`
color: #828282;
display:flex;
align-items:center;
text-decoration:none;
padding:0 4vw 0;
height:100%;
cursor:pointer;

font-family: Poppins;
font-weight: 600;
font-size: 14px;
// line-height: 21px;

letter-spacing: -0.035em;

&.active {
    border-bottom: 3px solid #2F80ED;
    color: #2F80ED;
 }
`;