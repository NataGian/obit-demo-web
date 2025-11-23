'use client'

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui";
import {ArrowUpFromLine, Check, CheckCircle2} from "lucide-react";
import {useState} from "react";

export const ScheduledDepartures = () => {
    const [departedCars, setDepartedCars] = useState<Set<string>>(new Set());

    const departingCars = [
        {time: "14:00", plate: "MNO-987"},
        {time: "14:45", plate: "PQR-246"},
        {time: "15:15", plate: "STU-135"},
        {time: "15:45", plate: "VWX-864"},
        {time: "16:15", plate: "YZA-753"},
    ];

    const handleMarkDeparted = (plate: string) => {
        setDepartedCars(prev => {
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
                    <ArrowUpFromLine className="w-5 h-5 text-red-600"/>
                    Scheduled Departures
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {departingCars.map((car, index) => {
                        const hasDeparted = departedCars.has(car.plate);
                        return (
                            <div
                                key={index}
                                className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                                    hasDeparted
                                        ? 'bg-orange-50 border border-orange-200'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`font-mono text-sm font-medium ${
                                        hasDeparted ? 'text-red-700 line-through' : 'text-gray-700'
                                    }`}>
                                        {car.plate}
                                    </span>
                                    {hasDeparted && (
                                        <CheckCircle2 className="w-4 h-4 text-red-600"/>
                                    )}
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`text-sm font-medium ${
                                        hasDeparted ? 'text-red-600' : 'text-gray-600'
                                    }`}>
                                        {car.time}
                                    </span>
                                    <button
                                        onClick={() => handleMarkDeparted(car.plate)}
                                        className="px-3 py-1 rounded-md text-xs font-semibold transition-all bg-red-600 text-white hover:bg-red-600 hover:scale-105">
                                        {hasDeparted ? (
                                            <span className="flex items-center gap-1">
                                                <Check className="w-3 h-3"/>
                                                Departed
                                            </span>
                                        ) : (
                                            'Check Out'
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