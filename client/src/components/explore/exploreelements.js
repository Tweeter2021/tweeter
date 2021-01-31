import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const ExploreContainer = styled.div`
// background:#FFFFFF;
background-color:#F2F2F2;
display:flex;
justify-content:space-between;
margin-bottom:90px;
position:fixed;
// z-index:1;
height:100vh;
width:100%;
padding:0;
max-width:100vw;
overflow-y: scroll;
overflow-x: hidden;
`;


export const ExplorWrapper = styled.div`
// max-width: 1300px;
display: grid;
grid-template-columns:1fr 4fr ;
// align-items: center;
margin-top:50px;
margin-left:10vw;
grid-gap: 40px;
padding:0 10px;

 @media screen and (max-width: 700px) {
  grid-template-columns:1fr;
  max-width: 100vw;
  padding:0 20px;
 }

`;
export const Sidebar = styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
width: 280px;
height: 200px;
color:#828282;


padding:26px 0 ;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
border-radius: 8px;
@media screen and (max-width: 700px) {
    width:100px;
    margin:10px 25vw 10px 25vw 
   }

`;
export const SearchFilter = styled.div`
margin-bottom:23px;
// margin-left:26px;
padding-left:26px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
cursor:pointer;


`;
export const Mainbar = styled.div`


`;
export const Searchbar = styled.div`
width: 44vw;
height: 54px;

background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
border-radius: 8px;
padding:10px;
@media screen and (max-width: 900px) {
    width:40vw;
   }
`;

export const SearchIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 8px;
padding:8px;
color: #BDBDBD;
font-size:25px 
`;

export const SearchField = styled.input`
border-style: hidden;
outline: none;
width:60%;
margin-left:8px;
font-family: Noto Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
letter-spacing: -0.035em;
color: #000;

&::-webkit-input-placeholder {
    color: #BDBDBD;
  }


`;
export const SearchBtn = styled.button`
font-family: Noto Sans;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
letter-spacing: -0.035em;
border:hidden;
color: #FFFFFF;
width: 85px;
height: 32px;
outline: none;
float:right;

background: #2F80ED;
border-radius: 4px;


`;


export const Tweetbar = styled.div`

width: 50vw;
margin-top:28px;
margin-bottom:120px;


@media screen and (max-width: 700px) {
    width:40vw;
    margin-bottom:200px;

   }
`;

