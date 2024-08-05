import { Outlet } from "react-router-dom";
import { useGetAllProductQuery } from "../../services/productQuery";

const AdminProduct = () => {
  const {data}=useGetAllProductQuery();
  console.log("all:",data);

  return (
    <div className=" px-1.5 md:px-4">
      <Outlet/>
    </div>
  );
};

export default AdminProduct;
