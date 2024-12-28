"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BudgetOverview() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Left to Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$0.00</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Left to Spend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$0.00</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Total Money</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$0.00</div>
        </CardContent>
      </Card>
    </div>
  )
}

