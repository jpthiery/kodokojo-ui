import React, { Component, PropTypes } from 'react'

// UI library component
import { Tabs as ToolboxTabs, Tab as ToolboxTab  } from 'react-toolbox'

// component
import './tabs.less'

export class Tabs extends Component {

  static propTypes = {
    active: PropTypes.number,
    handleTabChange: PropTypes.func,
    index: PropTypes.number,
    menu: PropTypes.string,
    tabsList: PropTypes.array
  }

  constructor(props) {
    super(props)
  }

  handleTabChange = (index) => {
    // dispatch change tab + change route
    console.log('change tab', index)
  }

  render = () =>  {
    const { index, tabsList, active } = this.props

    return (
      <ToolboxTabs
        className={ `header-breadcrumb breadcrumb-color--${active}` }
        index={ 3 }
        onChange={ this.handleTabChange }
      >
        { tabsList &&
          tabsList.map((tab, index, array) => (
            <ToolboxTab
              activeClassName={tab.activeClassName }
              disabled={ tab.disabled }
              hidden={ tab.hidden }
              key={ index }
              label={ index < array.length - 1 ?
                `\u00A0${tab.label} /` :
                `\u00A0${tab.label}`
              }
              onActive={ tab.handleActiveChange }
              onClick={ tab.handleClick }
            >
              { tab.content }
            </ToolboxTab>
          ))
        }
      </ToolboxTabs>
    )
  }
}

export default Tabs
