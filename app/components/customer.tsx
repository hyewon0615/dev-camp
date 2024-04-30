import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Customer() {
  return (
    <div className="">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>주문자 정보</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="flex">
          <div className="flex  justify-between w-[100%]">
            <div className="">
              <p>주문자 이름</p>
              <p>010-9038-8541</p>
              <p>gpdnjs154@naver.com</p>
            </div>
            <Button variant="outline">수정</Button>
          </div>
        </CardContent>
        {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
      </Card>
    </div>
  );
}
