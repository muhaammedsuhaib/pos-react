import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import DateBar from "../dateBar/DateBar";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { selectSalesTrend } from "../../../reducer/sales/reducer";
import { listAllSalesTrend } from "../../../reducer/sales/actions";

function SalesTrends() {
  const dispatch = useDispatch();
  const salestrenddatas = useSelector(selectSalesTrend);
  

  console.log(salestrenddatas.data, "im shu");
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const currentDate = dayjs();

  const [selectedDate, setSelectedDate] = useState([currentDate, currentDate]);

  // Function to convert date from DD-MM-YYYY to YYYY-MM-DD format
  const convertDateFormat = (date) => {
    return date.format("YYYY-MM-DD");
  };

  // Function to get categories (dates or hours based on the selected date range)
  const getCategories = () => {
    if (selectedDate[0] === selectedDate[1]) {
      // If the selected date range is a single date, show hours (12 AM to 11 PM)
      return [
        "12:00 AM",
        "1:00 AM",
        "2:00 AM",
        "3:00 AM",
        "4:00 AM",
        "5:00 AM",
        "6:00 AM",
        "7:00 AM",
        "8:00 AM",
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
        "9:00 PM",
        "10:00 PM",
        "11:00 PM",
      ];
    } else {
      const formattedStartDate = convertDateFormat(selectedDate[0]);
      const formattedEndDate = convertDateFormat(selectedDate[1]);
      // If the selected date range spans multiple days, show dates
      const startDate = new Date(formattedStartDate);
      const endDate = new Date(formattedEndDate);

      const categories = [];
      while (startDate <= endDate) {
        categories.push(startDate.toISOString().split("T")[0]);
        startDate.setDate(startDate.getDate() + 1); // Move to the next day
      }
      return categories;
    }
  };

  // Fetch sales data from the API based on the selected date range
  useEffect(() => {
    const fetchSalesTrendData = () => {
      const formattedStartDate = convertDateFormat(selectedDate[0]);
      const formattedEndDate = convertDateFormat(selectedDate[1]);

      dispatch(
        listAllSalesTrend({
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        })
      );
      const categories = getCategories();
      setCategories(categories);
    };

    fetchSalesTrendData();
  }, [selectedDate, dispatch]);

  useEffect(() => {
    if (salestrenddatas?.data) {
      const responseData = salestrenddatas?.data;
      console.log(responseData,'hello daaaa')

      // Generate data based on the response
      const data = categories.map((category) => {
        return responseData[category] || 0; // If no data for this date/hour, return 0
      });

      setData(data); // Set the generated data
    } else {
      setData([]); // Fallback if no data is available
    }
  }, [salestrenddatas, categories]);

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
      categories: categories, // Use dynamic categories
      labels: {
        rotate: -45,
      },
    },
    yaxis: {
      title: {
        text: "Sales",
      },
      labels: {
        formatter: (value) => `${value}`, // Format y-axis labels as numbers
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      color: "#FF5534",
    },
    markers: {
      size: 5,
      colors: ["#FF5534"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    tooltip: {
      x: {
        format: "HH:mm",
      },
      y: {
        formatter: (value) => `${value}`, // Format tooltip data
      },
    },
  };

  const series = [
    {
      name: "Sales Amount",
      data: data, // Sales data mapped to the categories
      color: "#FF5534",
      width: "1px",
    },
  ];

  return (
    <div>
      <div className="flex justify-between h-[30px] mt-5 items-center">
        <div className="flex space-x-[10px] items-center">
          <div className="w-[7px] h-9 bg-primeryFirst "></div>{" "}
          {/* Corrected class name */}
          <h1 className="text-white text-[1rem] font-medium">Sales Trend</h1>
        </div>
        <div className="ml-auto">
          <DateBar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>

      <div className="w-full px-[10px] mt-[20px]">
        <div className="w-full bg-[#EEEEF1] h-[400px] rounded-[20px] p-[10px]">
          <div className="w-full h-full bg-white rounded-[10px] salesTrendChart">
            <Chart
              options={options}
              series={series}
              type="line"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesTrends;
