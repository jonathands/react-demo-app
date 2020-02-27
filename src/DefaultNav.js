import React, { Component } from "react";
import "tabler-react/dist/Tabler.css";
import { Container, Nav } from "tabler-react";

class DefaultNav extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Nav.Item value="Principal" icon="globe"></Nav.Item>
                    <Nav.Item value="Clientes" icon="user"></Nav.Item>
                    <Nav.Item value="Ajuda" icon="life-buoy"></Nav.Item>
                </Nav>
            </Container>
        );
    }
}

export default DefaultNav;
