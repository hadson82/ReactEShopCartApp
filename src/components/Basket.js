import React, { Component } from 'react'
import util from '../util'

export default class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
            {cartItems.length === 0? " Basket is empty": <div>You have {cartItems.length} products in the basket. <hr/></div>}
                {cartItems.length>0 &&
                    <div>
                        <ul>
                            {cartItems.map(item=>
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button className="btn btn-danger"
                                    onClick={(e) => this.props.handleRemoveFromCart(e, item)}
                                    >X</button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>
                                )}
                        </ul>
                        <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                       </b>
                        <button onClick={()=> alert('Todo: Implement checkout page.')} className="btn btn-primary">Checkout</button>
                    </div>
                }
                
            </div>
        )
    }
}
