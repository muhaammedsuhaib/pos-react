import { useState } from "react";
import axios from "axios";
import { base_url, getLoginToken } from "../../../utils/utils";

const useExportPdf = () => {
  const [isSavingPdf, setIsSavingPdf] = useState(false);

  const exportPdf = async (date1, date2, selectedOption, path) => {
    setIsSavingPdf(true);

    try {
      const url = `${base_url}/sales/${path}`;
      const response = await axios.get(url, {
        params: {
          date: { startDate: date1, endDate: date2 },
          category: selectedOption,
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
      console.error(`Error exporting ${path} PDF:`, error);
    } finally {
      setIsSavingPdf(false);
    }
  };

  return { isSavingPdf, exportPdf };
};

export default useExportPdf;
