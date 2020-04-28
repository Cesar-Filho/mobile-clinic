import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoadingBg, LoadingBox } from './styles';

const mapStateToProps = state => ({
  count: state.loading.counter,
});

export class Loading extends React.Component {
  render() {
    if (!this.props.count || this.props.count === 0) return null;
    return (
      <LoadingBg>
        <LoadingBox>
          <ActivityIndicator size="large" color="#64A9A4" />
          <Text>Carregando...</Text>
        </LoadingBox>
      </LoadingBg>
    );
  }
}

Loading.proptypes = {
  count: PropTypes.number,
};

export default connect(mapStateToProps)(Loading);
