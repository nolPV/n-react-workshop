import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './SideMenu.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SideMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            shirtColor: '',
            value: '',
            graphic: ''
        }
        this.handleInputForm = this.handleInputForm.bind(this)
        this.handleSelectColor = this.handleSelectColor.bind(this)
        this.handleGraphic = this.handleGraphic.bind(this)
        this.reset = this.reset.bind(this)
    }

    handleInputForm(e) {
        this.setState({
            value: e.target.value
        })
        this.props.addText(e.target.value)
    }

    handleSelectColor(color) {
        this.setState({
            shirtColor: color
        })
        this.props.selectColor(color)
    }

    handleGraphic(logo) {
        this.setState({
            graphic: logo
        })
        this.props.addGraphic(logo)
    }

    reset() {
        this.props.resetShirt()
    }

    render() {
        return (
            <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-droplet-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                            <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
                        </svg> COLOR
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Button variant="dark" className="btn-select-color-black" onClick={() => this.handleSelectColor('black')}></Button>
                            <Button variant="outline-dark" className="btn-select-color-white" onClick={() => this.handleSelectColor('white')}></Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-fonts" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.258 3H3.747l-.082 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.43.013c1.935.062 2.434.301 2.694 1.846h.479L12.258 3z"/>
                        </svg> TEXT
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <input
                                className="text-form"
                                ref={node => { this.input = node }}
                                type="text"
                                placeholder="Add your text here!"
                                value={this.state.value}
                                onChange={this.handleInputForm}
                                maxLength="60"
                            />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-flower1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 1 1 1l-.002.03a4.997 4.997 0 0 1-.064.387c-.049.241-.122.542-.213.887a60.59 60.59 0 0 1-.676 2.314L8 5.762l-.045-.144a60.59 60.59 0 0 1-.676-2.314 16.705 16.705 0 0 1-.213-.887 4.99 4.99 0 0 1-.064-.386A1 1 0 0 1 8 1zM2 9a1 1 0 1 1 .03-1.998l.091.01c.077.012.176.029.296.054.241.049.542.122.887.213a60.59 60.59 0 0 1 2.314.676L5.762 8l-.144.045c-.8.248-1.626.494-2.314.676-.345.091-.646.164-.887.213a4.99 4.99 0 0 1-.386.064L2 9zm7 5a1 1 0 0 1-2 0l.002-.03a4.996 4.996 0 0 1 .064-.386c.049-.242.122-.543.213-.888.182-.688.428-1.513.676-2.314L8 10.238l.045.144c.248.8.494 1.626.676 2.314.091.345.164.646.213.887a5.005 5.005 0 0 1 .064.386L9 14zm-5.696-2.134a1 1 0 0 1-1-1.732l.027-.014c.02-.01.048-.021.084-.036a5.09 5.09 0 0 1 .283-.102c.233-.078.53-.165.874-.258a60.598 60.598 0 0 1 2.343-.572l.147-.033-.103.11a58.239 58.239 0 0 1-1.666 1.743c-.253.252-.477.465-.66.629a5.001 5.001 0 0 1-.304.248l-.025.017zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 1 .366 1.366l-.017.025a5.001 5.001 0 0 1-.248.303 17.01 17.01 0 0 1-.629.661A60.614 60.614 0 0 1 9.23 5.96l-.111.102.033-.147a60.62 60.62 0 0 1 .572-2.342c.093-.345.18-.642.258-.875a5.066 5.066 0 0 1 .138-.367l.014-.027a1 1 0 0 1 1.366-.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196A1 1 0 1 1 5.88 2.33c.01.02.021.048.036.084.029.072.063.166.102.283.078.233.165.53.258.875.186.687.387 1.524.572 2.342l.033.147-.11-.102a60.597 60.597 0 0 1-1.743-1.667 16.713 16.713 0 0 1-.629-.66 4.996 4.996 0 0 1-.248-.304l-.017-.025zm9.928 8.196a1 1 0 0 1-1.366.366l-.025-.017a4.946 4.946 0 0 1-.303-.248 16.71 16.71 0 0 1-.661-.629A60.73 60.73 0 0 1 10.04 9.23l-.102-.111.147.033c.818.185 1.655.386 2.342.572.345.093.642.18.875.258a5 5 0 0 1 .367.138 1 1 0 0 1 .394 1.38zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                        </svg> GRAPHIC
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2" className="graphic">
                        <Card.Body>
                            <Row className="justify-content-center">
                                <Col>
                                    <ion-icon name="bicycle" onClick={() => this.handleGraphic('bicycle')}></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="bluetooth" onClick={() => this.handleGraphic('bluetooth')}></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="fast-food" onClick={() => this.handleGraphic('fast-food')} ></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="pulse" onClick={() => this.handleGraphic('pulse')} ></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="rocket" onClick={() => this.handleGraphic('rocket')} ></ion-icon>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mt-3" >
                                <Col>
                                    <ion-icon name="logo-javascript" onClick={() => this.handleGraphic('logo-javascript')}></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="logo-react" onClick={() => this.handleGraphic('logo-react')}></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="logo-apple" onClick={() => this.handleGraphic('logo-apple')} ></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="logo-android" onClick={() => this.handleGraphic('logo-android')} ></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="logo-github" onClick={() => this.handleGraphic('logo-github')} ></ion-icon>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mt-3" >
                                <Col>
                                    <ion-icon name="thunderstorm" onClick={() => this.handleGraphic('thunderstorm')}></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="skull" onClick={() => this.handleGraphic('skull')}></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="thumbs-up" onClick={() => this.handleGraphic('thumbs-up')} ></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="thumbs-down" onClick={() => this.handleGraphic('thumbs-down')} ></ion-icon>
                                </Col>
                                <Col>
                                    <ion-icon name="planet" onClick={() => this.handleGraphic('planet')} ></ion-icon>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <br />
            <Button variant="outline-secondary" onClick={() => this.reset()} >Reset</Button>
            </div>
        )
    }
}

export default SideMenu