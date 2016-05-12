import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { intlShape, injectIntl, FormattedMessage } from 'react-intl'

// UI
// FIXME temporary commented, must be replace by toolbox or custom components
// import DropDownMenu from 'material-ui/DropDownMenu'
// import MenuItem from 'material-ui/MenuItem'
// import Navigation from 'react-toolbox/lib/navigation'

import AppBar from '../_ui/appBar/AppBar'
import Tabs from '../_ui/tabs/Tabs'

// Component
import './appHeader.less'

// AppHeader
export class AppHeader extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    languageSelected: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { languageSelected, onLanguageChange } = this.props
    const { formatMessage } = this.props.intl

    return (
      <AppBar
        flat
      >
        <Tabs
          // TODO bind values to store
          active={ 0 }
          tabsList={ [
            {
              label: 'Xebia'
            },
            {
              label: 'Projects'
            },
            {
              label: 'Kodo Kojo'
            },
            {
              label: 'Stacks',
              disabled: true
            }
          ] }
        />
      </AppBar>
      // FIXME this is for testing purpose, delete when tabs are implemented
      // <Navigation type="horizontal">
      //   <Link to="/">
      //   <FormattedMessage id={'app-nav-home-label'}/>
      //   </Link>
      //   {' | '}
      //   <Link to="/users">
      //     <FormattedMessage id={'app-nav-users-label'}/>
      //   </Link>
      // </Navigation>

      // TODO move this in app header, set param to show / hide language switch + automatically browser available languages
      // <DropDownMenu
      //   className={ 'locale-selector' }
      //   labelStyle={ {color: '#fff'} }
      //   onChange={ (event,i,v) => onLanguageChange(v) }
      //   value={ languageSelected }
      // >
      //   <MenuItem primaryText={ formatMessage({id:'app-lang-en-label'}) }
      //             value="en"
      //   />
      //   <MenuItem primaryText={ formatMessage({id:'app-lang-fr-label'}) }
      //             value="fr"
      //   />
      // </DropDownMenu>

    )
  }
}

export default injectIntl(AppHeader)
