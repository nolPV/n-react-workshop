import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class Navbar extends Component {
    state = { activeItem: 'create' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Menu position='left'>
                        <Menu.Item
                            name='LOGO'
                        />
                    </Menu.Menu>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='CREATE'
                            active={activeItem === 'create'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='ARTIST'
                            active={activeItem === 'artist'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='ALL PRODUCT'
                            active={activeItem === 'product'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='SHOP'
                            active={activeItem === 'shop'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>


            </div>
        )
    }
}

export default Navbar