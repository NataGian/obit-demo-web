import {Card, CardContent, CardHeader} from "@/components/ui";
import React from "react";
import {LoginForm} from "@/components/features/login";
import {ParkingCircle} from "lucide-react";

export const LoginFormContent = () => {
    return (
        <div className="max-w-md w-full">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-foreground">Welcome</h1>
                <p className="mt-3 text-muted-foreground">
                    Log in to access your parking management dashboard
                </p>
            </div>
            <Card className="shadow-lg">
                <CardHeader className="pt-2 flex flex-col items-center">
                    <div className="w-15 h-15 bg-primary/10 rounded-full flex items-center justify-center">
                        <ParkingCircle className="w-8 h-8 text-blue-700"/>
                    </div>
                </CardHeader>
                <CardContent className="p-4 space-y-6">
                    <LoginForm/>
                </CardContent>
            </Card>
        </div>
    );
}