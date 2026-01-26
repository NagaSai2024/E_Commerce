import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@radix-ui/react-switch";
import { useState } from "react";

export default function FieldDemo() {

    const [value,setValue] = useState([200,800])
    return (
        <FieldSet className="w-full max-w-xs">
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input id="username" type="text" placeholder="Enter your name" />
                    <FieldDescription>Choose a unique username for your account</FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <FieldDescription>Must be at least 8 characters long.</FieldDescription>
                    <Input id="password" type="password" placeholder="....." />
                </Field>
                <Field>
                    <FieldLabel htmlFor="message">Feedback</FieldLabel>
                    <Textarea
                        id="feedback"
                        placeholder="Your feedback helps us improve..."
                    />
                    <FieldDescription>Share your thoughts about the service.</FieldDescription>
                </Field>
                <Field orientation="horizontal" className="w-fit">
                    <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
                    <Switch id="2fa"/>
                </Field>
                <Field>
                    <FieldTitle>Price Range</FieldTitle>
                    <FieldDescription>
                        Set your range ($
                        <span>{value[0]}</span> -{ " "}
                        <span>{value[1]}</span>).
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </FieldSet>
    )
}