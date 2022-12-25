import styled from "styled-components";

export const StatisticsShape = styled.div`
display: flex;
flex-direction: column;
width: 1200px;
background-color: #ebf2fc;
padding: 200px;
box-shadow: 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);;
border-radius: 3%;      
margin: 0;
margin-left: auto;
margin-right: auto;    
`;

export const StatisticsTitle = styled.h2`
width: 100%;
font-size: 60px;
text-transform: uppercase;
text-align: center;
font-weight: 700;
background-color: white;
padding-top: 100px;
padding-bottom: 100px;
// padding-left: 300px;
// padding-right: 300px;
margin: 0 auto;
`;

export const StatisticsList = styled.ul`
display: inline-flex;
justify-content:space-around;
align-items: center;
width: 100%;
list-style-type:none;
margin: 0 auto;
padding: 0;
`;

export const StatisticsItem = styled.li`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
width: 100%;
color: white;
background-color:${p => {    
return getRandomColor()
   function getRandomColor() {
    let letters = '0123456789ABCDEF';
       let color = '#';
        for (let i = 0; i < 3; i++) {
           color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}};
padding-top: 50px;
padding-bottom: 50px;
// padding-left: auto;
// padding-right: auto;
margin: 0 auto;
// border-radius: 1%;
`;

export const StatisticsLabel = styled.span`
font-size: 30px;
font-weight: 400;
margin: 0 auto;
padding: auto;
// padding-left: auto;
// padding-right:40px;

`;
export const StatisticsPercentage = styled.span`
font-size: 50px;
`;