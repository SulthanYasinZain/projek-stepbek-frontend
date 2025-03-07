import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

interface TrainingCardProps {
  category: string;
  title: string;
  image: string;
  status: "Online" | "Offline";
  additionalInfo: string;
  price: string;
}

export default function TrainingCard({
  category,
  title,
  image,
  additionalInfo,
  price,
}: TrainingCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={image || "https://placehold.co/300x200"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="text-sm text-gray-600">{category}</div>
        <h3 className="font-bold text-lg">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">{additionalInfo}</span>
        </div>
        <div className="mt-3">
          <div className="text-sm text-gray-600">Harga</div>
          <div className="font-bold text-lg">{price}</div>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full bg-primary hover:bg-primary/90">
          Ikut Pelatihan
        </Button>
      </CardFooter>
    </Card>
  );
}
