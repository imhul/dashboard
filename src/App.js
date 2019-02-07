import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Switch, Route, Redirect } from 'react-router';
import history from './history';
import { store } from './index';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './styles/index.scss';
import MainHeader from './components/MainHeader';
import LeftSider from './components/LeftSider';
import Dashboard from './components/Dashboard';

const { Content } = Layout;

export default class App extends React.Component {

  componentDidMount() {
    if ( history.location.pathname !== '/board1' ) history.push({ pathname: '/board1' })
  };

  render() {
    const NotFound = () => {
      return <h1>Page Not Found</h1>
    };

    return (
      <Provider store={store}>
        <Router history={history}>
          <Layout className="LayoutMain">
            <MainHeader />
            <Layout>
              <LeftSider />
              <Content>
                <Switch>
                  <Route exact path="/board1" component={Dashboard} />
                  <Route exact path="/:id" component={Dashboard} />
                  <Redirect from="/" to="/board1" />
                  <Route component={Dashboard} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    )
  }
};
