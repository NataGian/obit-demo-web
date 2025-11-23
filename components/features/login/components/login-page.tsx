import React from "react";
import {AppSuspense} from "@/components/custom-ui";
import {LoginFormContent, LoginLogoContent} from "@/components/features/login";

export const LoginPage = () => {
    return (
        <AppSuspense>
            <div className="min-h-screen flex">
                <LoginLogoContent/>
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-muted/30">
                    <LoginFormContent/>
                </div>
            </div>
        </AppSuspense>
    );
};