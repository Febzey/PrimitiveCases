import {useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';


export default function Auth() {

    const { getAccessTokenSilently } = useAuth0();

    const [stuffFromRoute, setStuff] = useState({
        showResult: false,
        endPointMessage:"none",
        error:null
    });

    const getPublicRoute = async () => {

        console.log("getPublicRoute function ran")
        try {
            const response = await fetch(`http://localhost:3000/api/public`)
            const responseData = await response.json();
            console.log(responseData)
            setStuff({
                ...stuffFromRoute,
                showResult: true,
                endPointMessage: responseData
            })
    
        }
        catch (err) {
            console.log(err);
            setStuff({
                ...stuffFromRoute,
                error: err.error
            })
        }
    }


    const getProtectedRoute = async () => {

        console.log("getProtectedRoute function ran")
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`http://localhost:3000/api/protected`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const responseData = await response.json();
            console.log(responseData)
            setStuff({
                ...stuffFromRoute,
                showResult: true,
                endPointMessage: responseData
            })
    
        }
        catch (err) {
            console.log(err);
            setStuff({
                ...stuffFromRoute,
                error: err.error
            })
        }
    }


    return (
        <div className="h-screen w-full items-center justify-center flex flex-col gap-3">
            <button className="bg-sky-500 py-2 px-4 rounded-sm text-center font-dmSans text-neutral-50 font-medium cursor-pointer hover:bg-sky-600" onClick={()=>getPublicRoute()}>Get public route</button>
            <button className="bg-sky-500 py-2 px-4 rounded-sm text-center font-dmSans text-neutral-50 font-medium cursor-pointer hover:bg-sky-600" onClick={()=>getProtectedRoute()}>Get admin route</button>

            <div className="mx-auto mt-24">
                <p>{stuffFromRoute.endPointMessage.msg}</p>
                {
                    stuffFromRoute.error !== null && <p>{stuffFromRoute.error}</p>
                }
            </div>

        </div>
    )
}
