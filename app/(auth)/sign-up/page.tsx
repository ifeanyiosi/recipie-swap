"use client";

import { loginSchema } from "@/validations/validations";
import Link from "next/link";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GoogleButton from "@/components/google-button";
import FacebookButton from "@/components/facebook-button";

export default function SignIn() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex flex-col w-full items-start justify-center ">
      <div className="px-8 py-4 w-full lg:max-w-[500px] lg:mt-[100px] lg:ml-[50px] ">
        <Link className="uppercase text-primary font-bold text-[1rem]" href="/">
          ChowSwap
        </Link>

        <h3 className="text-[30px] mt-5 font-semibold">Sign in</h3>

        <div className="mt-5 w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="lg:max-w-[500px] input-field"
                        type="email"
                        placeholder="Email address"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="lg:max-w-[500px] input-field"
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="text-[12px] text-grey">
                Have have an account?{" "}
                <Link className="underline" href="/login">
                  Log in
                </Link>
                .
              </p>

              <Button
                className="rounded-[24px] text-[#fff] w-full lg:w-auto mt-5 min-w-[140px] py-4 px-8 "
                type="submit"
              >
               Sign up
              </Button>
            </form>
          </Form>

          <div className="mt-5 flex flex-col gap-4">
            <GoogleButton />
            <FacebookButton />
          </div>
        </div>
      </div>
    </div>
  );
}