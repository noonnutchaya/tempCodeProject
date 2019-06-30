import React, { Component } from 'react'

export default class TodoItems extends Component {
    render() {
        return (
            <h3 className={(this.props.val.isDone ? "done" : "")} key={this.props.index}>
                <span onClick={() => this.props.handleTodoDone(this.props.index)}>
                    {this.props.val.detail}
                </span>
                <button style={{ margin: 24 }} onClick={() => this.props.deleteList(this.props.index)}>
                    del
                </button>
            </h3>
        )
    }
}
