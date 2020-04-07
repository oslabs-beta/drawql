import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import { Input, Button, CardTitle, CardText } from 'reactstrap'
import './AddType.scss'
class AddType extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <CardTitle>Create Schema</CardTitle>
                <Button
                    color="info"
                    onClick={() => this.props.openModal()}
                >Add Node</Button>
                <div className="add-modal">
                    {/* <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}> */}
                    <Modal
                        visible={this.props.visible}
                        width="400"
                        height="300"
                        effect="fadeInUp"
                        onKeyPress={e => this.props.handleKeydown(e)}
                    >
                        <div>
                            <CardTitle>Name of the new Type</CardTitle>
                            <input
                                placeholder="type"
                                value={this.props.types}
                                type="text"
                                onKeyPress={e => this.props.handleKeydown(e)}
                            />
                            <p></p>
                            <Button color="secondary" onClick={e => this.props.closeModal(e)}>Close</Button>
                        </div>
                    </Modal>
                </div>
            </section>
        );
    }
}
export default AddType;
