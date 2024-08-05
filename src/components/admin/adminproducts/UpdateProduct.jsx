import React from "react";
import { useDeleteProductMutation, useGetAllProductQuery,useGetProductsByIdQuery } from "../../../services/productQuery";
import { FiDelete } from "react-icons/fi";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const UpdateProduct = () => {
  // const{data}=useGetProductsByIdQuery(3);
  const [deleteProduct]=useDeleteProductMutation();
  const {data,isLoading}=useGetAllProductQuery();
  const [items, setItems] = React.useState(data);
  console.log("all:",data);
  
  const handleDel=async(itemById)=>{
    const newItems = items.filter(item => item.id !== itemById);
    // Update the state with the new list
    setItems(newItems);
    await deleteProduct({id:itemById});
  }
  if(isLoading){
    return <h1 className="  flex justify-center items-center">
    <CgSpinnerTwoAlt className=" text-violet-500 text-xl animate-spin"/>
    </h1>
  }
  
  return (
    <div className=" bg-white rounded-lg font-poppins px-3 py-3 w-full dark:text-gray-200 dark:bg-neutral-950">
      <h1>Product List</h1>
      <div className=" mt-1.5 lg:mt-3">
        <table className="w-full shadow-md shadow-gray-300 dark:shadow-neutral-700">
          <thead className=" bg-gray-100 dark:bg-neutral-800">
            <tr>
            <Th>ID</Th>
            <Th>Product Name</Th>
            <Th>Gender</Th>
            <Th>Image</Th>
            <Th>Price</Th>
            <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr
                key={item.id}
                className=" py-1 "
              >
                <Td>
                  {item.id}
                </Td>
                <Td>
                  {item.product_name}
                </Td>
                <Td>
                  {item.gender}
                </Td>
                <td className=" border-b dark:border-neutral-700"><img src={item.image} className=" h-16 w-16"/>
                </td>
                <Td>
                  {item.price} Rs
                </Td>
                <td className="border-b dark:border-neutral-700 pl-7"><FiDelete size={34} className=" text-red-700 dark:border-neutral-700" onClick={()=>handleDel(item.id)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateProduct;


function Th({children}){
  return <th className="px-1.5 lg:px-3 py-2 text-left font-medium text-xl">{children}</th>
}

function Td({children}){
  return <td className="px-1.5 lg:px-3 py-2 border-b font-normal text-lg dark:border-neutral-700">{children}</td>
}


