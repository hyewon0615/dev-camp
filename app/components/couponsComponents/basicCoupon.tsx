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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  coupon: z.string(),
});

export default function BasicCoupons() {
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
        <FormLabel>쿠폰</FormLabel>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-[100%] justify-between gap-[10px]"
        >
          <FormField
            control={form.control}
            name="coupon"
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="쿠폰선택하기" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">쿠폰1</SelectItem>
                    <SelectItem value="m@google.com">쿠폰2</SelectItem>
                    <SelectItem value="m@support.com">쿠폰3</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Button type="submit">쿠폰적용</Button> */}
        </form>
      </Form>
    </div>
  );
}
