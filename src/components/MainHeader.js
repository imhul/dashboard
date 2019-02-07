import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Menu, Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

// actions
import * as UI_ACTIONS from '../actions/ui_actions';

const { Header } = Layout;
const MenuItem = Menu.Item;

class MainHeader extends Component {

  render() {

    const { menu, location } = this.props.ui;

    return (
      <Header className="MainHeader">
        <Row
          type="flex"
          justify="end"
          align="middle"
          gutter={16}
          className="MainHeader_container"
        >
          <Col span={24} style={{ textAlign: 'right' }}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[`${location.substr(-1)}`]}
              style={{ lineHeight: '64px' }}
            >

            {menu.map((item) => {
              return (
                <MenuItem key={item.key} onClick={this.props.uiActions.changeLocation}>
                <Link className="menu-link" to={`/board${item.key}`}>
                  {`Board ${item.key}`}
                </Link>
              </MenuItem>
              )
            })}

            </Menu>
          </Col>
        </Row>
      </Header>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(UI_ACTIONS, dispatch),
  }
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
