import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import { Stage, Layer, Text, Circle, Group } from 'react-konva';

import Navbar from './Nav';
import AddType from '../AddType/AddType';
import RelationArrow from '../RelationArrow/RelationArrow';


import { Button } from 'reactstrap'


class Prototyper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragging: false,
            circles: {
                0: {
                    x: 50, y: 50, pointer: true
                }
            },
            lastID: 0,
            visible: false,
            isDrawing: false,
            arrowStartPos: [{ x: 0, y: 0 }],
            arrowEndPos: [{ x: 0, y: 0 }],
            doubleClick: false,
            arrowStartCoordinates: { x: 0, y: 0 },
            arrows: []
            // x: 50,
            // y: 50
        };
        // this.addCircle = this.addCircle.bind(this)
        this.handleKeydown = this.handleKeydown.bind(this)
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.circle = this.circle.bind(this);
        this.firstCharToUpper = this.firstCharToUpper.bind(this)
        this.handleExportClick = this.handleExportClick.bind(this)
        this.renderArrows = this.renderArrows.bind(this)
        this.doubleClickhandler = this.doubleClickhandler.bind(this);
        this.outSideClick = this.outSideClick.bind(this)
        // this.circleClickHandler = this.circleClickHandler.bind(this)
    }



    handleMouseDown({ evt }) {
        // evt is the React Konva envent

        if (this.state.doubleClick) {
            const { offsetX, offsetY } = evt;
            this.setState({
                // isDrawing: true,
                arrowStartPos: { x: offsetX, y: offsetY },
                arrowEndPos: { x: offsetX, y: offsetY }
            });
        }
    }

    handleMouseUp() {
        // const { isDrawing } = this.state;
        // if (isDrawing) {
        //     this.setState({ isDrawing: false });
        // }
    };

    handleMouseMove({ evt }) {
        const { isDrawing } = this.state;
        const { offsetX, offsetY } = evt;

        this.setState((prevState) => {
            let oldState = prevState;
            oldState.circles[0] = { x: offsetX, y: offsetY, pointer: true }
            return {
                circles: oldState.circles
            }
        });
    };

    //exports stage as png
    handleExportClick() {
        function downloadURI(uri, name) {
            var link = document.createElement('a');
            link.download = name;
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            // delete link;
        }
        let dataURL = this.stageRef.getStage().toDataURL();
        downloadURI(dataURL, 'schema.png');
    }

    firstCharToUpper(word) {
        const firstChar = word.slice(0, 1);
        const restOfTheWord = word.slice(1)
        return `${firstChar.toUpperCase()}${restOfTheWord}`
    }

    handleKeydown(e) {
        let value = e.target.value;
        // console.log('keypres')
        // const state = Object.assign({}, this.state);
        if (e.charCode === 13) {
            this.setState((prevState) => {
                //  let state = prevState.slice();
                let state = Object.assign({}, prevState)
                // console.log('prev ')
                let lastIDNew = state.lastID + 1;
                state.circles[lastIDNew] = { x: 50, y: 50, type: value }

                return {
                    circles: state.circles,
                    visible: false,
                    lastID: lastIDNew
                }
            })
            return e.target.value = ""
        }
        // if (e.charCode === 13) {
        //     console.log('enter press')
        //     state.circles[state.lastID + 1] = { x: 50, y: 50, type: e.target.value }
        //     this.setState({
        //         circles: state.circles,
        //         visible: false
        //     })
        //     return e.target.value = ""
        // }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal(e) {
        this.setState({
            visible: false
        });
    }

    outSideClick() {
        this.setState((prevState) => {
            let oldState = Object.assign({}, prevState);
            oldState.arrows.pop();

            return {
                arrows: oldState.arrows,
                isDrawing: false
            }
        })
    }

    doubleClickhandler(e, key_) {
        if (this.state.isDrawing) {
            this.setState((prevState) => {
                let oldState = Object.assign({}, prevState);
                // let arrow
                if (oldState.arrows[oldState.arrows.length - 1].begin === key_) {
                    oldState.arrows.pop();
                    return {
                        arrows: oldState.arrows,
                        isDrawing: false
                    }
                } else {
                    oldState.arrows[oldState.arrows.length - 1].end = key_;
                    return {
                        arrows: oldState.arrows,
                        isDrawing: false
                    }
                }

            })
        } else {
            this.setState((prevState) => {
                let oldArrows = prevState.arrows.slice();
                let newArrow = { begin: key_, end: 0 }
                oldArrows.push(newArrow)

                return {
                    arrows: oldArrows,
                    doubleClick: true,
                    isDrawing: true
                }
            })
        }
    }

    // circleClickHandler(key_) {
    //     // console.log('clicked to circle')
    //     if (this.state.isDrawing) {
    //         this.setState((prevState) => {
    //             let oldState = prevState;
    //             oldState.arrows[oldState.arrows.length - 1].end = key_;

    //             return {
    //                 arrows: oldState.arrows,
    //                 isDrawing: false
    //             }
    //         })
    //     }
    // }

    circle() {
        let circles = Object.keys(this.state.circles);
        circles.shift()
        // console.log(circles)
        if (circles.length > 0) {
            return circles.map((key_, index) => {
                let ele = this.state.circles[key_];
                return (
                    <Group
                        key={`group${index}`}
                        draggable
                        x={ele.x}
                        y={ele.y}
                        onClick={(e) => this.doubleClickhandler(e, key_)}
                        onDragStart={() => {
                            this.setState({
                                isDragging: true
                            });
                        }}
                        // onClick={this.state.doubleClick ? () => this.circleClickHandler(key_) : false}
                        onDragMove={e => {
                            this.setState((prevState) => {
                                let oldState = prevState;
                                oldState.circles[key_].x = e.target.x();
                                oldState.circles[key_].y = e.target.y();
                                return {
                                    isDragging: false,
                                    circles: oldState.circles
                                }
                            })
                        }}
                    >
                        <Circle
                            key={`circle${index}`}
                            // x={ele.x}
                            // y={ele.y}
                            radius={50}
                            stroke={10}
                            // fill="#4a47a3"
                            shadowBlur={5}
                        />
                        <Text
                            key={`text${index}`}
                            text={ele.type}
                        // x={ele.x - 35}
                        // y={ele.y - 10}
                        // fill={this.state.isDragging ? 'green' : 'black'}
                        // onDragStart={() => {
                        //     this.setState({
                        //         isDragging: true
                        //     });
                        // }}
                        // onDragEnd={e => {
                        //     this.setState({
                        //         isDragging: false,
                        //         x: e.target.x(),
                        //         y: e.target.y()
                        //     });
                        // }}
                        />
                    </Group >
                )
            })
        }
    }

    renderArrows() {
        const { arrows } = this.state;

        return arrows.map((arrow, index) => {
            return <RelationArrow key={`arrows${index}`} startPos={this.state.circles[arrow.begin]} endPos={this.state.circles[arrow.end]} />
        });
    }

    render() {
        const { arrowEndPos, arrowStartPos } = this.state;
        return (
            <Container
                fluid
                className={classNames('content', 'no-padding', {
                    'is-open': this.props.isOpen
                })}
            >
                <Navbar toggle={this.props.toggle} />


                <AddType handleKeydown={this.handleKeydown}
                    types={this.state.type}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    visible={this.state.visible}
                />
                <Button color="info" onClick={this.handleExportClick}>Export stage</Button>
                <Stage width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleMouseMove}
                    ref={node => { this.stageRef = node }}
                    // onClick={(e) => console.log(e.target._id)}
                    onClick={(e) => (e.target._id < 3 && this.state.isDrawing) ? this.outSideClick() : null}
                >
                    <Layer>
                        {this.circle()}
                        {this.renderArrows()}
                    </Layer>
                </Stage>


            </Container>
        );
    }
}

export default Prototyper;
