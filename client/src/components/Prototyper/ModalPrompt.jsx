import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
// import DropDownMenu from './DropDownMenu'
import './AddType.scss'

import { Input, Button, CardTitle } from 'reactstrap'
export default class ModalPrompt extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.inputForRelationNode = React.createRef()
    }


    render() {
        return (
            <div className="add-modal">
                <Modal
                    visible={true}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onKeyPress={e => this.props.handleKeydown(e)}
                >
                    <div>
                        <CardTitle>Name of the Relation Type</CardTitle>
                        <input
                            ref={this.inputForRelationNode}
                            placeholder="type"
                            value={this.props.types}
                            type="text"
                            size="small"
                        />
                        {/* <DropDownMenu /> */}
                        <p></p>
                        <Button color="secondary" onClick={() => this.props.returnedValueHandler(this.inputForRelationNode.current.value)}>Add</Button>
                        <Button color="secondary" onClick={e => this.props.closeModalPromt(e)}>Close</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
