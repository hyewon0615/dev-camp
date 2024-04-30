import Image from "next/image";
import Products from "./components/product";
import Address from "./components/address";
import { Form } from "@/components/ui/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Products />
        <Address />
      </div>
    </main>
  );
}
