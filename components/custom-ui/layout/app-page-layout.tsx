import React from "react";
import {AppSuspense} from "@/components/custom-ui";

export const AppPageLayout = ({
                                  children
                              }: { children: React.ReactNode }) => {
    return (
        <AppSuspense>
            <div className="flex-1 p-4">
                <div className="w-full overflow-auto">
                    {children}
                </div>
            </div>
        </AppSuspense>
    );
};
