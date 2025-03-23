#include <iostream>
using namespace std;

class Animal {
public:
    virtual void makeSound() const = 0; // Pure virtual function
};

class Dog : public Animal {
    void makeSound() const override {
        cout << "Woof!" << endl;
    }
    Dog(const string& name) : name_(name) {}
    string getName() const {
        return name_;
    }
    void setName(const string& name) {
        name_ = name;
    }
    Dog(const Dog& other) : name_(other.name_) {}
    Dog& operator=(const Dog& other) {
        if (this!= &other) {
            name_ = other.name_;
        }
        return *this;
    
        // Other member functions...
            
};
public: