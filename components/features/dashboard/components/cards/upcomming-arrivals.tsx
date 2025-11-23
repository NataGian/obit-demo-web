'use client'

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui";
import {ArrowDownToLine, Check, CheckCircle2} from "lucide-react";
import {useState} from "react";

export const UpcomingArrivals = () => {
    const [arrivedCars, setArrivedCars] = useState<Set<string>>(new Set());

    const upcomingCars = [
        {time: "14:30", plate: "ABC-123"},
        {time: "15:00", plate: "XYZ-789"},
        {time: "15:30", plate: "DEF-456"},
        {time: "16:00", plate: "GHI-321"},
        {time: "16:30", plate: "JKL-654"},
    ];

    const handleMarkArrived = (plate: string) => {
        setArrivedCars(prev => {
            const newSet = new Set(prev);
            if (newSet.has(plate)) {
                newSet.delete(plate);
            } else {
                newSet.add(plate);
            }
            return newSet;
        });
    };

    return (
        <Card
            className="hover:shadow-lg transition-shadow duration-200 border-l-4 overflow-hidden relative group">
            <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <ArrowDownToLine className="w-5 h-5 text-green-600"/>
                    Upcoming Arrivals
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {upcomingCars.map((car, index) => {
                        const hasArrived = arrivedCars.has(car.plate);
                        return (
                            <div
                                key={index}
                                className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                                    hasArrived
                                        ? 'bg-green-50 border border-green-200'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`font-mono text-sm font-medium ${
                                        hasArrived ? 'text-green-700 line-through' : 'text-gray-700'
                                    }`}>
                                        {car.plate}
                                    </span>
                                    {hasArrived && (
                                        <CheckCircle2 className="w-4 h-4 text-green-600"/>
                                    )}
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`text-sm font-medium ${
                                        hasArrived ? 'text-green-600' : 'text-gray-600'
                                    }`}>
                                        {car.time}
                                    </span>
                                    <button
                                        onClick={() => handleMarkArrived(car.plate)}
                                        className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                                            hasArrived
                                                ? 'bg-green-600 text-white hover:bg-green-700 hover:scale-105'
                                                : 'bg-green-700 text-white hover:bg-green-700 hover:scale-105'
                                        }`}
                                    >
                                        {hasArrived ? (
                                            <span className="flex items-center gap-1">
                                                <Check className="w-3 h-3"/>
                                                Arrived
                                            </span>
                                        ) : (
                                            'Check In'
                                        )}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}