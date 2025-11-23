'use client'

import * as z from "zod";
import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {useRouter} from "next/navigation";
import {Button, Input} from "@/components/ui";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AppForm} from "@/components/custom-ui";

export const loginSchema = z
    .object({
        email: z.email("Invalid email address."),
        password: z.string().min(1, "Please enter a valid password."),
    });

type FormData = z.infer<typeof loginSchema>;

export function LoginForm() {
    const router = useRouter();
    const form = useForm<FormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmitForm = form.handleSubmit(() => {
        router.push("/dashboard");
    });

    const pending = form.formState.isSubmitting;
    const [showPassword, setShowPassword] = useState(false);

    return (
        <AppForm
            form={form}
            onSubmitForm={onSubmitForm}
            buttonText={"Login"}
            fields={[
                {
                    name: "email",
                    label: "Email",
                    render: (field) => (
                        <Input
                            {...field}
                            type="email"
                            disabled={pending}
                            placeholder="Enter your email"
                        />
                    ),
                },
                {
                    name: "password",
                    label: "Password",
                    render: (field) => (
                        <div className="relative">
                            <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                disabled={pending}
                                placeholder="Enter your password"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-primary"/>
                                ) : (
                                    <Eye className="h-4 w-4 text-primary"/>
                                )}
                            </Button>
                        </div>
                    ),
                },
            ]}
        />
    );
}