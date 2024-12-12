import axios from "axios";
import { base_url, getLoginToken } from "../../utils/utils";

const handleExportPdf = async (date1, date2, categorie) => {
  console.log(date1,date2);
  
  try {
    const url = `${base_url}/sales/${categorie}`;
    console.log(url);

    const response = await axios.get(url, {
      params: {
        date: { startDate: date1, endDate: date2 }
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${getLoginToken()}`,
      },
    });

    if (response.data && response.data.data) {
      window.open(response.data.data, "_blank");
    }
  } catch (error) {
    console.error("Error exporting PDF:", error);
  }
};

export default handleExportPdf;
