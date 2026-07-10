def generate_recommendation(events, state):

    recommendations = {
        "Browser":
            "The customer is browsing products. Show trending and best-selling items.",

        "Comparer":
            "The customer is comparing products. Display reviews and comparison charts.",

        "Discount Seeker":
            "Offer a limited-time discount or coupon to encourage a purchase.",

        "Cart Abandoner":
            "The user abandoned the cart. Offer free shipping and send an abandoned cart email.",

        "Loyal Customer":
            "Reward this customer with loyalty points and exclusive offers."
    }

    return recommendations.get(
        state,
        "No recommendation available."
    )