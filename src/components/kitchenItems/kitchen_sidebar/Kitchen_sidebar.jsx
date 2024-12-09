import { ConfigProvider, Switch } from 'antd';
import './kitchen_sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setKitchenDetailed, setKitchenSerachView } from '../../../redux/user/userSlice';

const Kitchen_sidebar = () => {
  const kitchenDetailedView = useSelector((state)=>state.orderHistory?.kitchen_detailed_view)
  const kitchensearchView = useSelector((state)=>state.orderHistory?.kitchen_search_view)
  const dispatch = useDispatch()
	const items = [
    {
      id: 1,
      name: "ALL",
      icon: <img src="/public/images/kitchenSidebar/notification_11341354.svg" accessKey="icon" width={25} />,
      link: "/",
    },
    {
      id: 2,
      name: "NEW ORDER",
      icon: <img src="/public/images/kitchenSidebar/notification_11341354.svg" accessKey="icon" width={40} />,
      link: "/",
    },
    {
      id: 3,
      name: "COOKING",
      icon: <img src="/public/images/kitchenSidebar/cooking_2728879 (1).svg" accessKey="icon" width={25} />,
      link: "/",
    },
    {
      id: 4,
      name: "COMPLTED",
      icon: <img src="/public/images/kitchenSidebar/restaurant_10860258.svg" accessKey="icon" width={25} />,
      link: "/",
    },
    {
      id: 5,
      name: "SERVED",
      icon: <img src="/public/images/kitchenSidebar/restaurant_12384316.svg" accessKey="icon" width={30} />,
      link: "/",
    },
  ];

	return (
    <div>
      <div className="w-full ">
        <div className="w-full flex flex-col items-center justify-center">
          <p className='text-white text-[13px]'>DETAILED VIEW</p>
          <ConfigProvider
              theme={{
                components: {
                  Switch: {
                    trackHeight: 25,

                    trackPadding: 3,
                  },
                },
                token:{
                  colorPrimary:'#00AF50'
                }
              }}
            >
              <Switch checkedChildren="YES" unCheckedChildren="NO" className="bg-gray-400 hover:bg-gray-400" defaultChecked={kitchenDetailedView} onChange={()=>dispatch(setKitchenDetailed(!kitchenDetailedView))}/>
            </ConfigProvider>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-[10px...........]">
          <p className='text-white text-[13px]'>SEARCH BAR</p>
          <ConfigProvider
              theme={{
                components: {
                  Switch: {
                    trackHeight: 25,

                    trackPadding: 3,
                  },
                },
                token:{
                  colorPrimary:'#00AF50'
                }
              }}
            >
              <Switch checkedChildren="YES" unCheckedChildren="NO" className="bg-gray-400  hover:bg-gray-400" defaultChecked={kitchensearchView} onChange={()=>dispatch(setKitchenSerachView(!kitchensearchView))} />
            </ConfigProvider>
        </div>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center w-auto gap-3 ml-4 pr-3 pl-[5px] py-[8px] text-white my-2 hover:bg-[#fff] rounded-tl-[12px] rounded-bl-[12px] hover:text-[#ff5634] hover:font-semibold item-dev"
        >
          <span
            className="w-[40px] h-[40px] bg-[#ff5634] py-[3px] flex justify-center items-center rounded-[12px] "
            style={{ boxShadow: "0 0 10px -3px black" }}
          >
            {item.icon}
          </span>
          <a href={item.link} className="text-[15px] w-[100px] xl:w-[150px]">
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Kitchen_sidebar;
