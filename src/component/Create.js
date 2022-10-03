import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Event from './Event';

const Create = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();



  const onSubmit = data => {
    console.log(data);
    <Create data= {data}/>
    
  }

  return (
    <div className='flex h-screen justify-center items-center'>
      <div class="card w-96 bg-base-100 shadow-2xl items-center">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Event</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Event Name</span>
              </label>
              <input type="text" placeholder="Event Name" class="input input-bordered w-full max-w-xs" 
              {...register('event name')}
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Host Name</span>
              </label>
              <input type="text" placeholder="Host Name" class="input input-bordered w-full max-w-xs" 
              {...register('host name')}
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Start Date</span>
              </label>
              <input type="date" placeholder="Type here" class="input input-bordered w-full max-w-xs"
              {...register('start date')}
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">End Date</span>
              </label>
              <input type='date' placeholder="Type here" class="input input-bordered w-full max-w-xs"
              {...register('end date')}
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input type="text" placeholder="location" class="input input-bordered w-full max-w-xs"
               {...register('location')}
               />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Image</span>
              </label>
              <input type="file" id="file-input" name="ImageStyle" 
              {...register('photo')}
              />
            </div>
            <input className='btn btn-success' type="submit" value='submit' />
          </form>
          <Link to='/event' className='btn btn-success btn-wide'>Next</Link>
        </div>
      </div>
    </div>
  );
};

export default Create;