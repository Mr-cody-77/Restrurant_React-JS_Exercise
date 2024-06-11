import React from 'react'
import "./Orders.css"
const orders = [
  { id: 1, title: 'Order 1', description: 'Description for Order 1' },
  { id: 2, title: 'Order 2', description: 'Description for Order 2' },
  { id: 3, title: 'Order 3', description: 'Description for Order 3' },
  // Add more orders as needed
];

const Orders = () => {
  return (
    <>
 <div className="vertical-content-scroller">
      <h2>Orders</h2>
      <div className="scrollable-content">
        {orders.map(order => (
          <div key={order.id} className="order">
            <h3>{order.title}</h3>
            <p>{order.description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Orders
