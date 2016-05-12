import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// UI library component
import { AppBar as ToolboxAppBar } from 'react-toolbox'

// component
import './appBar.less'
import logoKodoKojo from '../../../../images/logo-white-kodokojo.svg'

/**
 * UI: AppBar component
 *
 */
export class AppBar extends Component {

  static propTypes = {
    children: React.PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ]),
    fix: PropTypes.bool,
    flat: PropTypes.bool
  }

  render() {
    const { children, fix, flat } = this.props
    
    return (
      <ToolboxAppBar
        className="header-bar"
        fix
        flat
      >
        <img className="logo-kodokojo" src={logoKodoKojo} />
        { children }
      </ToolboxAppBar>
    )
  }
}

export default connect()(AppBar)