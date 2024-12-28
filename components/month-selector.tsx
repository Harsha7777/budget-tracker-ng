"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MonthSelector() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" size="icon">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Select defaultValue="january">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select month" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="january">January</SelectItem>
          <SelectItem value="february">February</SelectItem>
          <SelectItem value="march">March</SelectItem>
          {/* Add other months */}
        </SelectContent>
      </Select>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

