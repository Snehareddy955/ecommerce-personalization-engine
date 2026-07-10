def classify(events):

    events = [event.lower().strip() for event in events]

    if "cart" in events and "purchase" not in events:
        return {
            "state": "Cart Abandoner",
            "confidence": "96%",
            "evidence": "User added items to the cart but left without purchasing.",
            "recommendation": "Send abandoned cart email."
        }

    elif "coupon" in events:
        return {
            "state": "Discount Seeker",
            "confidence": "94%",
            "evidence": "User searched for discounts.",
            "recommendation": "Offer discount coupon."
        }

    elif events.count("compare") >= 2:
        return {
            "state": "Comparer",
            "confidence": "90%",
            "evidence": "User compared multiple products.",
            "recommendation": "Highlight product comparison."
        }

    elif events.count("purchase") >= 3:
        return {
            "state": "Loyal Customer",
            "confidence": "99%",
            "evidence": "User made multiple purchases.",
            "recommendation": "Reward with loyalty points."
        }

    
    elif  "wishlist" in events:
        return{

            "state":"Wishlist User",

            "confidence":"88%",

            "evidence":"Added products to wishlist.",

            "recommendation":"Send wishlist reminder."

}
    elif "reviews" in events or "review" in events or "faq" in events:
        return {
            "state": "Researcher",
            "confidence": "87%",
            "evidence": "Viewed reviews or FAQs before buying.",
            "recommendation": "Display customer testimonials and detailed specifications."
        }
    elif "login" in events and "purchase" in events:
        return {
            "state": "Returning Customer",
            "confidence": "91%",
            "evidence": "Existing customer logged in and purchased.",
            "recommendation": "Recommend products based on previous purchases."
        }
    elif "checkout" in events or "payment" in events:
        return {
            "state": "High Intent Buyer",
            "confidence": "97%",
            "evidence": "Reached checkout or payment page.",
            "recommendation": "Provide express checkout and free shipping."
        }
    elif events.count("product") >= 3:
        return {
            "state": "Product Explorer",
            "confidence": "85%",
            "evidence": "Viewed several product pages.",
            "recommendation": "Recommend similar and trending products."
        }
    else:
        return {
            "state": "Browser",
            "confidence": "80%",
            "evidence": "User is browsing products.",
            "recommendation": "Recommend trending products."
        }