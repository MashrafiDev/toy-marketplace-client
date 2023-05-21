import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle("PB | Blog")
    return (
        <div className='lg:flex ms-10 justify-evenly my-10'>
            <div className='w-[50%]'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>An access token is a credential granted to a client after successful authentication, used to access protected resources. It typically has a short lifespan and contains user identity and permissions. A refresh token is a long-lived token issued alongside the access token, used to obtain a new access token when it expires. Access tokens are typically stored in memory or secure HTTP-only cookies, while refresh tokens should be securely stored, preferably in HTTP-only cookies or secure storage mechanisms like server-side sessions, to prevent unauthorized access.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content">
                        <p>SQL databases are based on the relational model and use structured schemas with predefined tables and relationships. They enforce ACID properties and are suitable for complex queries and transactions. SQL databases have a fixed schema and are commonly used for structured data and applications requiring strict data consistency. NoSQL databases, on the other hand, offer flexible and schemaless designs, allowing for dynamic and evolving data structures. They are horizontally scalable, handle large amounts of unstructured data, and prioritize high availability and partition tolerance over strict consistency. NoSQL databases are popular for handling big data, real-time applications, and distributed systems.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is express js? What is Nest JS ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and straightforward approach to building web applications and APIs, allowing developers to define routes, handle HTTP requests and responses, and implement middleware. Express.js is widely used and offers a vast ecosystem of plugins and extensions, making it highly customizable and suitable for various web development needs.

                            NestJS is a TypeScript-based progressive framework for building scalable server-side applications. It is built on top of Express.js and follows a modular architecture pattern. NestJS leverages decorators, dependency injection, and object-oriented programming principles to provide a structured and maintainable codebase. It offers features like module organization, middleware handling, dependency injection, and support for different transport protocols. NestJS is popular among developers looking for a robust and opinionated framework for building enterprise-grade applications.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is MongoDB aggregate and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p>MongoDB's aggregate is a powerful framework used for data processing and transformation within the database. It allows users to perform complex queries and analyze data by applying a series of operations called stages. Each stage takes the input from the previous stage, processes it, and passes it to the next stage. These stages can include operations like filtering, grouping, sorting, and calculating aggregated values. Aggregation pipelines are constructed using these stages, enabling users to perform advanced data manipulations and extract meaningful insights from their MongoDB collections.</p>
                    </div>
                </div>
            </div>
            <img className='rounded-2xl' src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5215.jpg?w=500" alt="" />
        </div>
    );
};

export default Blog;