import React, { PureComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Utils from '@/utils'

const { handleLocalStorage } = Utils

export default class AuthRouter extends PureComponent {
  componentWillMount() {
    this.isLogin = handleLocalStorage.get('user')
    if (!this.isLogin && this.props.path !== '/login') {
      handleLocalStorage.set('historyPath', this.props.path)
    }
  }
  render() {
    const { component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={(props) => {
          return this.isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }}
      />
    )
  }
}
