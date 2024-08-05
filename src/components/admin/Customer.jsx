import React from "react";
import { useGetAllUserQuery } from "../../services/registerSlice";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Customer = () => {
  const { data,isLoading } = useGetAllUserQuery();
  console.log("users:", data);
  if(isLoading){
    return( 
    <div className=" flex justify-center">
    <CgSpinnerTwoAlt size={53} className=" animate-spin text-violet-600"/>
    </div> 
    )}
  return (
    <div>
      <table className="w-full shadow-md shadow-gray-300 dark:shadow-neutral-700 font-poppins overflow-x-auto lg:overflow-x-hidden">
        <thead className=" bg-stone-300 dark:bg-neutral-600">
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Number</Th>
            <Th>Address</Th>
            <Th>Email</Th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return ( 
              <tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>
                  {item.firstname} {item.lastname}
                </Td>
                <Td>{item.contactnumber}</Td>
                <Td>{item.address}</Td>
                <Td>{item.email}</Td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;


function Th({children}){
  return <th className="px-1.5 lg:px-3 py-2 text-left font-medium text-lg dark:text-gray-400">{children}</th>
}

function Td({children}){
  return <td className="px-1.5 lg:px-3 py-2 border-b text-[16px] dark:border-neutral-700 dark:text-gray-400 font-light">{children}</td>
}
