import axiosInstance from "pages/axios";

const handlerSortByPriceInfo = async (
  name: string,
  disLimit: number,
  userLatitude: number,
  userLongitude: number,
  pageNum: number,
  pageSize: number
) => {
  console.log("handlerSortByPriceInfo");

  const serverUrl = "/map/sortByPriceInfo";

  const queryParams = `?name=${name}&disLimit=${disLimit}&userLatitude=${userLatitude}&userLongitude=${userLongitude}&pageNum=${pageNum}&pageSize=${pageSize}`;

  try {
    const response = await axiosInstance.get(serverUrl + queryParams);
    return response.data;
  } catch (error) {
    console.error(
      "거리순으로 데이터를 불러오던 중 오류가 발생했습니다.",
      error
    );
    throw error;
  }
};

export default handlerSortByPriceInfo;