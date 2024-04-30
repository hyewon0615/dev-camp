import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CouponNumber from "./couponsComponents/couponNumber";
import BasicCoupons from "./couponsComponents/basicCoupon";
import Point from "./couponsComponents/point";

export default function Coupons() {
  return (
    <div className="">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>쿠폰/포인트</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <BasicCoupons />
          <CouponNumber />
          <Point />
        </CardContent>
      </Card>
    </div>
  );
}
