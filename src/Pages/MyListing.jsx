import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyListing = () => {
    const myListing = useLoaderData();
    const { user } = useContext(AuthContext);
    const [currentUserPosts, setCurrentUserPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user && myListing) {
            const filtered = myListing.filter(item => item?.userEmail === user?.email);
            setCurrentUserPosts(filtered);
            setLoading(false);
        }
    }, [user, myListing]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/roommates/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const updatedPosts = currentUserPosts.filter(post => post._id !== id);
                            setCurrentUserPosts(updatedPosts);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    if (loading || !user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-gray-100 text-black px-4 py-6'>
            <h2 className='text-2xl font-bold mb-6 text-center md:text-left'>My Listings</h2>

            {currentUserPosts.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table w-full bg-white rounded-lg shadow">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUserPosts.map((post, index) => (
                                <tr key={post._id}>
                                    <td>{index + 1}</td>
                                    <td>{post.title}</td>
                                    <td>{post.location}</td>
                                    <td>${post.rentAmount}</td>
                                    <td className="flex flex-col md:flex-row gap-2">
                                        <Link
                                            to={`/UpdateRoommatePost/${post._id}`}
                                            className="btn btn-sm btn-info"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post._id)}
                                            className="btn btn-sm btn-error"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-lg text-gray-600 text-center">No posts found for your account.</p>
            )}
        </div>
    );
};

export default MyListing;
