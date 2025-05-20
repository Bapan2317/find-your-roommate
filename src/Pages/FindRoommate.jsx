import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const FindRoommate = () => {
    return (
        <div className='bg-green-200'>
            <Header />
            <form className="w-10/12 mx-auto  my-8 text-white">
                <div className="grid grid-cols-2">
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Title</legend>
                        <input type="text" className="input" name='title' placeholder="Type here" />
                    </fieldset>
                    {/* location */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Location</legend>
                        <input type="text" className="input" name='location' placeholder="Type here" />
                    </fieldset>
                    {/* Rent Amount */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Rent Amount</legend>
                        <input type="text" className="input" name='Rent Amount' placeholder="Type here" />
                    </fieldset>
                    {/* select */}
                    <fieldset class="fieldset w-10/12 mx-auto">
                        <legend class="fieldset-legend">Room Type</legend>
                        <select class="select">
                            <option disabled selected>Pick a browser</option>
                            <option>Single</option>
                            <option>Shared</option>
                        </select>
                    </fieldset>
                    {/* select */}
                    <fieldset class="fieldset w-10/12 mx-auto">
                        <legend class="fieldset-legend">Lifestyle Preferences</legend>
                        <select class="select">
                            <option disabled selected>Pick a browser</option>
                            <option>Pets</option>
                            <option>Smoking</option>
                            <option>Night Owl</option>
                        </select>
                    </fieldset>
                    {/* select */}
                    <fieldset class="fieldset w-10/12 mx-auto">
                        <legend class="fieldset-legend">Availability </legend>
                        <select class="select">
                            <option disabled selected>Pick a browser</option>
                            <option>available</option>
                            <option>not available</option>
                        </select>
                    </fieldset>
                    {/* Description */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Description</legend>
                        <input type="text" className="input" name='Description' placeholder="Type here" />
                    </fieldset>
                    {/* Contact Info  */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Contact Info </legend>
                        <input type="text" className="input" name='ContactInfo' placeholder="Type here" />
                    </fieldset>
                    {/* User Email */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">User Email</legend>
                        <input type="text" className="input" name='UserEmail' placeholder="Type here" />
                    </fieldset>
                    {/* User Name */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">User Name</legend>
                        <input type="text" className="input" name='UserName' placeholder="Type here" />
                    </fieldset>
                </div>

                <button className='btn btn-primary  block mt-4 w-2/12 ml-10'>Post</button>
            </form>

            <Footer />
        </div>
    );
};

export default FindRoommate;