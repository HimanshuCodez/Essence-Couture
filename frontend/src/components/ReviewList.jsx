import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';

const ReviewList = ({ productId, refreshTrigger }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { backendUrl } = useContext(ShopContext);

    const fetchReviews = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${backendUrl}/api/review/list/${productId}`);
            if (response.data.success) {
                setReviews(response.data.reviews);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            console.error(err);
            setError('Failed to fetch reviews.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (productId) {
            fetchReviews();
        }
    }, [productId, refreshTrigger]); // refreshTrigger will cause re-fetch when it changes

    if (loading) {
        return <p>Loading reviews...</p>;
    }

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Customer Reviews ({reviews.length})</h3>
            {reviews.length === 0 ? (
                <p>No reviews yet. Be the first to review!</p>
            ) : (
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <div key={review._id} className="border-b pb-4 last:border-b-0">
                            <div className="flex items-center mb-2">
                                <p className="font-medium mr-2">{review.userId.name}</p>
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-xl ${star <= review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 mb-2">{review.comment}</p>
                            <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReviewList;