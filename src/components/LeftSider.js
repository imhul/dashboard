import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import * as UI_ACTIONS from '../actions/ui_actions';

const { Sider } = Layout;

class LeftSider extends Component {

    render() {
        const { uiActions, figures, location } = this.props.ui;

        const _drop = (event) => {
            this.props.uiActions.dropFigure([ 
                `${event.target.className}`, 
                event.clientX, 
                event.clientY,
                location
            ])
        };

        return (
            <Sider className="LeftSider">
                <div className="figures">
                    { 
                        figures.map((figure) => {
                            return (
                                <figure 
                                    onDragEnd={ _drop }
                                    className={ figure.id } 
                                    draggable={ true }
                                    key={ figure.id } />
                            )
                        }) 
                    }
                </div>
            </Sider>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSider);
