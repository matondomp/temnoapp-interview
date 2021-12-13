import styled from 'styled-components'



export const Label=styled.label`
    margin:20px;
    border: 1px solid #ccc;
    width:200px;
    text-align:center;
    padding: 6px 12px;
    cursor: pointer;
     
`

export const Container=styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
  margin:50px 100px auto auto;
   div{
      display: flex;
        &:nth-child(2){
               margin-left:20px;
           }
       button{
          
           margin-top:30px;
           padding: 10px;
           border: none;
           background: green;
           color: #ffff;
           font-weight:bold;
           border-radius: 8px;
       }
   }

`
