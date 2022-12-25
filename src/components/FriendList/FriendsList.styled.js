import styled from "styled-components";

export const  FriendListShape = styled.div`
padding: 200px;
width: 1200px;
background-color: #ebf2fc;
box-shadow: 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);;
border-radius: 3%;   
`;

export const FriendListBox = styled.div`
display: inline-flex;
align-items: center;
// gap: 0px;
width: 800px;
padding-left: 30px;
margin-bottom: 50px;
list-style-type:none;

background-color: white;
box-shadow: 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);;
border-radius: 3%;   
`;

export const FriendListStatus = styled.div`
margin-right:20px;
width:50px;
height: 50px;
border-radius: 50%;
background-color:
${p => {
         return (p.isActive) ? 'green' : 'red';
}};
`;

export const FriendListImage = styled.div`
display: flex;
width: 200px;
margin:10px;
`;

export const FriendListName = styled.div`
width: 200px;
margin-left:20px;
font-size: 45px;
font-weight: 500;
`;

