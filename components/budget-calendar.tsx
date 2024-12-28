"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export function BudgetCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bill Reminder</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar 
          mode="single"
          className="rounded-md border"
          modifiers={{
            payDay: [new Date(2024, 0, 1), new Date(2024, 0, 15)],
          }}
          modifiersStyles={{
            payDay: {
              fontWeight: "bold",
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
            }
          }}
        />
      </CardContent>
    </Card>
  )
}

