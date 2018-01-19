import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={(e) => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }


    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()   //去掉字符串尾部的空格
        this.props.onAddClick(text)
        node.value = ''
    }
}

