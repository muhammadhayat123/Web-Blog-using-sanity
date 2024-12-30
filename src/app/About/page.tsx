import React from "react";
import Image from "next/image";
import Link from "next/link";  // Correct import for Link

const page = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-16 sm:py-24 lg:py-32">
      {/* Hayat Blog Link */}
      <Link href="/">
        <span className="block text-base text-center text-primary font-bold tracking-wider uppercase">
          Hayat Blog
        </span>
      </Link>
      <br />
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center">
          {/* About Header Section */}
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-primary mb-6">
            About Us
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Hayat Tech, we specialize in delivering innovative solutions in
            the tech industry. Our team is dedicated to creating cutting-edge
            products and services that elevate businesses and provide measurable
            results.
          </p>
        </div>

        {/* Team Image Section */}
        <div className="flex justify-center mt-12">
          <div className="w-full sm:w-10/12 lg:w-8/12 relative h-96 rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/ali.jpg" // Replace with your team image path
              alt="ali"
              layout="fill"
              objectFit="cover"
              className="object-center w-full h-full rounded-xl"
            />
          </div>
        </div>

        {/* Mission and Values */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400">
              To create impactful technology solutions that empower businesses
              and inspire innovation within the tech industry.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-right">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              What We Do
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400">
              We design, develop, and deploy web and mobile applications that
              streamline business operations and engage customers in meaningful
              ways.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Innovation
              </h3>
              <p className="text-base text-yellow-800  text-center">
                We believe in pushing boundaries and staying ahead of the curve
                through continuous innovation and learning.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Integrity
              </h3>
              <p className="text-base text-yellow-800  text-center">
                We hold ourselves to the highest standards of honesty,
                transparency, and ethical behavior in all our endeavors.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Collaboration
              </h3>
              <p className="text-base text-yellow-800 text-center">
                We believe in the power of teamwork and collaboration to create
                meaningful solutions and achieve success.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Let's Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-6">
            Whether you’re looking for a new project or just want to say hello,
            we’d love to connect!
          </p>
          {/* Contact Us Button */}
          <Link
            href="/Contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-dark transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
