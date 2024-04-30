import Image from "next/image";
import Products from "./components/product";
import Address from "./components/address";
import { Form } from "@/components/ui/form";
import Customer from "./components/customer";
import Coupons from "./components/coupons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mb-[300px]">
      <div className="flex flex-col gap-[15px]">
        <Products />
        <Customer />

        <Address />
        <Coupons />
      </div>
    </main>
  );
}
