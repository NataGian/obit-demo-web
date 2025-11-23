'use client'

import React from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui";
import {AppFormSubmitButton} from "@/components/custom-ui";
import {FieldConfig} from "@/lib/field-config";

interface AppFormProps {
    form: any;
    onSubmitForm?: (e: React.FormEvent<HTMLFormElement>) => void;
    fields: FieldConfig[];
    children?: React.ReactNode;
    buttonText?: string;
}

export const AppForm: React.FC<AppFormProps> = ({
                                                    form,
                                                    onSubmitForm,
                                                    fields,
                                                    children,
                                                    buttonText,
                                                }) => {
    return (
        <Form {...form}>
            <form onSubmit={onSubmitForm} className="flex flex-col gap-6 min-h-full">
                {fields.map((field) => (
                    <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name}
                        rules={field.rules}
                        render={({field: controlField}) => (
                            <FormItem>
                                {field.label && <FormLabel>{field.label}</FormLabel>}
                                <FormControl>{field.render(controlField)}</FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                ))}

                {children}

                {buttonText && (
                    <AppFormSubmitButton isSubmitting={form.formState.isSubmitting}>
                        {buttonText}
                    </AppFormSubmitButton>
                )}
            </form>
        </Form>
    );
};
