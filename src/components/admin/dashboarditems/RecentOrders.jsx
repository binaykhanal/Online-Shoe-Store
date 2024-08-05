import React from "react";
import { getOrderStatus, recentOrderData } from "../../../util/Products";
import { Link } from "react-router-dom";

const RecentOrders = () => {
  
  return (
    <div className=" bg-white rounded-lg font-poppins px-3 py-3 flex-1 w-full overflow-x-scroll md:overflow-x-hidden lg:w-3/4 dark:bg-neutral-900 dark:text-white">
      <h1 className=" dark:text-violet-700">Recent Orders</h1>
      <div className=" mt-1.5 lg:mt-3">
        <table className="w-full shadow-md shadow-gray-300 dark:shadow-neutral-700">
          <thead className=" bg-gray-100 dark:bg-neutral-800  dark:text-violet-700">
            <tr>
            <Th>ID</Th>
            <Th>Product ID</Th>
            <Th>Customer Name</Th>
            <Th>Order Date</Th>
            <Th>Order Total</Th>
            <Th>Shipping Address</Th>
            <Th>Order Status</Th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((item) => (
              <tr
                key={item.id}
                className=" border-b border-gray-200 dark:border-neutral-600 font-light py-1 "
              >
                <Td>
                  <Link to={`/order/${item.id}`}>#{item.id}</Link>
                </Td>
                <Td>
                  <Link to={`/product/${item.product_id}`}>
                    #{item.product_id}
                  </Link>
                </Td>
                <Td>
                  <Link to={`/customer/${item.customer_id}`}>
                    {item.customer_name}
                  </Link>
                </Td>
                <Td>{new Date(item.order_date).toLocaleDateString()}</Td>
                <Td>{item.order_total}</Td>
                <Td>{item.shipment_address}</Td>
                <Td>{getOrderStatus(item.current_order_status)}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;


function Th({children}){
  return <th className="px-1.5 lg:px-4 py-2 text-left font-medium">{children}</th>
}

function Td({children}){
  return <td className="px-1.5 lg:px-4 py-2 dark:text-gray-300">{children}</td>
}


