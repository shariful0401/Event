import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id='body-x' class="hero min-h-screen ">
      <div class="hero-content flex-col  lg:flex-row ">
        <div class="card w-9/12 bg-base-100">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T160003Z&X-Amz-Expires=86400&X-Amz-Signature=2d880319ab095c236bf8ddd0dac229b68d23bafb775e12b0772a76ec6c528b94&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" alt="Shoes" class="" />
          <div class="card-body items-center text-center">
            <h2 class="text-3xl font-bold">Movie Night</h2>
            <p>Hosted by Elysia</p>
            <p>18 august 6:00 Am</p>
            <p>street name</p>
            <p>Link</p>
          </div>
        </div>
        <div className='mx-52 justify-items-end'>
          <h1 class="text-5xl font-bold">Imagine if Snapchat had events.</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Link to='/create' class=" btn btn-primary btn-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute">create my event</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;