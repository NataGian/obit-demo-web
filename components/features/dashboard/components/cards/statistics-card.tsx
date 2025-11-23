import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui";
import React from "react";

export const StatisticsCard = ({title, value, description, valueColor = "text-blue-600"}: {
    title: string;
    value: number;
    description: string;
    valueColor?: string;
}) => {
    return (
        <Card
            className="hover:shadow-l hover:scale-[1.02] transition-all duration-300 border-l-4 overflow-hidden relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 border-l-blue-500"/>

            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        {title}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-1">
                <div className={`text-5xl font-extrabold ${valueColor} tracking-tight`}>
                    {value.toLocaleString()}
                </div>
                <p className="text-xs text-gray-600 font-medium pt-1">
                    {description}
                </p>
            </CardContent>

            <div
                className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"/>
        </Card>
    );
};