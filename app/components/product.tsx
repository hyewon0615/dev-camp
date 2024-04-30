import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Products() {
  return (
    <div className="">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>주문 상품 정보</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="flex">
          <img src="https://ahhyzbgcyoyfrzmvrgce.supabase.co/storage/v1/object/public/images/test/cat.png" />
          <div>
            <p>상품이름</p>
            <p>옵션</p>
            <p>20000원</p>
          </div>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
}
