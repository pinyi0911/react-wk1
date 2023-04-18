import { useQuery } from '@tanstack/react-query'
import { getImgById, getImgs} from "../api";

export const useImgs = () => {
   const { data, isLoading } = useQuery([], getImgs);
   return { data, isLoading };
 };
 
 
 export const useImgById = (imgId) => {
   const { data, isLoading } = useQuery([imgId], getImgById);
   return { data, isLoading };
 };