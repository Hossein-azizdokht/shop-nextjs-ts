import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// store item loading
export const StoreItemLoding = () => {
  return (
    <>
      <div className='d-flex align-items-center'>
        <Skeleton width={20} height={20} className="me-1" />
        <Skeleton width={170} height={20} />
      </div>
      <div className='d-flex align-items-center'>
        <Skeleton width={20} height={20} className="me-1" />
        <Skeleton width={170} height={20} />
      </div>
      <div className='d-flex align-items-center'>
        <Skeleton width={20} height={20} className="me-1" />
        <Skeleton width={170} height={20} />
      </div>
      <hr />
      <div className='d-flex align-items-center'>
        <Skeleton width={20} height={20} className="me-1" />
        <Skeleton width={170} height={20} />
      </div>
      <div className='d-flex align-items-center'>
        <Skeleton width={20} height={20} className="me-1" />
        <Skeleton width={170} height={20} />
      </div>
      <div className='d-flex align-items-center'>
        <Skeleton width={20} height={20} className="me-1" />
        <Skeleton width={170} height={20} />
      </div>
    </>
  )
}

// filter loading
export const StoreFilterLoding = () => {
  return (
    <Row>
      <Col lg={4} md={4} sm={6}>
        <div className='mt-4 p-2 '>
          <Skeleton height={180} />
          <Skeleton width={90} />
          <Skeleton width={170} />
          <Skeleton height={40} width={60} />
        </div>
      </Col>
      <Col lg={4} md={4} sm={6}>
        <div className='mt-4 p-2 '>
          <Skeleton height={180} />
          <Skeleton width={90} />
          <Skeleton width={170} />
          <Skeleton height={40} width={60} />
        </div>
      </Col>
      <Col lg={4} md={4} sm={6}>
        <div className='mt-4 p-2 '>
          <Skeleton height={180} />
          <Skeleton width={90} />
          <Skeleton width={170} />
          <Skeleton height={40} width={60} />
        </div>
      </Col>
      <Col lg={4} md={4} sm={6}>
        <div className='mt-4 p-2 '>
          <Skeleton height={180} />
          <Skeleton width={90} />
          <Skeleton width={170} />
          <Skeleton height={40} width={60} />
        </div>
      </Col>

      <Col lg={4} md={4} sm={6}>
        <div className='mt-4 p-2 '>
          <Skeleton height={180} />
          <Skeleton width={90} />
          <Skeleton width={170} />
          <Skeleton height={40} width={60} />
        </div>
      </Col>
      <Col lg={4} md={4} sm={6}>
        <div className='mt-4 p-2 '>
          <Skeleton height={180} />
          <Skeleton width={90} />
          <Skeleton width={170} />
          <Skeleton height={40} width={60} />
        </div>
      </Col>

    </Row>
  )
}

