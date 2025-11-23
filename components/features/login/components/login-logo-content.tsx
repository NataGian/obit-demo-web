import {ParkingCircle} from "lucide-react";

export const LoginLogoContent = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 bg-blue-700 relative">
            <div className="absolute inset-0 flex items-center justify-center p-20">
                <ParkingCircle className="w-12 h-12 text-white"/>
                <p className="text-white text-4xl font-bold pl-4">Parking</p>
            </div>
        </div>
    )
}