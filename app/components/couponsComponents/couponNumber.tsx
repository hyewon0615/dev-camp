"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const FormSchema = z.object({
  couponNumber: z.number(),
});

export default function CouponNumber() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(values: z.infer<typeof FormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="">
      <Form {...form}>
        <FormLabel>쿠폰번호</FormLabel>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-[100%] justify-between gap-[10px]"
        >
          <FormField
            control={form.control}
            name="couponNumber"
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <FormControl>
                  <Input placeholder="쿠폰 번호 입력" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">번호확인</Button>
        </form>
      </Form>
    </div>
  );
}
