//HOCs
import { Form, Input,Button, Checkbox, Upload, } from "antd";
import React from "react";

export const ShopButton = (props) => {
    return (
        <button className="bg-slate-900 rounded-3xl md:px-3 md:py-2 px-1.5 py-1.5 
        text-white font-poppins animate-bounce text-[8px] md:text-[12px]" {...props}>
        SHOP NOW
      </button>
    );
  };


export const FormItem = (props) => {
  return <Form.Item {...props}>{props.children}</Form.Item>;
};

export const AntdInput = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: `Please enter your ${props.name}`,
    },
   
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <FormItem {...props} rules={localrules}>
      <Input onClick={props.onClick}
        onChange={props.onChange}
        type={props.type}
        className=" border-2 border-neutral-300 py-2 md:py-3 rounded-sm"
      />
    </FormItem>
  );
};

export const ValidationBtn=(props)=>{
  return (
    <FormItem className="text-center ">
    <Button className=" bg-green-300 font-poppins rounded-none font-semibold h-12 w-11/12" {...props}>
    {props.name}</Button>
    </FormItem>
  )
}

export const SaveButton = (props) => {
  return (
    <Button className=" text-white" {...props}>
      {props.name}
    </Button>
  );
};


export const SizeLabel=(props)=>{
  const CheckboxGroup = Checkbox.Group;

  const sizesOptions = ['38', '39', '40', '41','42'];
  const [selectedSizes, setSelectedSizes] = React.useState([]);

  const onChange = (checkedValues) => {
    setSelectedSizes(checkedValues);
  };

  return(
    <div {...props}>
         <FormItem
                name="size"
                label={<h1 className=" font-poppins text-[14px] md:text-[16px] font-normal dark:text-violet-600">Size</h1>}
                className="space-y-1 md:space-y-2"
                rules={[
                  {
                    required: true,
                    message: "Please select at least one size!",
                  },
                ]}
              >
                <CheckboxGroup value={selectedSizes} onChange={onChange}>
                  <div className=" flex  space-x-1 md:space-x-4">
                    {sizesOptions.map((item,idx) => (
                      <Checkbox
                        key={idx}
                        value={item}
                        className="flex items-center text-[13px] md:text-[15px] dark:text-violet-600 font-normal font-poppins"
                      >
                        {item}
                      </Checkbox>
                    ))}
                  </div>
                </CheckboxGroup>
              </FormItem>

    </div>
  )

}
