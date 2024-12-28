import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { BudgetOverview } from "@/components/budget-overview"
import { BudgetCalendar } from "@/components/budget-calendar"
import { ExpenseTracker } from "@/components/expense-tracker"
import { IncomeBreakdown } from "@/components/income-breakdown"
import { MonthYearSelector } from "@/components/month-year-selector"
import { UserNav } from "@/components/user-nav"

export default async function DashboardPage() {
  const session = await getSession()
  if (!session) redirect('/login')

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">Budget Tracker</h1>
          <MonthYearSelector />
        </div>
        <UserNav user={session} />
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

