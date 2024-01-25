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

export default function Login() {
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
      <div className="px-8 py-4 lg:max-w-[500px] lg:mt-[100px] lg:ml-[50px] ">
        <Link className="uppercase text-primary font-bold text-[1rem]" href="/">
          ChowSwap
        </Link>

        <h3 className="text-[30px] mt-5 font-semibold">Log in</h3>

        <div className="mt-5">
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

              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="policy" />
                  <label
                    htmlFor="policy"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>

                <Link className="text-[14px] underline" href="/forgot-password">
                  Forgot password
                </Link>
              </div>

              <p className="text-[12px] text-grey">
                Don&apos;t have an account?{" "}
                <Link className="underline" href="/sign-up">
                  Sign Up
                </Link>
                .
              </p>

              <p className="text-[12px] text-grey">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
              <Button
                className="rounded-[24px] text-[#fff] w-full lg:w-auto mt-5 min-w-[140px] py-4 px-8 "
                type="submit"
              >
                Log in
              </Button>
            </form>
          </Form>

          <div className="mt-5 flex flex-col lg:flex-row gap-4">
            <GoogleButton />
            <FacebookButton />
          </div>
        </div>
      </div>
    </div>
  );
}
