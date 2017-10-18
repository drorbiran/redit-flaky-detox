import React, { PureComponent } from 'react'
import {Text} from 'react-native';
import { connect } from 'remx';

import * as store from '../stores/topics/topicsStore';
import * as actions from '../stores/topics/topicsActions';


class SomeComponent extends PureComponent {
    render() {
        return (
            <Text
                onPress={() => actions.setLoading()}
            >{this.props.isLoading.toString()}</Text>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: store.getters.isLoading()
};
}

export default connect(mapStateToProps)(SomeComponent);