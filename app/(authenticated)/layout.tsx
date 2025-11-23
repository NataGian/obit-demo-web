import {AppAuthenticatedLayout} from "@/components/custom-ui";
import React from "react";

export default async function AuthenticatedPageLayout({
                                                          children,
                                                      }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AppAuthenticatedLayout>
            {children}
        </AppAuthenticatedLayout>
    );
}
