import React, { Component } from "react";
import { Arrow } from "react-konva";

export default class RelationArrow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startPos: 0,
            endPos: 0,
            ponter: false
        }
    }

    componentDidMount() {
        const { startPos, endPos } = this.props;
        this.setState({
            startPos,
            endPos
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            startPos: nextProps.startPos,
            endPos: nextProps.endPos,
        })
    }

    renderArrow() {
        //const Edge = ({ node1, node2 }) => {
        // const dx = node1.x - node2.x;
        // const dy = node1.y - node2.y;
        // let angle = Math.atan2(-dy, dx);

        const { startPos, endPos } = this.state;
        const dx = endPos.x - startPos.x;
        const dy = endPos.y - startPos.y;

        let angle = Math.atan2(-dy, dx);
        let radius = endPos.pointer ? 10 : 50;

        const arrowStart = {
            x: startPos.x + -radius * Math.cos(angle + Math.PI),
            y: startPos.y + radius * Math.sin(angle + Math.PI)
        };

        const arrowEnd = {
            x: endPos.x + -radius * Math.cos(angle),
            y: endPos.y + radius * Math.sin(angle)
        };

        return <Arrow
            points={[arrowStart.x, arrowStart.y, arrowEnd.x, arrowEnd.y]}
            // pointerLength={20}
            pointerWidth={6}
            fill="#000"
            stroke="#000"
            strokeWidth={4}
        />
    }

    render() {
        return (
            <React.Fragment>
                {this.renderArrow()}
            </React.Fragment>
        );
    }
}