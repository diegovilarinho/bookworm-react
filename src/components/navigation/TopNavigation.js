import React from 'react';
import AppBar from 'material-ui/AppBar';

const TopNavigation = () => {
    return (
        <AppBar
          title="Homepage"
          // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          // iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
    );
};

export default TopNavigation;
