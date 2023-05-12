import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormContainer, FormGroup, Label, Button, Input } from './style';
import { useNavigate, useParams } from 'react-router-dom';

const FormEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
    // eslint-disable-next-line 
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [document, setDocument] = useState('');
  const [acceptedTermsAndConditions, setAcceptedTermsAndConditions] = useState(false);
  const [zipcode, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleCloseModal = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cliente/${id}`);
        const userData = response.data;
        setUser(userData);
        setName(userData.name);
        setBirthdate(userData.birthdate);
        setDocument(userData.document);
        setAcceptedTermsAndConditions(userData.acceptedTermsAndConditions);
        setZipcode(userData.zipcode);
        setStreet(userData.street);
        setNeighborhood(userData.neighborhood);
        setCity(userData.city);
        setState(userData.state);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para atualizar o usuário
    try {
      const response = await axios.patch(
        `http://localhost:3001/cliente/${id}`,
        {
          name,
          birthdate,
          document,
          acceptedTermsAndConditions,
          zipcode,
          street,
          neighborhood,
          city,
          state,
        },
        {
          headers: {
            'access-token': 'meegu', // Define o token estático "meegu" no header da requisição
          },
        }
      );

      console.log('Usuário atualizado:', response.data);
      setSuccess(true);
      // Redireciona para outra página após a atualização
      
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {success && (
        <div className="modal-overlay ">
          <div className="modal">
            <div className="modal-content">
              <h2>Alteração realizada com sucesso!</h2>
              <div className="wrapperButton">
                <Button onClick={handleCloseModal}> Fechar</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <FormGroup>
        <Label>Nome:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Data de Nascimento:</Label>
        <Input
          type="text"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Documento:</Label>
        <Input
          type="text"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>CEP:</Label>
        <Input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Rua:</Label>
        <Input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          />
          </FormGroup>
          <FormGroup>
          <Label>Bairro:</Label>
          <Input
          type="text"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          />
          </FormGroup>
          <FormGroup>
          <Label>Cidade:</Label>
          <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
          </FormGroup>
          <FormGroup>
          <Label>Estado:</Label>
          <Input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          />
          </FormGroup>
            <div className="wrapper">
              <FormGroup style={{ display: 'flex' }}>
                <Input
                  type="checkbox"
                  checked={acceptedTermsAndConditions}
                  onChange={(e) => setAcceptedTermsAndConditions(e.target.checked)}
                  style={{ width: '10px' }}
                />
                <Label style={{ margin: '0' }}>Aceitar Termos e Condições:</Label>
              </FormGroup>
          
              <Button type="submit">Atualizar</Button>
            </div>
          </FormContainer>
          );
        };
        
        
export default FormEdit;