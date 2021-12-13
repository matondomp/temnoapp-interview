import styled from "styled-components";

export const Container=styled.div`

  display: block;
       button {
           margin-top:70px;
           margin-left:18%;
           margin-bottom:20px;
           padding: 15px;
           border: none;
           background: green;
           color: #ffff;
           font-weight:bold;
           border-radius: 8px;
        }       

        a{
          cursor: pointer;
          text-decoration:none
        }

  div{
     display: flex;
     align-items: center;
     justify-content: center;
   
     color:black;
        table  {
          margin-top:40px;
          width: 1000px;
          border-collapse: separate;
          text-indent: initial;
          border-spacing:0;
          border:2px solid #ddd;
          padding: 40px 10px 50px 10px;
          border-radius:10px;
          
        
          tbody {
            margin-top:40px;
            width: 100%;
            display:block;
            
              tr{
                 cursor: pointer;
                  th{
                    display: table-cell;
                    vertical-align: none;
                    font-weight: bold;
                    text-align: initial;
                    padding:10px;
                  }
                  

                  td{
                    padding:10px;
                    color: #585858 ;
                    img{
                      width: 80px;
                      height: 80px;
                    }
                  }
                  
              }
          }    
                  
      }
  }
  

`