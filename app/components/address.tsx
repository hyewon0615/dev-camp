"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const FormSchema = z.object({
  message: z.string({
    required_error: "배송메세지를 선택해주세요.",
  }),
});

export default function Address() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  return (
    <div className="">
      <Card className="w-[500px]">
        <Form {...form}>
          <CardHeader>
            <CardTitle>배송 정보</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex">
            <div className="flex  justify-between w-[100%]">
              <div className="">
                <p>주문자 이름</p>
                <p>010-9038-8541</p>
                <p>서울특별시 은평구 248-74</p>
                <p>59439</p>
              </div>
              <Button>변경</Button>
            </div>
          </CardContent>
          <CardFooter>
            <form className="w-2/3 space-y-6">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>배송 메세지</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="배송메세지를 입력해주세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          경비실에 두세요
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          현관앞에 두세요
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          오기전에 전화주세요
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          직접입력하기 아직 못함
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </CardFooter>{" "}
        </Form>
      </Card>
    </div>
  );
}
