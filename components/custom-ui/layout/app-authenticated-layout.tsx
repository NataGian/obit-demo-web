import React from "react";
import {Toaster} from "sonner";
import {AppPageLayout, AppTopNavigation} from "@/components/custom-ui";

export const AppAuthenticatedLayout = ({
                                           children,
                                       }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Toaster position="top-right"/>
            <AppTopNavigation/>
            <main className="flex-1 flex flex-col">
                <AppPageLayout>
                    {children}
                </AppPageLayout>
            </main>
        </div>
    );
};