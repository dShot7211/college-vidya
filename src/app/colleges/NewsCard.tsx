// components/NewsCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NewsCard() {
  return (
    <Card className="relative max-w-sm border border-gray-200 rounded-lg shadow-sm bg-[#fff7f2]">
      <Badge className="absolute top-2 right-2 bg-[#e63946] text-white text-xs font-semibold">
        CV in News
      </Badge>

      <CardContent className="pt-6 pb-4 px-4 space-y-4">
        <div className="text-2xl font-bold text-red-600">Outlook</div>
        <p className="text-sm font-semibold text-gray-800 leading-snug">
          CV Awarded the Best Advisory Platform for Online Education by Outlook.
        </p>
        <Button variant="outline" className="text-sm px-4 py-2 gap-2">
          Read More
          <ArrowRight className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
