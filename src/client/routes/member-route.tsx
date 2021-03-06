import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import MemberTop from '../views/member-top';
import { NotFound } from '../views/components/notfound';

interface IProps  {
  // routes: any;
}

interface IState {
  hasError: boolean;
}

export const routes = [
  {
    path: '/member',
    component: MemberTop,
    exact: true
  }, {
    path: '/member/login',
    component: MemberTop,
    exact: true
  }, {
    path: '/member/profile',
    component: MemberTop,
    exact: true
  }, {
    path: '/member/page',
    component: MemberTop,
    exact: true
  }, {
    path: '/member/*',
    component: NotFound
  }
];

export class RouteComponent extends React.Component<IProps, IState> {
  render () {
    // const { match } = this.props;
    return (
      renderRoutes(routes)
    );
  }
}
