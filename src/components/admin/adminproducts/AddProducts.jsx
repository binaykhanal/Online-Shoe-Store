import { Button, Form, Radio, Select, notification } from "antd";
import React from "react";
import { AntdInput,FormItem,SizeLabel } from "../../common/utilities";
import { AiFillProduct } from "react-icons/ai";
import TextArea from "antd/es/input/TextArea";
import { useAddProductMutation, useGetAllProductQuery } from "../../../services/productQuery";
import { RxCross1 } from "react-icons/rx";

const AddProducts = () => {
  const [form] = Form.useForm(); //this is for FormItem
  const [image, setImage] = React.useState([]);
  const [addProduct]=useAddProductMutation();
  const {data}=useGetAllProductQuery();
  console.log("allpd:",data);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (image.length + selectedFiles.length > 6) {
      alert('You can only upload up to 6 images.');
      return;
    }
    setImage([...image, ...selectedFiles]);
  };
  
  const onFinish = async(values) => {
    
    let formData=new FormData();
     // Append images to formData
    Array.from(image).forEach(item => {
      formData.append('image', item);
    });

    // Append other values to formData
    for (let key in values) {
      formData.append(key, values[key]);
    }

    await addProduct(formData);  // Directly pass formData & POST
    notification.success({
      message:"Product has been Added"
    })

  };
  const handleDel = (delByIdx) => {
    setImage(image.filter((_, index) => index !== delByIdx));
  };
  
  return (
    <div className=" px-1.5 md:px-4 dark:text-violet-700">
      <Form layout="vertical" onFinish={onFinish} requiredMark={false} form={form}>
        <section className=" font-poppins lg:flex justify-between">
          <h1 className=" flex items-center gap-x-1 text-[12px] md:text-[18px] font-medium flex-1 my-2.5 dark:text-violet-700">
            <AiFillProduct className=" text-sm md:text-[15px]" />
            Add New Product{" "}
          </h1>
          <section className=" flex gap-x-1 md:gap-x-2 justify-evenly">
            <Button className=" rounded-3xl bg-gray-300 h-7 text-[12px] md:text-[15px] md:h-10 font-poppins">
              📄Save Draft
            </Button>
            <Button
              className=" rounded-3xl bg-green-300 h-7 md:h-10 text-[12px] md:text-[15px] font-poppins"
              htmlType="submit">
              ✔️Add Product
            </Button>
          </section>
        </section>
        <div className=" my-2 md:my-5 px-1 md:px-10 py-2 lg:flex justify-center w-full gap-x-2 md:gap-x-4">
          <div className=" lg:w-3/5 px-1 md:px-5 font-poppins">
            <h2 className=" text-[12px] md:text-[16px] dark:text-white">General Information</h2>
            <AntdInput required name={`product_name`} className=" w-full"
              label={
                <p className=" font-poppins text-[14px] md:text-[16px] font-normal md:font-light dark:text-violet-700">
                  Product Name
                </p>
              }
            />

            <FormItem label={
                <p className=" font-normal md:font-light font-poppins text-[14px] md:text-[15px] dark:text-violet-700">
                  Product Description
                </p>
              } name="description" required>
              <TextArea className=" bg-zinc-300 max-h-28 w-full"></TextArea>
            </FormItem>

            <section className=" lg:flex justify-between w-full font-poppins">
              <SizeLabel className="w-1/2" /> 
              <FormItem
                name="gender"
                label={
                  <h1 className=" font-poppins text-[14px] md:text-[16px] font-normal w-1/2 dark:text-violet-700">
                    Gender
                  </h1>
                }
                required
              >
                <Radio.Group>
                  <Radio value="male">
                    <span className=" text-[14px] md:text-[15px] font-poppins font-light dark:text-violet-700">
                      Men
                    </span>
                  </Radio>
                  <Radio value="female">
                    <span className=" text-[14px] md:text-[15px] font-poppins font-light dark:text-violet-700">
                      Women
                    </span>
                  </Radio>
                </Radio.Group>
              </FormItem>
            </section>
            <h3 className=" text-xs md:text-[15px] border-b border-gray-300 dark:border-violet-700 font-medium dark:text-violet-700 py-2">
              Pricing and Stocks
            </h3>
            <div className="grid grid-cols-2 gap-x-2 md:gap-x-5 my-3">
              <AntdInput label={
                  <p className=" font-poppins text-xs md:text-[15px] font-light dark:text-violet-700">
                    Price
                  </p>
                } name="price" required type="number"/>
              <AntdInput
                label={
                  <p className=" font-poppins text-xs md:text-[15px] font-light dark:text-violet-700">
                    Stock
                  </p>
                }
                name="stock"
                required
                type="number"
              />
              <AntdInput
                label={
                  <p className=" font-poppins text-xs md:text-[15px] font-light dark:text-violet-700">
                    Discount %
                  </p>
                }
                name="discount" required type="number"/>
            </div>
          </div>

          <div className=" lg:w-2/5 font-poppins text-[12px] md:text-[16px]">
            <div>
              <input id="fileInput" multiple type="file"
                onChange={handleFileChange}
                style={{display:"none"}}/>
              {/* for single file(e.target.files[0]) */}
            <label htmlFor="fileInput" className=" bg-emerald-400 text-white py-2 px-3 rounded 
            font-normal" title="Upload Image">
                Upload Image
              </label>
              
              <div className=" grid grid-cols-2 gap-1.5 my-2">
                {Array.from(image)?.map((item, idx) => {
                  return (
                    <div key={idx} className=" relative">
                      <img src={item ? URL.createObjectURL(item) : null}
                        className=" h-36 lg:h-52 w-full rounded-lg"/>
                      {/* URL.createObjectURL(item) converts into url */}
                      <RxCross1 className=" text-[35px] absolute right-1 top-1 bg-gray-300 bg-opacity-25 backdrop-blur-sm p-1.5 rounded-lg" 
                      onClick={()=>handleDel(idx)}/>
                    </div>
                  );
                })}
              </div>
            </div>

            <FormItem name="season"
              label={
                <p className=" font-poppins font-light text-[12px] lg:text-[15px] dark:text-violet-700">
                  Category
                </p>
              } 
              required>
              <Select placeholder="Select Category" className=" h-12 font-poppins" >
                <Select.Option value="winter" className="font-poppins">
                  Winter
                </Select.Option>
                <Select.Option value="summer" className="font-poppins">
                  Summer
                </Select.Option>
                <Select.Option value="monsoon" className="font-poppins">
                  Monsoon
                </Select.Option>
              </Select>
            </FormItem>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddProducts;
