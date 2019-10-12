import React, { Component } from 'react'
import './style.css'
class Todolist extends Component {
    state = {
        input: '',
        items: []
    }

    onChange = (event) => {
        this.setState({ input: event.target.value })
    }
    onSubmit = (event) => {
        event.preventDefault()

        const { items } = this.state

        const tasks = this.task.value
        const completed = 1
        this.setState({
            input: '',
            items: [...items, {
                tasks,
                completed
            }]
        })
    }

    onDelete = (index) => {

        var array = [...this.state.items]

        array.splice(index, 1)
        this.setState({ items: array })
    }

    onCompleted = (index) => {
        var array = [...this.state.items]

        array[index].completed = 0
        this.setState({ items: array })
    }

    onNotCompleted = (index) => {
        var array = [...this.state.items]

        array[index].completed = 1
        this.setState({ items: array })
    }

    compare(a, b) {
        if (a.completed < b.completed) {
            return -1
        }
        if (a.completed > b.completed) {
            return 1
        }
        return 0
    }

    rendertasks = () => {

        let render = this.state.items.map((item, index) => {
            if (item.completed === 0) {
                return (
                    <li className='list-group-item d-flex justify-content-between bg-success text-white'>
                    <span key={index}>{item.tasks}</span>
                    <span>
                       <button className='btn btn-warning btn-sm mx-1' onClick={() => { this.onNotCompleted(index) }}>Undone</button>
                       <button className='btn btn-danger btn-sm mx-1' onClick={() => { this.onDelete(index) }}>X</button>
                    </span>
                 </li>)
            }
            if (item.completed === 1) {
                return (
                    <li className='list-group-item d-flex justify-content-between bg-dark text-white'>
                    <span key={index}>{item.tasks}</span>
                    <span>
                       <button className='btn btn-success btn-sm mx-1' onClick={() => { this.onCompleted(index) }}>Done</button>
                       <button className='btn btn-danger btn-sm mx-1' onClick={() => { this.onDelete(index) }}>X</button>
                    </span>
                    </li>
                )
            }
        })
        return render
    }


    render() {

        return (
           <div>
               <div>
                <div className="d-flex justify-content-center align-items-center container mt-5">
                
                <div className='row'>
                <div className='row header col-12 justify-content-center align-self-cente'>
                <h1>To do List</h1>
                </div>
                    <form className='form-group' onSubmit={this.onSubmit} className='col-12'>
                        <input ref={input => this.task = input} value={this.state.input} onChange={this.onChange} placeholder='task' className='inputstyle' />
                        <button className='btn btn-primary addBtn' onclick={this.onsubmit}>Submit</button>
                    </form>

                    <ul style={{ listStyleType: "none" }} className='col mt-3 mb-3'>
                        {this.rendertasks()}
                    </ul>
                </div>
            </div>
           </div>
           </div>
        );
    }
}

export default Todolist