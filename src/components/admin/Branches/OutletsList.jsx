import React, { useEffect } from "react";
import { notification } from "antd";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  useDeleteBranchMutation,
  useGetBranchesQuery,
} from "../../../services/outletSlice";

const OutletsList = () => {
  const { data, refetch } = useGetBranchesQuery();
  const [deleteBranch] = useDeleteBranchMutation();

  useEffect(() => {
    refetch(); // Refetch data on component mount to ensure the latest data
  }, [refetch]);

  const handleDelete = async (id) => {
    try {
      await deleteBranch({ id }).unwrap();
      notification.success({ message: "Branch deleted successfully!" });
      refetch();
    } catch (error) {
      notification.error({ message: "Error deleting branch." });
    }
  };

  return (
    <div>
      <table className="w-full text-center">
        <thead className="text-center">
          <tr>
            <th className="border px-4 py-2">S.N</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Contact Number</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((branch, index) => (
            <tr key={branch.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{branch.name}</td>
              <td className="border px-4 py-2">{branch.address}</td>
              <td className="border px-4 py-2">{branch.phone_number}</td>
              <td className="border px-4 py-2">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-24 h-auto"
                />
              </td>
              <td className="border px-4 py-2">
                <div className="flex justify-between">
                  <span className="cursor-pointer mr-2">
                    <FaRegEdit />
                  </span>
                  <span
                    onClick={() => handleDelete(branch.id)}
                    className="cursor-pointer"
                  >
                    <MdDelete />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutletsList;
