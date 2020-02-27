import React, { Component } from "react";
import "tabler-react/dist/Tabler.css";
import { Grid, Container,Table, Button} from "tabler-react";

class ClientList extends Component {

  constructor(props)
  {
    super(props);
    this.state = { 
                    clients : [
                      { name: 'Jonathan', id: parseInt(Math.random() * 100), status: true },
                      { name: 'Maria', id: parseInt(Math.random() * 100), status: true },
                      { name: 'Pedro', id: parseInt(Math.random() * 100), status: true }
                   ]
    }
    this.remove = this.remove.bind(this);
  }
  
  dupe() {
    
  }

  remove() {
    this.setState({ status: false });
  }

  getStatusText()
  {
    return this.state.status ? "Ativo" : "inativo";
  }

  renderRows()
  {
    return this.state.clients.map( client => (
      <Table.Row className="tr">
        <Table.Col>{client.id}</Table.Col>
        <Table.Col>{client.name}</Table.Col>
        <Table.Col>{this.getStatusText(client.status)}</Table.Col>
        <Table.Col>
          <Button color="danger" onClick={this.remove}>&times;</Button>
        </Table.Col>
      </Table.Row> ) 
    );
  }

  render() {
    return (
      <Container>
        <Grid.Row>
          <Grid.Col width={10}>
            <Table>
              <Table.Header>
                <Table.ColHeader>Id</Table.ColHeader>
                <Table.ColHeader>Nome</Table.ColHeader>
                <Table.ColHeader>Situação</Table.ColHeader>
                <Table.ColHeader></Table.ColHeader>
              </Table.Header>
              <Table.Body>
                {this.renderRows()}
              </Table.Body> 
            </Table>
          </Grid.Col>
          <Grid.Col width={2}>  
            <Button color="success" onClick={this.dupe}>Duplicar &oplus;</Button>
          </Grid.Col>
        </Grid.Row>
      </Container>
    );
  }
}

export default ClientList;