import AxiosInstance from "../../http/AxiosInstance";

export const getUpdateImage = async (form) =>{
    try {
        const axiosInstance = AxiosInstance('multipart/form-data');
        const url ='/upload-file';
        return await axiosInstance.post(url,form)
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const getListProduct= async (id_cate) =>{
    try {
        const axiosInstance = AxiosInstance();
        const url = `/products/list/${id_cate}`;
        return await axiosInstance.get(url);
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const getListCate= async () =>{
    try {
        const axiosInstance = AxiosInstance();
        const url = `/categories`;
        return await axiosInstance.get(url);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

