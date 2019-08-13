import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItems} = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-pen-fancy"></i>
                            </div>
                        </div>
                        <input type="text" 
                        className="form-control text-capitalized"
                        placeholder="Add a Task"
                        value={item}
                        onChange={handleChange} required/>
                    </div>
                    <button type="submit" className={
                        editItems ?
                        "btn btn-block btn-success mt-3":
                        "btn btn-block btn-primary mt-3"
                    }>
                        {editItems ? 'Edit Item':'Add Item'}</button>
                </form>
            </div>
        )
    }
}
