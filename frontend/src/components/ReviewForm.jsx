import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';

const ReviewForm = ({ productId, onReviewSubmitted }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const { backendUrl, token } = useContext(ShopContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error('Please login to submit a review.');
            return;
        }

        if (rating === 0) {
            toast.error('Please select a rating.');
            return;
        }

        if (comment.trim() === '') {
            toast.error('Please enter a comment.');
            return;
        }

        try {
            const response = await axios.post(
                `${backendUrl}/api/review/add`,
                { productId, rating, comment },
                { headers: { token } }
            );

            if (response.data.success) {
                toast.success(response.data.message);
                setRating(0);
                setComment('');
                if (onReviewSubmitted) {
                    onReviewSubmitted(); // Callback to refresh reviews
                }
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to submit review.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Rating:</label>
                <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                            onClick={() => setRating(star)}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Your Comment:</label>
                <textarea
                    id="comment"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows="4"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts about the product..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;