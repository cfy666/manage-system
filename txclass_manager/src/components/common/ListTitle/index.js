import React, { Component } from 'react';

import './index.scss';

export default class ListTitle extends Component {

  render () {
    const { title, onRefreshData } = this.props
    return (
      <div className="list-title">
        <h1 className="title">{ title }</h1>
        <span
          className="refresh-btn"
          onClick={ onRefreshData }
        >
          <i className="iconfont icon-refresh"></i>
          刷新数据
        </span>
      </div>
    )
  }
}