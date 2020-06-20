import React, { Component} from 'react';
import './EntryForm.css'
import {Modal, Button, Form} from 'react-bootstrap'


class LoadForm  extends Component {
    render(){
        return(
            <Modal className="entry-form" show={this.props.open} onHide={this.props.close}>
                <Modal.Header closeButton>
                <Modal.Title>Load Data</Modal.Title>
                </Modal.Header>
                <form  onSubmit={this.props.submit}>
                <Modal.Body>                    
                <Form>
                    <Form.Group controlId="ControlInput1">
                        <Form.Label>Enter your first data</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first data" name="first_data" onChange={this.props.formDataHandler}/>
                    </Form.Group>
                    <Form.Group controlId="ControlInput2">
                        <Form.Label>Enter your second data</Form.Label>
                        <Form.Control type="text" placeholder="Enter your second data" name="second_data" onChange={this.props.formDataHandler}/>
                    </Form.Group>
                    <Form.Group controlId="ControlInput3">
                        <Form.Label>Enter your third data</Form.Label>
                        <Form.Control type="text" placeholder="Enter your third data" name="third_data" onChange={this.props.formDataHandler}/>
                    </Form.Group>
                    <Form.Group controlId="ControlSelect1">
                        <Form.Label>Select one of the following</Form.Label>
                        <Form.Control as="select" name="voltage" onChange={this.props.formDataHandler}>
                        <option value='3.3V'>3.3V</option>
                        <option value='5V'>5V</option>
                        </Form.Control>
                    </Form.Group>
                </Form>                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.close}>
                    Close
                </Button>
                <Button variant="primary" disabled={!this.props.enabled} onClick={this.props.close} type="submit">
                    Save Changes
                </Button>               
                </Modal.Footer>
                </form>
            </Modal>
        )                        
    }
}

export default LoadForm;
