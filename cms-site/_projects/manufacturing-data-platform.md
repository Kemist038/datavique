---
order: 1
num: "01"
title: "Manufacturing Data Platform"
kicker: "Flagship · Manufacturing · ERPNext"
description: "An analytics platform over ERPNext that models sales, purchasing, inventory, production, WIP, quality, BOM and stock movement — so management reads one version of the plant."
flow:
  - "ERPNext"
  - "Operational data"
  - "PostgreSQL"
  - "ETL"
  - "Analytics model"
  - "Power BI"
  - "Decisions"
problem: "Plant reporting lived in spreadsheet exports from ERPNext. Each department pulled its own numbers, so stock, WIP and production figures disagreed in every review meeting."
data: "ERPNext transactional tables — sales and purchase orders, stock ledger entries, work orders, job cards, BOMs and quality inspections — extracted on a nightly schedule. Demo data: a synthetic mid-sized discrete manufacturer."
engineering:
  - "Incremental extraction from the ERPNext database into a PostgreSQL staging schema"
  - "SQL transformations into a dimensional model: fact_stock_movement, fact_production, fact_sales with shared date, item and warehouse dimensions"
  - "BOM explosion to cost WIP at component level"
  - "Data-quality checks for unposted entries, negative stock and orphaned work orders"
  - "Power BI semantic model with DAX measures for inventory days, yield and on-time delivery"
analysis: "With stock and production on one model, slow-moving inventory and WIP stuck between operations became visible by item and warehouse — questions that previously took a day of spreadsheet work."
model:
  - item: "Inventory days on hand"
    detail: "Item × warehouse · daily"
  - item: "Production yield"
    detail: "Work order × operation · daily"
  - item: "WIP value at cost"
    detail: "BOM component · daily"
  - item: "On-time delivery"
    detail: "Sales order line · daily"
sql: |
  -- Daily closing stock per item and warehouse
  SELECT d.date_key,
         sle.item_code,
         sle.warehouse,
         SUM(sle.actual_qty) OVER (
           PARTITION BY sle.item_code, sle.warehouse
           ORDER BY d.date_key
         ) AS closing_qty
  FROM staging.stock_ledger_entry sle
  JOIN analytics.dim_date d ON d.date = sle.posting_date
  WHERE sle.is_cancelled = 0;
result: "One trusted model replaced departmental exports; review meetings moved from reconciling numbers to deciding what to do about them."
stack:
  - "ERPNext"
  - "PostgreSQL"
  - "SQL"
  - "Python"
  - "Power BI"
  - "DAX"
  - "Git"
repository: "https://github.com/"
demo: ""
---
