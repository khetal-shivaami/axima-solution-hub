
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

// New responsive table components
const ResponsiveTable = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    mobileTitle?: string,
    hiddenColumns?: string[]
  }
>(({ className, children, mobileTitle, hiddenColumns = [], ...props }, ref) => (
  <div 
    ref={ref}
    data-mobile-title={mobileTitle}
    data-hidden-columns={hiddenColumns.join(',')}
    className={cn(
      "w-full overflow-hidden rounded-lg", 
      "md:overflow-auto",
      className
    )} 
    {...props}
  >
    {children}
  </div>
))
ResponsiveTable.displayName = "ResponsiveTable"

const ResponsiveTableRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    feature?: string,
    isHeader?: boolean,
    values?: React.ReactNode[]
  }
>(({ className, children, feature, isHeader, values = [], ...props }, ref) => (
  <div
    ref={ref}
    data-feature={feature}
    data-is-header={isHeader ? "true" : "false"}
    className={cn(
      "flex flex-col border-b border-gray-700 p-4 last:border-b-0",
      "sm:grid sm:grid-cols-2 md:hidden",
      isHeader ? "bg-gray-800/80 font-medium" : "hover:bg-gray-800/30",
      className
    )}
    {...props}
  >
    {isHeader ? (
      <div className="font-medium text-lg text-white mb-2">{feature}</div>
    ) : (
      <>
        <div className="font-medium text-white mb-2">{feature}</div>
        <div className="grid gap-2">
          {values?.map((value, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-300">
              {value}
            </div>
          ))}
        </div>
      </>
    )}
  </div>
))
ResponsiveTableRow.displayName = "ResponsiveTableRow"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  ResponsiveTable,
  ResponsiveTableRow
}
