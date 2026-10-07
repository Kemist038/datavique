---
order: 4
num: "04"
title: "AI Data Analyst"
kicker: "AI + Data · In progress"
description: "Ask “What were our top 10 customers by revenue last quarter?” and get validated SQL, a result and a plain-English explanation."
flow:
  - "Question"
  - "LLM"
  - "Schema"
  - "SQL"
  - "Validation"
  - "PostgreSQL"
  - "Explanation"
problem: "Business users wait on analysts for simple questions. LLMs can write SQL, but unvalidated SQL against production data is a liability."
data: "The Olist warehouse schema and a sample of its marts — a realistic, documented star model for the model to reason over."
engineering:
  - "Schema summariser that feeds table and column descriptions to the model"
  - "SQL generation constrained to read-only marts"
  - "Validation: parse, EXPLAIN, row-limit and allow-listed tables before execution"
  - "Result explanation with the generated SQL shown for audit"
analysis: "Early tests: good schema descriptions matter more than prompt wording. Most failures are ambiguous business terms, not SQL syntax."
model:
  - item: "Parse"
    detail: "SQL is syntactically valid"
  - item: "Scope"
    detail: "Only allow-listed schemas and tables"
  - item: "Cost"
    detail: "EXPLAIN plan under threshold"
  - item: "Safety"
    detail: "Read-only, row limit enforced"
sql: |
  -- Generated for: "top 10 customers by revenue last quarter"
  SELECT c.customer_id, SUM(f.revenue) AS revenue
  FROM marts.fact_order_items f
  JOIN marts.dim_customer c USING (customer_key)
  JOIN marts.dim_date d USING (date_key)
  WHERE d.quarter = date_trunc('quarter', now()) - interval '3 months'
  GROUP BY 1 ORDER BY 2 DESC LIMIT 10;
result: "In progress. Next: an evaluation set of 100 business questions with expected answers."
stack:
  - "Python"
  - "LLM APIs"
  - "PostgreSQL"
  - "SQL"
  - "FastAPI"
repository: "https://github.com/"
demo: ""
---
