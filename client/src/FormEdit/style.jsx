import styled from "styled-components";


export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 570px;
  margin: 105px auto;

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
  }
  
  .modal {
    position: absolute;
    background-color: white;
    padding: 68px;
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
