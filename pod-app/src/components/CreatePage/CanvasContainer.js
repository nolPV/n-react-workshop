import React, { Component } from 'react'
import whiteShirtImg from '../../images/white-shirt.png'
import blackShirtImg from '../../images/black-shirt.png'
import './CanvasContainer.css'

class CanvasContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="canvas-container">
                <div className="canvas-area">
                    <img src={ this.props.shirt === 'white' ? whiteShirtImg : blackShirtImg } alt="" className="shirt-img" />
                    <div className={this.props.shirt + "-text print-text-area"}>
                        <p className="text">{this.props.text}</p>
                        <span className="graphic-img">
                        { this.props.graphic !== '' ? <ion-icon name={this.props.graphic}></ion-icon> : <div></div> }
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CanvasContainer