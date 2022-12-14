import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_REVIEW } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ReviewForm = ({ postId }) => {
  const [reviewText, setReviewText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addReview({
        variables: {
          postId,
          reviewText,
          username: Auth.getProfile().data.username,
        },
      });

      setReviewText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'reviewText' && value.length <= 280) {
      setReviewText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What are your thoughts on this review?</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="reviewText"
                placeholder="Add your review..."
                value={reviewText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Review
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add your review. Please{' '}
          <Link to="/login">Login</Link> or <Link to="/signup">SignUp.</Link>
        </p>
      )}
    </div>
  );
};

export default ReviewForm;
