<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
 JWT JSON Web Token - way to securely transmit info between parties as a JSON object.
 BCRYPT - password hash algorithm
 Sessions - allotted time login for a user before logging them out
 Middleware - a bridge between the system and the database
 
2.  What does bcrypt do in order to prevent attacks?
Incorporates a salt to protect against attacks, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

3.  What are the three parts of the JSON Web Token?
Header, Payload, Signature