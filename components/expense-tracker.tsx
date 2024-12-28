"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ExpenseTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fixed Monthly Bills</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bill Name</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Actual</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Rent</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>1st</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Utilities</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>15th</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Total</TableCell>
              <TableCell className="font-medium">$0.00</TableCell>
              <TableCell className="font-medium">$0.00</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

