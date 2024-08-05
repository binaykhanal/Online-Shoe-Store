import React from "react";
import { AntdInput, FormItem } from "../common/utilities";
import { Button, Form, notification } from "antd";
import { RxCross1 } from "react-icons/rx";
import TextArea from "antd/es/input/TextArea";
import { usePostBlogMutation } from "../../services/blogSlice";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import spinner from  "../../assets/images/spinner.png"

const AddBlogs = () => {
  const [image, setImage] = React.useState([]);
  const [form] = Form.useForm();
  const [postBlog,{isLoading}]=usePostBlogMutation();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (image.length + selectedFiles.length > 1) {
      alert('You can only upload one .');
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
      formData.append(key, values[key]);  //key means the name of form field
    }

    await postBlog(formData).unwrap();  // Directly pass formData & POST
    notification.success({
      message:"Product has been Added"
    })
  };

  const handleDel = (delByIdx) => {
    setImage(image.filter((_, index) => index !== delByIdx));
  };

  if(isLoading){
    return( 
    <div className=" flex justify-center">
    <CgSpinnerTwoAlt size={53} className=" animate-spin text-violet-600"/>
    </div> )}
  
  return (
    <div className=" dark:bg-neutral-800">
      <Form layout="vertical" onFinish={onFinish} requiredMark={false} form={form}>
        <div className=" font-poppins flex items-center justify-between">
          <div>
          <input id="fileInput" multiple type="file" onChange={handleFileChange}
            style={{ display: "none" }} />
          {/* for single file(e.target.files[0]) */}
          <label htmlFor="fileInput" className=" bg-emerald-400 text-white py-4 px-3 rounded
            font-normal" title="Upload Image">
            Upload Image
          </label>
          </div>

          <div className=" border-dashed border border-neutral-900">
            {Array.from(image)?.map((item, idx) => {
              return (
                <div key={idx}>
                  <img
                    src={item ? URL.createObjectURL(item) : null}
                    className=" rounded h-10"
                  />
                  {/* URL.createObjectURL(item) converts into url */}
                  <RxCross1
                    className=" text-[35px] absolute right-1 top-1 bg-gray-300 bg-opacity-25 backdrop-blur-sm p-1.5 rounded-lg"
                    onClick={() => handleDel(idx)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" mt-4">
        <div className=" flex justify-between gap-x-1">
        <section className="w-full">
        <AntdInput
          name="title"
          required
          label=<p className=" font-poppins text-xs md:text-lg font-normal dark:text-gray-300">
            Title
          </p>
        />
        </section>
        <section className=" w-full">
        <AntdInput name="author" required label=<p className=" font-poppins  text-xs md:text-lg font-normal dark:text-gray-300">Username</p>/>
        </section>
        </div>

        <div className=" flex items-center gap-x-1">
        <section className=" flex-1">
        <FormItem
          label={
            <p className=" font-medium font-poppins text-[14px] md:text-[16px] dark:text-gray-300">
              Blog Details
            </p>
          }
          name="content"
          required
        >
          <TextArea className=" border-2 border-gray-300 rounded-none  max-h-28 w-full"></TextArea>
        </FormItem>
        </section>
        <section>
        <AntdInput name="status" label=<p className=" font-poppins dark:text-gray-300">Status</p>/>
        </section>
        </div>
        </div>
        <Button
          className="rounded-sm bg-violet-600 border-none h-7 md:h-10 text-[13px] md:text-[16px] text-white font-poppins w-full"
          htmlType="submit"
        >
          Post Blog
        </Button>
      </Form>
    </div>
  );
};

export default AddBlogs;
