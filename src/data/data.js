export const api_key = "AIzaSyCP2xBL3XA4ij28XThog6s9pUyVcWL7k_0"; 


export function convertviews(value){
    if(value > 1000000){
        return Math.floor( value / 1000000) + "M";
    }else if (value > 1000){
        return Math.floor(value / 1000) + "k"
    }else{
        return value 
    }
}