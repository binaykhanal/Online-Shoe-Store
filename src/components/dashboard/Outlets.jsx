import { Avatar, Button, Card } from "antd";
import { outletItems } from "../../util/Products";
import { useGetBranchesQuery } from "../../services/outletSlice";
const { Meta } = Card;

const Outlets = () => {
  const { data } = useGetBranchesQuery();
  return (
    <div className="container mx-auto">
      <h3 className=" text-xl md:text-4xl font-bold text-center">Outlets</h3>
      <div
        className="my-5 grid grid-cols-2 gap-y-1.5 
           md:gap-y-2 lg:gap-y-2 gap-x-1 md:gap-x-2 lg:gap-x-3 lg:grid-cols-4"
      >
        {data?.map((item) => {
          return (
            <Card
              key={item.id}
              className="shadow-lg shadow-stone-800"
              title={item.name}
              cover={
                <div>
                  <img alt="example" src={item.image} />
                </div>
              }
            >
              <div>
                <p>{item.address}</p>
                <p>{item.phone_number}</p>
              </div>
              <Meta
                avatar={
                  <>
                    <Button className=" bg-orange-400 font-poppins text-white mx-5 ">
                      Follow us
                    </Button>
                  </>
                }
              />
            </Card>
          );
          // <Card
          //   key={item.id}
          //   className="shadow-lg shadow-stone-800"
          //   cover={
          //     <div className=" h-20 md:h-28 lg:h-36">
          //       <section className=" font-bold mx-4 my-5 text-center">
          //         <h1>{item.name}</h1>
          //         <p>{item.address}</p>
          //         <p>{item.phone_number}</p>
          //       </section>

          //       <img alt="example" src={item.image} />
          //     </div>
          //   }
          //   actions={[
          //     <SettingOutlined key="setting" />,
          //     <EllipsisOutlined key="ellipsis" />,
          //   ]}
          // >
          //   <Meta
          //     className=" h-[40px]"
          //     avatar={
          //       <>
          //         <Avatar src={item.icon} size={40} />
          //         <Button className=" bg-orange-400 font-poppins text-white mx-5">
          //           Follow us
          //         </Button>
          //       </>
          //     }
          //   />
          // </Card>
        })}
      </div>
    </div>
  );
};

export default Outlets;
