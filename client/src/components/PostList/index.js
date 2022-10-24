import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <div class="container">
      <div class="row-4">
      <div class="col -12">
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3 background-color: $red-500">
            <h4 className="card-header bg-$red text-light m-0">
              {showUsername ? (
                <Link
                  className="text-light text-center"
                  to={`/profiles/${post.username}`}
                >
                  {post.username} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this post on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this post on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-info p-2">
            <img className='product-image' src={post.image}>
            </img>
            <div> Link to the Product:
              <a href={post.url}>  {post.title}</a>
              </div>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${post._id}`}
            >
              Would You Like to Review this Product?
            </Link>
          </div>
          
        ))}
    </div>
    </div>
    </div>
    </div>
  );
};

export default PostList;
