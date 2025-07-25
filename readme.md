# 💰 Agetware Bank Lending System (Backend Only)

A robust lending system API built with **Node.js**, **Express**, and **SQLite**. It enables banks or lenders to manage loans, payments, and customer overviews seamlessly.

---

## ⚙️ Features

- ➕ Create Loans
- 💸 Record Payments
- 📒 View Loan Ledger
- 👤 Customer Loan Overview

---

## 🧠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** SQLite (via sqlite3)
- **Testing Tool:** Thunder Client 

---


### 🔧 Setup

1. **Install dependencies**
  ```bash
  npm install
  ```
2. **Start the server**
  ```bash
    node app.js
  ```
3.**Server should run at:**
  ```bash
      http://localhost:5000/
  ```

### 🔌API Endpoints
**➕ POST /api/v1/loans**
Create a new loan

json
```
{
  "customer_id": "cust123",
  "loan_amount": 100000,
  "loan_period_years": 2,
  "interest_rate_yearly": 2
}
```
**💸 POST /api/v1/loans/:loanId/payments**
Record a loan payment
json
```
{
  "amount": 5000
}
```
**📒 GET /api/v1/loans/:loanId/ledger**

Get loan ledger with payment history

**👤 GET /api/v1/customers/:customerId/overview**

Get customer’s loan summary with EMI, total paid, and remaining balance

## Dependencies

express

dotenv

uuid

sqlite3

## ✅ Status
All routes tested with Thunder Client
Database auto-initialized on run




