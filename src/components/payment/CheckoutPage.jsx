import React from "react";
import { AntdInput, FormItem, ValidationBtn } from "../common/utilities";
import { Form, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { LayoutContext } from "../../layout/UserLayout";
import { useNavigate } from "react-router-dom";
import { orderData } from "../../features/OrderSlice";

const CheckoutPage = () => {
  const [form] = Form.useForm();
  const { cart } = useSelector((state) => state.cartslice);
  const {detail}=useSelector((state)=>state.detailslice);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {subTotal}=React.useContext(LayoutContext);

  const handleFinish = (values) => {
    console.log("form:", values);
    handleOrder(cart);
    navigate("/userorder");
  };

  const handleOrder = (cartOrder) => {
    cartOrder.forEach((item) => {
      dispatch(orderData(item));
    });
  };

  const shippingFee = 245;
  const totalPrice = shippingFee + subTotal;

  return (
    <Form layout="vertical" onFinish={handleFinish} className=" container mx-auto" requiredMark={false} form={form}>
      <div className=" lg:flex font-poppins w-full gap-x-3 ">
        <div className=" lg:w-[50%] px-3 ">
          <h1 className=" text-2xl font-semibold my-2 lg:my-4 md:text-2xl text-[16px]">
            Billing Details
          </h1>
          <div className=" flex gap-x-2">
            <section className=" w-full">
              <AntdInput
                label=<h2 className=" font-poppins text-[12px] md:text-[18px] flex-1">
                  First Name
                </h2> name="fname" required type="text"/>
            </section>
            <section className=" w-full">
              <AntdInput
                label=<h2 className=" font-poppins text-[12px] md:text-[18px]">
                  Last Name
                </h2> name="lname" required type="text"/>
            </section>
          </div>
          <AntdInput
            label=<h2 className=" font-poppins text-[12px] md:text-[18px]">
              Country/Region
            </h2>
            name="country"
            required
            type="text"
          />
          <AntdInput
            label=<h2 className=" font-poppins text-[12px] md:text-[18px]">
              Street Adress
            </h2> name="street" required/>
          <AntdInput
            label=<h2 className=" font-poppins text-[12px] md:text-[18px]">
              Town/City
            </h2> name="city" type="text" required/>
          <AntdInput
            label=<h2 className=" font-poppins text-[12px] md:text-[18px]">
              State
            </h2> name="address" type="text" required/>
          <AntdInput
            label=<h2 className=" font-poppins text-[12px] md:text-[18px]">
              Postal Code
            </h2> name="postal" type="number" required
          />
          <AntdInput label=<h2 className=" font-poppins text-[12px] md:text-[18px]">
              Phone
            </h2> name="phone" type="number" required/>
          <AntdInput
            label=<h2 className=" font-poppins text-[12px] md:text-[18px]">
              Email
            </h2> name="email" type="email" required />
          <FormItem label={<p className="font-poppins">Product Description</p>} name="notes" 
           required>
            <TextArea className=" bg-zinc-300 max-h-28 w-full" required></TextArea>
          </FormItem>
        </div>
        <div className=" lg:w-[50%] bg-zinc-200">
          <h3 className=" text-center md:text-2xl text-[16px] font-semibold my-2 lg:my-4">Your Order</h3>
          <div className="  text-xl font-medium my-2 bg-white mx-4 px-6 py-5 rounded-md shadow-md shadow-gray-300">
            <section className=" flex border-b-2 border-gray-500 py-2">
              <h2 className=" flex-1 md:text-xl text-[16px]">PRODUCT</h2>
              <h2 className=" md:text-xl text-[16px]">SUBTOTAL</h2>
            </section>

            <div className="md:text-xl text-[16px] ">
              {cart.map((item) => {
                return (
                  <div className="flex gap-x-3.5 border-b border-gray-300 text-gray-500 py-5 font-light"
                   key={item.id}>
                    <p className=" flex-1">
                      {item.title} x {item.quantity}
                    </p>
                    <p>NPR {item.price}</p>
                  </div>
                );
              })}
            </div>

            <div className=" md:text-xl text-[16px]">
              <h1 className=" flex justify-between border-b border-gray-300 py-3">
                Subtotal <span className=" text-green-500">NPR {subTotal}</span>
              </h1>
              <h1 className=" flex justify-between border-b border-gray-300 py-3">
                Shipping{" "}
                <span className=" text-green-500">NPR {shippingFee}</span>
              </h1>
              <h1 className=" flex justify-between text-[18px] md:text-2xl pt-2.5">
                Total <span className=" text-green-500">NPR {totalPrice}</span>
              </h1>
            </div>
          </div>
          <div className=" mx-6">
          <FormItem name="paymethod" label={
                  <h1 className=" font-poppins text-[14px] md:text-[16px] font-medium">
                    Select Payment Method
                  </h1>
                } required>
                <Radio.Group>
                  <Radio value="cash">
                    <span className=" text-[14px] md:text-[17px] font-poppins font-normal">
                      Cash on Delivery
                    </span>
                  </Radio>
                  <Radio value="esewa">
                    <span className=" text-[14px] md:text-[17px] font-poppins font-normal">
                      Esewa
                    </span>
                  </Radio>
                </Radio.Group>
              </FormItem>
              </div>
          <div className=" mt-5">
            <ValidationBtn name="PROCEED" htmlType="submit"></ValidationBtn>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default CheckoutPage;
