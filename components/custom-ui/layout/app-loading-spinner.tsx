import {cn} from "@/lib/utils";

export const AppLoadingSpinner = ({
                                      size = 40,
                                      color = "#0070f3",
                                      thickness = 4,
                                      fullscreen = true,
                                  }) => {
    return (
        <div
            className={cn(
                "flex items-center justify-center w-full",
                fullscreen && "min-h-screen",
            )}
        >
            <div
                className="inline-block animate-spin rounded-full border-solid border-t-current border-r-transparent border-b-current border-l-current"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderWidth: `${thickness}px`,
                    color: color,
                }}
                role="status"
            />
        </div>
    );
};
