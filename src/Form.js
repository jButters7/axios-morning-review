import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      make: '',
      model: '',
      year: 0,
      color: '',
      price: 0
    }
    this.addNewCar = this.addNewCar.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNewCar() {
    const { make, model, year, color, price } = this.state
    const newCar = { make, model, year, color, price } // Creating a new object. 
    this.props.addVehicle(newCar)
    this.setState({
      make: '',
      model: '',
      year: 0,
      color: '',
      price: 0
    })
  }

  render() {
    const { make, model, year, color, price } = this.state
    return (
      <div>
        <input name='make' value={make} onChange={e => this.handleChange(e)} placeholder='Make' />
        <input name='model' value={model} onChange={e => this.handleChange(e)} placeholder='Model' />
        <input name='year' value={year} onChange={e => this.handleChange(e)} placeholder='Year' type="number" />
        <input name='color' value={color} onChange={e => this.handleChange(e)} placeholder='Color' />
        <input name='price' value={price} onChange={e => this.handleChange(e)} placeholder='Price' type="number" />

        <button onClick={this.addNewCar}>Add Vehicle</button>
      </div>
    )
  }
}


export default Form