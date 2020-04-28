import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Item, Label } from './styles';
import { logout } from '../../reducers/login';

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export class Drawer extends React.Component {
  render() {
    return (
      <Container>
        <Item>
          <Label>Hello! :3</Label>
        </Item>
        <Item onPress={() => this.props.logout()}>
          <Label>Sair :: bye bye!</Label>
        </Item>
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Drawer);
