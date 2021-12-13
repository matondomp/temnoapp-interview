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
     
       form{
           margin-top:50px;
           input{
               width: 90%;
               padding:8px;
               border: none;
               margin:4px;
               
           }; 
            input[type="file"] {
                    /* display: none; */
            }
           textarea{
               width: 99%;
               padding:8px;
               height: 100px;
               border: none;
            }
            fieldset{
                margin:20px  0  10px 0;
                background:#ffff;
                border-radius:5px;
                legend{
                font-weight:bold;
                margin-left:20px;
                opacity: 0.6;
                }

                &+:nth-child(2){
                    padding:15px;
                }
            }
         
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
}
`

export const ButtonAction =styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`