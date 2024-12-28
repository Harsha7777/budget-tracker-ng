import { BudgetOverview } from "@/components/budget-overview"
import { BudgetCalendar } from "@/components/budget-calendar"
import { ExpenseTracker } from "@/components/expense-tracker"
import { IncomeBreakdown } from "@/components/income-breakdown"
import { MonthSelector } from "@/components/month-selector"

export default function BudgetTracker() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Budget Tracker</h1>
        <MonthSelector />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <BudgetOverview />
        <IncomeBreakdown />
        <ExpenseTracker />
        <BudgetCalendar />
      </div>
    </div>
  )
}

