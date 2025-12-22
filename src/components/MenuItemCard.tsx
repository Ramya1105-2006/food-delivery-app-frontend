"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import type { MenuItem } from "@/lib/types";
import { PlusCircle } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-secondary/50">
      <div className="flex-1">
        <h3 className="font-bold font-headline">{item.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        <p className="mt-2 font-semibold text-primary">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-md">
            <Image
                src={item.image.imageUrl}
                alt={item.name}
                data-ai-hint={item.image.imageHint}
                fill
                className="object-cover"
            />
        </div>
        <Button size="sm" variant="outline" onClick={handleAddToCart} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add
        </Button>
      </div>
    </div>
  );
}
