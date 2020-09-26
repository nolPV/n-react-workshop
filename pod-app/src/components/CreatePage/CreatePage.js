import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import CanvasContainer from './CanvasContainer'
import SideMenu from './SideMenu'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const data = [
    { id: 0, shirtColor: 'white', price: '300' },
    { id: 1, shirtColor: 'black', price: '350' } 
]



const ShowPrice = ({chooseColor}) => {   

    let price = data.find(p => p.shirtColor === chooseColor).price

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    let usPrice = formatter.format(price/30)
    return (
        <div>
            <h2>{price} THB</h2>
            <h4>Approximately</h4>
            <h4>US {usPrice}</h4>
        </div>
    )
}



class CreatePage extends Component {

    constructor(prop) {
        super(prop)
        this.state = {
            data,
            selectShirtColor: 'white',
            selectText: '',
            selectGraphic: ''
        }

        this.selectColor = this.selectColor.bind(this)
        this.addText = this.addText.bind(this)
        this.addGraphic = this.addGraphic.bind(this)
        this.resetShirt = this.resetShirt.bind(this)
    }

    selectColor(color) {
        this.setState({
            selectShirtColor: color
        })
    }

    addText(text) {
        this.setState({
            selectText: text
        })
    }

    addGraphic(logo) {
        this.setState({
            selectGraphic: logo
        })
    }

    resetShirt() {
        this.setState({
            selectShirtColor: 'white',
            selectText: '',
            selectGraphic: ''
        })
    }

    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col sm={12} md={8}>
                        <CanvasContainer shirt={this.state.selectShirtColor} text={this.state.selectText} graphic={this.state.selectGraphic} />
                    </Col>
                    <Col sm={12} md={4} className="side-menu">
                        <ShowPrice chooseColor={this.state.selectShirtColor} />
                        <SideMenu selectColor={this.selectColor} addText={this.addText} addGraphic={this.addGraphic} resetShirt={this.resetShirt} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CreatePage