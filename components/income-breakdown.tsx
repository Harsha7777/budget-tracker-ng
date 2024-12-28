"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function IncomeBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Income Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Actual</TableHead>
              <TableHead>Diff</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Salary</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>$0.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Investments</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>$0.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Total</TableCell>
              <TableCell className="font-medium">$0.00</TableCell>
              <TableCell className="font-medium">$0.00</TableCell>
              <TableCell className="font-medium">$0.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

