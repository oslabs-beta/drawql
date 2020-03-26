import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
class AddType extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <h1>Create a Schema</h1>
                <input
                    type="button"
                    value="Add"
                    onClick={() => this.props.openModal()}
                />
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
                            <h1>Name of the new Type</h1>
                            <input
                                placeholder="name of the Type"
                                value={this.props.types}
                                type="text"
                                onKeyPress={e => this.props.handleKeydown(e)}
                            />
                            <p></p>
                            <a onClick={e => this.props.closeModal(e)}>Close</a>
                        </div>
                    </Modal>
                </div>
            </section>
        );
    }
}
export default AddType;
