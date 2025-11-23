import React from "react";
import {RegisterOptions} from "react-hook-form";

export interface FieldConfig {
    name: string;
    label?: string;
    render: (fieldProps: any) => React.ReactNode;
    rules?: RegisterOptions;
}
