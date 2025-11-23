'use client'

import {LogOut, ParkingCircle} from "lucide-react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui";

export const AppTopNavigation = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Add any logout logic here (clear tokens, etc.)
        router.push("/login");
    };

    return (
        <header className="border-b shadow-md sticky top-0 z-50 backdrop-blur-sm bg-white/95">
            <nav className="container flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg shadow-md">
                        <ParkingCircle className="w-6 h-6 text-white"/>
                    </div>
                    <div className="flex flex-col">
                        <span
                            className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Reception Parking
                        </span>
                        <span className="text-xs text-gray-500 font-medium">Management System</span>
                    </div>
                </div>

                <div className="absolute right-6">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleLogout}
                        className="flex items-center gap-2 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                        <LogOut className="w-4 h-4"/>
                        Logout
                    </Button>
                </div>
            </nav>
        </header>
    )
}