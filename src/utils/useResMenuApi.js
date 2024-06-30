import { useState, useEffect } from "react";
const useResMenuApi=(api,resId)=>
{
    let [ResMenuInfo, setResMenuInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
      }, []);
    
      let fetchMenu = async () => {
        let response = await fetch(api+ resId);
        let data = await response.json();
        setResMenuInfo(data.data);
      };

      return ResMenuInfo;   
}
export default useResMenuApi;