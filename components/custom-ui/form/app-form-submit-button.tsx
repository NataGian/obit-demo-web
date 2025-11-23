import {Loader2} from "lucide-react";
import {Button} from "@/components/ui";
import React from "react";

export function AppFormSubmitButton({
                                        children,
                                        isSubmitting,
                                    }: {
    children: React.ReactNode;
    isSubmitting: boolean;
}) {
    return (
        <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting
                ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                ) : (
                    children
                )}
        </Button>
    );
}
