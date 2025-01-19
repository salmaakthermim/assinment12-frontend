// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSearchParams } from 'react-router-dom';

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const MyDonationRequests = ({ user }) => {
  const [donationRequests, setDonationRequests] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const page = searchParams.get('page') || 1;
        const status = searchParams.get('status') || '';

        const response = await axios.get('http://localhost:5000/my-donation-requests', {
          params: {
            email: user.email,
            page,
            limit: itemsPerPage,
            status,
          },
        });

        setDonationRequests(response.data.requests);
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.page);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequests();
  }, [searchParams, user?.email]);

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setSearchParams({ status, page: 1 });
  };

  const handlePageChange = (page) => {
    setSearchParams({ status: statusFilter, page });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Donation Requests</h1>

      <div className="flex space-x-4 mb-6">
        {['All', 'pending', 'inprogress', 'done', 'canceled'].map((status) => (
          <button
            key={status}
            className={`btn ${statusFilter === status ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => handleStatusFilter(status === 'All' ? '' : status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Recipient</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Time</th>
            <th className="border border-gray-300 px-4 py-2">Blood Group</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {donationRequests.map((request) => (
            <tr key={request._id}>
              <td className="border border-gray-300 px-4 py-2">{request.recipientName}</td>
              <td className="border border-gray-300 px-4 py-2">
                {request.recipientDistrict}, {request.recipientUpazila}
              </td>
              <td className="border border-gray-300 px-4 py-2">{request.donationDate}</td>
              <td className="border border-gray-300 px-4 py-2">{request.donationTime}</td>
              <td className="border border-gray-300 px-4 py-2">{request.bloodGroup}</td>
              <td className="border border-gray-300 px-4 py-2">{request.donationStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`btn btn-sm mx-1 ${
              currentPage === index + 1 ? 'btn-primary' : 'btn-outline'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyDonationRequests;
