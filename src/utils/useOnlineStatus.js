import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    let [OnlineStatus,setOnlineStatus]=useState(true);
    useEffect(()=>{

        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        })
        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        })

    });
    return OnlineStatus;
}

export default useOnlineStatus;