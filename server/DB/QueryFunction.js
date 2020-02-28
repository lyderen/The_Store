const client = require('./Config');

const queryAllOrders = `select items.item_name, items.item_id,  orders.Order_ID, orders.Order_create_at,orders.Order_time_begin, orders.Order_time_end, orders.Item_quantity ,orders.Total_price 
                  from orders 
                  left join items on items.item_id = orders.item_id`

 const queryAllItems = `select items.item_id , items.item_name, items.price from items`

 

 const queryInsertOrder = `` ;

const selectAllOrders = async () => {

    // client.connect()
     
    let response;
    try {
      response = await client.query(queryAllOrders);
      
      return response.rows;

    } catch (error) {
      
    }

    client.end()
} 

const selectAllItems = async () => {
    
    let response;
    try {
      response = await client.query(queryAllItems);
      
      return response.rows;

    } catch (error) {
      
    }

    client.end()

}

const deleteOrder = async (id) => {
  const queryDeleteOrder = `DELETE FROM orders WHERE order_id = ${id};`
  let response;
  try {
    response = await client.query(queryDeleteOrder);
    console.log("------------")
    return response.rows;

  } catch (error) {
    
  }

  client.end()

}

const updateOrder = async (obji) => {

     
  let queryS  =  `UPDATE orders SET item_quantity = ${obji.item_quantity}, 
                     total_price = ${obji.total_price},item_id = ${obji.item_id} WHERE order_id = ${obji.order_id}`
   let response;
       try {
       response = await client.query(queryS);
       console.log("-----")
       return response.rows;
       
       } catch (err) {
             console.log(err)
    }
    client.end()
}



const insertOrder = async (order) => {
        var inserOrder  =  `INSERT INTO orders (item_id, order_time_begin, order_time_end, item_quantity, total_price)
                           VALUES (${order.item_id} ,${order.start}, ${order.end} , ${order.item_quantity}, ${order.total_price})`
  let response;
  try {
  
    response = await client.query(inserOrder);
    console.log("----")
    return response.rows;

  } catch (err) {
    console.log(err)
  }

  client.end()

}


module.exports = {
    selectAllOrders,
    selectAllItems,
    updateOrder,
    deleteOrder,
    insertOrder
}