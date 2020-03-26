import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import { Stage, Layer, Text, Circle, Group } from 'react-konva';

import Navbar from './Nav';
import AddType from '../AddType/AddType';
import RelationArrow from '../RelationArrow/RelationArrow';

class Prototyper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragging: false,
            circles: [
                { x: 50, y: 50, type: 'User' },
                { x: 190, y: 200, type: 'Schema' }
            ],
            visible: false,
            isDrawing: false,
            arrowStartPos: [{ x: 0, y: 0 }],
            arrowEndPos: [{ x: 0, y: 0 }],
            doubleClick: false
        };
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseDown = ({ evt }) => {
        // evt is the React Konva envent
        if (this.state.doubleClick) {
            console.log('MOUSE DOWN', evt);
            const { offsetX, offsetY } = evt;
            this.setState({
                isDrawing: true,
                arrowStartPos: { x: offsetX, y: offsetY },
                arrowEndPos: { x: offsetX, y: offsetY }
            });
        }
    };

    handleMouseUp = () => {
        const { isDrawing } = this.state;
        if (isDrawing) {
            this.setState({ isDrawing: false });
        }
    };

    handleMouseMove = ({ evt }) => {
        if (this.state.doubleClick) {
            const { isDrawing } = this.state;
            const { offsetX, offsetY } = evt;
            if (isDrawing) {
                this.setState({
                    arrowEndPos: { x: offsetX, y: offsetY }
                });
            }
        }
    };

    handleKeydown(e) {
        const state = { ...this.state };
        if (e.charCode === 13) {
            const newCircle = state.circles.push({
                x: 50,
                y: 50,
                type: e.target.value
            });
            // console.log(state.circles)
            this.setState({
                circles: state.circles,
                visible: false
            });
            return (e.target.value = '');
        }
    }

    openModal = () => {
        this.setState({
            visible: true
        });
    };

    closeModal = e => {
        this.setState({
            visible: false
        });
        // e.target.value = "";
    };

    render() {
        const circle = this.state.circles.map((ele, index) => {
            return (
                <Group
                    key={`${index}group`}
                    draggable
                    onDblClick={() => this.setState({ doubleClick: true })}
                    // onDblClick={() => console.log('hi')}
                >
                    <Circle
                        key={`circle${index}`}
                        x={ele.x}
                        y={ele.y}
                        radius={50}
                        stroke={10}
                        // fill="#4a47a3"
                        shadowBlur={5}
                        onDragStart={() => {
                            this.setState({
                                isDragging: true
                            });
                        }}
                        onDragEnd={e => {
                            this.setState({
                                isDragging: false,
                                x: e.target.x(),
                                y: e.target.y()
                            });
                        }}
                    />
                    <Text
                        key={`text${index}`}
                        text={ele.type}
                        x={ele.x - 35}
                        y={ele.y - 10}
                        fill={this.state.isDragging ? 'green' : 'black'}
                        onDragStart={() => {
                            this.setState({
                                isDragging: true
                            });
                        }}
                        onDragEnd={e => {
                            this.setState({
                                isDragging: false,
                                x: e.target.x(),
                                y: e.target.y()
                            });
                        }}
                    />
                </Group>
            );
        });
        const { arrowEndPos, arrowStartPos } = this.state;
        return (
            <Container
                fluid
                className={classNames('content', 'no-padding', {
                    'is-open': this.props.isOpen
                })}
            >
                <Navbar toggle={this.props.toggle} />
                {/* <div className="body"> */}
                <AddType
                    handleKeydown={this.handleKeydown}
                    types={this.state.type}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    visible={this.state.visible}
                />
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleMouseMove}
                >
                    <Layer>
                        {/* <Arrow /> */}
                        {circle}
                        <RelationArrow
                            startPos={arrowStartPos}
                            endPos={arrowEndPos}
                        />
                    </Layer>
                </Stage>
                {/* </div> */}
            </Container>
        );
    }
}

export default Prototyper;
