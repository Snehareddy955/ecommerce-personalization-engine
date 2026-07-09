#  Ecommerce Personalization Rules Engine

A Flask-based, LLM-inspired mini application that analyzes customer shopping behavior from user event streams and classifies shoppers into different behavioral segments. The application provides personalized recommendations to improve customer engagement and conversion.

---

## 📌 Project Overview

This project simulates an e-commerce personalization engine.

Users can enter or simulate customer browsing events, and the application classifies the shopper into a behavioral category such as:

- Browser
- Comparer
- Discount Seeker
- Cart Abandoner
- Loyal Customer

Based on the detected behavior, the application recommends the next best action for the business.

---

## 🚀 Features

### ✅ Event Simulator

Quickly simulate customer actions using buttons.

Examples:

- Home
- Category
- Product
- Compare
- Coupon
- Cart
- Purchase
- Exit

---

### ✅ Shopper Classification

Classifies customers into behavioral segments using event-based rules.

Current shopper states:

- Browser
- Comparer
- Discount Seeker
- Cart Abandoner
- Loyal Customer

---

### ✅ Confidence Score

Displays the confidence percentage for the detected shopper state using a progress bar.

---

### ✅ Evidence

Explains why the customer was classified into a particular shopper state.

---

### ✅ Recommendation Engine

Provides personalized business recommendations for each shopper category.

Example:

- Send abandoned cart email
- Offer discount coupon
- Reward loyal customers
- Recommend trending products

---

### ✅ AI Recommendation

Generates an additional recommendation layer.

> **Note:**  
> This project currently uses a fallback recommendation engine because the OpenAI API quota was unavailable during development. The design supports replacing the fallback with live LLM responses by configuring an OpenAI API key.

---

### ✅ Session History

Stores the last few analyzed shopper states during the session.

---

## 🛠 Technologies Used

- Python 3
- Flask
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- JSON

---

## 📂 Project Structure

```
LLM-project/

│── app.py
│── classifier.py
│── llm.py
│── requirements.txt
│── README.md

├── templates/
│      └── index.html

├── static/
│      ├── style.css
│      └── script.js

└── .env (optional)
```

---

## ⚙ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ecommerce-personalization-engine.git
```

---

### 2. Open the project

```bash
cd ecommerce-personalization-engine
```

---

### 3. Create a virtual environment

Windows

```bash
python -m venv venv
```

Activate

```bash
venv\Scripts\activate
```

---

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

---

### 5. Run the application

```bash
python app.py
```

---

### 6. Open in browser

```
http://127.0.0.1:5000
```

---

# 🧪 Sample Test Cases

## Test Case 1

Input

```
home
product
cart
exit
```

Expected Output

```
Shopper State:
Cart Abandoner

Recommendation:
Send abandoned cart email
```

---

## Test Case 2

Input

```
home
coupon
product
```

Expected Output

```
Shopper State:
Discount Seeker
```

---

## Test Case 3

Input

```
compare
compare
product
```

Expected Output

```
Shopper State:
Comparer
```

---

## Test Case 4

Input

```
purchase
purchase
purchase
```

Expected Output

```
Shopper State:
Loyal Customer
```

---

## 📈 Future Improvements

- Real OpenAI API integration
- Machine Learning-based classification
- Customer segmentation dashboard
- CSV event upload
- Download PDF reports
- User authentication
- Database integration
- Real-time analytics
- Personalized email generation
- A/B testing recommendations

---

## 💡 Business Use Cases

- E-commerce personalization
- Marketing automation
- Customer behavior analysis
- Recommendation systems
- Conversion rate optimization (CRO)

---

## 📷 Screenshots

Add screenshots of:

- Home Page
- Event Simulator
- Shopper Classification Result
- Recommendation Output
- Session History

---

## 👩‍💻 Author

**Sneha Reddy**

B.Tech – Artificial Intelligence & Machine Learning

Interested in:

- Software Development
- Artificial Intelligence
- Data Analytics
- Machine Learning

---

## 📜 License

This project is created for educational and portfolio purposes.
