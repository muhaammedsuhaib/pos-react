import dayjs from "dayjs";

// export const base_url = 'https://api.brixpos.com/api';
export const base_url = 'http://localhost:2123/api';
export const setLoginToken = (token) => {
    return localStorage.setItem('token', token);
}
export const getLoginToken = () => {
    return localStorage.getItem('token');
}

export const convertDbDateToDate = (date) => {
    try {
        const invoiceDateView = new Date();
        const splitDates = date.split('-');
        invoiceDateView.setFullYear(splitDates[0], parseInt(splitDates[1]) - 1, splitDates[2]);
        return invoiceDateView;
    } catch (error) {
        return new Date(date);
    }
}

export const dateRangePreset = [
    {
        label: 'Today',
        value: [dayjs(), dayjs()],
    },
    {
        label: 'Yesterday',
        value: [dayjs().add(-1, 'd'), dayjs().add(-1, 'd')],
    },
    {
        label: 'Last 7 Days',
        value: [dayjs().add(-7, 'd'), dayjs()],
    },
    {
        label: 'Last 14 Days',
        value: [dayjs().add(-14, 'd'), dayjs()],
    },
    {
        label: 'Last 30 Days',
        value: [dayjs().add(-30, 'd'), dayjs()],
    },
    {
        label: 'This Month',
        value: [dayjs().startOf('month'), dayjs()],
    },
    {
        label: 'Last Month',
        value: [dayjs().add(-1, 'month').startOf('month'), dayjs().add(-1, 'month').endOf('month')],
    },
    {
        label: 'Last 90 Days',
        value: [dayjs().add(-90, 'd'), dayjs()],
    },
    {
        label: 'Last 180 Days',
        value: [dayjs().add(-180, 'd'), dayjs()],
    },
];

export const orderStatuses = [
    {
        value: "",
        label: "All",
    },
    {
        value: "0",
        label: "Pending",
    },
    {
        value: "1",
        label: "Accepted",
    },
    {
        value: "2",
        label: "Completed",
    },
    {
        value: "3",
        label: "Cancelled",
    },
];

export const getDayNameFromNumber = (number) => {
    const days = {
        '1': 'Sun',
        '2': 'Mon',
        '3': 'Tue',
        '4': 'Wed',
        '5': 'Thu',
        '6': 'Fri',
        '7': 'Sat'
    };
    return days[number];
};

export const imageBaseUrl = 'https://pos.brixbull.ai/';

export const convertTo12Hour = (time24) => {
    // Split the time into hours and minutes
    let [hour, minute] = time24.split(":").map(Number);
  
    // Determine AM or PM suffix
    const suffix = hour >= 12 ? "PM" : "AM";
  
    // Convert to 12-hour format
    hour = hour % 12 || 12;
  
    // Return formatted time with leading zero for minutes if needed
    return `${hour}:${minute.toString().padStart(2, '0')} ${suffix}`;
  }