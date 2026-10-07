---
order: 2
num: "02"
title: "Olist E-Commerce Warehouse"
kicker: "Data engineering · E-commerce"
description: "The public Olist Brazilian marketplace dataset rebuilt end-to-end: raw CSVs into a PostgreSQL star schema with quality checks and an analytics layer."
flow:
  - "Raw CSV"
  - "PostgreSQL"
  - "Cleaning"
  - "Dimensional model"
  - "SQL transforms"
  - "Analytics layer"
  - "Power BI"
problem: "The Olist dataset arrives as separate CSV files with duplicated keys, inconsistent city names and several timestamps per order. It is easy to chart and hard to trust."
data: "Olist’s public e-commerce dataset (orders, items, payments, reviews, customers, sellers, products, geolocation), loaded as-is into a raw schema."
engineering:
  - "Raw → staging → marts layering in PostgreSQL"
  - "Star schema: fact_order_items with dim_customer, dim_seller, dim_product, dim_date"
  - "Deduplicated geolocation and normalised city/state names"
  - "Tests for key uniqueness, null foreign keys and impossible delivery dates"
  - "KPI views for revenue, delivery performance, seller performance and review scores"
analysis: "Late deliveries cluster by seller–customer state pairs, and review scores drop sharply once an order passes its estimated delivery date — delivery promise, not product, drives most low ratings."
model:
  - item: "fact_order_items"
    detail: "Order item · revenue, freight, delivery days"
  - item: "dim_customer"
    detail: "Customer · state, city, first order"
  - item: "dim_seller"
    detail: "Seller · state, rating, volume"
  - item: "dim_product"
    detail: "Product · category, weight, size"
sql: |
  -- Review score by delivery outcome
  SELECT CASE WHEN f.delivered_at > f.estimated_at
              THEN 'late' ELSE 'on time' END AS outcome,
         ROUND(AVG(r.review_score), 2)      AS avg_score,
         COUNT(*)                           AS orders
  FROM marts.fact_orders f
  JOIN marts.dim_review r USING (order_id)
  GROUP BY 1;
result: "A reusable warehouse pattern — layered schemas, tests and a star model — that the Manufacturing Data Platform now follows."
stack:
  - "PostgreSQL"
  - "SQL"
  - "Python"
  - "pandas"
  - "Power BI"
  - "Git"
repository: "https://github.com/"
demo: ""
---
