"use client"
import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a question or need assistance? We'd love to hear from you. Fill out the form below or reach out to us through the provided contact details.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Contact Form */}
          <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="text-lg font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-lg font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-lg font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg text-lg font-medium hover:bg-primary-dark transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Our Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-700 dark:text-gray-300">📧</span>
                <span className="text-lg text-gray-600 dark:text-gray-400">contact@hayattech.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-700 dark:text-gray-300">📞</span>
                <span className="text-lg text-gray-600 dark:text-gray-400">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-700 dark:text-gray-300">🏢</span>
                <span className="text-lg text-gray-600 dark:text-gray-400">1234 Tech Avenue, City, Country</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition duration-300">Facebook</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition duration-300">Twitter</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition duration-300">LinkedIn</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition duration-300">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
