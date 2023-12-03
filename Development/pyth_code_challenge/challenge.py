class Person:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
    
    def full_name(self):
        return self.first_name + " " + self.last_name
    

class Customer(Person):
    all_customers = []

    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)
        self.all_customers.append(self)
        self.reviews = []

    def add_review(self, restaurant, rating):
        new_review = Review(self, restaurant, rating)
        self.reviews.append(new_review)
        restaurant.add_review(new_review)

    def restaurants(self):
        return list({review.restaurant for review in self.reviews})

    @classmethod
    def all(cls):
        return cls.all_customers



class Restaurant:
    def __init__(self, name):
        self._name = self.check_name(name)
        self.reviews_list = []

    def check_name(self, string):
        if isinstance(string, str):
            return string
        else: 
            raise ValueError('Invalid input. Name must be a string')
        
    def restaurant_name(self):
        return self._name
    
    def reviews(self):
        return self.reviews_list

    def add_review(self, review):
        self.reviews_list.append(review)

    def customers(self):
        return list({review.customer for review in self.reviews_list})

    @classmethod
    def name(self):
        return self._name


class Review:
    reviews = []

    def __init__(self, customer, restaurant, rating):
        self.customer = customer
        self.restaurant = restaurant
        self.rating = rating
        self.reviews.append(self)
        restaurant.add_review(self)
        customer.add_review(self)

    @classmethod
    def review_rating(cls):
        return [review.rating for review in cls.reviews]

    @classmethod
    def all(cls):
        return cls.reviews
