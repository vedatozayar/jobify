import React from 'react';
import { FormRow, FormRowSelect, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3 className='form-title'>{isEditing ? 'Edit job' : 'Add job'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            name='position'
            handleChange={handleJobInput}
            value={position}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            handleChange={handleJobInput}
            value={company}
          />
          {/* job location */}
          <FormRow
            type='text'
            labelText={'Job Location'}
            name='jobLocation'
            handleChange={handleJobInput}
            value={jobLocation}
          />
          {/* job status */}
          <FormRowSelect
            name='status'
            handleChange={handleJobInput}
            value={status}
            list={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            name='job type'
            handleChange={handleJobInput}
            value={jobType}
            list={jobTypeOptions}
          />
          {/* Button container */}
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
