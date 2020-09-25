import React, { Component } from 'react'
import './CreatePage.css';
import CanvasContainer from './CanvasContainer'


class CreatePage extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="ui grid">
                    <div className="row">
                        <div className="ten wide column">
                            <CanvasContainer />
                        </div>
                        <div className="six wide column">
                         Menu
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default CreatePage