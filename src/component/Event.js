import React from 'react';

const Event = (props) => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img style={{ height: 500, width: 500 }} src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T160003Z&X-Amz-Expires=86400&X-Amz-Signature=2d880319ab095c236bf8ddd0dac229b68d23bafb775e12b0772a76ec6c528b94&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" />
        <div class="card w-96 bg-base-100">
          <div class="card items-center text-center">
            <h2 class="card-title">Birthday Bash</h2>
            <p>Host by Elysia</p>
            

            
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Event;