import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormContainer, FormGroup, Label, Button, Input } from './style';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [document, setDocument] = useState('');
  const [acceptedTermsAndConditions, setAcceptedTermsAndConditions] = useState(false);
  const [zipcode, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [success, setSuccess] = useState(false);
  const [ModalOpen, setIsModalOpen] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [originalUsers, setOriginalUsers] = useState([]);
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSearchByName = () => {
    const filteredUsers = originalUsers.filter((user: any) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const handleEditUser = (userId: any) => {
    setSelectedUserId(userId);
    navigate(`/form-edit/${userId}`);
  };

  const handleCloseModal = () => {
    setSuccess(false);
  };

  const handleCloseModalUsers = () => {
    setIsModalOpen(false);
  };

  const handleTableModal = () => {
    setIsModalOpen(true);
  };

  const handleSearchCep = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { bairro, localidade, uf } = response.data;

      setNeighborhood(bairro);
      setCity(localidade);
      setState(uf);
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const acceptedTerms = acceptedTermsAndConditions ? 'true' : 'false';

    try {
      const response = await axios.post(
        'http://localhost:3001/cliente',
        {
          name,
          birthdate,
          document,
          acceptedTermsAndConditions: acceptedTerms,
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

      console.log('Cadastro realizado:', response.data);

      // Limpa os campos do formulário após o envio.
      setName('');
      setBirthdate('');
      setDocument('');
      setAcceptedTermsAndConditions(false);
      setZipcode('');
      setStreet('');
      setNeighborhood('');
      setCity('');
      setState('');

      setSuccess(true);
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  const GetUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/cliente');
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  useEffect(() => {
    GetUsers();
  }, []);

  const handleDeleteUser = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:3001/cliente/${id}`, {
        headers: {
          'access-token': 'meegu',
        },
      });

      if (response.status === 200) {
        const updatedUsers = users.filter((user: any) => user.id !== id);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cliente');
        setUsers(response.data);
        setOriginalUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleResetSearch = () => {
    setSearchName('');
    setUsers(originalUsers);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="wrapperInput">
        <h1>Cadastre-se</h1>
      </div>
      {ModalOpen && (
        <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <Button
              type="button"
              style={{ width: '24%', height: '30%', paddingLeft: '10px', marginBottom: '31px' }}
              onClick={handleCloseModalUsers}
            >
              Voltar para o cadastro
            </Button>
            <div className="wrapperInput">
              <Input
                style={{ width: '282px' }}
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
              <Button
                type="button"
                style={{ width: '24%', height: '30%', marginLeft: '10px' }}
                onClick={handleSearchByName}
              >
                Procurar Cliente
              </Button>
              <Button
                type="button"
                style={{ width: '24%', height: '30%', marginLeft: '10px' }}
                onClick={handleResetSearch}
              >
                Limpar Busca
              </Button>
            </div>
            <div className="table-wrapper">
              <table className="responsive-table">
                <thead>
                  <tr>
                    <th> Codigo </th>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    <th>Documento</th>
                    <th>Termos</th>
                    <th>Cep</th>
                    <th>Rua</th>
                    <th>Bairro</th>
                    <th>Cidade </th>
                    <th>Estado</th>
                    {/* Adicione mais colunas de acordo com as propriedades dos usuários */}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user: any) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.birthdate}</td>
                      <td>{user.document}</td>
                      <td>{user.acceptedTermsAndConditions}</td>
                      <td>{user.zipcode}</td>
                      <td>{user.street}</td>
                      <td>{user.neighborhood}</td>
                      <td>{user.city}</td>
                      <td>{user.state}</td>
                      {/* Renderize mais células de acordo com as propriedades dos usuários */}
                      <td>
                        <button onClick={() => handleDeleteUser(user.id)}>Excluir</button>
                      </td>
                      <td>
                        <button onClick={() => handleEditUser(user.id)}>Editar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      )}

      {success && (
        <div className="modal-overlay ">
          <div className="modal">
            <div className="modal-content">
              <h2>Cadastro realizado com sucesso!</h2>
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
          onChange={(e) => {
            setZipcode(e.target.value);
            handleSearchCep(e.target.value);
          }}
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

        <Button type="submit">Enviar</Button>
      </div>

      <div className="wrapperInput">
        <Button type="submit" onClick={handleTableModal} style={{ marginTop: '8px' }}>Gerenciar Usuários</Button>
      </div>
    </FormContainer>

  )
}
export default Form;