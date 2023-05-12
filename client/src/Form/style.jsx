import styled from "styled-components";


export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 570px;
  margin: 16px auto;

  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  
  }
  .wrapperInput{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    
    .responsive-table th,
    .responsive-table td {
      white-space: nowrap;
      padding: 10px;
    }
    
    @media (max-width: 600px) {
      .modal-content {
        display: flex;
        flex-direction: column;
      }
      
      .wrapperInput {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
      }
          
      .responsive-table {
        width: 100%;
        table-layout: fixed;
        white-space: nowrap;
      }
      
      .responsive-table th,
      .responsive-table td {
        padding: 10px;
        text-align: left;
      }
      
      @media (max-width: 600px) {
        .responsive-table th,
        .responsive-table td {
          display: inline-block;
          width: 50%;
          box-sizing: border-box;
          padding: 8px;
          text-align: left;
          vertical-align: top;
        }
      }
          


      @media (max-width: 600px) {
        .modal-content {
          display: flex;
          flex-direction: column;
        }
    
        .wrapperInput {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
    
        .wrapperInput > * {
          flex: 1 0 100%;
          margin-bottom: 10px;
        }
    
        .table-wrapper {
          overflow-x: auto;
          margin-bottom: 10px;
        }
    
        .responsive-table th,
        .responsive-table td {
          white-space: nowrap;
          padding: 8px;
          text-align: left;
        }
      }
    }
        
  }
  
  .modal {
    position: absolute;
    background-color: white;
    padding: 55px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    max-height: 80%;
    overflow-y: auto;
  }
  
  .modal-content {
    text-align: center;

    h2{
      color: rgb(235, 71, 149);
      font-size: 29px;
      font-weight: 900;
      line-height: 45px;
    }
  }
  
  .modal h2 {
    margin-bottom: 10px;
    margin-top: -34px;
  }
  
  


  @media (max-width: 600px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  background-color: rgb(235, 71, 149);
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 37%;
  height: 46px;
  font-size: 0.875rem;
`;
