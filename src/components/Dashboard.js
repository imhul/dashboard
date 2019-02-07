import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../actions/ui_actions';

class Dashboard extends Component {

  render() {
    const { location, boards } = this.props.ui;
    const currentBoard = boards.filter(
      (item) => item.board === `${location}`
    );

    return (
      <div className="Dashboard" onDragOver={this.onDragOver}>
        {currentBoard && currentBoard.map((figure, index) => {
          return (
            <figure
              style={{ left: `${figure.x/2 - 100}px`, top: `${figure.y - 100}px`, }}
              className={figure.id}
              draggable={false}
              key={figure.id}
            />
          );
        })}
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UI_ACTIONS, dispatch),
  }
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
