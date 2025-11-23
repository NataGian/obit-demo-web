import React, {Suspense} from "react";
import {AppLoadingSpinner} from "@/components/custom-ui";

export const AppSuspense = ({children}: { children: React.ReactNode }) => {
    return <Suspense fallback={<AppLoadingSpinner/>}>{children}</Suspense>;
};
